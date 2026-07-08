import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { deleteAccount } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description: "How to delete your Oji Ramen account and what happens to your data.",
};

export default function DeleteAccountPage() {
  return <LegalPage doc={deleteAccount} />;
}
