import { Reveal } from "@/components/ui/reveal";
import { STATS } from "@/lib/content";

export function Stats() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="bg-[var(--red)] py-24 text-white"
    >
      <div className="wrap">
        <Reveal className="mb-10 max-w-[760px]">
          <span className="eyebrow !text-white">Event Exposure</span>
          <h2
            id="stats-heading"
            className="mt-3.5 text-[clamp(34px,5vw,60px)] uppercase text-white"
          >
            Skala Dampaknya
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal
              key={s.desc}
              className={[
                "py-2.5",
                i === 1
                  ? "border-t border-b border-white/25 py-6 md:border-t-0 md:border-r md:border-b-0 md:border-l md:px-8 md:py-2.5"
                  : "",
              ].join(" ")}
            >
              <div className="text-[clamp(58px,8vw,104px)] font-black leading-[0.9]">
                {s.big}
              </div>
              <div className="mt-2.5 text-[16px] font-bold uppercase tracking-[0.05em] opacity-90">
                {s.desc}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
