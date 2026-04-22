import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sadit Hussain — Full-Stack & AI Engineer",
  description:
    "Sadit Hussain is a Computer Science student at RIT building full-stack web applications with applied AI, from RAG chatbots to intelligent scheduling and automated auditing platforms.",
  keywords: [
    "Sadit Hussain",
    "Full-Stack Developer",
    "AI Engineer",
    "Next.js",
    "RAG",
    "LangChain",
    "RIT",
  ],
  authors: [{ name: "Sadit Hussain" }],
  openGraph: {
    title: "Sadit Hussain — Full-Stack & AI Engineer",
    description:
      "Full-stack developer building practical AI systems. Selected projects, experience, and ways to get in touch.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadit Hussain — Full-Stack & AI Engineer",
    description:
      "Full-stack developer building practical AI systems. Selected projects, experience, and ways to get in touch.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
