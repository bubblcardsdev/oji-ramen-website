import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 py-8 text-center text-sm text-ink/60 sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="transition-colors hover:text-ink">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-ink">
            Terms &amp; Conditions
          </Link>
          <Link href="/delete-account" className="transition-colors hover:text-ink">
            Delete Account
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Oji Ramen. All rights reserved.</p>
      </div>
    </footer>
  );
}
