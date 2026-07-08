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