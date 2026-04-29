import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollNavigator from "@/components/ScrollNavigator";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shahabas K M — Data Scientist",
    template: "%s | Shahabas K M",
  },
  description:
    "Portfolio of Shahabas K M — Data Scientist specializing in machine learning, deep learning, and data-driven solutions. Explore projects, skills, and experience.",
  keywords: [
    "Data Scientist",
    "Machine Learning",
    "Deep Learning",
    "Python",
    "Portfolio",
    "Shahabas K M",
  ],
  authors: [{ name: "Shahabas K M" }],
  creator: "Shahabas K M",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shahabaskm.vercel.app",
    siteName: "Shahabas K M — Portfolio",
    title: "Shahabas K M — Data Scientist",
    description:
      "Data Scientist specializing in machine learning, deep learning, and data-driven solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shahabas K M — Data Scientist Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahabas K M — Data Scientist",
    description:
      "Data Scientist specializing in machine learning, deep learning, and data-driven solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground" suppressHydrationWarning>
        {/* Background grid overlay */}
        <div className="fixed inset-0 bg-grid pointer-events-none" aria-hidden="true" />

        {/* Floating orbs */}
        <div className="orb orb-cyan w-[500px] h-[500px] -top-48 -left-48" aria-hidden="true" />
        <div className="orb orb-purple w-[400px] h-[400px] top-1/3 -right-32" aria-hidden="true" />

        <ScrollNavigator />
        <Navbar />
        <main className="flex-grow pt-20 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
