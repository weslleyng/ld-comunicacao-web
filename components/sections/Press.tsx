import styles from "./Press.module.css";

export default function Press() {
  return (
    <section className={styles.press} aria-label="Veículos onde clientes foram entrevistados">
      <div className="container">
        <p className={styles.label}>Clientes já entrevistados em:</p>
        <div className={styles.logos}>
          <span>
            Rede Amazônica
            <small>afiliada Globo · Jornal do Amazonas 1ª Edição</small>
          </span>
          <span>Jovem Pan News</span>
          <span>
            Record News
            <small>programa Tudo Nosso</small>
          </span>
          <span>Rádio Rios</span>
        </div>
        <p className={styles.stat}>
          <strong>12 anos</strong> de experiência em jornalismo e assessoria de
          imprensa.
        </p>
      </div>
    </section>
  );
}
