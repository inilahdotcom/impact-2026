"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrolled } from "@/hooks/use-scrolled";
import { ImpactWordmark } from "@/components/ui/impact-wordmark";
import { NAV_LINKS } from "@/lib/content";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,box-shadow,padding] duration-300",
        scrolled &&
          "bg-[rgba(243,244,247,0.9)] backdrop-blur-[14px] shadow-[0_1px_0_var(--line)]"
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-[var(--max-width)] items-center justify-between px-6 transition-all duration-300",
          scrolled ? "py-3" : "py-[18px]"
        )}
      >
        <a href="#top" className="flex flex-col leading-none" aria-label="IMPACT — Beranda">
          <span className="text-[11px] font-extrabold tracking-[0.02em] text-[var(--navy)]">
            <b className="text-[var(--red)] font-extrabold">inilah</b>.com
          </span>
          <ImpactWordmark
            variant="red"
            className="text-[26px] text-[var(--navy)]"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-[30px] md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-semibold text-[var(--navy)] transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--red)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#register"
            className={cn(buttonVariants({ variant: "red", size: "editorial" }))}
          >
            Daftar
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Buka menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="z-50 inline-flex h-10 w-10 items-center justify-center md:hidden"
        >
          <Menu className="size-6 text-[var(--navy)]" />
        </button>
      </nav>

      {/* Mobile slide-in panel */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-[60] flex h-screen w-[74%] flex-col justify-center gap-7 bg-[var(--ink)] px-8 text-white transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Tutup menu"
          onClick={() => setOpen(false)}
          className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center"
        >
          <X className="size-6 text-white" />
        </button>

        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="text-xl font-bold text-white"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#register"
          onClick={() => setOpen(false)}
          className={cn(
            buttonVariants({ variant: "red", size: "editorial" }),
            "w-fit"
          )}
        >
          Daftar
        </a>
      </div>
    </header>
  );
}
