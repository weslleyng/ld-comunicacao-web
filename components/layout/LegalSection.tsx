import styles from "./LegalSection.module.css";

type LegalSectionProps = {
  title: string;
  /** Real legal content. When omitted, a "to be defined" placeholder is shown. */
  children?: React.ReactNode;
};

export default function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h1>{title}</h1>
        {children ?? (
          <>
            <p className={styles.notice}>
              Esta página está em definição. O conteúdo completo será publicado
              em breve.
            </p>
            <p>
              Em caso de dúvidas, fale com a LD Comunicação pelos canais
              informados no rodapé.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
