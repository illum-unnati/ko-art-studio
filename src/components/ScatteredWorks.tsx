"use client";

import Image from "next/image";
import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { cn } from "@/lib/cn";

/**
 * Draggable "scatter" of student artwork for the hero. Each tile is
 * absolutely positioned inside a positioned parent and can be dragged
 * with mouse OR touch via the Pointer Events API + pointer capture, so
 * a drag keeps tracking even when the pointer leaves the tile.
 *
 * Two presets share one drag engine (TileCanvas):
 *  - <ScatteredWorks />        desktop overlay, large tiles, sits behind
 *                              the hero copy (parent supplies inset-0).
 *  - <ScatteredWorksMobile />  a self-contained, bounded drag canvas for
 *                              small screens (its own height + clip).
 *
 * Only the tiles capture pointer input (`touch-none`); the empty space
 * stays scrollable so a swipe over the gaps still scrolls the page.
 */

export type ScatterImage = { src: string; alt: string };

type Position = {
  /** Initial anchor as a % of the parent box. */
  left: number;
  top: number;
  /** Rendered width in px. */
  width: number;
  rotate: number;
};

type Tile = ScatterImage & Position;

// Larger tiles, biased right + lower so the left-aligned hero copy stays
// clear on first paint.
const DESKTOP_POSITIONS: Position[] = [
  { left: 60, top: 4, width: 214, rotate: -6 },
  { left: 82, top: 24, width: 186, rotate: 5 },
  { left: 68, top: 50, width: 198, rotate: -3 },
  { left: 90, top: 66, width: 172, rotate: 7 },
  { left: 56, top: 76, width: 204, rotate: 9 },
  { left: 43, top: 84, width: 162, rotate: -9 },
  { left: 93, top: 42, width: 150, rotate: -12 },
];

// Spread across the bounded mobile canvas.
const MOBILE_POSITIONS: Position[] = [
  { left: 26, top: 18, width: 150, rotate: -5 },
  { left: 70, top: 14, width: 140, rotate: 6 },
  { left: 48, top: 44, width: 150, rotate: -3 },
  { left: 78, top: 60, width: 130, rotate: 8 },
  { left: 28, top: 68, width: 146, rotate: 9 },
  { left: 62, top: 82, width: 128, rotate: -8 },
  { left: 86, top: 34, width: 116, rotate: -12 },
];

const DEFAULT_IMAGES: ScatterImage[] = [
  { src: "/student-works/work-3.webp", alt: "Student graphite portrait" },
  { src: "/student-works/work-2.webp", alt: "Student graphite octopus composition" },
  { src: "/student-works/work-7.webp", alt: "Student artwork" },
  { src: "/student-works/work-5.webp", alt: "Student in the studio with finished painting" },
  { src: "/student-works/work-1.webp", alt: "Student graphite still life" },
  { src: "/student-works/work-8.webp", alt: "Student artwork" },
  { src: "/student-works/work-9.webp", alt: "Student artwork" },
];

/** Pair each image with a position (cycling positions if there are more
 *  images than slots), so any-length image list lays out cleanly. */
function buildTiles(images: ScatterImage[], positions: Position[]): Tile[] {
  return images.map((img, i) => ({ ...img, ...positions[i % positions.length] }));
}

type Offset = { dx: number; dy: number };

function TileCanvas({ tiles }: { tiles: Tile[] }) {
  const [offsets, setOffsets] = useState<Offset[]>(() =>
    tiles.map(() => ({ dx: 0, dy: 0 }))
  );
  const [order, setOrder] = useState<number[]>(() => tiles.map((_, i) => i));
  const drag = useRef<{
    index: number;
    startX: number;
    startY: number;
    origDx: number;
    origDy: number;
  } | null>(null);

  const bringToFront = (index: number) =>
    setOrder((prev) => [...prev.filter((i) => i !== index), index]);

  const onPointerDown = (index: number) => (e: ReactPointerEvent) => {
    e.preventDefault();
    drag.current = {
      index,
      startX: e.clientX,
      startY: e.clientY,
      origDx: offsets[index].dx,
      origDy: offsets[index].dy,
    };
    // Capture so the drag keeps tracking off-tile. Guarded because it can
    // throw for non-primary/synthetic pointers.
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      /* no-op */
    }
    bringToFront(index);
  };

  const onPointerMove = (e: ReactPointerEvent) => {
    const d = drag.current;
    if (!d) return;
    const dx = d.origDx + (e.clientX - d.startX);
    const dy = d.origDy + (e.clientY - d.startY);
    setOffsets((prev) => {
      const next = [...prev];
      next[d.index] = { dx, dy };
      return next;
    });
  };

  const endDrag = (e: ReactPointerEvent) => {
    if (drag.current) {
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        /* no-op */
      }
      drag.current = null;
    }
  };

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {tiles.map((tile, i) => (
        <div
          key={tile.src}
          onPointerDown={onPointerDown(i)}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          style={{
            left: `${tile.left}%`,
            top: `${tile.top}%`,
            width: tile.width,
            transform: `translate(${offsets[i].dx}px, ${offsets[i].dy}px) rotate(${tile.rotate}deg)`,
            zIndex: order.indexOf(i) + 1,
          }}
          className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 cursor-grab touch-none select-none active:cursor-grabbing"
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-md border border-paper-edge bg-paper shadow-[0_8px_24px_-10px_rgba(34,31,28,0.4)]">
            <Image
              src={tile.src}
              alt={tile.alt}
              fill
              draggable={false}
              sizes="(min-width: 768px) 260px, 160px"
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/** Desktop overlay. Parent supplies the positioned (inset-0) container. */
export function ScatteredWorks({
  images = DEFAULT_IMAGES,
  className,
}: {
  images?: ScatterImage[];
  className?: string;
}) {
  return (
    <div className={cn("absolute inset-0", className)}>
      <TileCanvas tiles={buildTiles(images, DESKTOP_POSITIONS)} />
    </div>
  );
}

/** Bounded, draggable canvas for small screens. */
export function ScatteredWorksMobile({
  images = DEFAULT_IMAGES,
}: {
  images?: ScatterImage[];
}) {
  return (
    <div className="md:hidden relative mt-8 h-[26rem] w-full overflow-hidden">
      <TileCanvas tiles={buildTiles(images, MOBILE_POSITIONS)} />
    </div>
  );
}
