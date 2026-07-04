# User Stories — Correções Landing Page LD Comunicação

Backlog de identificação e correção. Formato: Mike Cohn (Como / Quero / Para que) + critérios de aceitação em Gherkin (Dado / Quando / Então). IDs seguem a numeração original da lista do cliente para rastreabilidade.

## Personas

- **Visitante-lead**: potencial cliente navegando na landing page, avaliando contratar assessoria de imprensa.
- **LD Comunicação (proprietária)**: dona do site / jornalista, interessada em precisão de conteúdo, consistência de marca e conversão.

## Placeholders de mídia e design

- `public\ld-profissional.jpeg` — foto corporativa da seção "Das redações de jornais à reputação da sua marca" (item 10).
- `public\cliente\Cliente_Portal_Terra.jpeg` — nova foto correspondente ao Portal Terra (item 12).
- `[URI_PRINT_REFERENCIA_HERO]` — print de referência do botão "Falar no WhatsApp" ao lado da foto principal (item 1).
- `[TOKEN_DOURADO]` — cor dourada já usada no projeto. Reutilizar o token/variável existente, não criar um novo hex.

---

## US-01: Padronizar cor do botão "Falar no WhatsApp" (hero)

- **Summary:** Botão de WhatsApp do hero com o dourado da marca em vez do azul

#### Use Case
- **Como** LD Comunicação
- **Quero** que o fundo retangular do botão "Falar no WhatsApp" (ao lado de "Contato", junto à primeira foto principal) use o dourado do projeto
- **Para que** o botão fique alinhado à identidade visual e não destoe com um azul fora da paleta

#### Acceptance Criteria
- **Cenário:** Cor do botão de WhatsApp no hero
- **Dado** que estou na dobra inicial da landing page, ao lado da foto principal
- **Quando** visualizo o botão "Falar no WhatsApp"
- **Então** o fundo retangular usa `[TOKEN_DOURADO]` (mesmo tom aplicado no restante do projeto) e o azul anterior não aparece mais

- **Referência visual:** `[URI_PRINT_REFERENCIA_HERO]`

---

## US-02: Ajustar texto principal (travessão e plural dos veículos)

- **Summary:** Texto principal com pontuação e veículos no plural

#### Use Case
- **Como** Visitante-lead
- **Quero** ler o texto principal com pontuação correta e veículos no plural
- **Para que** a leitura seja fluida e a mensagem transmita abrangência de imprensa

#### Acceptance Criteria
- **Cenário:** Correção do parágrafo principal
- **Dado** que estou na seção de texto principal
- **Quando** o conteúdo é renderizado
- **Então** o texto exibido é exatamente:
  > Transformo a sua experiência em pauta e o seu nome em fonte para TVs, rádios, jornais e portais. São mais de 14 anos entre redações e assessoria, construindo autoridade por meio da imprensa espontânea, não do anúncio pago.
- **E** o travessão foi substituído por vírgula/ponto e os veículos antes no singular estão no plural (TVs, rádios, jornais, portais)

---

## US-03: Ajustar bloco de atendimento (equipe + prazo)

- **Summary:** Atendimento pela equipe e prazo de resposta em dia útil

#### Use Case
- **Como** Visitante-lead
- **Quero** entender que o atendimento é feito pela equipe da jornalista e com prazo realista
- **Para que** minha expectativa de resposta seja correta antes de contratar

#### Acceptance Criteria
- **Cenário:** Correção do texto de atendimento
- **Dado** que estou no bloco de atendimento correspondente
- **Quando** o conteúdo é renderizado
- **Então** o texto exibido é exatamente: "Atendimento direto com a equipe da jornalista. Resposta em até um dia útil."
- **E** a versão anterior ("Atendimento direto com a jornalista. Resposta no mesmo dia.") não aparece mais

---

## US-04: Pluralizar veículos na seção de mídia nacional

- **Summary:** "Entrevistas em TVs, rádios, jornais e portais"

#### Use Case
- **Como** Visitante-lead
- **Quero** ver os veículos no plural na seção "Nossos clientes já foram destaque na mídia nacional"
- **Para que** a comunicação reforce a diversidade de canais de imprensa

#### Acceptance Criteria
- **Cenário:** Correção do plural na seção de mídia nacional
- **Dado** que estou na seção "Nossos clientes já foram destaque na mídia nacional"
- **Quando** o conteúdo é renderizado
- **Então** o texto exibido é exatamente: "Entrevistas em TVs, rádios, jornais e portais."
- **E** a versão anterior ("Entrevistas em TV, rádio, jornais e portais.") não aparece mais

---

## US-05: Corrigir nomes dos veículos (Globo Amazonas e SBT Amazonas)

- **Summary:** Nomes oficiais dos veículos na régua de logos/clientes

#### Use Case
- **Como** LD Comunicação
- **Quero** exibir os nomes corretos dos veículos regionais
- **Para que** as citações de mídia sejam precisas e não gerem inconsistência de marca

#### Acceptance Criteria
- **Cenário 1:** Correção de "Rede Amazônica"
- **Dado** que estou na seção que cita os veículos
- **Quando** o conteúdo é renderizado
- **Então** onde havia "Rede Amazônica" passa a exibir "Rede Globo Amazonas"

- **Cenário 2:** Correção de "SBT Manaus"
- **Dado** que estou na seção que cita os veículos
- **Quando** o conteúdo é renderizado
- **Então** onde havia "SBT Manaus" passa a exibir "SBT Amazonas"

---

## US-06: Reescrever frase de custo de oportunidade

- **Summary:** Ajuste de redação na frase "Cada mês sem presença na imprensa..."

#### Use Case
- **Como** Visitante-lead
- **Quero** ler a frase de custo de oportunidade na redação aprovada pelo cliente
- **Para que** a mensagem de urgência seja transmitida conforme definido

#### Acceptance Criteria
- **Cenário:** Correção da frase de custo de oportunidade
- **Dado** que estou na seção correspondente
- **Quando** o conteúdo é renderizado
- **Então** o texto exibido é exatamente:
  > Cada mês sem presença na imprensa é mais um mês deixando que o mercado defina sua reputação por você e, acabe escolhendo o concorrente mais visível, não o mais competente.
- **E** a versão anterior (com o travessão antes de "e escolhendo") não aparece mais

> Observação de revisão: a construção "por você e, acabe escolhendo" fica gramaticalmente truncada. Alternativa mais limpa mantendo o sentido: "...defina sua reputação por você, escolhendo o concorrente mais visível, não o mais competente." Aplicar apenas se o cliente aprovar.

---

## US-07: Substituir travessão por vírgula (profissionais com menos preparo)

- **Summary:** Pontuação corrigida na frase "Profissionais com menos preparo aparecem mais"

#### Use Case
- **Como** Visitante-lead
- **Quero** ler a frase com vírgula no lugar do travessão
- **Para que** a leitura fique natural

#### Acceptance Criteria
- **Cenário:** Correção de pontuação
- **Dado** que estou na seção correspondente
- **Quando** o conteúdo é renderizado
- **Então** o texto exibido é exatamente: "Profissionais com menos preparo aparecem mais, e levam os clientes que deveriam ser seus."
- **E** o travessão após "mais" foi substituído por vírgula

---

## US-08A: Ajustar item "O método" (título, veículos, "matérias" e concordância)

- **Summary:** Reescrita do bloco de método com plural e "matérias"

#### Use Case
- **Como** Visitante-lead
- **Quero** entender o método com linguagem precisa e no plural
- **Para que** a proposta de valor fique clara e profissional

#### Acceptance Criteria
- **Cenário:** Correção do bloco "O método"
- **Dado** que estou na seção "O método"
- **Quando** o conteúdo é renderizado
- **Então** o título do item exibe "Espaços estratégicos na imprensa" (antes "Aparições adequadas")
- **E** o corpo exibe exatamente: "Você passa a ser fonte em TVs, rádios, jornais e portais, com matérias que reforçam sua autoridade de forma contínua."
- **E** os ajustes aplicados são: veículos no plural, "material" → "matérias" e concordância "reforçam"

---

## US-08B: Padronizar cor do ícone de WhatsApp (Nossos principais objetivos)

- **Summary:** Ícone de WhatsApp em dourado na seção de objetivos

#### Use Case
- **Como** LD Comunicação
- **Quero** que o ícone do WhatsApp na seção "Nossos principais objetivos" use o dourado do projeto
- **Para que** a paleta fique consistente em toda a página

#### Acceptance Criteria
- **Cenário:** Cor do ícone de WhatsApp na seção de objetivos
- **Dado** que estou na seção "Nossos principais objetivos"
- **Quando** visualizo o ícone do WhatsApp
- **Então** o ícone usa `[TOKEN_DOURADO]` (mesmo tom do restante do projeto)

---

## US-09: Renomear seção de oferta

- **Summary:** "O que a LD Comunicação oferece" → "Nossas Soluções"

#### Use Case
- **Como** Visitante-lead
- **Quero** ver o título de seção "Nossas Soluções"
- **Para que** a navegação use uma nomenclatura mais direta

#### Acceptance Criteria
- **Cenário:** Renomear título de seção
- **Dado** que estou na seção de oferta
- **Quando** o conteúdo é renderizado
- **Então** o título exibido é "Nossas Soluções"
- **E** o título anterior ("O que a LD Comunicação oferece") não aparece mais

---

## US-10: Trocar foto e ajustar tipografia da seção "Das redações de jornais à reputação da sua marca"

- **Summary:** Nova foto corporativa, tipografia padronizada e ajuste de copy na seção

#### Use Case
- **Como** Visitante-lead
- **Quero** ver a foto corporativa correta, com tipografia uniforme e texto ajustado
- **Para que** a seção transmita profissionalismo e leitura consistente

#### Acceptance Criteria
- **Cenário 1 (foto):** Substituição da imagem
- **Dado** que estou na seção "Das redações de jornais à reputação da sua marca"
- **Quando** a seção é renderizada
- **Então** a imagem exibida é a foto corporativa em `[URI_IMAGEM_CORPORATIVA]`, substituindo a anterior

- **Cenário 2 (tipografia):** Padronização do tamanho da fonte
- **Dado** que estou na mesma seção
- **Quando** comparo o primeiro parágrafo com os demais
- **Então** todos os parágrafos usam o mesmo tamanho de fonte (o primeiro parágrafo, atualmente maior, é normalizado)

- **Cenário 3 (copy):** Inserção de "de imprensa"
- **Dado** que estou na mesma seção
- **Quando** o conteúdo é renderizado
- **Então** o texto exibido é exatamente: "Assessoria de imprensa estratégica faz seu negócio virar notícia."
- **E** a versão anterior ("Assessoria estratégica faz seu negócio virar notícia.") não aparece mais

---

## US-11: Corrigir termo na seção "Ponto da camisa"

- **Summary:** "fábrica" → "indústria têxtil"

#### Use Case
- **Como** LD Comunicação
- **Quero** descrever o cliente como "indústria têxtil"
- **Para que** a referência ao segmento seja precisa

#### Acceptance Criteria
- **Cenário:** Correção do termo do segmento
- **Dado** que estou na seção "Ponto da camisa"
- **Quando** o conteúdo é renderizado
- **Então** onde havia "fábrica" passa a exibir "indústria têxtil"

---

## US-12: Trocar foto do Portal Terra

- **Summary:** Substituição da imagem do Portal Terra

#### Use Case
- **Como** LD Comunicação
- **Quero** exibir a foto correta correspondente ao Portal Terra
- **Para que** o case de mídia fique correto

#### Acceptance Criteria
- **Cenário:** Substituição da imagem do Portal Terra
- **Dado** que estou na seção que exibe o Portal Terra
- **Quando** a seção é renderizada
- **Então** a imagem exibida é `[URI_IMAGEM_PORTAL_TERRA]`, substituindo a anterior

---

## US-13: Ajustar frase "sem letras miúdos"

- **Summary:** Reescrita da frase de assessoria estratégica

#### Use Case
- **Como** Visitante-lead
- **Quero** ler uma frase clara sobre entregas e resultados
- **Para que** a promessa de transparência fique bem redigida

#### Acceptance Criteria
- **Cenário:** Correção da frase
- **Dado** que estou na seção correspondente
- **Quando** o conteúdo é renderizado
- **Então** o texto exibido é exatamente: "Assessoria de imprensa estratégica, com entregas claras e resultados reais"
- **E** a versão anterior ("Assessoria de imprensa estratégica, sem letras miúdos") não aparece mais

---

## US-14: Ajustar atendimento (sem compromisso na primeira conversa)

- **Summary:** "equipe da jornalista" no bloco sem compromisso

#### Use Case
- **Como** Visitante-lead
- **Quero** entender que o atendimento é pela equipe da jornalista
- **Para que** a informação seja consistente com os demais blocos

#### Acceptance Criteria
- **Cenário:** Correção do texto de atendimento sem compromisso
- **Dado** que estou no bloco correspondente
- **Quando** o conteúdo é renderizado
- **Então** o texto exibido é exatamente: "Atendimento direto com a equipe da jornalista. Sem compromisso na primeira conversa"
- **E** a versão anterior ("Atendimento direto com a jornalista. Sem compromisso na primeira conversa") não aparece mais

---

## US-15: Ajustar seção Contato (interrogação e cobertura de atendimento)

- **Summary:** Pergunta com interrogação e atendimento pela equipe em todo o Brasil

#### Use Case
- **Como** Visitante-lead
- **Quero** ler o convite de contato como pergunta e entender a cobertura de atendimento
- **Para que** a chamada para conversa fique convidativa e precisa

#### Acceptance Criteria
- **Cenário 1 (interrogação):** Correção do convite
- **Dado** que estou na seção "Contato"
- **Quando** o conteúdo é renderizado
- **Então** o texto exibido é exatamente: "Vamos conversar sobre a sua presença na imprensa?"
- **E** a versão sem ponto de interrogação não aparece mais

- **Cenário 2 (cobertura):** Correção do texto de atendimento
- **Dado** que estou na seção "Contato"
- **Quando** o conteúdo é renderizado
- **Então** o texto exibido é exatamente: "Atendimento direto com a equipe da jornalista. Atendemos todo o Brasil."
- **E** a versão anterior ("Atendimento direto com a jornalista, presencial em Manaus e online para todo o Brasil.") não aparece mais

---

## US-16: Ajuste de design do cabeçalho/rodapé (logo LD dourada)

- **Summary:** Logo LD em dourado sobre fundo preto, com divisória fina dourada

#### Use Case
- **Como** LD Comunicação
- **Quero** manter o fundo preto e exibir a logo da LD em dourado no mesmo tom da outra logo, com a linha fina dourada de separação
- **Para que** o cabeçalho/rodapé reforce a identidade visual da marca

#### Acceptance Criteria
- **Cenário:** Ajuste visual do cabeçalho/rodapé
- **Dado** que estou visualizando a área do cabeçalho na parte inferior (rodapé)
- **Quando** a área é renderizada
- **Então** o fundo permanece preto
- **E** a logo da LD usa `[TOKEN_DOURADO]` (mesmo tom da outra logo)
- **E** a linha fina dourada de separação entre os espaços é mantida

---

## US-17: Rotular link do Google no rodapé

- **Summary:** Link do Google exibido como "Avaliações do Google"

#### Use Case
- **Como** Visitante-lead
- **Quero** ver um rótulo claro no link do Google
- **Para que** eu entenda que o link leva às avaliações da empresa

#### Acceptance Criteria
- **Cenário:** Rótulo do link do Google
- **Dado** que estou no rodapé
- **Quando** visualizo o link do Google
- **Então** o texto do link exibe "Avaliações do Google"

---

## US-18: Validar link das avaliações do Google

- **Summary:** Verificação do destino do link de avaliações

#### Use Case
- **Como** LD Comunicação
- **Quero** garantir que o link de avaliações aponta para o destino correto
- **Para que** o visitante chegue à página certa e o link não gere fricção

#### Acceptance Criteria
- **Cenário:** Validação do link
- **Dado** o link https://share.google/dDGI88mcUStsuDC19
- **Quando** ele é acessado
- **Então** ele redireciona para a página oficial de avaliações do Google da LD Comunicação
- **E** abre em nova aba (`target="_blank"` com `rel="noopener"`)
- **E** caso o destino esteja incorreto, o link é substituído pela URL correta antes do deploy

---

## Definição de Pronto (DoD)

- [ ] Todos os textos "Depois" conferem caractere a caractere (acentuação, pontuação, plural).
- [ ] Nenhuma ocorrência dos textos "Antes" permanece na página.
- [ ] Termo "equipe da jornalista" aplicado de forma consistente em todas as ocorrências (US-03, US-14, US-15).
- [ ] Veículos no plural padronizados em todas as seções (US-02, US-04, US-08A): TVs, rádios, jornais, portais.
- [ ] Cores douradas usam o token existente do projeto, sem hex novo (US-01, US-08B, US-16).
- [ ] Imagens substituídas carregam com dimensões/otimização corretas e `alt` descritivo (US-10, US-12).
- [ ] Link de avaliações validado e abrindo em nova aba (US-17, US-18).
- [ ] Revisão responsiva (mobile e desktop) das seções alteradas.

## Observações estratégicas

1. **Padronização de termo (US-03, US-14, US-15.1):** "jornalista" → "equipe da jornalista" deve ser aplicado por busca global na página para não sobrar ocorrência antiga fora das três seções citadas.
2. **Padronização de plural (US-02, US-04, US-08A):** rodar uma verificação de "TV, rádio, jornal, portal" em toda a página para garantir plural onde fizer sentido.
3. **US-06 (gramática):** a redação aprovada tem construção truncada ("por você e, acabe escolhendo"). Registrada alternativa mais limpa; decisão do cliente.
4. **Anexos pendentes:** as imagens dos itens 10 e 12 e o print do item 1 não foram fornecidos. Substituir os placeholders `[URI_...]` antes de desenvolver.
5. **Token de cor:** confirmar a variável dourada já existente (ex.: `--gold` / classe utilitária) para reutilização em US-01, US-08B e US-16, evitando divergência de tom.
