interface ComingSoonTileProps {
  title: string;
  className?: string;
}

export default function ComingSoonTile({ title, className = '' }: ComingSoonTileProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-lg shadow-md aspect-[10/14] bg-[#52C2EC] text-white p-4 ${className}`}
    >
      <p className="text-xs font-semibold uppercase tracking-widest mb-3 opacity-80">Coming Soon</p>
      <p className="text-center font-semibold text-sm leading-snug">{title}</p>
    </div>
  );
}
