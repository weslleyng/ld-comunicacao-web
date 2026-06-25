import Image from "next/image";
import styles from "./About.module.css";
import luanaPhoto from "@/assets/Luana-pic.jpeg";

export default function About() {
  return (
    <section id="sobre" className={styles.about} aria-label="Sobre a jornalista">
      <div className={`container ${styles.grid}`}>
        <figure className={styles.portrait}>
          <Image
            src={luanaPhoto}
            alt="Luana Dávila, jornalista e CEO da LD Comunicação"
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 40vw"
            style={{ objectFit: "cover" }}
            fill
          />
        </figure>
        <div className={styles.body}>
          <p className="kicker">A jornalista por trás da LD</p>
          <h2>Das redações de jornais à reputação da sua marca</h2>
          <p className="lead">
            Comecei a trabalhar em jornais aos 21 anos e passei dez anos dentro
            das redações. O que começou como uma paixão por contar histórias se
            transformou em uma trajetória de mais de 14 anos entre o jornalismo e
            a assessoria de imprensa.
          </p>
          <p className={styles.text}>
            Ao longo desse caminho, aprendi que comunicação vai muito além da
            divulgação. Ela constrói reputação, fortalece marcas e gera
            autoridade.
          </p>
          <p className={styles.text}>
            Hoje ajudo empresários e profissionais a estruturarem sua comunicação
            por meio da assessoria de imprensa estratégica, transformando
            conhecimento, histórias e resultados em notícias que fortalecem o
            posicionamento de seus negócios.
          </p>
          <p className={styles.text}>
            Aparecer na imprensa espontânea não acontece por acaso. É resultado
            de estratégia, relacionamento e comunicação bem planejada.
          </p>
          <blockquote className={styles.quote}>
            Assessoria estratégica faz seu negócio virar notícia.
          </blockquote>
          <p className={styles.signature}>
            <span>Luana Dávila</span>
            Jornalista e CEO da LD Comunicação – Assessoria de Imprensa
            Estratégica.
          </p>
        </div>
      </div>
    </section>
  );
}
