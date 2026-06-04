import { EVENT, SPEAKERS, AGENDA } from "@/lib/content";
import { SITE_URL, ORGANIZER, VENUE, SEO_DESCRIPTION } from "@/lib/seo";

const EVENT_END_ISO = "2026-06-17T18:00:00+07:00";

type JsonLd = Record<string, unknown>;

function organization(): JsonLd {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: ORGANIZER.name,
    url: ORGANIZER.url,
    logo: {
      "@type": "ImageObject",
      url: ORGANIZER.logo,
    },
    email: ORGANIZER.email,
    sameAs: ORGANIZER.sameAs,
  };
}

function website(): JsonLd {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "IMPACT — Digital Media Forum 2026",
    inLanguage: "id-ID",
    description: SEO_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

function event(): JsonLd {
  return {
    "@type": "BusinessEvent",
    "@id": `${SITE_URL}/#event`,
    name: "IMPACT — Digital Media Forum 2026",
    alternateName: ["IMPACT 2026", "Digital Media Forum 2026"],
    description: SEO_DESCRIPTION,
    startDate: EVENT.targetIso,
    endDate: EVENT_END_ISO,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    isAccessibleForFree: false,
    inLanguage: "id-ID",
    image: [`${SITE_URL}/opengraph-image`],
    url: SITE_URL,
    location: {
      "@type": "Place",
      name: VENUE.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: VENUE.street,
        addressLocality: VENUE.city,
        addressRegion: VENUE.region,
        postalCode: VENUE.postalCode,
        addressCountry: VENUE.country,
      },
    },
    organizer: { "@id": `${SITE_URL}/#organization` },
    sponsor: { "@id": `${SITE_URL}/#organization` },
    performer: SPEAKERS.map((s) => ({
      "@type": "Person",
      name: s.name,
      jobTitle: s.role,
      worksFor: { "@type": "Organization", name: s.org },
      image: `${SITE_URL}${s.imgSrc}`,
    })),
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/#register`,
      price: "0",
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01T00:00:00+07:00",
      category: "Curated Registration",
      description:
        "Forum terkurasi untuk ±350 tamu pilihan. Pengajuan kehadiran ditinjau oleh tim kurasi.",
    },
    subEvent: AGENDA.map((a) => ({
      "@type": "Event",
      name: a.title,
      description: a.detail,
      startDate: `2026-06-17T${a.time.replace(".", ":")}:00+07:00`,
      location: { "@type": "Place", name: VENUE.name },
    })),
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "Media executives, creators, brand C-level, regulators, agencies, university talent",
    },
    maximumAttendeeCapacity: 350,
    keywords:
      "digital media forum, jurnalisme algoritme, kredibilitas media, media kreator regulator, ekosistem digital Indonesia",
  };
}

function breadcrumbs(): JsonLd {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "IMPACT — Digital Media Forum 2026",
        item: `${SITE_URL}/#event`,
      },
    ],
  };
}

function speakersList(): JsonLd {
  return {
    "@type": "ItemList",
    name: "Pembicara IMPACT 2026 — Visionary Voices & Panelists",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: SPEAKERS.length,
    itemListElement: SPEAKERS.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Person",
        name: s.name,
        jobTitle: s.role,
        worksFor: { "@type": "Organization", name: s.org },
        image: `${SITE_URL}${s.imgSrc}`,
        url: `${SITE_URL}/#speakers`,
      },
    })),
  };
}

export function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      organization(),
      website(),
      event(),
      breadcrumbs(),
      speakersList(),
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
