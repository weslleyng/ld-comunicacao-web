import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import SiteNav from "./SiteNav";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.topbar}>
      <div className={`container ${styles.inner}`}>
        <Link
          className={styles.logo}
          href="/"
          aria-label="LD Comunicação — Assessoria de Imprensa"
        >
          <Image
            className={styles.logoLight}
            src="/ld-horizontal.png"
            width={151}
            height={34}
            alt="LD Comunicação — Assessoria de Imprensa"
            priority
          />
          {/* Light logo for the dark "Noturno" Tweak (toggled via CSS). */}
          <Image
            className={styles.logoDark}
            src="/ld-horizontal-branco.png"
            width={151}
            height={34}
            alt=""
            aria-hidden="true"
          />
        </Link>
        <SiteNav />
        <WhatsAppButton variant="primary" iconSize={17} className={styles.cta} />
      </div>
    </header>
  );
}
