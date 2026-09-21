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
  title: "Shantanu Dey — Software & Systems Engineer",
  description:
    "Software Engineer specializing in Java, Spring Boot, REST APIs, and Azure Cloud. M.Tech Cyber Security at MAKAUT.",
  keywords: [
    "Shantanu Dey",
    "Software Engineer",
    "Backend Developer",
    "Java",
    "Spring Boot",
    "Azure",
    "Cyber Security",
    "Persistent Systems",
  ],
  authors: [{ name: "Shantanu Dey", url: "https://shantanudey-portfolio.vercel.app" }],
  openGraph: {
    title: "Shantanu Dey — Software & Systems Engineer",
    description:
      "Backend & Cloud Engineer specializing in Java, Spring Boot, REST APIs, and Azure Cloud.",
    url: "https://shantanudey-portfolio.vercel.app",
    siteName: "Shantanu Dey Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shantanu Dey — Software & Systems Engineer",
    description:
      "Backend & Cloud Engineer specializing in Java, Spring Boot, REST APIs, and Azure Cloud.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable}${geistMono.variable} antialiased bg-black text-zinc-100 selection:bg-white selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
