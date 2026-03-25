import type { Metadata } from "next";
import { Inter, DM_Sans, Montserrat, Mooli } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const mooli = Mooli({
  variable: "--font-mooli",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BrixGate — AI in My Field",
  description:
    "The global standard for talent excellence. Building and certifying professionals who deliver with capability, character, and conviction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSans.variable} ${montserrat.variable} ${mooli.variable} antialiased`}
    >
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
