"use client";

import { useCountdown } from "@/hooks/use-countdown";
import { EVENT } from "@/lib/content";

const PAIRS: { key: keyof Pick<ReturnType<typeof useCountdown>, "days" | "hours" | "mins" | "secs">; unit: string }[] = [
  { key: "days", unit: "Hari" },
  { key: "hours", unit: "Jam" },
  { key: "mins", unit: "Menit" },
  { key: "secs", unit: "Detik" },
];

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

export function Countdown() {
  const value = useCountdown(EVENT.targetIso);

  return (
    <div className="rounded-[4px] border border-white/15 bg-white/[0.06] p-[30px] backdrop-blur-[8px]">
      <div className="mb-[18px] text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--red-bright)]">
        Menuju hari-H
      </div>
      <div className="grid grid-cols-4 gap-[10px] text-center">
        {PAIRS.map(({ key, unit }) => (
          <div key={key}>
            <div className="text-[clamp(32px,4vw,48px)] font-black leading-none text-white tabular-nums">
              {value.ready ? pad(value[key]) : "00"}
            </div>
            <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/60">
              {unit}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t border-white/15 pt-5 text-sm text-white/90">
        Pintu registrasi dibuka{" "}
        <b className="font-extrabold text-white">{EVENT.doorTime}</b> · Acara dimulai{" "}
        <b className="font-extrabold text-white">{EVENT.startTime}</b>
      </div>
    </div>
  );
}
