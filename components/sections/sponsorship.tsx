import { Reveal } from "@/components/ui/reveal";
import { VALUE_PROPS, PACKAGES } from "@/lib/content";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Sponsorship() {
  return (
    <section
      id="sponsor"
      aria-labelledby="sponsor-heading"
      className="bg-[var(--navy)] py-24 text-white"
    >
      <div className="wrap">
        <Reveal className="mb-[54px] max-w-[760px]">
          <span className="eyebrow">Partnership</span>
          <h2
            id="sponsor-heading"
            className="mt-3.5 text-[clamp(34px,5vw,60px)] uppercase text-white"
          >
            Kenapa <span className="text-[var(--red-bright)]">Bersponsor?</span>
          </h2>
          <p className="mt-[18px] max-w-[620px] text-[17px] text-white/70">
            Empat nilai utama yang Anda dapatkan dengan bergabung sebagai
            partner IMPACT 2026.
          </p>
        </Reveal>

        {/* Value props */}
        <div className="mb-[50px] grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPS.map((vp, i) => (
            <Reveal
              key={vp.title}
              delay={i * 60}
              className="border border-white/15 bg-white/5 px-[22px] py-[26px] transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/10"
            >
              <div className="text-[34px] font-black text-[var(--red-bright)]">
                {vp.rank}
                <sup className="text-[14px]">{vp.rankSuffix}</sup>
              </div>
              <h4 className="mt-3 text-[16px] uppercase leading-[1.2] text-white">
                {vp.title}
              </h4>
            </Reveal>
          ))}
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 gap-[22px] lg:grid-cols-3">
          {PACKAGES.map((pkg, i) => {
            const featured = pkg.featured;
            return (
              <Reveal
                key={pkg.tier}
                delay={i * 80}
                className={cn(
                  "flex flex-col border px-7 py-[34px]",
                  featured
                    ? "border-[var(--red)] bg-[var(--red)]"
                    : "border-white/15 bg-white/[0.04]"
                )}
              >
                <span
                  className={cn(
                    "text-[13px] font-extrabold uppercase tracking-[0.16em]",
                    featured ? "text-white" : "text-[var(--red-bright)]"
                  )}
                >
                  {pkg.name}
                </span>
                <h3 className="my-2 text-[28px] uppercase text-white">
                  {pkg.tier}
                </h3>
                <div
                  className={cn(
                    "mb-5 text-[14px]",
                    featured ? "text-white/85" : "text-white/60"
                  )}
                >
                  {pkg.price}
                </div>
                <ul className="mb-[26px] flex-1 list-none">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-2.5 border-b border-white/10 py-2.5 text-[14px]"
                    >
                      <span
                        className={cn(
                          "relative top-1 text-[9px]",
                          featured ? "text-white" : "text-[var(--red-bright)]"
                        )}
                        aria-hidden="true"
                      >
                        ●
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#register"
                  className={cn(
                    "w-full text-center",
                    featured
                      ? "border-white border-3 px-6 py-[15px] text-[15px] font-extrabold uppercase tracking-[0.01em] text-[var(--red)] transition-colors hover:bg-[var(--ink)] hover:text-white"
                      : buttonVariants({
                          variant: "ghost-white",
                          size: "editorial-block",
                        })
                  )}
                >
                  Pilih Paket
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
