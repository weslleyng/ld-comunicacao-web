import WhatsAppButton from "@/components/ui/WhatsAppButton";
import {
  ADDRESS_LINE,
  EMAIL,
  WHATSAPP_URL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  LINKEDIN_URL,
  FACEBOOK_URL,
  GOOGLE_BUSINESS_URL,
} from "@/lib/site";
import styles from "./Contact.module.css";

const socials = [
  { label: "Instagram", value: INSTAGRAM_HANDLE, href: INSTAGRAM_URL },
  { label: "LinkedIn", value: "Luana Dávila", href: LINKEDIN_URL },
  { label: "Facebook", value: "LD Comunicação", href: FACEBOOK_URL },
  { label: "Google", value: "Perfil da empresa", href: GOOGLE_BUSINESS_URL },
];

export default function Contact() {
  return (
    <section id="contato" className={styles.contact} aria-label="Contato">
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <p className="kicker">Contato</p>
          <h2>Vamos conversar sobre a sua presença na imprensa?</h2>
          <p className={styles.lead}>
            Atendimento direto com a equipe da jornalista. Atendemos todo o
            Brasil.
          </p>
          <WhatsAppButton variant="gold" />
        </div>
        <div className={styles.details}>
          <dl className={styles.channels}>
            <div>
              <dt>Endereço</dt>
              <dd>{ADDRESS_LINE}</dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </dd>
            </div>
            <div>
              <dt>Telefone / WhatsApp</dt>
              <dd>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener">
                  +55 92 98448-0378
                </a>
              </dd>
            </div>
          </dl>
          <ul className={styles.socials}>
            {socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noopener">
                  <span className={styles.socialLabel}>{social.label}</span>
                  <span className={styles.socialValue}>{social.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
