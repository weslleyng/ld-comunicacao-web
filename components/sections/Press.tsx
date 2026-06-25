import styles from "./Press.module.css";

const bullets = [
  "Entrevistas em TV, rádio, jornais e portais.",
  "Inserções em veículos regionais e nacionais.",
  "Posicionamento de especialistas em diferentes áreas.",
  "Divulgação de eventos corporativos e institucionais.",
];

const outlets = [
  "Rede Amazônica",
  "TV A Crítica",
  "SBT Amazonas",
  "Record News",
  "Jovem Pan News",
  "Rádio Rios",
  "Band News",
  "Jornal A Crítica",
  "Portal A Crítica",
  "Rede Onda Digital",
];

export default function Press() {
  return (
    <section
      className={styles.press}
      aria-label="Clientes em destaque na imprensa"
    >
      <div className="container">
        <h2 className={styles.title}>
          Nossos clientes já foram destaque na mídia nacional
        </h2>
        <ul className={styles.bullets}>
          {bullets.map((item) => (
            <li key={item} className="cascade-item">
              {item}
            </li>
          ))}
        </ul>
        <p className={styles.label}>E também em importantes veículos locais:</p>
        <div className={styles.logos}>
          {outlets.map((outlet) => (
            <span key={outlet} className="cascade-item">
              {outlet}
            </span>
          ))}
        </div>
        <p className={styles.stat}>
          <strong>14 anos</strong> de experiência em jornalismo e assessoria de
          imprensa.
        </p>
      </div>
    </section>
  );
}
