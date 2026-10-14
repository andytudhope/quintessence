import { ForthcomingTitle } from '@/lib/books/data/forthcoming';

const GOLD = '#c8a862';
const CREAM = '#f4efe6';
// Site font — matches the rest of the website (globals.css body).
const FONT = 'Arial, Helvetica, sans-serif';

interface ComingSoonCardProps {
  item: ForthcomingTitle;
  className?: string;
}

/**
 * A title-page style placeholder "cover" for a forthcoming title.
 * Draws itself from the title's data — no cover art required.
 *
 * Backer: the deep blue from the Quintessence logo (#2b3991).
 * Type: the site's own sans font, scaled with the CARD's own width
 * (container-query units, cqw) rather than the viewport, so the layout
 * shrinks proportionally on narrow 2-column mobile cards and never
 * overflows the frame — it reads the same at every size.
 */
export default function ComingSoonCard({ item, className = '' }: ComingSoonCardProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-between text-center rounded-lg shadow-md aspect-[10/14] overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(158deg,#313f9c 0%,#2b3991 50%,#1e2767 100%)',
        color: CREAM,
        padding: '11% 9% 8.5%',
        containerType: 'inline-size',
        fontFamily: FONT,
      }}
    >
      {/* double-rule frame */}
      <div
        className="pointer-events-none absolute rounded-sm"
        style={{ inset: '6%', border: `1px solid ${GOLD}66` }}
      >
        <div
          className="absolute rounded-sm"
          style={{ inset: '4px', border: `1px solid ${GOLD}2b` }}
        />
      </div>

      {/* eyebrow */}
      <p
        className="relative z-10 font-semibold uppercase"
        style={{ color: GOLD, fontSize: 'clamp(6px,3.5cqw,10px)', letterSpacing: '0.22em' }}
      >
        Forthcoming
      </p>

      {/* middle */}
      <div className="relative z-10 flex flex-col items-center">
        <span
          aria-hidden="true"
          style={{ color: GOLD, fontSize: 'clamp(8px,4.2cqw,12px)', marginBottom: '3cqw' }}
        >
          ✦
        </span>
        <h3
          className="font-semibold"
          style={{
            color: '#f6f1e7',
            fontSize: 'clamp(11px,6.6cqw,18px)',
            lineHeight: 1.2,
            letterSpacing: '0.2px',
          }}
        >
          {item.title}
        </h3>
        {item.subtitle && (
          <p
            className="italic"
            style={{
              color: `${CREAM}b8`,
              fontSize: 'clamp(8px,3.8cqw,11px)',
              lineHeight: 1.3,
              marginTop: '2.6cqw',
            }}
          >
            {item.subtitle}
          </p>
        )}
        <div style={{ width: '12cqw', height: '1px', background: `${GOLD}8c`, margin: '3.6cqw auto 3.4cqw' }} />
        <div
          style={{
            fontSize: 'clamp(7px,3.5cqw,10px)',
            lineHeight: 1.5,
            color: `${CREAM}ad`,
            letterSpacing: '0.3px',
          }}
        >
          {item.author && <div style={{ color: `${CREAM}e6` }}>{item.author}</div>}
          {item.credits?.map((c, i) => (
            <div key={i}>
              {c.role} <span style={{ color: `${CREAM}e6` }}>{c.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* bottom */}
      <div className="relative z-10 flex flex-col items-center" style={{ gap: '3cqw' }}>
        <span
          className="font-semibold uppercase inline-block"
          style={{
            color: GOLD,
            border: `1px solid ${GOLD}80`,
            borderRadius: '999px',
            padding: '1.4cqw 4.2cqw',
            fontSize: 'clamp(6px,3.2cqw,9px)',
            letterSpacing: '0.18em',
          }}
        >
          Coming Soon
        </span>
        <span
          className="uppercase"
          style={{ color: `${CREAM}73`, fontSize: 'clamp(6px,2.8cqw,8px)', letterSpacing: '0.25em' }}
        >
          Quintessence
        </span>
      </div>
    </div>
  );
}
