import { Reveal } from "@/components/ui/reveal";
import { ACTIVATIONS } from "@/lib/content";

export function Activations() {
  return (
    <section
      id="activations"
      aria-labelledby="activations-heading"
      className="py-24"
    >
      <div className="wrap">
        <Reveal className="mb-[54px] max-w-[760px]">
          <span className="eyebrow">The Experience</span>
          <h2
            id="activations-heading"
            className="mt-3.5 text-[clamp(34px,5vw,60px)] uppercase"
          >
            Activations &amp; <span className="text-[var(--red)]">Engagement</span>
          </h2>
          <p className="mt-[18px] max-w-[620px] text-[17px] text-[var(--muted)]">
            Bukan sekadar duduk dan mendengar — IMPACT adalah pengalaman yang
            bisa dibawa pulang dan dibagikan.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-3">
          {ACTIVATIONS.map((a, i) => (
            <Reveal
              key={a.title}
              delay={i * 80}
              className="group relative overflow-hidden border border-[var(--line)] bg-white px-7 py-[34px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-22px_rgba(12,18,38,0.28)]"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-[5px] w-0 bg-[var(--red)] transition-all duration-300 group-hover:w-full"
              />
              <div className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[var(--red)]">
                {a.phase}
              </div>
              <h3 className="my-3 text-[23px] uppercase">{a.title}</h3>
              <p className="text-[14px] text-[var(--muted)]">{a.desc}</p>
              <span className="mt-4 inline-block bg-[var(--paper)] px-3 py-2 text-[12px] font-bold text-[var(--navy)]">
                {a.tag}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
