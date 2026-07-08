import styles from "./Solution.module.css";

const steps = [
  {
    num: "Passo 01",
    title: "Diagnóstico de posicionamento",
    text: "Entendemos sua especialidade e identificamos as pautas que tornam você relevante para a imprensa.",
  },
  {
    num: "Passo 02",
    title: "Produção e relacionamento com a imprensa",
    text: "Criamos releases, preparamos você para entrevistas e levamos seu nome aos veículos e jornalistas certos.",
  },
  {
    num: "Passo 03",
    title: "Espaços estratégicos na imprensa",
    text: "Você passa a ser fonte em TVs, rádios, jornais e portais, com matérias que reforçam sua autoridade de forma contínua.",
  },
];

export default function Solution() {
  return (
    <section id="metodo" className={styles.solution} aria-label="O método">
      <div className="container">
        <div className={styles.head}>
          <p className="kicker">O método</p>
          <h2>Um método de assessoria que coloca você nos veículos certos</h2>
        </div>
        <div className={styles.steps}>
          {steps.map((step) => (
            <div key={step.num} className={styles.step}>
              <p className={styles.stepNum}>{step.num}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
