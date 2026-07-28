/**
 * Global SVG filter library.
 * kasr = ko Art Studio Rough.
 */
export function SvgFilters() {
  return (
    <svg
      className="kasr-defs"
      aria-hidden
      focusable="false"
      width="0"
      height="0"
    >
      <defs>
        {/* Light edge roughening — for thin strokes (underlines, hairs) */}
        <filter id="kasr-rough" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.7"
            numOctaves="2"
            seed="3"
          />
          <feDisplacementMap in="SourceGraphic" scale="1.8" />
        </filter>

        {/* Ink bleed — the watercolor halo + capillary edges, all from a
            single source shape so the blob reads as ONE element with a
            soft bleeding boundary, not as stacked layers.

            Pipeline:
              1. Heavily blur the source → soft outer glow (the bleed)
              2. Dim the glow's alpha so the center stays dominant
              3. Composite original on top of glow (same color, no seams)
              4. Displace the result → capillary fingers / wet-edge wobble */}
        <filter id="kasr-ink-bleed" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="bleed" />
          <feComponentTransfer in="bleed" result="bleedDim">
            <feFuncA type="linear" slope="0.55" />
          </feComponentTransfer>
          <feComposite in="SourceGraphic" in2="bleedDim" operator="over" result="layered" />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.014"
            numOctaves="3"
            seed="11"
            result="noise"
          />
          <feDisplacementMap in="layered" in2="noise" scale="36" />
        </filter>

        {/* Ink bleed alt — different seed, for variety when multiple blobs share a page */}
        <filter id="kasr-ink-bleed-2" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="bleed" />
          <feComponentTransfer in="bleed" result="bleedDim">
            <feFuncA type="linear" slope="0.5" />
          </feComponentTransfer>
          <feComposite in="SourceGraphic" in2="bleedDim" operator="over" result="layered" />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011"
            numOctaves="3"
            seed="29"
            result="noise"
          />
          <feDisplacementMap in="layered" in2="noise" scale="44" />
        </filter>

        {/* Deckle — paper-cut wavy border */}
        <filter id="kasr-deckle" x="-2%" y="-2%" width="104%" height="104%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03"
            numOctaves="2"
            seed="5"
          />
          <feDisplacementMap in="SourceGraphic" scale="3.6" />
        </filter>
      </defs>
    </svg>
  );
}
