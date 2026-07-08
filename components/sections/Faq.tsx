import styles from "./Faq.module.css";
import { faqs } from "@/lib/faqs";

export default function Faq() {
  return (
    <section className={styles.faq} aria-label="Perguntas frequentes">
      <div className={`container ${styles.inner}`}>
        <p className="kicker kicker--center">Perguntas frequentes</p>
        <h2>Assessoria de imprensa estratégica, com entregas claras e resultados reais</h2>
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
