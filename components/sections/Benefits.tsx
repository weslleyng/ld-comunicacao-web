import WhatsAppButton from "@/components/ui/WhatsAppButton";
import styles from "./Benefits.module.css";

const benefits = [
  {
    title: "Autoridade percebida",
    text: 'Quem aparece na mídia deixa de ser "mais um" e vira a referência da categoria.',
  },
  {
    title: "Credibilidade que abre portas",
    text: '"Vi você na Globo" pesa mais que qualquer anúncio e encurta a decisão do cliente.',
  },
  {
    title: "Conteúdo que se multiplica",
    text: "Cada entrevista vira prova social reaproveitável nas suas redes e no seu site.",
  },
];

export default function Benefits() {
  return (
    <section aria-label="O que muda">
      <div className="container">
        <p className="kicker">O que muda</p>
        <h2>O que a presença na imprensa constrói</h2>
        <div className={styles.grid}>
          {benefits.map((benefit) => (
            <div key={benefit.title} className={styles.benefit}>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
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
