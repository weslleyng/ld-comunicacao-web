import WhatsAppButton from "@/components/ui/WhatsAppButton";
import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final} aria-label="Próximo passo">
      <div className="container">
        <p className="kicker">Próximo passo</p>
        <h2>Pronto para ser reconhecido como a autoridade que você já é?</h2>
        <WhatsAppButton variant="gold" />
        <p className="btn-note">
          Atendimento direto com a jornalista. Sem compromisso na primeira
          conversa.
        </p>
      </div>
    </section>
  );
}
