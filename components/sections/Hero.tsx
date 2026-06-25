import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Parallax from "@/components/ui/Parallax";
import HeroBackground from "./HeroBackground";
import styles from "./Hero.module.css";
import luanaPhoto from "@/assets/Luana-pic.jpeg";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Apresentação">
      <HeroBackground />
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <p className="kicker">Assessoria de imprensa estratégica</p>
          <h1>
            Assessoria estratégica faz seu negócio <em>virar notícia</em>.
          </h1>
          <p className="lead dropcap">
            Transformo a sua experiência em pauta e o seu nome em fonte para TV,
            rádio, jornais e portais. São 14 anos entre redações e assessoria
            construindo autoridade por meio da imprensa espontânea — não do
            anúncio pago.
          </p>
          <WhatsAppButton variant="gold" />
          <p className="btn-note">
            Atendimento direto com a jornalista. Resposta no mesmo dia.
          </p>
        </div>
        <Parallax className={styles.media}>
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
        </Parallax>
      </div>
      <div className={styles.scrollCue} aria-hidden="true">
        <span>Role</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
