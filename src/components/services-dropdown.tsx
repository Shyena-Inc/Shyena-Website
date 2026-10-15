"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";

type ServiceLink = { href: string; label: string };

export function ServicesDropdown({ items }: { items: readonly ServiceLink[] }) {
  const [open, setOpen] = useState(false);
  const pointerInside = useRef(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = "desktop-services-menu";

  return (
    <div
      className="relative"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") {
          pointerInside.current = true;
          setOpen(true);
        }
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") {
          pointerInside.current = false;
          if (!event.currentTarget.contains(document.activeElement)) {
            setOpen(false);
          }
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          triggerRef.current?.focus();
        }
      }}
    >
      <button
        ref={triggerRef}
        id="desktop-services-trigger"
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        className="flex cursor-pointer items-center gap-1.5 rounded-none px-3 py-2.5 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        Services
        <ChevronDownIcon
          aria-hidden="true"
          className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        id={menuId}
        aria-labelledby="desktop-services-trigger"
        className={`absolute left-0 top-full z-50 grid w-[28rem] grid-cols-2 gap-1 border bg-popover p-3 text-popover-foreground shadow-2xl ${open ? "" : "hidden"}`}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="rounded-none px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
