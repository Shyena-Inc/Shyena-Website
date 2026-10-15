"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRightIcon, MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site-config";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

/** Slide-over nav for small screens; the desktop nav is `hidden md:flex`. */
export function MobileNav({
  sections,
}: {
  sections: ReadonlyArray<{
    title: string;
    links: ReadonlyArray<{ href: string; label: string }>;
  }>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open menu"
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[min(22rem,90vw)] gap-0 p-0">
        <div className="border-b bg-muted/25 px-6 py-6 pr-14">
          <SheetTitle>Shyena Technologies Pvt. Ltd.</SheetTitle>
          <SheetDescription className="mt-2 text-xs">
            Security services and projects
          </SheetDescription>
        </div>
        <nav
          aria-label="Mobile navigation"
          className="flex-1 space-y-6 overflow-y-auto px-4 py-6"
        >
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {section.title}
              </h2>
              <ul className="mt-2 space-y-0.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-none px-3 py-2.5 text-sm text-foreground/85 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className="space-y-4 border-t px-6 py-5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Appearance</span>
            <ThemeToggle />
          </div>
          <Button asChild className="h-11 w-full rounded-none">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Discuss an assessment <ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
          <a
            className="block text-center text-xs text-muted-foreground hover:text-foreground"
            href={`mailto:${siteConfig.email}`}
          >
            {siteConfig.email}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
