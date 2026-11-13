import {
  ProductShell,
  ProductHero,
  Capabilities,
  ProductLogo,
} from "@/components/products/product-parts";
import { productBySlug } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";
const product = productBySlug("flagforge");
export const metadata = pageMetadata({
  title: "FlagForge CTF",
  description:
    "Practice web exploitation, cryptography, reverse engineering, forensics, and binary exploitation through FlagForge CTF challenges.",
  path: "/products/flagforge",
});
export default function FlagForgePage() {
  return (
    <ProductShell product={product}>
      <ProductHero
        product={product}
        title="Build skills. Find the flag."
        description="Solve practical cybersecurity challenges, submit the flags you discover, and track your progress against other players."
        image="/products/flagforge-preview.png"
        imageAlt="FlagForge challenge listing with category and difficulty filters."
        caption="FlagForge public platform. Visit the site for current challenges."
        action="Visit FlagForge"
      />
      <Capabilities
        title="Choose a problem to work through."
        description="Challenges cover several security disciplines, with a range of difficulty levels and hints when you need a nudge."
        items={[
          {
            title: "Web exploitation",
            body: "Investigate how web applications behave under attack, including injection, cross-site scripting, and request forgery.",
          },
          {
            title: "Cryptography",
            body: "Work through classical ciphers and problems involving the misuse of modern cryptography.",
          },
          {
            title: "Reverse engineering",
            body: "Read assembly and inspect binaries to understand how a program works and uncover its hidden flag.",
          },
          {
            title: "Digital forensics",
            body: "Examine memory dumps, packet captures, deleted files, and metadata for evidence.",
          },
          {
            title: "Binary exploitation",
            body: "Explore memory-safety problems, including buffer overflows and format-string vulnerabilities.",
          },
          {
            title: "More security puzzles",
            body: "Try OSINT, steganography, and logic challenges alongside the core technical categories.",
          },
        ]}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[.7fr_1.3fr] md:py-20 lg:px-8">
        <ProductLogo product={product} />
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">
            Solve, submit, and keep learning.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            Create a free account, choose a challenge by category and
            difficulty, then submit the flag. Correct submissions earn points
            toward your leaderboard position.
          </p>
          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold">Hints when you get stuck</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Use the platform’s hint system to get direction and continue
                working through a challenge.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">GRC learning</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Explore structured lessons on governance, risk, and compliance
                alongside technical practice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ProductShell>
  );
}
