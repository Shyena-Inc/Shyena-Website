"use client";

import { usePathname } from "next/navigation";
import { useEffect, useSyncExternalStore } from "react";

import { products } from "@/lib/products";

const preferenceKey = "shyena.analytics.v1";
const preferenceChanged = "shyena-analytics-preference";
const denied = {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
} as const;

const productHosts = new Map(
  products.map(({ href, slug }) => [new URL(href).hostname, slug]),
);
productHosts.set("flagforgectf.com", "flagforge");

type AnalyticsWindow = Window & { dataLayer?: unknown[] };
let landingReferrer: string | undefined;
let page: { page_location: string; page_referrer: string } | undefined;

function layer() {
  return ((window as AnalyticsWindow).dataLayer ??= []);
}

export function trackWebsiteEvent(event: "generate_lead") {
  if (!page) return;
  try {
    layer().push({ event, ...page });
  } catch {
    // A container error must never change the outcome of a contact submission.
  }
}

const queueConsent: (
  command: "consent",
  action: "default" | "update",
  settings: Record<string, string>,
) => void = function () {
  // Google Tag processes gtag commands as arguments objects.
  // eslint-disable-next-line prefer-rest-params
  layer().push(arguments);
};

function initialReferrer() {
  try {
    const url = new URL(document.referrer);
    return url.protocol === "https:" || url.protocol === "http:" ? url.origin : "";
  } catch {
    return "";
  }
}

export function WebsiteAnalytics({
  containerId,
  origin,
  paths,
}: {
  containerId: string;
  origin: string;
  paths: string[];
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.origin !== origin) return;
    landingReferrer ??= initialReferrer();

    const recordPage = () => {
      const path = pathname?.replace(/\/$/, "") || "/";
      if (localStorage.getItem(preferenceKey) !== "granted" || !paths.includes(path)) {
        page = undefined;
        return;
      }

      const pageLocation = new URL(path, origin).href;
      if (page?.page_location === pageLocation) return;
      const pageReferrer = page?.page_location ?? landingReferrer ?? "";
      page = { page_location: pageLocation, page_referrer: pageReferrer };

      if (!document.getElementById("shyena-gtm")) {
        queueConsent("consent", "default", denied);
        queueConsent("consent", "update", { ...denied, analytics_storage: "granted" });
        layer().push({ event: "gtm.js", "gtm.start": Date.now(), ...page });
        const script = document.createElement("script");
        script.id = "shyena-gtm";
        script.async = true;
        script.referrerPolicy = "no-referrer";
        script.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`;
        document.head.append(script);
      }
      layer().push({ event: "shyena_page_view", ...page });
    };

    function recordIfAvailable() {
      try {
        recordPage();
      } catch {
        page = undefined;
      }
    }

    recordIfAvailable();

    function onProductClick(event: MouseEvent) {
      if (!page || !(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!link || link.protocol !== "https:") return;
      const product = productHosts.get(link.hostname);
      if (product) layer().push({ event: "product_outbound_click", product_id: product, ...page });
    }

    function onPreferenceChange(event: StorageEvent) {
      if ((event.key === preferenceKey || event.key === null) &&
        event.newValue !== "granted" && document.getElementById("shyena-gtm")) {
        page = undefined;
        window.location.reload();
      }
    }

    document.addEventListener("click", onProductClick);
    window.addEventListener("storage", onPreferenceChange);
    window.addEventListener(preferenceChanged, recordIfAvailable);
    return () => {
      document.removeEventListener("click", onProductClick);
      window.removeEventListener("storage", onPreferenceChange);
      window.removeEventListener(preferenceChanged, recordIfAvailable);
    };
  }, [containerId, origin, pathname, paths]);

  return null;
}

function subscribeToPreference(listener: () => void) {
  window.addEventListener(preferenceChanged, listener);
  window.addEventListener("storage", listener);
  return () => {
    window.removeEventListener(preferenceChanged, listener);
    window.removeEventListener("storage", listener);
  };
}

export function AnalyticsPreferences({ origin }: { origin: string }) {
  const granted = useSyncExternalStore(
    subscribeToPreference,
    () => {
      if (window.location.origin !== origin) return null;
      try {
        return localStorage.getItem(preferenceKey) === "granted";
      } catch {
        return null;
      }
    },
    () => null,
  );

  function changePreference() {
    try {
      localStorage.setItem(preferenceKey, granted ? "denied" : "granted");
    } catch {
      return;
    }
    if (granted) {
      page = undefined;
      for (const cookie of document.cookie.split(";")) {
        const name = cookie.trim().split("=")[0];
        if (/^_ga(?:_[A-Z0-9]+)?$/.test(name)) {
          document.cookie = `${name}=; Max-Age=0; Path=/`;
        }
      }
      window.location.reload();
      return;
    }
    window.dispatchEvent(new Event(preferenceChanged));
  }

  if (granted === null) return null;
  return (
    <button
      type="button"
      onClick={changePreference}
      className="mt-3 text-sm font-medium text-primary underline underline-offset-4"
    >
      {granted ? "Turn off analytics cookies" : "Allow analytics cookies"}
    </button>
  );
}
