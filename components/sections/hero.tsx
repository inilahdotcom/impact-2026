import { Countdown } from "@/components/ui/countdown";
import { EVENT } from "@/lib/content";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HERO_BG = {
  background:
    "radial-gradient(circle at 15% 25%, rgba(255,59,92,0.55), transparent 45%), radial-gradient(circle at 85% 75%, rgba(221,27,60,0.5), transparent 45%), linear-gradient(135deg, #2A1430 0%, #1A1838 45%, #3A0E22 100%)",
};

const META = [
  { k: "Tanggal", v: EVENT.date },
  { k: "Venue", v: EVENT.venue },
  { k: "Format", v: EVENT.format },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-[90px] text-white"
      style={HERO_BG}
    >
      {/* halftone overlay */}
      <div
        aria-hidden="true"
        className="dots-light pointer-events-none absolute inset-0 opacity-70"
      />

      <div className="wrap relative z-[2] grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.25fr_0.9fr]">
        {/* Left col */}
        <div>
          <span className="eyebrow !text-[var(--red-bright)]">
            {EVENT.brand} presents · {EVENT.shortDate}
          </span>

          <h1 className="mt-[18px] text-[clamp(46px,7vw,96px)] uppercase">
            <span className="inline-flex items-center tracking-[-0.02em]">
              IMPA<span className="impact-cdot" aria-hidden="true" />CT
            </span>
            <br />
            <span className="text-[var(--red-bright)]">Digital Media</span>
            <br />
            Forum 2026
          </h1>

          <p className="mt-[22px] mb-1.5 max-w-[480px] text-lg font-normal text-white/80">
            Dari informasi menuju pengaruh. Ruang kolaborasi media, kreator,
            platform, regulator, dan industri membangun ekosistem digital yang
            lebih kredibel.
          </p>

          <div className="my-[26px] mt-6 flex flex-wrap gap-7">
            {META.map((m) => (
              <div key={m.k}>
                <div className="mb-1 text-[11px] uppercase tracking-[0.16em] text-white/55">
                  {m.k}
                </div>
                <div className="text-[17px] font-extrabold">{m.v}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3.5">
            <a
              href="#register"
              className={cn(buttonVariants({ variant: "red", size: "editorial" }))}
            >
              Ajukan Kehadiran
            </a>
            <a
              href="#sponsor"
              className={cn(
                buttonVariants({ variant: "translucent-light", size: "editorial" })
              )}
            >
              Jadi Sponsor
            </a>
          </div>
        </div>

        {/* Right col — countdown */}
        <Countdown />
      </div>
    </section>
  );
}
