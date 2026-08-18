import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { support } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with the Oji Ramen app and loyalty program.",
};

export default function SupportPage() {
  return <LegalPage doc={support} />;
}
