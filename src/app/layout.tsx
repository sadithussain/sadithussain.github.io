import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"], // This font only has a 400 weight
  display: "swap",
  variable: "--font-dm-serif-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sadithussain.github.io/"),

  title: {
    default: "About | Sadit Hussain",
    template: "%s | Sadit Hussain",
  },

  description:
    "The personal portfolio of Sadit Hussain, a student at the Rochester Institute of Technology specializing in full-stack development and artificial intelligence. Explore my projects and get in touch.",

  keywords: [
    "Sadit Hussain",
    "Full-Stack Developer",
    "AI",
    "Rochester Institute of Technology",
    "Portfolio",
    "Software Engineer",
    "Computer Scientist",
  ],

  openGraph: {
    title: "Sadit Hussain | Portfolio",
    description:
      "Check out my latest projects in full-stack development and AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSerifDisplay.variable}`}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
