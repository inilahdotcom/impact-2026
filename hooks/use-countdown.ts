"use client";

import { useEffect, useState } from "react";

export interface CountdownValue {
  days: number;
  hours: number;
  mins: number;
  secs: number;
  ready: boolean;
}

const ZERO: CountdownValue = { days: 0, hours: 0, mins: 0, secs: 0, ready: false };

function compute(target: number): CountdownValue {
  const now = Date.now();
  const diff = Math.max(0, target - now);
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    mins: Math.floor((diff % 3_600_000) / 60_000),
    secs: Math.floor((diff % 60_000) / 1000),
    ready: true,
  };
}

export function useCountdown(targetIso: string): CountdownValue {
  const [value, setValue] = useState<CountdownValue>(ZERO);

  useEffect(() => {
    const target = new Date(targetIso).getTime();
    setValue(compute(target));
    const id = setInterval(() => setValue(compute(target)), 1000);
    return () => clearInterval(id);
  }, [targetIso]);

  return value;
}
