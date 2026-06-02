const ITEMS = [
  "PRECISION",
  "ACCURACY",
  "CREDIBILITY",
  "TRUST",
  "1 BILLION LIKES ON TIKTOK",
];

function Track() {
  return (
    <span className="inline-block">
      {ITEMS.map((word) => (
        <span key={word} className="inline-block">
          <span className="mx-[26px] opacity-95">{word}</span>
          <span className="mx-[26px] text-[var(--ink)]">✦</span>
        </span>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <div className="relative z-[3] overflow-hidden whitespace-nowrap bg-[var(--red)] py-[13px] text-white">
      <div className="marquee-track inline-block text-[14px] font-extrabold uppercase tracking-[0.08em]">
        <Track />
        <Track />
      </div>
    </div>
  );
}
