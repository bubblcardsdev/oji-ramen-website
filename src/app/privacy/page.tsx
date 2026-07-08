import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacyPolicy } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the Oji Ramen Loyalty Application.",
};

export default function PrivacyPage() {
  return <LegalPage doc={privacyPolicy} />;
}
