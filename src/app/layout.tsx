import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shreyas S - Software Development Engineer - 1 (SDE-1)",
  description: "World-class SDE-1 portfolio showcasing enterprise-grade solutions for global hospitality brands. Engineering excellence, scalable architecture, and product engineering at Hudini.",
  keywords: ["SDE-1", "Software Engineer", "Frontend Engineer", "React", "Next.js", "TypeScript", "GraphQL", "Enterprise Architecture", "Hudini", "Hospitality", "PWAs", "System Design"],
  authors: [{ name: "Shreyas S" }],
  openGraph: {
    title: "Shreyas S - Software Development Engineer - 1",
    description: "Building enterprise-grade solutions for global hospitality brands. Engineering metrics, architecture case studies, and integration ecosystem.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreyas S - SDE-1 Portfolio",
    description: "Premium engineering portfolio showcasing technical depth and enterprise impact.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background text-primary-text antialiased">
        {children}
      </body>
    </html>
  );
}
