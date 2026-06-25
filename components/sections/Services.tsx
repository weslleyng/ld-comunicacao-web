import CheckIcon from "@/components/ui/CheckIcon";
import styles from "./Services.module.css";

const services = [
  "Assessoria de imprensa estratégica completa",
  "Pacotes de sites e impressos",
  "Pacotes de TVs, rádios e podcasts",
  "Produção de conteúdo para sites institucionais",
  "Amplo relacionamento com a imprensa",
  "Produção de releases",
  "Media training básico",
  "Gestão de crise",
  "Posicionamento de marca pessoal e empresarial",
  "Planejamento de comunicação",
  "Clipping",
];

export default function Services() {
  return (
    <section id="servicos" className={styles.services} aria-label="Serviços">
      <div className="container">
        <p className="kicker">Serviços</p>
        <h2>O que a LD Comunicação oferece</h2>
        <ul className={styles.list}>
          {services.map((service) => (
            <li key={service} className="cascade-item">
              <CheckIcon />
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
