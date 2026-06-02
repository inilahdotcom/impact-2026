export const EVENT = {
  brand: "inilah.com",
  title: "Digital Media Forum 2026",
  date: "Rabu, 17 Juni 2026",
  shortDate: "17 Juni 2026",
  venue: "PIK2 Signature Gallery",
  format: "Curated · ±350 tamu",
  targetIso: "2026-06-17T09:30:00+07:00",
  doorTime: "09.30 WIB",
  startTime: "10.00 WIB",
} as const;

export type SpeakerCategory = "voice" | "panel";

export interface Speaker {
  id: string;
  cat: SpeakerCategory;
  name: string;
  initials: string;
  role: string;
  org: string;
  tentative?: boolean;
}

export const SPEAKERS: Speaker[] = [
  {
    id: "abdullah-fahmi",
    cat: "voice",
    name: "Abdullah Fahmi",
    initials: "AF",
    role: "VP Brand & Marketing Comm.",
    org: "Telkomsel",
  },
  {
    id: "hera-haryn",
    cat: "voice",
    name: "Hera F. Haryn",
    initials: "HH",
    role: "Executive Vice President",
    org: "PT Bank Central Asia Tbk",
  },
  {
    id: "windy-riswantyo",
    cat: "voice",
    name: "Windy Riswantyo",
    initials: "WR",
    role: "Head of Corporate Comm.",
    org: "PT Astra International Tbk",
  },
  {
    id: "ra-koesoemohadiani",
    cat: "voice",
    name: "R.A. Koesoemohadiani",
    initials: "RK",
    role: "Corporate Secretary",
    org: "GoTo Group",
  },
  {
    id: "stephanie-susilo",
    cat: "panel",
    name: "Stephanie Susilo",
    initials: "SS",
    role: "Executive Director",
    org: "Tokopedia & TikTok E-commerce ID",
  },
  {
    id: "rebby-noviar",
    cat: "panel",
    name: "Rebby Noviar",
    initials: "RN",
    role: "Creative Director",
    org: "inilah.com",
  },
  {
    id: "meutya-hafid",
    cat: "panel",
    name: "Meutya Hafid",
    initials: "MH",
    role: "Menteri Komunikasi & Digital RI",
    org: "Kementerian Komdigi",
    tentative: true,
  },
  {
    id: "agustini-rahayu",
    cat: "panel",
    name: "Agustini Rahayu",
    initials: "AR",
    role: "Deputi Bidang Kreativitas Media",
    org: "Kementerian Ekonomi Kreatif",
  },
];

export interface AgendaItem {
  time: string;
  title: string;
  detail: string;
  featured?: boolean;
}

export const AGENDA: AgendaItem[] = [
  {
    time: "09.30",
    title: "Registration",
    detail: "Pintu dibuka. Check-in digital via QR pada name tag.",
  },
  {
    time: "10.00",
    title: "Grand Opening",
    detail: "Pembukaan oleh MC, dilanjutkan kilas balik 18 tahun inilah.com.",
  },
  {
    time: "10.37",
    title: "Panel Discussion I",
    featured: true,
    detail:
      "“Jurnalisme Algoritme” — inilah.com × TikTok. Media pertama di Indonesia yang menembus 1 miliar likes.",
  },
  {
    time: "11.22",
    title: "Visionary Voices I",
    detail: "Sesi keynote dari pemimpin industri seputar evolusi konektivitas & media.",
  },
  {
    time: "13.02",
    title: "Visionary Voices II & III",
    detail: "Rangkaian keynote lanjutan, diselingi ice breaking & second act (choir).",
  },
  {
    time: "14.37",
    title: "Visionary Voices IV",
    detail: "Sesi puncak keynote sebelum coffee break.",
  },
  {
    time: "16.17",
    title: "Panel Discussion II + Closing",
    detail: "Diskusi penutup, gimmick, dan closing act (TBA).",
  },
];

export interface ValueItem {
  num: string;
  letters: string;
  title: string;
  desc: string;
}

export const VALUES: ValueItem[] = [
  {
    num: "01",
    letters: "I·M·P",
    title: "Precision",
    desc: "Setiap narasi disusun dengan ketepatan, tanpa distorsi.",
  },
  {
    num: "02",
    letters: "A",
    title: "Accuracy",
    desc: "Fakta yang terverifikasi sebagai dasar setiap konten.",
  },
  {
    num: "03",
    letters: "C",
    title: "Credibility",
    desc: "Reputasi yang dijaga lewat konsistensi dan integritas.",
  },
  {
    num: "04",
    letters: "T",
    title: "Trust",
    desc: "Kepercayaan publik sebagai tujuan akhir dari semuanya.",
  },
];

export interface Stat {
  big: string;
  desc: string;
}

export const STATS: Stat[] = [
  { big: "±350", desc: "In-out curated attendees" },
  { big: "10jt", desc: "Total digital reach" },
  { big: "±200", desc: "Organic contents" },
];

export interface Activation {
  phase: string;
  title: string;
  desc: string;
  tag: string;
}

export const ACTIVATIONS: Activation[] = [
  {
    phase: "Pre-Event",
    title: "One Billion Journey",
    desc: "Serial small master class di kantor inilah.com sebelum hari-H, mengupas perjalanan menuju 1 miliar likes.",
    tag: "Speaker Interview Teaser",
  },
  {
    phase: "Main Event",
    title: "The Future Newsroom",
    desc: "Jadi “Presenter inilah” dengan Green Screen / AR. Bacakan berita pencapaian brand, lalu kirim videonya ke ponsel untuk dibagikan.",
    tag: "Be the Headline",
  },
  {
    phase: "Main Event",
    title: "Invinity Wishes",
    desc: "Video-booth vertikal 15–30 detik: rekam pesan “One in a Billion Reason Why I Like Inilah” sebagai instant souvenir.",
    tag: "Branded Micro-Set",
  },
];

export interface ValueProp {
  rank: string;
  rankSuffix: string;
  title: string;
}

export const VALUE_PROPS: ValueProp[] = [
  { rank: "1", rankSuffix: "st", title: "Guaranteed Media Coverage" },
  { rank: "2", rankSuffix: "nd", title: "Scores of Creators" },
  { rank: "3", rankSuffix: "rd", title: "Priority Networking Registry" },
  { rank: "4", rankSuffix: "th", title: "First-Hand Algorithm Intel" },
];

export interface SponsorPackage {
  name: string;
  tier: string;
  price: string;
  features: string[];
  featured?: boolean;
}

export const PACKAGES: SponsorPackage[] = [
  {
    name: "Bronze",
    tier: "Supporter",
    price: "Hubungi tim kami",
    features: [
      "Logo di publication tools",
      "Mention sosial media",
      "2 undangan curated",
    ],
  },
  {
    name: "Gold · Recommended",
    tier: "Knowledge Partner",
    price: "Hubungi tim kami",
    featured: true,
    features: [
      "Brand di skrip Future Newsroom",
      "Integrasi Invinity Wishes booth",
      "Watermark di micro content series",
      "8 undangan curated + networking",
    ],
  },
  {
    name: "Platinum",
    tier: "Title Partner",
    price: "Hubungi tim kami",
    features: [
      "Co-branding nama event",
      "Stage time / keynote slot",
      "Charging station & podium branding",
      "Akses penuh Algorithm Intel",
    ],
  },
];

export const REGISTER_CATEGORIES = [
  "The Trendsetter (KOL / Creator)",
  "The Architects (Agency / Industri)",
  "The Future (Mahasiswa / Gen muda)",
  "The Decision Makers (Brand / C-Level / Regulator)",
] as const;

export const NAV_LINKS = [
  { href: "#shift", label: "The Shift" },
  { href: "#speakers", label: "Speakers" },
  { href: "#agenda", label: "Agenda" },
  { href: "#activations", label: "Activations" },
  { href: "#sponsor", label: "Sponsorship" },
] as const;

export const FOOTER_COLS = [
  {
    title: "Event",
    links: [
      { label: "The Shift", href: "#shift" },
      { label: "Speakers", href: "#speakers" },
      { label: "Agenda", href: "#agenda" },
    ],
  },
  {
    title: "Engage",
    links: [
      { label: "Activations", href: "#activations" },
      { label: "Sponsorship", href: "#sponsor" },
      { label: "Daftar", href: "#register" },
    ],
  },
  {
    title: "Kontak",
    links: [
      { label: "partnership@inilah.com", href: "mailto:partnership@inilah.com" },
      { label: "PIK2 Signature Gallery", href: "#" },
      { label: "@inilah.com", href: "#" },
    ],
  },
] as const;
