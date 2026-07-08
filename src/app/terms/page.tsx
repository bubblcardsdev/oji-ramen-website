import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { termsAndConditions } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions for the Oji Ramen Loyalty Application.",
};

export default function TermsPage() {
  return <LegalPage doc={termsAndConditions} />;
}
