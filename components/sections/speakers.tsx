"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SPEAKERS, type SpeakerCategory } from "@/lib/content";
import { cn } from "@/lib/utils";

type Filter = "all" | SpeakerCategory;

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "Semua" },
  { key: "voice", label: "Visionary Voices" },
  { key: "panel", label: "Event Panelists" },
];

export function Speakers() {
  const [filter, setFilter] = useState<Filter>("all");

  return (
    <section id="speakers" className="py-24">
      <div className="wrap">
        <Reveal className="mb-[54px] max-w-[760px]">
          <span className="eyebrow">Visionary Voices &amp; Panelists</span>
          <h2 className="mt-3.5 text-[clamp(34px,5vw,60px)] uppercase">
            Para <span className="text-[var(--red)]">Pembicara</span>
          </h2>
          <p className="mt-[18px] max-w-[620px] text-[17px] text-[var(--muted)]">
            Pemimpin media, kreator, regulator, dan pelaku industri dalam satu
            panggung.
          </p>
        </Reveal>

        <Reveal className="mb-10 flex flex-wrap gap-2.5">
          {FILTERS.map((f) => {
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={cn(
                  "border-2 border-[var(--navy)] px-5 py-[9px] text-[13px] font-bold uppercase tracking-[0.05em] transition-colors duration-200",
                  active
                    ? "bg-[var(--navy)] text-white"
                    : "bg-transparent text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white"
                )}
              >
                {f.label}
              </button>
            );
          })}
        </Reveal>

        <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
          {SPEAKERS.map((s) => {
            const visible = filter === "all" || s.cat === filter;
            if (!visible) return null;
            const badgeLabel =
              s.cat === "voice"
                ? "Visionary Voice"
                : s.tentative
                  ? "Panelist · Tentatif"
                  : "Panelist";
            return (
              <article
                key={s.id}
                className="group overflow-hidden border border-[var(--line)] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-20px_rgba(12,18,38,0.3)]"
              >
                <div className="relative flex h-[200px] items-end overflow-hidden bg-gradient-to-br from-[var(--navy)] to-[var(--navy-2)] p-4">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_20%,transparent_21%)] [background-size:14px_14px]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 text-[54px] font-black text-white/15"
                  >
                    {s.initials}
                  </span>
                  <span
                    className={cn(
                      "relative z-[2] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em] text-white",
                      s.tentative ? "bg-[#C9A227]" : "bg-[var(--red)]"
                    )}
                  >
                    {badgeLabel}
                  </span>
                </div>
                <div className="px-[18px] pb-[22px] pt-[18px]">
                  <h4 className="text-[18px] uppercase">{s.name}</h4>
                  <div className="mt-1.5 text-[12px] font-bold leading-[1.4] text-[var(--red)]">
                    {s.role}
                  </div>
                  <div className="mt-0.5 text-[12px] text-[var(--muted)]">
                    {s.org}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
