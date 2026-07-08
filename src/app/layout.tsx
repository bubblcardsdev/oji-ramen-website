import type { Metadata } from "next";
import { Yuji_Syuku, Noto_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

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
    default: "Oji Ramen — Coming Soon",
    template: "%s | Oji Ramen",
  },
  description:
    "Oji Ramen is a new ramen restaurant, coming soon. Stay tuned for our opening.",
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
        <Nav />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
