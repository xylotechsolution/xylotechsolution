import type { Metadata } from "next";
import { Black_Ops_One, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Providers } from "@/components/providers/Providers";
import ClientLayoutWrapper from "@/components/providers/ClientLayoutWrapper";

const blackOpsOne = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-black-ops",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Xylo Tech Solutions | Xylo Tech",
    template: "%s | Xylo Tech Solutions",
  },
  description:
    "Xylo Tech Solutions (Xylo Tech / Xylo) builds high-performance websites, premium software, and next-gen intelligent mobile ecosystems in Bangladesh and worldwide.",
  keywords: [
    "Xylo Tech Solutions",
    "Xylo Tech",
    "Xylo",
    "xylotechsolution",
    "xylo tech solution",
    "Software Company Dhaka",
    "Web Architecture",
    "Next.js Development",
  ],
  authors: [{ name: "Xylo Tech Team" }],
  creator: "Xylo Tech Solutions",
  publisher: "Xylo Tech Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://xylotechsolution.com",
  },
  openGraph: {
    title: "Xylo Tech Solutions",
    description: "Next-Gen Software & Intelligent Web Architecture by Xylo Tech",
    url: "https://xylotechsolution.com",
    siteName: "Xylo Tech Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xylo Tech Solutions",
    description: "Next-Gen Software & Intelligent Web Architecture by Xylo Tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${blackOpsOne.variable} ${inter.variable}`}>
      <body className="bg-black text-white antialiased">
        <Providers>
          {/* <Navbar /> */}
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
