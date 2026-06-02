import { ImpactWordmark } from "@/components/ui/impact-wordmark";
import { FOOTER_COLS } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--ink)] py-[60px] pb-9 text-white/60">
      <div className="wrap">
        <div className="flex flex-wrap items-start justify-between gap-8 border-b border-white/10 pb-9">
          <div>
            <ImpactWordmark
              variant="red"
              className="text-[30px] text-white"
            />
            <p className="mt-2.5 text-[13px] font-bold uppercase tracking-[0.1em] text-white/40">
              Digital Media Forum 2026
            </p>
          </div>

          <div className="flex flex-wrap gap-[60px]">
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <h5 className="mb-3.5 text-[12px] font-extrabold uppercase tracking-[0.1em] text-white">
                  {col.title}
                </h5>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-white/60 transition-colors hover:text-[var(--red-bright)]"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-2.5 pt-6 text-[13px]">
          <span>
            © 2026 inilah.com — Media with Precision, Accuracy, Credibility & Trust.
          </span>
          <span>Prototype · IT inilah.com</span>
        </div>
      </div>
    </footer>
  );
}
