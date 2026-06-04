import { Reveal } from "@/components/ui/reveal";

const COLS = [
  {
    head: "Dulu",
    body: "Sukses diukur dari seberapa banyak orang yang menerima informasi. Distribusi adalah segalanya.",
  },
  {
    head: "Hari Ini",
    body: "Sukses diukur dari kepercayaan dan pengaruh. Kualitas, kredibilitas, dan integritas jadi mata uang baru.",
  },
];

export function Shift() {
  return (
    <section
      id="shift"
      aria-labelledby="shift-heading"
      className="relative bg-[var(--ink)] py-24 text-white"
    >
      <div className="wrap">
        <Reveal className="mb-[54px] max-w-[760px]">
          <span className="eyebrow">The Great Shift</span>
          <h2
            id="shift-heading"
            className="mt-3.5 text-[clamp(34px,5vw,60px)] uppercase text-white"
          >
            From Information
            <br />
            to <span className="text-[var(--red-bright)]">Influence</span>
          </h2>
        </Reveal>

        <Reveal
          as="p"
          className="max-w-[900px] font-[family-name:var(--font-newsreader)] text-[clamp(24px,3.4vw,40px)] font-normal italic leading-[1.3]"
        >
          Media tidak lagi bersaing dalam kecepatan. Hari ini, keberhasilan
          diukur dari seberapa besar{" "}
          <em className="not-italic font-[family-name:var(--font-newsreader)] italic text-[var(--red-bright)]">
            pengaruh
          </em>{" "}
          yang mampu diciptakan — dan pengaruh besar hanya lahir dari
          kepercayaan yang kuat.
        </Reveal>

        <div className="mt-[50px] grid grid-cols-1 gap-10 md:grid-cols-2">
          {COLS.map((c, i) => (
            <Reveal key={c.head} className="border-t-2 border-[var(--red)] pt-5" delay={i * 80}>
              <h4 className="mb-2.5 text-[15px] uppercase tracking-[0.1em] text-white">
                {c.head}
              </h4>
              <p className="text-[15px] text-white/65">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
