import { ForthcomingTitle } from '@/lib/books/data/forthcoming';

const GOLD = '#c8a862';
const CREAM = '#f4efe6';

interface ComingSoonCardProps {
  item: ForthcomingTitle;
  className?: string;
}

/**
 * A title-page style placeholder "cover" for a forthcoming title.
 * Draws itself from the title's data — no cover art required.
 */
export default function ComingSoonCard({ item, className = '' }: ComingSoonCardProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-between text-center rounded-lg shadow-md aspect-[10/14] overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(158deg,#15454f 0%,#0e323a 52%,#0a262c 100%)',
        color: CREAM,
        padding: '12% 9% 9%',
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
        className="relative z-10 font-sans font-semibold uppercase"
        style={{ color: GOLD, fontSize: 'clamp(8px,1.4vw,10px)', letterSpacing: '0.22em' }}
      >
        Forthcoming
      </p>

      {/* middle */}
      <div className="relative z-10 flex flex-col items-center">
        <span aria-hidden="true" style={{ color: GOLD, fontSize: '12px', marginBottom: '10px' }}>
          ✦
        </span>
        <h3
          className="font-serif font-semibold"
          style={{
            color: '#f6f1e7',
            fontSize: 'clamp(15px,2.2vw,19px)',
            lineHeight: 1.22,
            letterSpacing: '0.2px',
          }}
        >
          {item.title}
        </h3>
        {item.subtitle && (
          <p
            className="font-serif italic"
            style={{
              color: `${CREAM}b8`,
              fontSize: 'clamp(9px,1.4vw,11px)',
              lineHeight: 1.35,
              marginTop: '8px',
            }}
          >
            {item.subtitle}
          </p>
        )}
        <div style={{ width: '34px', height: '1px', background: `${GOLD}8c`, margin: '12px auto 11px' }} />
        <div
          className="font-sans"
          style={{
            fontSize: 'clamp(8px,1.3vw,10px)',
            lineHeight: 1.7,
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
      <div className="relative z-10 flex flex-col items-center" style={{ gap: '9px' }}>
        <span
          className="font-sans font-semibold uppercase inline-block"
          style={{
            color: GOLD,
            border: `1px solid ${GOLD}80`,
            borderRadius: '999px',
            padding: '4px 12px',
            fontSize: 'clamp(8px,1.2vw,9px)',
            letterSpacing: '0.18em',
          }}
        >
          Coming Soon
        </span>
        <span
          className="font-sans uppercase"
          style={{ color: `${CREAM}73`, fontSize: 'clamp(7px,1vw,8px)', letterSpacing: '0.25em' }}
        >
          Quintessence
        </span>
      </div>
    </div>
  );
}
