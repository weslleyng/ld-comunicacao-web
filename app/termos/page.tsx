import type { Metadata } from "next";
import LegalSection from "@/components/layout/LegalSection";

export const metadata: Metadata = {
  title: "Termos de uso",
  // Placeholder page: keep out of the index until real content is published.
  robots: { index: false, follow: true },
  alternates: { canonical: "/termos" },
};

export default function TermosPage() {
  return <LegalSection title="Termos de uso" />;
}
