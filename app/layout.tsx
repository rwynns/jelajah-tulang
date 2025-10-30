import type { Metadata } from "next";
import { Righteous } from "next/font/google";
// @ts-ignore - allow side-effect CSS import without type declarations
import "./globals.css";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jelajah Tulang",
  description: "Platform pembelajaran interaktif tentang sistem rangka manusia",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${righteous.className} antialiased`}>{children}</body>
    </html>
  );
}
