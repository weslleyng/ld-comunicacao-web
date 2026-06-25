import Image from "next/image";
import Link from "next/link";
import {
  INSTAGRAM_URL,
  ADDRESS_LINE,
  LINKEDIN_URL,
  FACEBOOK_URL,
  GOOGLE_BUSINESS_URL,
} from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <Image
          src="/ld-horizontal-branco.png"
          width={178}
          height={40}
          alt="LD Comunicação"
        />
        <nav className={styles.links} aria-label="Links do rodapé">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener">
            Instagram
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener">
            LinkedIn
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener">
            Facebook
          </a>
          <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener">
            Google
          </a>
          <Link href="/termos">Termos de uso</Link>
          <Link href="/privacidade">Política de privacidade</Link>
        </nav>
        <p className={styles.addr}>
          {ADDRESS_LINE} · © 2026 LD Comunicação. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
