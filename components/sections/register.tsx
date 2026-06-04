"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check } from "lucide-react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Reveal } from "@/components/ui/reveal";
import { REGISTER_CATEGORIES } from "@/lib/content";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { db } from "@/lib/firebase";

const schema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter"),
  email: z.string().trim().email("Email tidak valid"),
  category: z.string().min(1, "Pilih kategori"),
  org: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const FIELD_CLS =
  "w-full border border-white/20 bg-white/5 px-3.5 py-3.5 text-[15px] font-sans text-white outline-none transition-all placeholder:text-white/35 focus:border-[var(--red-bright)] focus:bg-white/10";
const LABEL_CLS =
  "mb-2 block text-[12px] font-bold uppercase tracking-[0.08em] text-white/70";
const ERR_CLS = "mt-1.5 text-[12px] font-medium text-[var(--red-bright)]";

const REGISTER_BG = {
  background:
    "radial-gradient(circle at 80% 20%, rgba(255,59,92,0.4), transparent 40%), var(--ink)",
};

export function Register() {
  const [done, setDone] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", category: "", org: "" },
    mode: "onTouched",
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError(null);
    try {
      await addDoc(collection(db, "registrations"), {
        name: values.name,
        email: values.email,
        category: values.category,
        org: values.org ?? "",
        status: "pending_review",
        source: "impact-2026-microsite",
        createdAt: serverTimestamp(),
      });
      setDone(true);
    } catch (err) {
      console.error("Firestore submit failed:", err);
      setSubmitError(
        "Gagal menyimpan pengajuan. Periksa koneksi Anda lalu coba lagi."
      );
    }
  });

  return (
    <section
      id="register"
      aria-labelledby="register-heading"
      className="py-24 text-white"
      style={REGISTER_BG}
    >
      <div className="wrap grid grid-cols-1 items-center gap-9 lg:grid-cols-2 lg:gap-[60px]">
        <Reveal>
          <span className="eyebrow !text-[var(--red-bright)]">Curated Registration</span>
          <h2
            id="register-heading"
            className="mt-3.5 text-[clamp(34px,5vw,56px)] uppercase text-white"
          >
            Amankan <span className="text-[var(--red-bright)]">Kursi</span> Anda
          </h2>
          <p className="mt-[18px] text-[16px] text-white/70">
            IMPACT adalah forum terkurasi untuk ±350 tamu pilihan: trendsetter,
            arsitek industri kreatif, generasi masa depan, dan decision makers.
            Ajukan kehadiran — tim kami akan meninjau dan mengonfirmasi.
          </p>
          <p className="mt-5 text-[13px] text-white/45">
            Dengan mendaftar, Anda menyetujui penggunaan data sesuai kebijakan
            privasi & UU PDP. Status konfirmasi dikirim via email/WhatsApp.
          </p>
        </Reveal>

        <Reveal>
          <div className="border border-white/15 bg-white/5 p-[34px]">
            {done ? (
              <div className="py-5 text-center">
                <div className="mx-auto mb-[18px] flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[var(--red)]">
                  <Check className="size-7 text-white" strokeWidth={3} />
                </div>
                <h3 className="text-[24px] uppercase text-white">
                  Pengajuan Terkirim
                </h3>
                <p className="mt-2.5 text-[15px] text-white/70">
                  Terima kasih! Pengajuan Anda sedang ditinjau tim kurasi
                  IMPACT. Konfirmasi akan dikirim ke email Anda.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="mb-4">
                  <label htmlFor="reg-name" className={LABEL_CLS}>
                    Nama Lengkap
                  </label>
                  <input
                    id="reg-name"
                    type="text"
                    placeholder="Nama Anda"
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    {...register("name")}
                    className={FIELD_CLS}
                  />
                  {errors.name && (
                    <p className={ERR_CLS}>{errors.name.message}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="reg-email" className={LABEL_CLS}>
                    Email
                  </label>
                  <input
                    id="reg-email"
                    type="email"
                    placeholder="nama@email.com"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                    className={FIELD_CLS}
                  />
                  {errors.email && (
                    <p className={ERR_CLS}>{errors.email.message}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="reg-cat" className={LABEL_CLS}>
                    Anda termasuk?
                  </label>
                  <select
                    id="reg-cat"
                    aria-invalid={!!errors.category}
                    {...register("category")}
                    className={cn(FIELD_CLS, "appearance-none [&>option]:text-black")}
                  >
                    <option value="">Pilih kategori…</option>
                    {REGISTER_CATEGORIES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className={ERR_CLS}>{errors.category.message}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="reg-org" className={LABEL_CLS}>
                    Perusahaan / Institusi
                  </label>
                  <input
                    id="reg-org"
                    type="text"
                    placeholder="Nama perusahaan"
                    autoComplete="organization"
                    {...register("org")}
                    className={FIELD_CLS}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    buttonVariants({ variant: "red", size: "editorial-block" }),
                    "mt-1.5"
                  )}
                >
                  {isSubmitting ? "Mengirim…" : "Ajukan Kehadiran"}
                </button>

                {submitError && (
                  <p
                    role="alert"
                    className="mt-4 border border-[var(--red-bright)]/40 bg-[var(--red)]/15 px-3.5 py-3 text-[13px] text-white"
                  >
                    {submitError}
                  </p>
                )}
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
