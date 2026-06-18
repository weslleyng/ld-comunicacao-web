import { WHATSAPP_URL, WHATSAPP_LABEL } from "@/lib/site";
import WhatsappIcon from "@/components/ui/WhatsappIcon";
import styles from "./MobileCtaBar.module.css";

/**
 * Persistent WhatsApp call-to-action shown only on small screens.
 * Hidden on tablet/desktop, where in-section CTAs are always close by.
 */
export default function MobileCtaBar() {
  return (
    <div className={styles.bar}>
      <a
        className={`btn btn--gold ${styles.cta}`}
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener"
        aria-label={WHATSAPP_LABEL}
      >
        <WhatsappIcon size={20} />
        <span>Falar no WhatsApp</span>
      </a>
    </div>
  );
}
