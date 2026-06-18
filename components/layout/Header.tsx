import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
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
            src="/ld-horizontal.png"
            width={151}
            height={34}
            alt="LD Comunicação — Assessoria de Imprensa"
            priority
          />
        </Link>
        <WhatsAppButton variant="primary" iconSize={17} className={styles.cta} />
      </div>
    </header>
  );
}
