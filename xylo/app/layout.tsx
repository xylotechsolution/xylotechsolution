import type { Metadata } from "next";
import { Black_Ops_One, Inter } from "next/font/google";
import "./globals.css";
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
    default: "XYLO Tech Solution",
    template: "%s | XYLO Tech Solution",
  },
  description:
    "XYLO Tech Solution builds high-performance websites, premium software, and next-gen intelligent mobile ecosystems in Bangladesh and worldwide.",
  icons: {
    icon: [
      {
        url: "/xylo logo.svg",
        type: "image/svg+xml",
      },
    ],
  },
  keywords: [
    "XYLO Tech Solution",
    "XYLO Tech",
    "XYLO",
    "xylotechsolution",
    "xylo tech solution",
    "Software Company Dhaka",
    "Web Architecture",
    "Next.js Development",
  ],
  authors: [{ name: "XYLO Tech Team" }],
  creator: "XYLO Tech Solution",
  publisher: "XYLO Tech Solution",
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
    title: "XYLO Tech Solution",
    description:
      "Next-Gen Software & Intelligent Web Architecture by XYLO Tech Solution",
    url: "https://xylotechsolution.com",
    siteName: "XYLO Tech Solution",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XYLO Tech Solution",
    description:
      "Next-Gen Software & Intelligent Web Architecture by XYLO Tech Solution",
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
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
