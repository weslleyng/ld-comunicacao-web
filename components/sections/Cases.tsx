import styles from "./Cases.module.css";

const cases = [
  {
    tag: "Segurança do trabalho",
    title: "Engenheira de segurança do trabalho",
    desc: "Pauta sobre saúde ocupacional levou a entrevistas em dois veículos de alcance nacional.",
    outlet: "Jornal do Amazonas 1ª Edição (Rede Amazônica/Globo) e Jovem Pan News",
  },
  {
    tag: "Medicina",
    title: "Endocrinologista",
    desc: "Entrevista sobre obesidade e diabetes posicionou a médica como fonte especializada no tema.",
    outlet: "Rádio Rios",
  },
  {
    tag: "RH e psicologia",
    title: "Gestora de RH e psicóloga corporativa",
    desc: "Participação em programa de TV nacional falando sobre saúde mental e burnout no trabalho.",
    outlet: "Programa Tudo Nosso (Record News)",
  },
  {
    tag: "Medicina",
    title: "Neurologista",
    desc: "Pauta sobre menopausa na medicina ampliou o alcance da especialidade para novos públicos.",
    outlet: "Imprensa regional e portais",
  },
];

export default function Cases() {
  return (
    <section className={styles.cases} aria-label="Resultados reais">
      <div className="container">
        <p className="kicker">Resultados reais</p>
        <h2>Especialistas que viraram fonte da imprensa</h2>
        <div className={styles.grid}>
          {cases.map((item) => (
            <article key={item.title} className={styles.case}>
              <span className={styles.tag}>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <p className={styles.outlet}>
                <span>Conquista:</span> {item.outlet}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
