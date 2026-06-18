import CheckIcon from "@/components/ui/CheckIcon";
import styles from "./Offer.module.css";

const items = [
  "Atendimento direto com a jornalista, sem intermediários.",
  "Trabalho contínuo de assessoria (mensal) ou por projeto e pauta específica.",
  "Preparação para entrevista incluída.",
  "Investimento definido após diagnóstico, conforme o objetivo de cada profissional.",
];

export default function Offer() {
  return (
    <section aria-label="Como funciona">
      <div className={`container ${styles.grid}`}>
        <div>
          <p className="kicker">Como funciona</p>
          <h2>Trabalho sob medida, sem intermediários</h2>
        </div>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item}>
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
