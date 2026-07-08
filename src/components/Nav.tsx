import Image from "next/image";
import Link from "next/link";
import ojiRamenLogo from "../../public/images/oji-ramen-logo.png";

export default function Nav() {
  return (
    <header className="relative z-20 bg-ink">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 sm:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={ojiRamenLogo}
            alt="Oji Ramen"
            width={32}
            height={32}
            className="rounded-sm"
          />
          <span className="font-display text-base tracking-wide text-cream">
            OJI RAMEN
          </span>
        </Link>
        <div className="flex items-center gap-6 text-sm text-cream/70">
          <Link href="/privacy" className="transition-colors hover:text-cream">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-cream">
            Terms
          </Link>
        </div>
      </nav>
    </header>
  );
}
