import { Reveal } from "@/components/ui/reveal";
import { VALUES } from "@/lib/content";

export function Values() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="py-24"
    >
      <div className="wrap">
        <Reveal className="mb-[54px] max-w-[760px]">
          <span className="eyebrow">Why IMPACT?</span>
          <h2
            id="why-heading"
            className="mt-3.5 text-[clamp(34px,5vw,60px)] uppercase"
          >
            Media with <span className="text-[var(--red)]">Meaning</span>
          </h2>
          <p className="mt-[18px] max-w-[620px] text-[17px] text-[var(--muted)]">
            Di dunia yang penuh informasi, kepercayaan menjadi mata uang paling
            berharga. IMPACT dibangun di atas empat fondasi.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 border border-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <div
              key={v.title}
              className="group border-[var(--line)] bg-white px-[30px] py-[38px] transition-[background-color,transform] duration-300 hover:-translate-y-1.5 hover:bg-[var(--red)] hover:text-white sm:[&:not(:last-child)]:border-r"
              style={{
                borderRightWidth: i < VALUES.length - 1 ? undefined : 0,
              }}
            >
              <div className="text-[13px] font-extrabold tracking-[0.1em] text-[var(--red)] transition-colors group-hover:text-white/85">
                {v.num} — {v.letters}
              </div>
              <h3 className="my-3 text-[26px] uppercase">{v.title}</h3>
              <p className="text-[14px] text-[var(--muted)] transition-colors group-hover:text-white/85">
                {v.desc}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
