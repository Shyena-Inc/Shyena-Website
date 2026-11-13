import Image from "next/image";
import { cn } from "@/lib/utils";

/** Transparent artwork with a legible wordmark in each site theme. */
export function BrandLogo({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("relative block size-14 shrink-0", className)}
    >
      <Image
        src="/brand/shyena-logo-light.png"
        alt=""
        fill
        sizes="80px"
        priority
        className="object-contain dark:hidden"
      />
      <Image
        src="/brand/shyena-logo-dark.png"
        alt=""
        fill
        sizes="80px"
        priority
        className="hidden object-contain dark:block"
      />
    </span>
  );
}
