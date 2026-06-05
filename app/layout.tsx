import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Chaorda | Human Intelligence Infrastructure",
    template: "%s | Chaorda"
  },
  description:
    "Chaorda develops AI systems that understand, predict, and optimize human behavior, emotion, and decision-making patterns. The infrastructure layer for Human Intelligence.",
  metadataBase: new URL("https://chaorda.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chaorda | Human Intelligence Infrastructure",
    description:
      "AI Systems That Understand Human Behavior, Emotion, and Decision-Making",
    url: "https://chaorda.com",
    siteName: "Chaorda",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaorda | Human Intelligence Infrastructure",
    description:
      "AI Systems That Understand Human Behavior, Emotion, and Decision-Making",
    site: "@chaorda",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
