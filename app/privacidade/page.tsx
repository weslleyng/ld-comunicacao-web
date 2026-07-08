import type { Metadata } from "next";
import LegalSection from "@/components/layout/LegalSection";
import {
  EMAIL,
  LEGAL_NAME,
  CNPJ,
  FULL_ADDRESS_LINE,
  PHONE_DISPLAY,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Política de Privacidade da LD Comunicação: quais dados coletamos, como usamos (incluindo Google Analytics e cookies) e os direitos garantidos pela LGPD (Lei nº 13.709/2018).",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacidadePage() {
  return (
    <LegalSection title="Política de privacidade">
      <p><strong>LD Comunicação — Assessoria de Imprensa</strong></p>
      <p>Última atualização: 25 de junho de 2026</p>
      <p>Esta Política de Privacidade explica, sem letras miúdas, quais dados a LD Comunicação coleta quando você visita o site <strong>ldcomunicacao.com</strong> ou entra em contato com a gente, por que coletamos e o que você pode fazer a respeito. Tratamos seus dados conforme a <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD)</strong> e o <strong>Marco Civil da Internet (Lei nº 12.965/2014)</strong>.</p>

      <hr />

      <h2>1. Quem cuida dos seus dados</h2>
      <p>O responsável (controlador) pelos dados tratados neste site é:</p>
      <ul>
        <li><strong>Razão social:</strong> {LEGAL_NAME}</li>
        <li><strong>Nome fantasia:</strong> LD Comunicação — Assessoria de Imprensa</li>
        <li><strong>CNPJ:</strong> {CNPJ}</li>
        <li><strong>Endereço:</strong> {FULL_ADDRESS_LINE}</li>
        <li><strong>E-mail:</strong> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
        <li><strong>WhatsApp/telefone:</strong> {PHONE_DISPLAY}</li>
      </ul>
      <p>Para qualquer assunto sobre privacidade ou seus dados, fale com a gente por esses canais.</p>

      <h2>2. O que esta política cobre</h2>
      <p>Vale para o site ldcomunicacao.com e para os contatos que você inicia a partir dele, principalmente por <strong>e-mail</strong> e <strong>WhatsApp</strong>. Ao usar o site ou nos enviar uma mensagem, você concorda com as práticas descritas aqui.</p>

      <h2>3. Quais dados coletamos</h2>
      <p>Coletamos dois tipos de dados.</p>

      <h2>3.1. Dados que você nos envia</h2>
      <p>Quando você clica em “Falar no WhatsApp” ou nos manda um e-mail, você compartilha as informações que decidir incluir na conversa. Em geral, são:</p>
      <ul>
        <li><strong>nome;</strong></li>
        <li><strong>número de telefone/WhatsApp;</strong></li>
        <li><strong>e-mail;</strong></li>
        <li><strong>conteúdo da mensagem</strong> e qualquer informação que você fornecer sobre você, sua profissão ou sua empresa (por exemplo, área de atuação, objetivos de comunicação e necessidade de assessoria).</li>
      </ul>
      <p>Você decide o que enviar. Evite compartilhar dados sensíveis ou desnecessários para um primeiro contato.</p>

      <h2>3.2. Dados coletados automaticamente (navegação)</h2>
      <p>Quando você navega no site, alguns dados técnicos são coletados de forma automática, por meio de cookies e ferramentas de medição:</p>
      <ul>
        <li>páginas visitadas e tempo de navegação;</li>
        <li>tipo de dispositivo, navegador e sistema operacional;</li>
        <li>origem do acesso (por exemplo, se veio de uma busca ou rede social);</li>
        <li>dados aproximados de localização e endereço IP.</li>
      </ul>
      <p>Usamos o <strong>Google Analytics 4</strong> para entender, de forma estatística e agregada, como as pessoas usam o site. Veja mais no item 5.</p>

      <h2>4. Por que usamos seus dados</h2>
      <p>Usamos seus dados apenas para finalidades claras, sempre com uma base legal da LGPD:</p>
      <table>
        <thead>
          <tr>
            <th>Para quê</th>
            <th>Base legal (LGPD)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Responder ao seu contato e tirar dúvidas</td>
            <td>Procedimentos preliminares a contrato e legítimo interesse</td>
          </tr>
          <tr>
            <td>Apresentar propostas e condições de assessoria</td>
            <td>Procedimentos preliminares a contrato, a seu pedido</td>
          </tr>
          <tr>
            <td>Entender e melhorar o uso do site (métricas)</td>
            <td>Legítimo interesse</td>
          </tr>
          <tr>
            <td>Cumprir obrigações legais e regulatórias</td>
            <td>Cumprimento de obrigação legal</td>
          </tr>
        </tbody>
      </table>
      <p>Não usamos seus dados para finalidades incompatíveis com estas, e <strong>não vendemos seus dados</strong> para ninguém.</p>

      <h2>5. Cookies e medição de uso</h2>
      <p>Cookies são pequenos arquivos que o site guarda no seu navegador. Usamos cookies para medir audiência e melhorar a experiência, principalmente por meio do <strong>Google Analytics 4</strong>, fornecido pelo Google.</p>
      <p>Esses cookies ajudam a saber quantas pessoas visitam o site e quais conteúdos são mais acessados, sempre de forma estatística, sem o objetivo de identificar você pessoalmente.</p>
      <p>Você pode controlar ou bloquear cookies a qualquer momento nas <strong>configurações do seu navegador</strong>. Também é possível instalar o complemento de <strong>desativação do Google Analytics</strong> (disponível em <a href="https://tools.google.com/dlpage/gaoptout">tools.google.com/dlpage/gaoptout</a>). Ao bloquear cookies, algumas partes do site podem funcionar de forma diferente.</p>

      <h2>6. Com quem compartilhamos</h2>
      <p>Para funcionar, o site se apoia em parceiros que tratam dados apenas conforme as nossas instruções e suas próprias políticas:</p>
      <ul>
        <li><strong>Google</strong>: fornece o Google Analytics, usado para medição de audiência;</li>
        <li><strong>Provedor de hospedagem</strong>: mantém o site no ar e pode registrar dados técnicos de acesso por segurança e estabilidade;</li>
        <li><strong>WhatsApp/Meta</strong>: quando você fala com a gente pelo WhatsApp (veja o item 7).</li>
      </ul>
      <p>Também podemos compartilhar dados quando houver <strong>obrigação legal</strong> ou ordem de autoridade competente. Fora isso, seus dados não são repassados a terceiros sem o seu consentimento.</p>

      <h2>7. Contato pelo WhatsApp</h2>
      <p>O botão de WhatsApp leva você para o aplicativo, que é um serviço de terceiro operado pelo <strong>Meta</strong>. As conversas no WhatsApp também são tratadas segundo a <strong>Política de Privacidade do WhatsApp/Meta</strong>, sobre a qual a LD Comunicação não tem controle.</p>
      <p>Do nosso lado, usamos as informações da conversa apenas para atender você e dar andamento a um eventual trabalho de assessoria.</p>

      <h2>8. Transferência internacional de dados</h2>
      <p>Algumas ferramentas que usamos, como o Google Analytics, podem armazenar e processar dados em servidores fora do Brasil. Nesses casos, a transferência segue as regras da LGPD e as salvaguardas adotadas por esses fornecedores.</p>

      <h2>9. Por quanto tempo guardamos</h2>
      <p>Guardamos seus dados apenas pelo tempo necessário para as finalidades deste documento:</p>
      <ul>
        <li><strong>mensagens e dados de contato:</strong> enquanto durar a conversa e nosso relacionamento, e por um período adicional razoável para histórico e cumprimento de obrigações legais;</li>
        <li><strong>dados de navegação (Analytics):</strong> pelos prazos definidos na ferramenta do Google.</li>
      </ul>
      <p>Depois disso, os dados são eliminados ou anonimizados, salvo quando a lei exigir que sejam mantidos.</p>

      <h2>10. Como protegemos seus dados</h2>
      <p>Adotamos medidas razoáveis de segurança para proteger seus dados contra acesso não autorizado, perda ou uso indevido. Ainda assim, nenhum serviço on-line é 100% imune a riscos. Se identificarmos um incidente relevante, tomaremos as providências previstas na LGPD.</p>

      <h2>11. Seus direitos</h2>
      <p>A LGPD garante a você, como titular dos dados, o direito de:</p>
      <ul>
        <li>confirmar se tratamos seus dados e acessá-los;</li>
        <li>corrigir dados incompletos, inexatos ou desatualizados;</li>
        <li>pedir a anonimização, o bloqueio ou a eliminação de dados desnecessários;</li>
        <li>solicitar a portabilidade, nos termos da lei;</li>
        <li>revogar o consentimento e pedir a exclusão dos dados tratados com base nele;</li>
        <li>ser informado com quem compartilhamos seus dados;</li>
        <li>opor-se a um tratamento, quando cabível.</li>
      </ul>
      <p>Para exercer qualquer desses direitos, fale com a gente pelo e-mail <a href={`mailto:${EMAIL}`}>{EMAIL}</a> ou pelo WhatsApp <strong>{PHONE_DISPLAY}</strong>. Responderemos no menor prazo possível.</p>

      <h2>12. Dados de crianças e adolescentes</h2>
      <p>O site é direcionado a profissionais e empresas. Não coletamos intencionalmente dados de crianças e adolescentes. Se isso acontecer por engano, os dados serão excluídos assim que identificados.</p>

      <h2>13. Alterações desta política</h2>
      <p>Podemos atualizar esta Política de Privacidade para refletir mudanças no site, nas ferramentas que usamos ou na legislação. A versão vigente é sempre a publicada nesta página, com a data de “última atualização” no topo. Vale revisitá-la de tempos em tempos.</p>

      <h2>14. Fale com a gente</h2>
      <p>Dúvidas sobre esta política ou sobre seus dados:</p>
      <ul>
        <li><strong>E-mail:</strong> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
        <li><strong>WhatsApp/telefone:</strong> {PHONE_DISPLAY}</li>
        <li><strong>Endereço:</strong> {FULL_ADDRESS_LINE}</li>
      </ul>

      <hr />

      <p><em>LD Comunicação — Assessoria de Imprensa · © 2026 · Todos os direitos reservados.</em></p>
    </LegalSection>
  );
}
