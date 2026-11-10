import type { Metadata } from "next";
import { Yuji_Syuku, Noto_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { business } from "@/lib/business";
import "./globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: business.name,
  url: business.url,
  description: business.tagline,
  telephone: "+91 44 4775 9900",
  email: business.email,
  servesCuisine: "Japanese",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.line1,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.postalCode,
    addressCountry: "IN",
  },
};

const yuji = Yuji_Syuku({
  variable: "--font-yuji",
  weight: "400",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Oji Ramen — Japanese Ramen in Alwarpet, Chennai",
    template: "%s | Oji Ramen",
  },
  description:
    "Cozy Japanese eatery in Alwarpet, Chennai serving authentic ramen and traditional dishes. Vegetarian options, private dining room and Wi-Fi.",
  metadataBase: new URL("https://ojiramen.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${yuji.variable} ${notoSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
