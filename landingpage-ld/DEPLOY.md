# LD Comunicação — Landing Page (deploy)

Landing page estática (HTML/CSS), sem build e sem dependências. Pronta para o Vercel.

## Estrutura

```
landingpage-ld/
  index.html            Página de produção (servida na raiz)
  ld-styles.css         Folha de estilo
  vercel.json           Headers de segurança + cache de assets
  robots.txt            Indexação liberada + referência ao sitemap
  sitemap.xml           Sitemap (1 URL)
  .vercelignore         Exclui artefatos de design do deploy
  assets/               Logos e ícone usados pela página
  uploads/              Variações de logo (não publicadas)
  LD Landing Page.html  Arquivo original do design (não publicado)
```

Arquivos listados em `.vercelignore` (o HTML original de design, `assets/image-slot.js`,
`uploads/`, etc.) ficam no repositório como referência, mas não são enviados ao Vercel.

## Antes de publicar

1. Foto do hero: coloque a imagem em `assets/hero.jpg` (recomendado 1040x1040 ou maior,
   formato landscape/retrato funciona — o recorte é `object-fit: cover`). Enquanto o arquivo
   não existir, a página exibe um placeholder com a identidade da marca, sem quebrar o layout.
   Para usar outro formato (`.png`/`.webp`), ajuste o `src` em `index.html` (bloco `.hero__photo`).
2. Domínio: ao apontar o domínio final, atualize a URL em três lugares:
   - `index.html`: tags `<link rel="canonical">`, `og:url` e o `url`/`image` do JSON-LD.
   - `robots.txt`: linha `Sitemap:`.
   - `sitemap.xml`: campo `<loc>`.
3. Confira o número de WhatsApp e o link do Instagram (já preenchidos com os dados atuais).

## Deploy via Vercel CLI (recomendado, sem Git)

Pré-requisito: Node.js instalado.

```powershell
# 1. Instalar a CLI (uma vez)
npm i -g vercel

# 2. Entrar na pasta da landing page
cd "C:\Users\wesll\Documents\WBM Studio\Clientes\Luana Davila - LD Comunicação\projeto\landingpage-ld"

# 3. Login (abre o navegador)
vercel login

# 4. Deploy de pré-visualização (responda: framework = Other, build vazio, output = ./)
vercel

# 5. Deploy de produção
vercel --prod
```

O Vercel detecta o projeto como estático automaticamente: sem comando de build,
servindo `index.html` na raiz.

## Deploy via painel do Vercel (alternativa, com Git)

1. Versione o conteúdo de `landingpage-ld/` em um repositório Git.
2. No Vercel: New Project → importar o repositório.
3. Framework Preset: Other. Root Directory: a pasta que contém `index.html`.
4. Build Command: vazio. Output Directory: vazio (raiz).
5. Deploy.

## Pós-deploy (checklist)

- [ ] Foto do hero adicionada em `assets/hero.jpg`.
- [ ] URLs de domínio atualizadas (canonical, og:url, JSON-LD, robots, sitemap).
- [ ] CTAs de WhatsApp abrindo a conversa correta.
- [ ] Página testada em mobile (breakpoints em 1024px e 600px).
