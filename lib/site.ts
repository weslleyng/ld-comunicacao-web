// Centralized site-wide constants and structured data.
// Single source of truth reused across components, metadata and JSON-LD.

export const SITE_URL = "https://ldcomunicacao.com";

export const SITE_NAME = "LD Comunicação";

export const SITE_TITLE = "LD Comunicação — Assessoria de Imprensa em Manaus";

export const SITE_DESCRIPTION =
  "Assessoria de imprensa para profissionais e especialistas que querem virar referência na imprensa. 14 anos de experiência. Atendimento em Manaus.";

export const PHONE_E164 = "+55-92-98448-0378";

export const WHATSAPP_NUMBER = "5592984480378";

const WHATSAPP_MESSAGE =
  "Olá! Vim pela página e quero fortalecer minha autoridade na imprensa.";

// Build the wa.me URL once, encoding the message to avoid double-encoding bugs.
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const WHATSAPP_LABEL = "Falar no WhatsApp com a LD Comunicação";

export const INSTAGRAM_HANDLE = "@ldcomunicacao_";

export const INSTAGRAM_URL = "https://instagram.com/ldcomunicacao_";

export const EMAIL = "luannadavila02@gmail.com";

// Pre-encoded social URLs (accents already percent-encoded by the source).
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/luana-d%C3%A1vila-70543b77/";

export const FACEBOOK_URL =
  "https://www.facebook.com/people/LD-Comunica%C3%A7%C3%A3o/61562051679985/";

export const GOOGLE_BUSINESS_URL = "https://share.google/dDGI88mcUStsuDC19";

export const ADDRESS = {
  street: "Avenida Professor Nilton Lins",
  number: "877",
  locality: "Manaus",
  region: "AM",
  postalCode: "69058-030",
  country: "BR",
} as const;

export const ADDRESS_LINE = "Avenida Professor Nilton Lins, 877 — Manaus, AM";

// Schema.org ProfessionalService structured data for local SEO.
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description:
    "Assessoria de imprensa para profissionais e especialistas que querem ser reconhecidos como autoridade na imprensa.",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/ld-horizontal.png`,
  telephone: PHONE_E164,
  email: EMAIL,
  areaServed: "BR",
  sameAs: [INSTAGRAM_URL, LINKEDIN_URL, FACEBOOK_URL, GOOGLE_BUSINESS_URL],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${ADDRESS.street}, ${ADDRESS.number}`,
    addressLocality: ADDRESS.locality,
    addressRegion: ADDRESS.region,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.country,
  },
};
