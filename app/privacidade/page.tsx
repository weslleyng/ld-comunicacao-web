import type { Metadata } from "next";
import LegalSection from "@/components/layout/LegalSection";

export const metadata: Metadata = {
  title: "Política de privacidade",
  // Placeholder page: keep out of the index until real content is published.
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacidade" },
};

export default function PrivacidadePage() {
  return <LegalSection title="Política de privacidade" />;
}
