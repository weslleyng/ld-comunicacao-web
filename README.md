# LD Comunicação — Site institucional

Landing page da LD Comunicação (assessoria de imprensa em Manaus) reescrita em
React + Next.js (App Router) com TypeScript. Convertida a partir do protótipo
estático em HTML/CSS, mantido em `landingpage-ld/` como referência de design.

## Stack

- Next.js 15 (App Router) + React 19
- TypeScript
- CSS global (`app/globals.css`) + CSS Modules por componente
- Fontes self-hosted via `next/font` (Playfair Display + Inter)
- Deploy na Vercel (zero config)

## Rodar localmente

Requisitos: Node.js 18.18+ (testado em Node 22).

```bash
npm install
npm run dev
```

Abrir http://localhost:3000.

Outros scripts:

```bash
npm run build   # build de produção
npm run start   # serve o build de produção localmente
npm run lint    # ESLint
```

## Estrutura

```
app/
  layout.tsx        # layout raiz: fontes, metadata/SEO, JSON-LD, Header e Footer
  page.tsx          # landing principal (monta as seções)
  globals.css       # tokens (:root), reset, tipografia e botões globais
  termos/           # rota /termos (placeholder)
  privacidade/      # rota /privacidade (placeholder)
  robots.ts         # gera /robots.txt
  sitemap.ts        # gera /sitemap.xml
  icon.png          # favicon | apple-icon.png  # apple-touch-icon
components/
  layout/           # Header, Footer, LegalSection
  sections/         # Hero, Press, Problem, Solution, Benefits, Cases, Offer, Faq, FinalCta
  ui/               # WhatsAppButton e ícones SVG
lib/site.ts         # constantes do site (URLs, contato, endereço) e JSON-LD
public/             # imagens (logos, ícone, og-image)
```

## Rotas

- `/` — landing principal
- `/termos` — termos de uso (conteúdo a definir; atualmente `noindex`)
- `/privacidade` — política de privacidade (conteúdo a definir; atualmente `noindex`)

## Notas de manutenção

- Conteúdo das páginas legais: substituir o placeholder passando `children` para
  `LegalSection` em `app/termos/page.tsx` e `app/privacidade/page.tsx`. Ao
  publicar o conteúdo real, remover `robots: { index: false }` de cada página.
- Foto do hero: hoje é um placeholder com gradiente. Para usar a foto real,
  adicionar o arquivo em `public/` e seguir o comentário em
  `components/sections/Hero.tsx` (trocar o `<figure>` por `next/image`).
- Dados de contato e endereço ficam centralizados em `lib/site.ts`.
- Headers de segurança são definidos em `next.config.ts` (`headers()`).
- Ao publicar com domínio próprio, conferir `SITE_URL` em `lib/site.ts`
  (usado em canonical, Open Graph, robots e sitemap).

## Deploy na Vercel

1. `git init`, commit e push para um repositório (GitHub/GitLab).
2. Na Vercel: New Project, importar o repositório. O framework Next.js é
   detectado automaticamente (build `next build`).
3. Configurar o domínio `ldcomunicacao.com.br` em Settings > Domains.

Alternativa via CLI:

```bash
npm i -g vercel
vercel          # deploy de preview
vercel --prod   # deploy de produção
```
