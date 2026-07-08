# Termos de Uso — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the `/termos` placeholder with the client's final Terms of Use text, wired to the site's shared data constants and legal-content typography.

**Architecture:** `LegalSection` already supports a `children` prop for real content (currently only used in placeholder mode). Add the missing legal-entity constants to `lib/site.ts`, extend `LegalSection.module.css` with typography for headings/lists/rules, then write the full Terms content into `app/termos/page.tsx` as JSX children, updating its metadata.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript, CSS Modules. No test runner is installed in this project (no jest/vitest/playwright in `package.json`) — verification is done via `tsc --noEmit`, `next lint`, `next build`, and a manual browser check, matching how prior content work in this repo was verified.

## Global Constraints

- Content language: pt-BR, matching the client-approved text verbatim (see spec).
- No new npm dependencies.
- Reuse existing design tokens only (`--gold`, `--ink`, `--ink-soft`, `--line`, `--font-display`) — no new CSS custom properties.
- "Última atualização" reads **8 de julho de 2026**.
- Page metadata drops `robots: { index: false }` — the page becomes indexable.
- The "Notas para revisão" (internal review notes) that accompanied the client's text are **not** rendered anywhere in the page.
- Straight double quotes (`"`) around quoted words in the body text must be typed as curly quotes (`“` `”`), not `&quot;` — ESLint's `react/no-unescaped-entities` (part of `next/core-web-vitals`) errors on literal `"` in JSX text and would fail `npm run build`/`npm run lint`.

---

### Task 1: Add legal-entity constants to `lib/site.ts`

**Files:**
- Modify: `lib/site.ts:51` (insert after the `ADDRESS_LINE` export, before the `@id` anchors comment block)

**Interfaces:**
- Produces: `LEGAL_NAME: string`, `CNPJ: string`, `MUNICIPAL_REGISTRATION: string`, `FULL_ADDRESS_LINE: string` — consumed by Task 3.

- [ ] **Step 1: Add the constants**

Open `lib/site.ts`. Find this existing block (lines 42–51):

```ts
export const ADDRESS = {
  street: "Avenida Professor Nilton Lins",
  number: "877",
  locality: "Manaus",
  region: "AM",
  postalCode: "69058-030",
  country: "BR",
} as const;

export const ADDRESS_LINE = "Avenida Professor Nilton Lins, 877 — Manaus, AM";
```

Immediately after it (still before the `// Stable @id anchors...` comment), insert:

```ts

// Legal entity details, used on /termos and (later) /privacidade.
export const LEGAL_NAME = "L. Dávila Silveira";

export const CNPJ = "62.745.332/0001-52";

export const MUNICIPAL_REGISTRATION = "688508001";

export const FULL_ADDRESS_LINE =
  "Avenida Professor Nilton Lins, 877 — Bairro Flores, Manaus/AM, CEP 69.058-030";
```

- [ ] **Step 2: Type-check**

Run:

```
npx tsc --noEmit
```

Expected: no output, exit code 0 (no type errors).

- [ ] **Step 3: Commit**

```
git add lib/site.ts
git commit -m "feat: add legal entity constants for /termos"
```

---

### Task 2: Add legal-content typography to `LegalSection.module.css`

**Files:**
- Modify: `components/layout/LegalSection.module.css`

**Interfaces:**
- Produces: styling for plain `h2`, `ul`, `li`, `strong`, `hr` tags nested inside `.inner` — applies automatically to any children passed into `LegalSection`, no class name needs to be attached by consumers.

- [ ] **Step 1: Add the new rules**

Open `components/layout/LegalSection.module.css`. Find the `.notice` block (lines 22–29):

```css
.notice {
  margin-bottom: 20px;
  padding: 20px 24px;
  border-left: 4px solid var(--gold);
  background: var(--gold-tint);
  color: var(--ink);
  border-radius: var(--radius);
}
```

Immediately after it, and before the `@media (max-width: 600px)` block, insert:

```css

.inner h2 {
  font-size: clamp(1.375rem, 1.2rem + 0.6vw, 1.625rem);
  margin-top: 40px;
  margin-bottom: 14px;
}

.inner ul {
  margin: 0 0 16px;
  padding-left: 22px;
  max-width: 64ch;
}
.inner li {
  color: var(--ink-soft);
  font-size: 17px;
  line-height: 1.7;
  margin-bottom: 8px;
}

.inner strong {
  color: var(--ink);
  font-weight: 600;
}

.inner hr {
  border: none;
  border-top: 1px solid var(--line);
  margin: 40px 0 24px;
}
```

- [ ] **Step 2: Add the mobile override**

Find the existing mobile block:

```css
@media (max-width: 600px) {
  .section {
    padding: 64px 0;
  }
  .inner h1 {
    font-size: 32px;
  }
}
```

Replace it with (adds an `.inner h2` override, everything else unchanged):

```css
@media (max-width: 600px) {
  .section {
    padding: 64px 0;
  }
  .inner h1 {
    font-size: 32px;
  }
  .inner h2 {
    font-size: 22px;
    margin-top: 32px;
  }
}
```

- [ ] **Step 3: Verify it builds**

Run:

```
npm run build
```

Expected: build completes with "Compiled successfully" (no CSS syntax errors). The route list should still include `○ /termos`.

- [ ] **Step 4: Commit**

```
git add components/layout/LegalSection.module.css
git commit -m "feat: add legal-content typography to LegalSection"
```

---

### Task 3: Write the Terms of Use content into `app/termos/page.tsx`

**Files:**
- Modify: `app/termos/page.tsx` (full replacement)

**Interfaces:**
- Consumes: `EMAIL` (existing), `LEGAL_NAME`, `CNPJ`, `MUNICIPAL_REGISTRATION`, `FULL_ADDRESS_LINE` (from Task 1) — all from `@/lib/site`. Typography from Task 2 applies automatically to the `h2`/`ul`/`li`/`strong`/`hr` tags below.

- [ ] **Step 1: Replace the file content**

Replace the entire contents of `app/termos/page.tsx` with:

```tsx
import type { Metadata } from "next";
import LegalSection from "@/components/layout/LegalSection";
import {
  EMAIL,
  LEGAL_NAME,
  CNPJ,
  MUNICIPAL_REGISTRATION,
  FULL_ADDRESS_LINE,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de uso",
  description:
    "Termos de Uso do site da LD Comunicação: regras de navegação, contratação de serviços, propriedade intelectual e limitação de responsabilidade.",
  alternates: { canonical: "/termos" },
};

export default function TermosPage() {
  return (
    <LegalSection title="Termos de uso">
      <p><strong>LD Comunicação — Assessoria de Imprensa</strong></p>
      <p>Última atualização: 8 de julho de 2026</p>
      <p>Estes Termos de Uso explicam, sem letras miúdas, as regras para navegar e usar o site <strong>ldcomunicacao.com</strong>. Leia com atenção: ao acessar o site, você concorda com o que está escrito aqui. Se não concordar, pedimos que não utilize o site.</p>

      <hr />

      <h2>1. Quem somos</h2>
      <p>O site ldcomunicacao.com é mantido por:</p>
      <ul>
        <li><strong>Razão social:</strong> {LEGAL_NAME}</li>
        <li><strong>Nome fantasia:</strong> LD Comunicação — Assessoria de Imprensa</li>
        <li><strong>CNPJ:</strong> {CNPJ}</li>
        <li><strong>Inscrição Municipal:</strong> {MUNICIPAL_REGISTRATION}</li>
        <li><strong>Endereço:</strong> {FULL_ADDRESS_LINE}</li>
        <li><strong>E-mail:</strong> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
        <li><strong>WhatsApp/telefone:</strong> +55 92 98448-0378</li>
      </ul>
      <p>Ao longo deste documento, podemos nos referir a essa empresa como “LD Comunicação”, “nós” ou “site”. Quem acessa o site é tratado como “você” ou “usuário”.</p>

      <h2>2. O que são estes Termos</h2>
      <p>Estes Termos formam um acordo entre você e a LD Comunicação sobre o uso do site. Eles valem em conjunto com a nossa <strong>Política de Privacidade</strong>, que explica como tratamos seus dados pessoais.</p>
      <p>Usar o site significa que você leu, entendeu e aceitou estas regras. Se você usar o site em nome de uma empresa, declara ter autorização para aceitá-las por ela.</p>

      <h2>3. O que o site oferece</h2>
      <p>O ldcomunicacao.com é um site <strong>institucional e informativo</strong>. Ele apresenta a LD Comunicação, os serviços de assessoria de imprensa, o método de trabalho, cases e formas de contato.</p>
      <p>O site serve para você conhecer o trabalho e entrar em contato. Ele <strong>não é uma loja virtual</strong>: não há cadastro de usuário, área de login, carrinho de compras nem pagamento on-line. Toda contratação de serviço acontece fora do site, por proposta e contrato próprios (veja o item 8).</p>

      <h2>4. Quem pode usar o site</h2>
      <p>O conteúdo é direcionado a profissionais, especialistas, empresários e empresas interessados em assessoria de imprensa. Ao usar o site, você declara ter capacidade civil para isso — ou seja, ser maior de 18 anos ou estar devidamente autorizado e representado.</p>
      <p>O site não foi criado para crianças e adolescentes.</p>

      <h2>5. Como usar o site</h2>
      <p>Você pode navegar, ler o conteúdo, compartilhar os links das páginas e entrar em contato pelos canais informados. Pedimos apenas que use o site de boa-fé, de forma legal e respeitando estes Termos.</p>

      <h2>6. O que não é permitido</h2>
      <p>Ao usar o site, você concorda em <strong>não</strong>:</p>
      <ul>
        <li>usar o site para qualquer finalidade ilegal, fraudulenta ou que prejudique terceiros;</li>
        <li>copiar, reproduzir, redistribuir ou explorar comercialmente textos, imagens, marca ou layout sem autorização por escrito (veja o item 10);</li>
        <li>tentar invadir, sobrecarregar, danificar ou interferir no funcionamento do site, dos servidores ou da segurança;</li>
        <li>usar robôs, raspadores (scrapers) ou ferramentas automatizadas para coletar dados do site sem autorização;</li>
        <li>inserir vírus, códigos maliciosos ou qualquer conteúdo capaz de comprometer o site ou outros usuários;</li>
        <li>se passar por outra pessoa ou empresa, ou prestar informações falsas ao entrar em contato.</li>
      </ul>
      <p>O descumprimento pode levar ao bloqueio do acesso e às medidas legais cabíveis.</p>

      <h2>7. Contato e mensagens</h2>
      <p>Quando você fala com a gente — por WhatsApp, e-mail ou outro canal indicado no site — alguns dados pessoais são tratados para que possamos responder e, se for o caso, apresentar uma proposta. O uso desses dados segue a nossa <strong>Política de Privacidade</strong> e a <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD)</strong>.</p>
      <p>Ao nos enviar uma mensagem, você se responsabiliza pela veracidade das informações que fornece.</p>

      <h2>8. Sobre os serviços de assessoria de imprensa</h2>
      <p>O site apresenta os serviços, mas <strong>não cria, por si só, um vínculo de prestação de serviços</strong>. Navegar pelo site ou enviar uma mensagem não significa contratação.</p>
      <p>Qualquer trabalho de assessoria é contratado à parte, por <strong>proposta e contrato específicos</strong>, com escopo, valores, prazos e condições definidos caso a caso. Em caso de divergência, o contrato firmado entre as partes prevalece sobre as informações gerais do site.</p>
      <p>Um ponto importante e que faz parte do nosso compromisso com a transparência: a assessoria de imprensa trabalha com <strong>mídia espontânea</strong>. A decisão de publicar ou veicular qualquer pauta é exclusiva dos jornalistas, editores e veículos de comunicação. Por isso, <strong>a LD Comunicação não garante</strong> publicação em veículo específico, data certa de veiculação nem resultado determinado. O que oferecemos é trabalho estratégico de produção de pautas, relacionamento com a imprensa e ampliação das oportunidades de exposição.</p>

      <h2>9. Cases, depoimentos e resultados</h2>
      <p>Os cases, entrevistas, matérias e depoimentos exibidos no site são exemplos reais de trabalhos realizados, divulgados com a devida autorização e apenas para fins ilustrativos.</p>
      <p>Resultados passados não são promessa nem garantia de resultados futuros. Cada projeto depende de fatores como segmento, pauta, momento da imprensa e interesse editorial dos veículos.</p>

      <h2>10. Propriedade intelectual</h2>
      <p>Todo o conteúdo do site — incluindo a marca, o logotipo “LD Comunicação”, textos, imagens, fotos, vídeos, layout, identidade visual e código — pertence à LD Comunicação ou é usado com autorização dos seus titulares. Esse conteúdo é protegido pela legislação brasileira, especialmente pela <strong>Lei de Direitos Autorais (Lei nº 9.610/1998)</strong> e pela <strong>Lei da Propriedade Industrial (Lei nº 9.279/1996)</strong>.</p>
      <p>Você pode visualizar e compartilhar os links das páginas. Qualquer outro uso — copiar, reproduzir, modificar, distribuir ou usar comercialmente — depende de <strong>autorização prévia e por escrito</strong> da LD Comunicação.</p>
      <p>As marcas, logos e nomes de terceiros (como veículos de imprensa e clientes) citados no site pertencem aos seus respectivos donos e aparecem apenas como referência.</p>

      <h2>11. Conteúdo de terceiros e links externos</h2>
      <p>O site pode conter links para páginas externas, como redes sociais, portais de notícias e matérias publicadas (por exemplo, Instagram e portais jornalísticos). Esses links são oferecidos para sua conveniência.</p>
      <p>A LD Comunicação não controla e não se responsabiliza pelo conteúdo, pelas práticas de privacidade ou pela disponibilidade desses sites de terceiros. Ao acessá-los, você passa a se sujeitar aos termos e políticas de cada um.</p>

      <h2>12. Privacidade e proteção de dados</h2>
      <p>O tratamento de dados pessoais coletados no site é descrito na nossa <strong>Política de Privacidade</strong>, elaborada conforme a <strong>LGPD (Lei nº 13.709/2018)</strong> e o <strong>Marco Civil da Internet (Lei nº 12.965/2014)</strong>. Recomendamos a leitura para entender quais dados são coletados, como são usados e quais são os seus direitos.</p>

      <h2>13. Disponibilidade e funcionamento do site</h2>
      <p>Trabalhamos para manter o site disponível e funcionando bem, mas ele é fornecido “no estado em que se encontra”. Não garantimos funcionamento ininterrupto ou livre de falhas.</p>
      <p>O site pode ficar temporariamente indisponível por manutenção, atualizações, problemas técnicos ou fatores fora do nosso controle. Também podemos alterar, suspender ou encerrar páginas e conteúdos a qualquer momento, sem aviso prévio.</p>

      <h2>14. Limitação de responsabilidade</h2>
      <p>Na medida permitida pela legislação aplicável, a LD Comunicação não se responsabiliza por:</p>
      <ul>
        <li>danos decorrentes do uso ou da impossibilidade de uso do site;</li>
        <li>indisponibilidades, falhas técnicas ou erros de conteúdo;</li>
        <li>decisões tomadas com base apenas nas informações gerais publicadas no site;</li>
        <li>conteúdo de sites de terceiros acessados a partir dos nossos links.</li>
      </ul>
      <p>As informações do site têm caráter informativo e podem ser atualizadas a qualquer momento. Nada aqui afeta os direitos que a legislação, incluindo o <strong>Código de Defesa do Consumidor (Lei nº 8.078/1990)</strong>, garante de forma irrenunciável.</p>

      <h2>15. Alterações destes Termos</h2>
      <p>Podemos atualizar estes Termos a qualquer momento, para refletir mudanças no site, nos serviços ou na legislação. A versão vigente é sempre a publicada nesta página, com a data de “última atualização” no topo.</p>
      <p>Ao continuar usando o site após mudanças, você concorda com a versão atualizada. Vale a pena revisitar esta página de tempos em tempos.</p>

      <h2>16. Legislação aplicável e foro</h2>
      <p>Estes Termos são regidos pelas leis da República Federativa do Brasil.</p>
      <p>Fica eleito o <strong>foro da Comarca de Manaus, Estado do Amazonas</strong>, para resolver qualquer questão decorrente destes Termos, com renúncia a qualquer outro, por mais privilegiado que seja — ressalvado o direito do consumidor de demandar no foro do seu domicílio, nos termos do Código de Defesa do Consumidor.</p>

      <h2>17. Fale com a gente</h2>
      <p>Em caso de dúvidas sobre estes Termos de Uso, fale com a LD Comunicação:</p>
      <ul>
        <li><strong>E-mail:</strong> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
        <li><strong>WhatsApp/telefone:</strong> +55 92 98448-0378</li>
        <li><strong>Endereço:</strong> {FULL_ADDRESS_LINE}</li>
      </ul>

      <hr />

      <p><em>LD Comunicação — Assessoria de Imprensa · © 2026 · Todos os direitos reservados.</em></p>
    </LegalSection>
  );
}
```

- [ ] **Step 2: Type-check**

Run:

```
npx tsc --noEmit
```

Expected: no output, exit code 0.

- [ ] **Step 3: Lint**

Run:

```
npm run lint
```

Expected: `✔ No ESLint warnings or errors`. If `react/no-unescaped-entities` fires, find the offending straight `"` or `'` character and replace it with a curly quote (`“`/`”`) as done throughout the block above.

- [ ] **Step 4: Build**

Run:

```
npm run build
```

Expected: build completes with "Compiled successfully", and the route table lists `○ /termos` **without** a "no-index" annotation (Next prints a note next to routes excluded from the sitemap/index when `robots.index` is false — it should be gone now).

- [ ] **Step 5: Manual browser check**

Run:

```
npm run dev
```

Note the local URL it prints (usually `http://localhost:3000`, or the next free port). Open `http://localhost:<port>/termos` and confirm:
- The page shows one `h1` ("Termos de uso") followed by 17 numbered `h2` sections, in order.
- Both bulleted lists render (section 1 "Quem somos" and section 6 "O que não é permitido"), plus the two short lists in sections 14 and 17.
- The "E-mail" list items are clickable `mailto:` links.
- A horizontal rule appears right after the intro paragraph, and again right before the closing signature line.
- At a 390px-wide viewport (mobile), headings resize and spacing still looks intentional (no overlap or cramped lines).

Stop the dev server (Ctrl+C) once confirmed.

- [ ] **Step 6: Commit**

```
git add app/termos/page.tsx
git commit -m "feat: publish Terms of Use content on /termos"
```

---

## Self-Review Notes

- **Spec coverage:** Task 1 covers the "Dados centralizados" section of the spec; Task 2 covers "Estilo"; Task 3 covers "Conteúdo da página" and "Metadata". The "Fora de escopo" list (Privacy Policy page, legal review, email domain change, contact form, footer CNPJ) is intentionally untouched by all three tasks.
- **Placeholder scan:** No TBD/TODO markers; all step code blocks contain complete, copy-pasteable content — none deferred to "similar to above".
- **Type consistency:** `EMAIL`, `LEGAL_NAME`, `CNPJ`, `MUNICIPAL_REGISTRATION`, `FULL_ADDRESS_LINE` are declared once in Task 1 (plus the pre-existing `EMAIL`) and referenced with matching names in Task 3 — no renames between tasks.
