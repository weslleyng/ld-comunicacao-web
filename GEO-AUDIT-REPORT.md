# GEO-AUDIT-REPORT — LD Comunicação

Auditoria GEO-SEO (otimização para busca com IA + SEO tradicional)

- Alvo: https://ldcomunicacao.com
- Negócio: LD Comunicação — assessoria de imprensa, Manaus/AM (ProfessionalService local)
- Profissional: Luana Dávila — jornalista, 14 anos de experiência
- Stack: Next.js (App Router), pré-renderizado/SSR na Vercel
- Data: 28/06/2026
- Método: 5 subagentes paralelos (visibilidade em IA, plataformas, técnico, conteúdo/E-E-A-T, schema) sobre código-fonte + HTML ao vivo

---

## GEO Score composto: 59/100 — Regular (em desenvolvimento)

A base técnica é excelente e o conteúdo é autêntico e citável. O que segura a nota é a autoridade de entidade fora do site (quase inexistente, com colisão de marca crítica) e os dados estruturados incompletos. A boa notícia: a maior parte do ganho está em edições de código de baixo esforço (schema) e em ações de confiança/entidade já bem mapeadas.

| Categoria | Peso | Score | Ponderado |
|---|---|---|---|
| Citabilidade & Visibilidade em IA | 25% | 70 | 17,5 |
| Sinais de Autoridade de Marca | 20% | 15 | 3,0 |
| Qualidade de Conteúdo & E-E-A-T | 20% | 71 | 14,2 |
| Fundamentos Técnicos | 15% | 92 | 13,8 |
| Dados Estruturados | 10% | 45 | 4,5 |
| Otimização por Plataforma | 10% | 65 | 6,5 |
| Composto | | | 59,5 |

Leitura rápida: o site está tecnicamente pronto para ser lido e citado por IA (crawlers liberados, SSR completo, meta e Open Graph corretos). Falta dar à IA o que ela usa para confiar e atribuir: schema de entidade (Person + Organization ancorada), FAQ estruturada, e presença/desambiguação da marca fora do próprio site.

---

## Resumo por dimensão

### 1. Citabilidade & Visibilidade em IA — 70/100
- Acesso de crawlers de IA: 100/100. `app/robots.ts` emite `User-agent: * / Allow: /` + sitemap. GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended, CCBot — todos liberados. Exatamente o desejado.
- Citabilidade de conteúdo: forte na FAQ (11 pares Q&A auto-contidos, server-rendered em `<details>/<summary>`), com dados concretos ("primeiras oportunidades nos primeiros sete dias", "14 anos"). Cases com pessoas e veículos nomeados aumentam a unicidade.
- llms.txt: ausente (404). Ativo barato e de alto sinal para este caso (desambiguação de marca + resumo canônico da entidade).

### 2. Sinais de Autoridade de Marca — 15/100 (gargalo estratégico)
- A entidade quase não existe na web fora dos próprios ativos: sem Wikipedia/Wikidata, sem company page no LinkedIn (só perfil pessoal de Luana), sem menções editoriais de terceiros que nomeiem a agência.
- Problema CRÍTICO de colisão de entidade: existe outra "LD Comunicação" no Rio de Janeiro (ldcomunica.com, mais antiga, com company page e redes próprias). Buscas e modelos de IA tendem a atribuir a marca à empresa do RJ. Sem desambiguação ativa, parte da visibilidade conquistada vaza para o homônimo.
- A matéria real no Portal Terra (citada em `Cases.tsx`) trata da cliente, não nomeia "LD Comunicação" nem "Luana Dávila" — constrói autoridade da cliente, não da agência.

### 3. Qualidade de Conteúdo & E-E-A-T — 71/100
- Experience (78): a dimensão mais forte. Cases reais com pessoas, veículos e temas específicos; narrativa em primeira pessoa; números de mercado concretos. Fraqueza: "Resultados reais" sem resultados mensuráveis.
- Expertise (72): "14 anos" consistente, FAQ nuançada e honesta. Falta nomear credenciais formais (redações, registro profissional).
- Authoritativeness (66): veículos listados em `Press.tsx` são texto puro, sem logos nem links para as aparições; sem `Person` schema.
- Trustworthiness (62): NAP consistente e `Disclaimer` honesto, mas páginas legais são placeholder ("conteúdo em definição") com GA4 e captação por WhatsApp ativos — lacuna de confiança e LGPD. E-mail é Gmail pessoal.

### 4. Fundamentos Técnicos — 92/100 (ponto forte)
- Renderização: SSR/SSG completo. O conteúdo das 11 seções está no HTML bruto (verificado sem JS); o `<Reveal>` aplica só animação client-side, sem esconder conteúdo de crawlers.
- Indexabilidade: meta robots index/follow, canonical autorreferente, `metadataBase`, Open Graph e Twitter Card completos, fontes self-hosted com `display: swap` e preload, `next/image` com AVIF/WebP.
- Lacunas: CSP ausente; sitemap sem `<lastmod>`; HSTS sem `includeSubDomains`/`preload`; redirect www→apex em 307 (preferível 308).

### 5. Dados Estruturados — 45/100
- Existe um único bloco JSON-LD `ProfessionalService` (SSR, válido com avisos).
- Faltam os schemas de maior alavancagem para GEO: `Person` (Luana), `@id` de ancoragem, `FAQPage`, `speakable`, e refinamentos LocalBusiness (`geo`, `openingHours`, `priceRange`, `areaServed` como objeto em vez de `"BR"`).

### 6. Otimização por Plataforma — 65/100
- Google AI Overviews (72) e ChatGPT Search (68) são os mais prontos; Perplexity (62), Gemini (63) e Bing Copilot (58) dependem de freshness, ratings, presença em YouTube e IndexNow/Bing Places.
- Três edições concentradas (FAQPage, refino do schema em `lib/site.ts`, Person + datas) elevam todas as cinco plataformas ao mesmo tempo.

---

## Plano de ação priorizado

### Onda 1 — Quick wins de código (alto ROI, baixo esforço)
Edições em `lib/site.ts`, `app/layout.tsx`, `app/page.tsx`, `app/sitemap.ts`, `next.config.ts` e `public/`.

1. FAQPage schema (CRÍTICO transversal — citado por 4 dos 5 agentes). Maior ROI do projeto. Extrair o array `faqs` de `components/sections/Faq.tsx` para `lib/faqs.ts`, reusar no componente e injetar um `FAQPage` JSON-LD em `app/page.tsx` (não no layout — a FAQ só existe na home). Bloco pronto na seção "JSON-LD pronto".
2. Person schema (Luana Dávila) + `@id` na Organização. Ancora a autoridade humana e permite o grafo de entidade. Migrar o JSON-LD para um `@graph` unindo `#organization` + `#luana-davila` + `#website`/`#webpage`.
3. Refinar o ProfessionalService: `areaServed` como objetos City/State/Country (hoje string `"BR"`), `geo`, `openingHoursSpecification`, `priceRange`, `logo`, `contactPoint`, `founder`/`employee`, `hasOfferCatalog`.
4. speakable (SpeakableSpecification) no WebPage — sinal direto de GEO/voz, mirando `h1`/`.lead` e a FAQ.
5. `public/llms.txt` — resumo canônico da entidade com linha explícita de desambiguação frente à LD Comunicação do RJ. Modelo pronto abaixo.
6. `app/sitemap.ts`: adicionar `lastModified` (idealmente data real de build/conteúdo).
7. `next.config.ts`: adicionar CSP em modo Report-Only e reforçar HSTS com `includeSubDomains; preload`.

### Onda 2 — Conteúdo e confiança (E-E-A-T)
8. Publicar Política de Privacidade e Termos reais (CRÍTICO — LGPD). Substituir o placeholder de `LegalSection`, descrever coleta via GA4 e WhatsApp, base legal e direitos do titular; remover `robots: { index: false }` quando publicado.
9. Migrar o e-mail para o domínio (ex.: contato@ldcomunicacao.com) em `lib/site.ts` — propaga para Contact e schema. Conferir a grafia "luanna" vs "Luana" no e-mail atual.
10. Quantificar os cases em `Cases.tsx`: ao menos um indicador de impacto por case e um link verificável para cada aparição; considerar páginas individuais `/cases/...`.
11. Sinalizar frescor: `dateModified` no schema e selo "atualizado em DD/MM/AAAA" visível, atualizado por deploy.
12. Comprovar a imprensa em `Press.tsx`: logos e links para as aparições, em vez de nomes em texto puro.

### Onda 3 — Autoridade de entidade fora do site (estratégico, contínuo)
13. Desambiguação de marca: padronizar sempre "LD Comunicação — Manaus/AM" pareado com "Luana Dávila" + "Manaus" em todas as plataformas.
14. Criar item no Wikidata (Q-item) ligando site, Google Business e perfis sociais — maior sinal isolado de entidade para IA.
15. Criar LinkedIn company page própria da agência de Manaus (hoje só há perfil pessoal).
16. Trocar o shortlink `share.google` pelo URL canônico do Google Maps/CID no `sameAs`; padronizar e verificar o Google Business (NAP idêntico ao site).
17. Publicar os vídeos das entrevistas no YouTube e incluir o canal no `sameAs` (sinal de ecossistema Google para Gemini).
18. Bing: implementar IndexNow (chave em `public/`, ping no deploy), verificar Bing Webmaster Tools e criar Bing Places.
19. Expandir a superfície citável: blog/guias respondendo buscas reais ("como aparecer na imprensa", "assessoria de imprensa x social media", "quanto custa assessoria de imprensa em Manaus") e uma página "Na mídia" que nomeie a LD Comunicação nas coberturas.

---

## JSON-LD pronto para colar

Estratégia recomendada: consolidar Organização + Person + WebSite/WebPage em um único `@graph` no `app/layout.tsx` (vale para todas as páginas) e manter o `FAQPage` em `app/page.tsx` (só onde a FAQ existe). Substituir os placeholders `[REPLACE: ...]` por dados reais antes de publicar. Validar no Rich Results Test e no validator.schema.org.

### FAQPage (injetar em `app/page.tsx`)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://ldcomunicacao.com/#faq",
  "isPartOf": { "@id": "https://ldcomunicacao.com/#webpage" },
  "mainEntity": [
    { "@type": "Question", "name": "Quanto custa a assessoria de imprensa?", "acceptedAnswer": { "@type": "Answer", "text": "O investimento é definido após uma conversa inicial, pois cada profissional ou empresa possui objetivos e necessidades diferentes. A proposta é personalizada de acordo com o posicionamento desejado, frequência de divulgação e oportunidades de exposição na imprensa." } },
    { "@type": "Question", "name": "Em quanto tempo consigo aparecer na mídia?", "acceptedAnswer": { "@type": "Answer", "text": "Em média, as primeiras oportunidades de divulgação surgem nos primeiros sete dias após o envio dos conteúdos para a imprensa. O prazo pode variar de acordo com a relevância da pauta, a agenda dos veículos e o interesse editorial dos jornalistas. Como a decisão final de publicação é da imprensa, não é possível garantir uma data específica para a veiculação." } },
    { "@type": "Question", "name": "A assessoria funciona para a minha área?", "acceptedAnswer": { "@type": "Answer", "text": "A assessoria de imprensa é indicada para profissionais especializados, empresários e executivos que desejam fortalecer sua autoridade e ampliar sua visibilidade por meio da imprensa. Atendemos profissionais e empresas de diversos segmentos, como médicos, dentistas, advogados, engenheiros, arquitetos, psicólogos, consultores, empresários, executivos, indústrias, clínicas e escritórios. Se você possui conhecimento, experiência ou uma história relevante para compartilhar, há potencial para construir pautas de interesse para a imprensa." } },
    { "@type": "Question", "name": "Preciso ter muitos seguidores para sair na mídia?", "acceptedAnswer": { "@type": "Answer", "text": "Não. A imprensa busca especialistas, histórias e informações relevantes para o público. O número de seguidores pode fortalecer a presença digital, mas não é determinante para conquistar espaço em veículos de comunicação." } },
    { "@type": "Question", "name": "Vocês garantem publicação em veículos específicos da imprensa?", "acceptedAnswer": { "@type": "Answer", "text": "Não. Nenhuma assessoria de imprensa séria pode garantir publicação em veículos específicos, pois o espaço conquistado é resultado de mídia espontânea, ou seja, não é pago. A decisão de publicar cabe exclusivamente aos jornalistas, editores e produtores. O que garantimos é um trabalho estratégico de produção de conteúdo, construção de pautas e relacionamento com a imprensa para ampliar as oportunidades de divulgação." } },
    { "@type": "Question", "name": "Atendem apenas em Manaus?", "acceptedAnswer": { "@type": "Answer", "text": "Não. O atendimento é realizado de forma presencial e online, permitindo atender profissionais e empresas em qualquer região do Brasil." } },
    { "@type": "Question", "name": "Qual a diferença entre assessoria de imprensa e social media?", "acceptedAnswer": { "@type": "Answer", "text": "O social media é responsável pela produção e publicação de conteúdos para as redes sociais. Já a assessoria de imprensa tem como foco o posicionamento estratégico, identificando pautas relevantes e buscando espaço em TVs, rádios, jornais, revistas, portais e podcasts. Enquanto as redes sociais alcançam principalmente os seguidores da marca, a imprensa amplia a visibilidade por meio de veículos com audiência consolidada, fortalecendo a autoridade e a credibilidade." } },
    { "@type": "Question", "name": "Posso divulgar os resultados da assessoria de imprensa nas minhas redes sociais?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Essa é uma das principais recomendações para potencializar os resultados. As entrevistas, matérias e citações publicadas podem e devem ser compartilhadas nas redes sociais, LinkedIn, site institucional e grupos de WhatsApp, ampliando o alcance e reforçando sua autoridade." } },
    { "@type": "Question", "name": "Como saber se estou pronto para contratar uma assessoria?", "acceptedAnswer": { "@type": "Answer", "text": "Se você deseja fortalecer sua autoridade, ser reconhecido como referência na sua área e ampliar sua visibilidade perante clientes, parceiros e mercado, a assessoria de imprensa pode ser uma ferramenta estratégica para acelerar esse posicionamento." } },
    { "@type": "Question", "name": "Quais veículos de comunicação vocês atendem?", "acceptedAnswer": { "@type": "Answer", "text": "Mantemos relacionamento com jornalistas, produtores, editores e veículos de comunicação de Manaus e de outras regiões do Brasil, incluindo TVs, rádios, jornais, revistas, portais de notícias e podcasts." } },
    { "@type": "Question", "name": "O que preciso fazer para começar?", "acceptedAnswer": { "@type": "Answer", "text": "Basta entrar em contato para agendar uma conversa inicial. Vamos entender seus objetivos, identificar oportunidades de posicionamento e apresentar uma estratégia personalizada para fortalecer sua autoridade e presença na imprensa." } }
  ]
}
```

### Grafo de entidade — Organization + Person + WebSite/WebPage (substituir o JSON-LD atual de `app/layout.tsx`)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://ldcomunicacao.com/#organization",
      "name": "LD Comunicação",
      "alternateName": "LD Comunicação — Assessoria de Imprensa Estratégica",
      "description": "Assessoria de imprensa para profissionais e especialistas que querem ser reconhecidos como autoridade na imprensa.",
      "url": "https://ldcomunicacao.com/",
      "image": "https://ldcomunicacao.com/ld-horizontal.png",
      "logo": { "@type": "ImageObject", "url": "https://ldcomunicacao.com/ld-horizontal.png" },
      "telephone": "+5592984480378",
      "email": "contato@ldcomunicacao.com [REPLACE: e-mail no domínio próprio]",
      "priceRange": "$$ [REPLACE: faixa real ou 'Sob consulta']",
      "slogan": "Assessoria estratégica faz seu negócio virar notícia.",
      "foundingDate": "[REPLACE: ano de fundação, ex.: 2018]",
      "knowsAbout": ["Assessoria de imprensa", "Relações com a imprensa", "Media training", "Gestão de crise", "Clipping", "Posicionamento de marca"],
      "areaServed": [
        { "@type": "City", "name": "Manaus" },
        { "@type": "State", "name": "Amazonas" },
        { "@type": "Country", "name": "Brasil" }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Avenida Professor Nilton Lins, 877",
        "addressLocality": "Manaus",
        "addressRegion": "AM",
        "postalCode": "69058-030",
        "addressCountry": "BR"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "[REPLACE: lat, ex.: -3.0833]", "longitude": "[REPLACE: long, ex.: -60.0142]" },
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00 [REPLACE]", "closes": "18:00 [REPLACE]" }
      ],
      "contactPoint": { "@type": "ContactPoint", "contactType": "customer service", "telephone": "+5592984480378", "availableLanguage": ["Portuguese"], "areaServed": "BR" },
      "founder": { "@id": "https://ldcomunicacao.com/#luana-davila" },
      "employee": { "@id": "https://ldcomunicacao.com/#luana-davila" },
      "sameAs": [
        "https://instagram.com/ldcomunicacao_",
        "https://www.linkedin.com/in/luana-d%C3%A1vila-70543b77/",
        "https://www.facebook.com/people/LD-Comunica%C3%A7%C3%A3o/61562051679985/",
        "https://share.google/dDGI88mcUStsuDC19 [REPLACE: URL canônica do Google Maps/CID]"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços de assessoria de imprensa",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Assessoria de imprensa estratégica completa" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Relacionamento com a imprensa" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Produção de releases" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Media training básico" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gestão de crise" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Posicionamento de marca pessoal e empresarial" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Planejamento de comunicação" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Clipping" } }
        ]
      }
    },
    {
      "@type": "Person",
      "@id": "https://ldcomunicacao.com/#luana-davila",
      "name": "Luana Dávila",
      "givenName": "Luana",
      "familyName": "Dávila",
      "jobTitle": "Jornalista e CEO",
      "description": "Jornalista com mais de 14 anos de experiência, sendo dez anos dentro de redações de jornais. Fundadora e CEO da LD Comunicação.",
      "url": "https://ldcomunicacao.com/#sobre",
      "image": "https://ldcomunicacao.com/luana-davila.jpg [REPLACE: URL pública da foto]",
      "worksFor": { "@id": "https://ldcomunicacao.com/#organization" },
      "knowsAbout": ["Assessoria de imprensa", "Relações com a imprensa", "Comunicação estratégica", "Media training", "Gestão de crise", "Jornalismo"],
      "knowsLanguage": "pt-BR",
      "sameAs": [
        "https://www.linkedin.com/in/luana-d%C3%A1vila-70543b77/",
        "https://instagram.com/ldcomunicacao_"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://ldcomunicacao.com/#website",
      "url": "https://ldcomunicacao.com/",
      "name": "LD Comunicação",
      "inLanguage": "pt-BR",
      "publisher": { "@id": "https://ldcomunicacao.com/#organization" }
    },
    {
      "@type": "WebPage",
      "@id": "https://ldcomunicacao.com/#webpage",
      "url": "https://ldcomunicacao.com/",
      "name": "LD Comunicação — Assessoria de Imprensa em Manaus",
      "isPartOf": { "@id": "https://ldcomunicacao.com/#website" },
      "about": { "@id": "https://ldcomunicacao.com/#organization" },
      "inLanguage": "pt-BR",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", ".lead", "[aria-label='Perguntas frequentes'] summary"] }
    }
  ]
}
```

---

## Modelo de `public/llms.txt`

```text
# LD Comunicação — Assessoria de Imprensa em Manaus (Luana Dávila)

> Assessoria de imprensa estratégica em Manaus/AM. 14 anos de experiência ajudando
> profissionais e especialistas a virarem referência na imprensa por meio de mídia
> espontânea (TVs, rádios, jornais, portais e podcasts).

Importante: Não confundir com a "LD Comunicação" do Rio de Janeiro (ldcomunica.com).
Esta é a LD Comunicação de Manaus/Amazonas, dirigida pela jornalista Luana Dávila.

## Sobre
- Profissional: Luana Dávila — jornalista e CEO, 14 anos de experiência
- Localização: Avenida Professor Nilton Lins, 877 — Manaus, AM, 69058-030
- Telefone/WhatsApp: +55 92 98448-0378
- Atendimento: presencial em Manaus e online para todo o Brasil

## Serviços
- Assessoria de imprensa estratégica completa
- Relacionamento com a imprensa e produção de releases
- Media training e gestão de crise
- Posicionamento de marca pessoal e empresarial
- Clipping e planejamento de comunicação

## Links
- Site: https://ldcomunicacao.com/
- Perguntas frequentes: https://ldcomunicacao.com/#faq
- Cases: https://ldcomunicacao.com/#cases
- Instagram: https://instagram.com/ldcomunicacao_
- LinkedIn (Luana Dávila): https://www.linkedin.com/in/luana-d%C3%A1vila-70543b77/
```

---

## Observações de método
- Os subscores e o composto seguem a metodologia da skill GEO (pesos: citabilidade/visibilidade 25%, autoridade de marca 20%, conteúdo/E-E-A-T 20%, técnico 15%, dados estruturados 10%, plataformas 10%).
- Achados de alta confiança são os que convergiram entre múltiplos subagentes — com destaque para o FAQPage ausente (4 de 5) e o Person/@id ausentes (3 de 5).
- Nada de `aggregateRating`/`review` no schema sem avaliações reais coletadas: incluir dado de avaliação inexistente é risco de penalização.
