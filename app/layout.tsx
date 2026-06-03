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
    default: "Chaorda | Human Understanding Infrastructure",
    template: "%s | Chaorda"
  },
  description:
    "Chaorda builds human understanding infrastructure for AI agents, starting with real-time emotional state prediction from consented multimodal interaction signals.",
  metadataBase: new URL("https://chaorda.ai"),
  openGraph: {
    title: "Chaorda | Human Understanding Infrastructure",
    description:
      "AI agents need to understand humans. Chaorda builds the human layer for adaptive AI agents.",
    url: "https://chaorda.ai",
    siteName: "Chaorda",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaorda | Human Understanding Infrastructure",
    description:
      "Human understanding infrastructure for AI agents."
  }
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
