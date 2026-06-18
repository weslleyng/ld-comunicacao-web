import styles from "./Problem.module.css";

const items = [
  {
    num: "01",
    text: "Você é excelente no que faz, mas pouca gente fora do seu círculo sabe disso.",
  },
  {
    num: "02",
    text: "Profissionais com menos preparo aparecem mais — e levam os clientes que deveriam ser seus.",
  },
  {
    num: "03",
    text: "Você já investe em redes sociais, mas post não gera a mesma autoridade que uma entrevista na TV ou no jornal.",
  },
];

export default function Problem() {
  return (
    <section aria-label="O problema">
      <div className={`container ${styles.grid}`}>
        <div>
          <p className="kicker">O problema</p>
          <h2>Competência sozinha não vira reputação</h2>
          <p className={styles.cost}>
            Cada mês sem presença na mídia é mais um mês deixando que o mercado
            defina sua reputação por você — e escolhendo o concorrente mais
            visível, não o mais competente.
          </p>
        </div>
        <div className={styles.list}>
          {items.map((item) => (
            <div key={item.num} className={styles.item}>
              <span className={styles.num}>{item.num}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
