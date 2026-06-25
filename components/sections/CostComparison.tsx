import styles from "./CostComparison.module.css";

const prices = [
  { value: "R$ 2.500", label: "Inserção de 20–30s em TV local" },
  { value: "R$ 10.000", label: "Página em jornal impresso" },
  { value: "R$ 3.000", label: "Matéria paga em portal" },
];

export default function CostComparison() {
  return (
    <section className={styles.cost} aria-label="O valor da mídia espontânea">
      <div className="container">
        <p className="kicker">O valor da mídia espontânea</p>
        <h2>Quanto custaria comprar esse espaço?</h2>
        <p className={`lead ${styles.intro}`}>
          Em TVs locais de grande alcance, uma única inserção de 20 a 30 segundos
          custa, em média, R$ 2.500. Uma página em jornal impresso gira em torno
          de R$ 10.000 e uma matéria paga em portal sai, em média, por R$ 3.000.
        </p>
        <div className={styles.grid}>
          {prices.map((price) => (
            <div key={price.label} className={styles.card}>
              <p className={styles.value}>{price.value}</p>
              <p className={styles.label}>{price.label}</p>
            </div>
          ))}
        </div>
        <p className={styles.punch}>
          Com assessoria de imprensa, você ocupa esses espaços{" "}
          <em>organicamente</em>.
        </p>
      </div>
    </section>
  );
}
