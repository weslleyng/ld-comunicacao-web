// Single source of truth for the FAQ content.
// Reused by the Faq section component and the FAQPage JSON-LD on the home page,
// so the rendered Q&A and the structured data can never drift apart.

import { SITE_URL } from "./site";

export type Faq = {
  q: string;
  a: string;
};

export const faqs: Faq[] = [
  {
    q: "Quanto custa a assessoria de imprensa?",
    a: "O investimento é definido após uma conversa inicial, pois cada profissional ou empresa possui objetivos e necessidades diferentes. A proposta é personalizada de acordo com o posicionamento desejado, frequência de divulgação e oportunidades de exposição na imprensa.",
  },
  {
    q: "Em quanto tempo consigo aparecer na mídia?",
    a: "Em média, as primeiras oportunidades de divulgação surgem nos primeiros sete dias após o envio dos conteúdos para a imprensa. O prazo pode variar de acordo com a relevância da pauta, a agenda dos veículos e o interesse editorial dos jornalistas. Como a decisão final de publicação é da imprensa, não é possível garantir uma data específica para a veiculação.",
  },
  {
    q: "A assessoria funciona para a minha área?",
    a: "A assessoria de imprensa é indicada para profissionais especializados, empresários e executivos que desejam fortalecer sua autoridade e ampliar sua visibilidade por meio da imprensa. O trabalho é especialmente eficaz para quem possui experiência, conhecimento técnico e capacidade de contribuir com informações relevantes para o público e para os jornalistas. Atendemos profissionais e empresas de diversos segmentos, como médicos, dentistas, advogados, engenheiros, arquitetos, psicólogos, consultores, especialistas em recursos humanos, profissionais de segurança do trabalho, corretores de imóveis, imobiliárias, construtoras, empresários, executivos, indústrias, clínicas, escritórios e empresas de diferentes áreas. Se você possui conhecimento, experiência ou uma história relevante para compartilhar, há potencial para construir pautas de interesse para a imprensa e fortalecer sua autoridade no mercado.",
  },
  {
    q: "Preciso ter muitos seguidores para sair na mídia?",
    a: "Não. A imprensa busca especialistas, histórias e informações relevantes para o público. O número de seguidores pode fortalecer a presença digital, mas não é determinante para conquistar espaço em veículos de comunicação.",
  },
  {
    q: "Vocês garantem publicação em veículos específicos da imprensa?",
    a: "Não. Nenhuma assessoria de imprensa séria pode garantir publicação em veículos específicos, pois o espaço conquistado é resultado de mídia espontânea, ou seja, não é pago. A decisão de publicar ou não uma pauta cabe exclusivamente aos jornalistas, editores e produtores, que avaliam o interesse e a relevância do tema para o público. O que garantimos é um trabalho estratégico de produção de conteúdo, construção de pautas e relacionamento com a imprensa para ampliar as oportunidades de divulgação nos veículos mais alinhados ao seu segmento.",
  },
  {
    q: "Atendem apenas em Manaus?",
    a: "Não. O atendimento é realizado de forma presencial e online, permitindo atender profissionais e empresas em qualquer região do Brasil.",
  },
  {
    q: "Qual a diferença entre assessoria de imprensa e social media?",
    a: "O social media é responsável pela produção e publicação de conteúdos para as redes sociais, como fotos, vídeos, reels, stories e posts. Já a assessoria de imprensa tem como foco o posicionamento estratégico, identificando pautas relevantes e buscando espaço em TVs, rádios, jornais, revistas, portais e podcasts. Enquanto o conteúdo das redes sociais alcança principalmente os seguidores da marca, a imprensa amplia a visibilidade para milhares de pessoas por meio de veículos com audiência consolidada, fortalecendo a autoridade e a credibilidade do profissional ou da empresa.",
  },
  {
    q: "Posso divulgar os resultados da assessoria de imprensa nas minhas redes sociais?",
    a: "Sim. Inclusive, essa é uma das principais recomendações para potencializar os resultados da assessoria de imprensa. As entrevistas, matérias e citações publicadas em TVs, rádios, jornais, revistas, portais e podcasts podem e devem ser compartilhadas nas redes sociais, LinkedIn, site institucional e grupos de WhatsApp. Ao divulgar essas conquistas, você amplia o alcance da publicação, reforça sua autoridade perante clientes e parceiros e demonstra que seu trabalho está sendo reconhecido por veículos de comunicação com credibilidade e audiência consolidada.",
  },
  {
    q: "Como saber se estou pronto para contratar uma assessoria?",
    a: "Se você deseja fortalecer sua autoridade, ser reconhecido como referência na sua área e ampliar sua visibilidade perante clientes, parceiros e mercado, a assessoria de imprensa pode ser uma ferramenta estratégica para acelerar esse posicionamento.",
  },
  {
    q: "Quais veículos de comunicação vocês atendem?",
    a: "Mantemos relacionamento com jornalistas, produtores, editores e veículos de comunicação de Manaus e de outras regiões do Brasil, incluindo TVs, rádios, jornais, revistas, portais de notícias e podcasts.",
  },
  {
    q: "O que preciso fazer para começar?",
    a: "Basta entrar em contato para agendar uma conversa inicial. Vamos entender seus objetivos, identificar oportunidades de posicionamento e apresentar uma estratégia personalizada para fortalecer sua autoridade e presença na imprensa.",
  },
];

// FAQPage structured data, derived from the same `faqs` array the section
// renders. Injected only on the home page (the FAQ lives there), anchored to
// the WebPage node declared in lib/site.ts.
export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  isPartOf: { "@id": `${SITE_URL}/#webpage` },
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};
