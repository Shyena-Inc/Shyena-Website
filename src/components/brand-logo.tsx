import Image from "next/image";
import { cn } from "@/lib/utils";

/** Transparent artwork with a legible wordmark in each site theme. */
export function BrandLogo({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("relative block h-12 w-44 shrink-0", className)}
    >
      <Image
        src="/brand/shyena-logo-light.png"
        alt=""
        fill
        sizes="(max-width: 767px) 176px, 208px"
        priority
        className="object-contain dark:hidden"
      />
      <Image
        src="/brand/shyena-logo-dark.png"
        alt=""
        fill
        sizes="(max-width: 767px) 176px, 208px"
        priority
        className="hidden object-contain dark:block"
      />
    </span>
  );
}
