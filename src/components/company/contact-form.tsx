"use client";

import { useState, useSyncExternalStore } from "react";
import { SendIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ShimmerButton } from "@/components/velora/shimmer-button";

const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
const topics = [
  "Security services",
  "Hardware VAPT",
  "OT / ICS assessment",
  "IoT security testing",
  "SCADA network testing",
  "Red team operations",
  "Compliance and risk advisory",
  "FlagForge",
  "SecYourFlow demo",
  "SAFE inquiry",
  "Other inquiry",
];
const noChange = () => () => {};
const noRequestedTopic = () => "";
const requestedTopic = () => {
  const value = new URLSearchParams(window.location.search).get("topic") ?? "";
  return topics.includes(value) ? value : "";
};

export function ContactForm() {
  const [pending, setPending] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>();
  const topic = useSyncExternalStore(
    noChange,
    requestedTopic,
    noRequestedTopic,
  );
  const [status, setStatus] = useState<{
    kind: "success" | "error";
    message: string;
  } | null>(null);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    if (!formId) {
      setStatus({
        kind: "error",
        message:
          "The contact form is not connected yet. Please email whois@shyenasec.com directly.",
      });
      return;
    }

    setPending(true);
    const form = event.currentTarget;
    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("The message could not be sent.");
      form.reset();
      setSelectedTopic("");
      setStatus({
        kind: "success",
        message: "Your message has been sent to the Shyena team.",
      });
    } catch {
      setStatus({
        kind: "error",
        message:
          "We could not send your message just now. Please email whois@shyenasec.com directly.",
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8"
      onSubmit={submit}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="contact-name">Your name</Label>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            maxLength={120}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="contact-email">Work email</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
          />
        </div>
      </div>
      <div className="mt-5 grid gap-2">
        <Label htmlFor="contact-topic">What would you like to discuss?</Label>
        <select
          id="contact-topic"
          name="topic"
          required
          value={selectedTopic ?? topic}
          onChange={(event) => setSelectedTopic(event.target.value)}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none transition-colors focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"
        >
          <option value="" disabled>
            Choose a topic
          </option>
          {topics.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-5 grid gap-2">
        <Label htmlFor="contact-message">A little context</Label>
        <Textarea
          id="contact-message"
          name="message"
          minLength={20}
          maxLength={5000}
          placeholder="What are you working on, and what would you like help with?"
          className="min-h-36"
          required
          aria-describedby="contact-guidance"
        />
        <p
          id="contact-guidance"
          className="text-xs leading-5 text-muted-foreground"
        >
          Please don’t include passwords, access tokens, or other secrets.
        </p>
      </div>
      {status && (
        <p
          className={
            status.kind === "error"
              ? "mt-5 rounded-xl border border-destructive/40 bg-destructive/5 p-3 text-sm text-destructive"
              : "mt-5 rounded-xl border border-primary/30 bg-primary/5 p-3 text-sm text-foreground"
          }
          role={status.kind === "error" ? "alert" : "status"}
        >
          {status.message}
        </p>
      )}
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <ShimmerButton
          className="h-12 rounded-full px-7"
          type="submit"
          disabled={pending}
        >
          <SendIcon className="size-4" />{" "}
          {pending ? "Sending…" : "Send inquiry"}
        </ShimmerButton>
        <p className="text-xs text-muted-foreground">
          Your message is handled by Formspree when the form is configured. See
          our{" "}
          <a
            className="text-primary underline underline-offset-2"
            href="/privacy"
          >
            privacy notice draft
          </a>
          .
        </p>
      </div>
      <p className="sr-only" aria-live="polite">
        {pending ? "Sending your message" : ""}
      </p>
    </form>
  );
}
