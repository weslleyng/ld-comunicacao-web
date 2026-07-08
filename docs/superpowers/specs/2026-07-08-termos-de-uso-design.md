# Preencher a página de Termos de Uso

**Data:** 2026-07-08
**Status:** Aprovado

## Contexto

A página `/termos` existe hoje como placeholder, renderizada por `LegalSection`
sem `children` (mostra um aviso "página em definição"). A cliente (Luana
Dávila) forneceu o texto final e completo dos Termos de Uso, que precisa ser
publicado nessa rota.

`LegalSection` (`components/layout/LegalSection.tsx`) já foi projetado para
aceitar `children` como conteúdo real — hoje só é usado no modo placeholder
tanto em `/termos` quanto em `/privacidade`.

## Escopo

Apenas a página `/termos`. A Política de Privacidade (`/privacidade`)
permanece como placeholder — é um item futuro já registrado no backlog da
cliente.

As "Notas para revisão" que acompanham o texto (revisão jurídica pendente,
e-mail de contato, formulário de contato, Política de Privacidade, data/SEO)
são para uso interno e **não** entram na página publicada.

## Decisões confirmadas com a cliente/dev

- **Data de "última atualização":** atualizada para 8 de julho de 2026
  (data real da publicação no código), em vez dos 25 de junho de 2026 que
  constavam no rascunho.
- **Indexação (SEO):** a página passa a ser indexável agora — remove-se
  `robots: { index: false }` da metadata, tratando este texto como versão
  publicável.

## Design

### 1. Dados centralizados (`lib/site.ts`)

`site.ts` já é a fonte única de verdade para endereço, e-mail e telefone,
reaproveitada no rodapé e no JSON-LD. Adicionar:

- `CNPJ = "62.745.332/0001-52"`
- `MUNICIPAL_REGISTRATION = "688508001"`
- `LEGAL_NAME = "L. Dávila Silveira"`
- `FULL_ADDRESS_LINE` — endereço completo com bairro e CEP (mais detalhado
  que o `ADDRESS_LINE` curto já usado no rodapé): "Avenida Professor Nilton
  Lins, 877 — Bairro Flores, Manaus/AM, CEP 69.058-030"

Justificativa: a Política de Privacidade (item futuro, nota #4 da cliente)
vai precisar do mesmo bloco "Quem somos" — centralizar evita duplicar texto
depois.

### 2. Conteúdo da página (`app/termos/page.tsx`)

Conteúdo passado como `children` de `LegalSection`, texto idêntico ao
fornecido pela cliente, com:

- `h2` para cada uma das 17 seções numeradas
- `ul`/`li` para os itens de lista das seções 1 (Quem somos) e 6 (O que não
  é permitido)
- `strong` para destaques inline (já presentes no texto original)
- `hr` antes da assinatura final
- E-mail, telefone e endereço puxados dos constantes de `lib/site.ts` (item
  1) em vez de texto solto duplicado
- Data de atualização hardcoded como "8 de julho de 2026"

### 3. Metadata (`app/termos/page.tsx`)

- Remove `robots: { index: false }` → página indexável
- Adiciona `description` (resumo curto da página, para SEO)
- Mantém `alternates: { canonical: "/termos" }`
- Mantém `title: "Termos de uso"`

### 4. Estilo (`components/layout/LegalSection.module.css`)

Hoje só existe estilo para `h1` e `p` dentro de `.inner`. Adicionar
tipografia para:

- `h2` — títulos de seção (usa `--font-display`, tamanho intermediário
  entre `h1` e corpo de texto)
- `ul`/`li` — listas com marcador, respeitando o `max-width: 64ch` do texto
- `strong` — peso de destaque, cor `--ink`
- `hr` — separador fino (`--line`) antes da assinatura final

Reaproveita os tokens de cor já existentes (`--gold`, `--ink-soft`,
`--line`, `--font-display`) — nenhum token novo é necessário.

## Fora de escopo (não fazer agora)

- Política de Privacidade (`/privacidade`) — placeholder continua como está
- Revisão jurídica do texto — responsabilidade da cliente, fora do código
- Troca do e-mail de contato para domínio próprio — decisão de negócio futura
- Adicionar formulário de contato no site
- Exibir CNPJ/Inscrição Municipal no rodapé — não solicitado; os novos
  constantes servem apenas às páginas legais por enquanto
