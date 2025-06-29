import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

// Developer imports
import Navbar from "@/components/Navbar";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "1000"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  // IMPORTANT: Add your production URL here
  metadataBase: new URL("https://sadithussain.github.io/"),

  title: "Sadit Hussain Portfolio",
  description:
    "The personal portfolio of Sadit Hussain, a Computer Science student at the City College of New York specializing in front-end development and artificial intelligence. Explore my projects and get in touch.",

  openGraph: {
    title: "Sadit Hussain | Portfolio",
    description:
      "Check out my latest projects in front-end development and AI.",
    // The images property has been removed as requested.
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
