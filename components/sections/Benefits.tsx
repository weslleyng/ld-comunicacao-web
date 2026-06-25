import WhatsAppButton from "@/components/ui/WhatsAppButton";
import styles from "./Benefits.module.css";

const valores = [
  "Reforço de autoridade",
  "Aumento de visibilidade",
  "Aumento de credibilidade",
  "Relevância no mercado",
  "Conexão com audiência",
  "Aumento de engajamento e vendas como consequência",
];

export default function Benefits() {
  return (
    <section aria-label="Valores">
      <div className="container">
        <p className="kicker">Valores</p>
        <h2>Nossos principais objetivos</h2>
        <div className={styles.grid}>
          {valores.map((valor, index) => (
            <div key={valor} className={styles.benefit}>
              <span className={styles.num}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{valor}</h3>
            </div>
          ))}
        </div>
        <div className={styles.midcta}>
          <WhatsAppButton variant="primary" />
        </div>
      </div>
    </section>
  );
}
