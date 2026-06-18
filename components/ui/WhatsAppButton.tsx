import { WHATSAPP_URL, WHATSAPP_LABEL } from "@/lib/site";
import WhatsappIcon from "./WhatsappIcon";

type WhatsAppButtonProps = {
  variant: "primary" | "gold";
  /** Visible label. Wrapped in <span> so the header can hide it on mobile. */
  text?: string;
  iconSize?: number;
  /** Extra (CSS Module) class names appended to the global `.btn` styles. */
  className?: string;
};

export default function WhatsAppButton({
  variant,
  text = "Falar no WhatsApp",
  iconSize = 18,
  className,
}: WhatsAppButtonProps) {
  const classes = ["btn", `btn--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      className={classes}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      aria-label={WHATSAPP_LABEL}
    >
      <WhatsappIcon size={iconSize} />
      <span>{text}</span>
    </a>
  );
}
