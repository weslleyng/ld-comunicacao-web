import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import styles from "./Hero.module.css";
import luanaPhoto from "@/assets/Luana-pic.jpeg";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Apresentação">
      <div className={`container ${styles.grid}`}>
        <div>
          <p className="kicker">Assessoria de imprensa</p>
          <h1>
            Sua expertise merece estar na mídia que{" "}
            <em>constrói autoridade</em>
          </h1>
          <p className="lead">
            Assessoria de imprensa para profissionais e especialistas que querem
            ser reconhecidos como autoridade. 12 anos transformando competência
            técnica em presença na mídia.
          </p>
          <WhatsAppButton variant="gold" />
          <p className="btn-note">
            Atendimento direto com a jornalista. Resposta no mesmo dia.
          </p>
        </div>
        <div className={styles.media}>
          <figure className={styles.photo}>
            <Image
              src={luanaPhoto}
              alt="Luana Davila, jornalista e responsável pela LD Comunicação"
              placeholder="blur"
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              style={{ objectFit: "cover" }}
              fill
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
