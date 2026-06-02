"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { AGENDA } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Agenda() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="agenda" className="bg-[var(--paper-2)] py-24">
      <div className="wrap">
        <Reveal className="mb-[54px] max-w-[760px]">
          <span className="eyebrow">Rundown · 17 Juni 2026</span>
          <h2 className="mt-3.5 text-[clamp(34px,5vw,60px)] uppercase">
            Susunan <span className="text-[var(--red)]">Acara</span>
          </h2>
          <p className="mt-[18px] max-w-[620px] text-[17px] text-[var(--muted)]">
            Klik tiap sesi untuk detail. Jadwal dapat berubah.
          </p>
        </Reveal>

        <Reveal as="ul" className="list-none border-t-2 border-[var(--ink)]">
          {AGENDA.map((item, i) => {
            const open = openIdx === i;
            const panelId = `agenda-panel-${i}`;
            const btnId = `agenda-trigger-${i}`;
            return (
              <li
                key={item.time}
                className={cn(
                  "border-b border-[var(--line)] transition-colors duration-200",
                  open ? "bg-white" : "hover:bg-white"
                )}
              >
                <button
                  type="button"
                  id={btnId}
                  aria-controls={panelId}
                  aria-expanded={open}
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="grid w-full cursor-pointer grid-cols-[90px_1fr_24px] items-center gap-2.5 px-4 py-5 text-left sm:grid-cols-[130px_1fr_30px] sm:gap-5"
                >
                  <span className="text-[13px] font-extrabold tabular-nums text-[var(--red)] sm:text-[15px]">
                    {item.time}
                  </span>
                  <span className="text-[15px] font-bold sm:text-[17px]">
                    {item.title}
                    {item.featured && (
                      <span className="ml-2 inline-block bg-[var(--red)] px-2 py-0.5 align-middle text-[10px] font-extrabold uppercase tracking-[0.05em] text-white">
                        Headline
                      </span>
                    )}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "text-center text-[22px] text-[var(--muted)] transition-transform duration-300",
                      open && "rotate-45 text-[var(--red)]"
                    )}
                  >
                    +
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0">
                    <p className="px-4 pb-5 text-[15px] text-[var(--muted)] sm:pl-[150px]">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
