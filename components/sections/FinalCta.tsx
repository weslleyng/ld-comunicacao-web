import WhatsAppButton from "@/components/ui/WhatsAppButton";
import gradient from "@/assets/img/gradient-ld.webp";
import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final} aria-label="Próximo passo">
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${gradient.src})` }}
        aria-hidden="true"
      />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
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
