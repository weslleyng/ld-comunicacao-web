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

// Legal entity details, used on /termos and (later) /privacidade.
export const LEGAL_NAME = "L. Dávila Silveira";

export const CNPJ = "62.745.332/0001-52";

export const MUNICIPAL_REGISTRATION = "688508001";

export const FULL_ADDRESS_LINE =
  "Avenida Professor Nilton Lins, 877 — Bairro Flores, Manaus/AM, CEP 69.058-030";

// Stable @id anchors for the entity graph. Hash fragments on the canonical URL
// let every schema node cross-reference the same Organization / Person, which
// is what AI engines use to attribute the brand and the person behind it.
const ORG_ID = `${SITE_URL}/#organization`;
const PERSON_ID = `${SITE_URL}/#luana-davila`;
const WEBSITE_ID = `${SITE_URL}/#website`;
export const WEBPAGE_ID = `${SITE_URL}/#webpage`;

// TODO(LD): preencher com dados reais e mover para o nó ProfessionalService.
// Mantidos fora do JSON-LD por enquanto para não publicar schema inválido.
//   foundingDate: "AAAA"                    // ano de fundação da LD Comunicação
//   priceRange: "$$" | "Sob consulta"       // faixa de preço
//   geo: { latitude, longitude }            // coordenadas do endereço em Manaus
//   openingHoursSpecification: [...]         // horário de atendimento
//   founder/Person.image: URL pública da foto da Luana

// Schema.org entity graph for local SEO + GEO. A single @graph unifies the
// Organization (ProfessionalService), the Person behind it, and the WebSite /
// WebPage nodes, so AI engines read one coherent, cross-linked entity.
export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": ORG_ID,
      name: SITE_NAME,
      alternateName: "LD Comunicação — Assessoria de Imprensa Estratégica",
      description:
        "Assessoria de imprensa para profissionais e especialistas que querem ser reconhecidos como autoridade na imprensa.",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/ld-horizontal.png`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/ld-horizontal.png`,
      },
      telephone: PHONE_E164,
      email: EMAIL,
      slogan: "Assessoria estratégica faz seu negócio virar notícia.",
      knowsAbout: [
        "Assessoria de imprensa",
        "Relações com a imprensa",
        "Media training",
        "Gestão de crise",
        "Clipping",
        "Posicionamento de marca",
      ],
      areaServed: [
        { "@type": "City", name: "Manaus" },
        { "@type": "State", name: "Amazonas" },
        { "@type": "Country", name: "Brasil" },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: `${ADDRESS.street}, ${ADDRESS.number}`,
        addressLocality: ADDRESS.locality,
        addressRegion: ADDRESS.region,
        postalCode: ADDRESS.postalCode,
        addressCountry: ADDRESS.country,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: PHONE_E164,
        availableLanguage: ["Portuguese"],
        areaServed: "BR",
      },
      founder: { "@id": PERSON_ID },
      employee: { "@id": PERSON_ID },
      sameAs: [INSTAGRAM_URL, LINKEDIN_URL, FACEBOOK_URL, GOOGLE_BUSINESS_URL],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de assessoria de imprensa",
        itemListElement: [
          "Assessoria de imprensa estratégica completa",
          "Relacionamento com a imprensa",
          "Produção de releases",
          "Media training básico",
          "Gestão de crise",
          "Posicionamento de marca pessoal e empresarial",
          "Planejamento de comunicação",
          "Clipping",
        ].map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: service },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Luana Dávila",
      givenName: "Luana",
      familyName: "Dávila",
      jobTitle: "Jornalista e CEO",
      description:
        "Jornalista com mais de 14 anos de experiência, sendo dez anos dentro de redações de jornais. Fundadora e CEO da LD Comunicação.",
      url: `${SITE_URL}/#sobre`,
      worksFor: { "@id": ORG_ID },
      knowsAbout: [
        "Assessoria de imprensa",
        "Relações com a imprensa",
        "Comunicação estratégica",
        "Media training",
        "Gestão de crise",
        "Jornalismo",
      ],
      knowsLanguage: "pt-BR",
      sameAs: [LINKEDIN_URL, INSTAGRAM_URL],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      inLanguage: "pt-BR",
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "WebPage",
      "@id": WEBPAGE_ID,
      url: `${SITE_URL}/`,
      name: SITE_TITLE,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
      inLanguage: "pt-BR",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".lead", "[aria-label='Perguntas frequentes'] summary"],
      },
    },
  ],
};
