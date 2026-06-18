import styles from "./Faq.module.css";

const faqs = [
  {
    q: "Quanto custa a assessoria?",
    a: "O investimento é definido após um diagnóstico rápido, porque depende do seu objetivo e do volume de pautas. Fale no WhatsApp para receber uma proposta.",
  },
  {
    q: "Em quanto tempo apareço na mídia?",
    a: "Não há garantia de data, pois depende do interesse jornalístico, mas o trabalho de relacionamento com a imprensa começa já nas primeiras semanas.",
  },
  {
    q: "Funciona para a minha área?",
    a: "Sim. Já houve resultados em saúde, segurança do trabalho, RH e medicina; o método se aplica a qualquer especialista com algo relevante a dizer.",
  },
  {
    q: "Preciso ter muitos seguidores?",
    a: "Não. Autoridade na mídia não depende de número de seguidores; depende de pauta relevante e relacionamento com os veículos.",
  },
  {
    q: "Vocês garantem que vou sair na mídia?",
    a: "Nenhuma assessoria séria garante publicação, porque a decisão é do veículo. O que se garante é o trabalho técnico de produção e relacionamento que cria as oportunidades.",
  },
  {
    q: "Atende fora de Manaus?",
    a: "Sim. O trabalho de assessoria é feito de forma online para profissionais de todo o Brasil.",
  },
  {
    q: "Qual a diferença entre assessoria e social media?",
    a: "Social media cuida das suas redes; assessoria coloca você em veículos de terceiros (TV, rádio, jornal), o que gera credibilidade que post próprio não alcança.",
  },
];

export default function Faq() {
  return (
    <section className={styles.faq} aria-label="Perguntas frequentes">
      <div className={`container ${styles.inner}`}>
        <p className="kicker kicker--center">Perguntas frequentes</p>
        <h2>O que todo especialista pergunta antes de começar</h2>
        <div className={styles.list}>
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
