"use client";

import { Globe, type GlobeArc, type GlobeMarker } from "@/components/velora/globe";

const HUB: [number, number] = [27.6644, 85.3188];
const base: GlobeMarker[] = [{ lat: HUB[0], lng: HUB[1], label: "Lalitpur, Nepal" }];

// Illustrative destinations are distributed across serviceable continents;
// they are regional references, not customer or office locations.
const routes: GlobeArc[] = [
  // Asia
  { from: HUB, to: [25.2, 55.27] },
  { from: HUB, to: [1.35, 103.8] },
  { from: HUB, to: [35.68, 139.69] },
  // Europe
  { from: HUB, to: [51.5, -0.12] },
  { from: HUB, to: [50.11, 8.68] },
  { from: HUB, to: [40.42, -3.7] },
  // Africa
  { from: HUB, to: [-1.28, 36.82] },
  { from: HUB, to: [-26.2, 28.04] },
  // North America
  { from: HUB, to: [37.77, -122.42] },
  { from: HUB, to: [40.71, -74.01] },
  { from: HUB, to: [19.43, -99.13] },
  // South America
  { from: HUB, to: [-23.55, -46.63] },
  // Oceania
  { from: HUB, to: [-33.87, 151.21] },
  { from: HUB, to: [-36.85, 174.76] },
];

/** Globe paths and overlaid beams are illustrative, not client or office locations. */
export function GlobalGlobe() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[620px]">
      <Globe
        aria-label="Slowly rotating dotted globe with illustrative network paths. The only identified location is Shyena’s base in Lalitpur, Nepal; other paths do not represent customer or office locations."
        markers={base}
        arcs={routes}
        center={[HUB[0], HUB[1]]}
        speed={3}
        pauseOnInteraction={false}
        samples={9000}
        dotColor="var(--muted-foreground)"
        accentColor="var(--primary)"
        className="absolute inset-[8%] z-0 h-auto w-auto max-w-none text-foreground"
      />
    </div>
  );
}
