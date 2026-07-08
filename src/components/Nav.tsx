import Image from "next/image";
import Link from "next/link";
import ojiRamenLogo from "../../public/images/oji-ramen-logo.png";
import ojiRamenTextLogo from "../../public/images/oji-ramen-text.png"
export default function Nav() {
  return (
    <header className="relative z-20 bg-ink">
      <nav className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={ojiRamenLogo}
            alt="Oji Ramen"
            width={32}
            height={32}
            className="rounded-sm"
          />
          <Image
            src={ojiRamenTextLogo}
            alt="Oji Ramen"
            width={128}
            height={32}
            className="rounded-sm"
          />
          {/* <span className="whitespace-nowrap font-display text-base tracking-wide text-cream">
            OJI RAMEN
          </span> */}
        </Link>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-cream/70">
          <Link href="/privacy" className="transition-colors hover:text-cream">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-cream">
            Terms
          </Link>
          <Link href="/delete-account" className="transition-colors hover:text-cream">
            Delete Account
          </Link>
        </div>
      </nav>
    </header>
  );
}
