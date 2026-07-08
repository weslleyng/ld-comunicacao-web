# Preencher a página de Política de Privacidade

**Data:** 2026-07-08
**Status:** Aprovado

## Contexto

A página `/privacidade` existe hoje como placeholder, renderizada por
`LegalSection` sem `children` (mostra o aviso "página em definição"). A
cliente (Luana Dávila) forneceu o texto final e completo da Política de
Privacidade, que precisa ser publicado nessa rota.

Este trabalho é a continuação direta do que foi feito em `/termos`
(`docs/superpowers/specs/2026-07-08-termos-de-uso-design.md`): a mesma tarefa
já havia centralizado em `lib/site.ts` os constantes legais (`LEGAL_NAME`,
`CNPJ`, `MUNICIPAL_REGISTRATION`, `FULL_ADDRESS_LINE`, `PHONE_DISPLAY`,
`EMAIL`) e deixado `LegalSection`/`LegalSection.module.css` prontos para
receber `children` com tipografia de conteúdo legal (h2/ul/li/strong/hr).

## Escopo

Apenas a página `/privacidade`, mais dois ajustes diretamente relacionados:

- Pequeno acréscimo de CSS em `LegalSection.module.css` para estilizar uma
  tabela de 2 colunas presente no conteúdo (seção 4, "Por que usamos seus
  dados") — hoje não existe estilo de `table` no módulo.
- Em `app/termos/page.tsx`, transformar as duas menções em texto puro a
  "Política de Privacidade" (seções 2 e 12) em links para `/privacidade`,
  agora que a página de destino existe.

As "Notas para revisão" que acompanham o texto (banner de cookies, revisão
jurídica pendente, e-mail dedicado de privacidade, prazo de retenção do GA4,
checklist de publicação) são para uso interno e **não** entram na página
publicada.

## Decisões confirmadas com a cliente/dev

- **Banner de consentimento de cookies:** fora do escopo desta tarefa —
  possível item futuro, feature separada.
- **Data de "última atualização":** mantida em 25 de junho de 2026, conforme
  já constava no rascunho (diferente do `/termos`, onde a data foi atualizada
  para a data real de publicação).
- **E-mail de contato exibido na página:** mantém `luannadavila02@gmail.com`
  (constante `EMAIL`), sem endereço dedicado novo.
- **Prazo de retenção do GA4 (item 9):** texto genérico ("pelos prazos
  definidos na ferramenta do Google"), sem citar número específico de meses.
- **Indexação (SEO):** a página passa a ser indexável agora — remove-se
  `robots: { index: false }` da metadata, tratando este texto como versão
  publicável (mesmo padrão do `/termos`).
- **Link cruzado com `/termos`:** as duas menções a "Política de Privacidade"
  em `app/termos/page.tsx` passam a ser links (`<a href="/privacidade">`).

## Design

### 1. Conteúdo da página (`app/privacidade/page.tsx`)

Conteúdo passado como `children` de `LegalSection` (mesmo padrão usado em
`app/termos/page.tsx`), texto do rascunho fornecido pela cliente, com:

- `h2` para cada uma das 14 seções numeradas
- `ul`/`li` para os itens de lista (seções 1, 3.1, 3.2, 6, 11 e 14)
- `strong` para destaques inline
- `hr` antes da assinatura final
- Seção 1 ("Quem cuida dos seus dados") e seção 14 ("Fale com a gente") usam
  os constantes de `lib/site.ts` (`LEGAL_NAME`, `CNPJ`, `FULL_ADDRESS_LINE`,
  `EMAIL` com `mailto:`, `PHONE_DISPLAY`) em vez de texto solto — mesma
  disciplina aplicada no `/termos` (que corrigiu uma violação de DRY nesse
  ponto durante a revisão)
- Data de atualização hardcoded como "25 de junho de 2026"

### 2. Tabela da seção 4 ("Por que usamos seus dados")

Convertida para `<table>`/`<thead>`/`<tbody>` semântico (2 colunas: "Para
quê" e "Base legal (LGPD)"). Precisa de estilo novo — ver item 4.

### 3. Metadata (`app/privacidade/page.tsx`)

- Remove `robots: { index: false }` → página indexável
- Adiciona `description` (resumo curto: dados coletados, cookies/GA4,
  direitos garantidos pela LGPD)
- Mantém `alternates: { canonical: "/privacidade" }`
- Mantém `title: "Política de privacidade"`

### 4. Estilo (`components/layout/LegalSection.module.css`)

Hoje existe tipografia para `h1`, `p`, `h2`, `ul`/`li`, `strong` e `hr`
(adicionada durante o `/termos`). Adicionar apenas:

- `table`/`th`/`td` dentro de `.inner` — bordas em `var(--line)`, texto em
  `var(--ink-soft)` (cabeçalho em `var(--ink)`, peso 600), mesma família
  tipográfica e `max-width: 64ch` dos demais elementos de texto
- Ajuste de `font-size`/`padding` da tabela no breakpoint mobile existente
  (`max-width: 600px`), ao lado do ajuste já existente para `h2`

Nenhum token de cor novo é necessário — reaproveita `--line`, `--ink`,
`--ink-soft` já usados pelos demais elementos.

### 5. Link cruzado (`app/termos/page.tsx`)

Nas seções 2 e 12, envolve o `<strong>Política de Privacidade</strong>`
existente com `<a href="/privacidade">`, mantendo o `<strong>` interno.

## Verificação

Implementação direta (sem workflow de subagentes/tasks formais), dado que a
fundação (componente, tipografia, constantes) já existe e este é
essencialmente um arquivo de conteúdo. Após implementar:

- TypeScript (`tsc --noEmit` via build) e ESLint sem erros
- `next build` — confirma `/privacidade` sem `noindex` e `/termos` intacto
- Revisão do diff — escopo restrito a `app/privacidade/page.tsx`,
  `components/layout/LegalSection.module.css` e `app/termos/page.tsx`; não
  toca nos arquivos já modificados no working tree por trabalho anterior
  (`app/layout.tsx`, `app/robots.ts`, `components/sections/Cases.tsx`,
  `lib/site.ts`, `public/llms.txt`)
- Conferência visual no navegador (desktop + mobile), incluindo a tabela
- Verificação de que o arquivo novo não tem BOM UTF-8 (problema já ocorrido
  durante o `/termos`)
- Sem commit automático: implementação fica pronta para revisão; commit só
  acontece se solicitado explicitamente

## Fora de escopo (não fazer agora)

- Banner de consentimento de cookies (Google Consent Mode v2)
- Revisão jurídica do texto — responsabilidade da cliente, fora do código
- Criação de e-mail dedicado de privacidade (`privacidade@ldcomunicacao.com`)
- Confirmar/citar o prazo exato de retenção do GA4
- Qualquer alteração nos arquivos já modificados no working tree (trabalho de
  GEO/schema em andamento, não relacionado a esta tarefa)
