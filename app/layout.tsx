import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import ClientWrapper from "./components/ClientRapper";
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
  title: "Palmer Json | Full-Stack Developer • Crafting Web Solutions",
  description: "A Portfolio Website",
  icons:{
    icon: "/palmer.ico",
    apple: "/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/palmer.ico" sizes="32x32" />
        <link
          rel="icon"
          href="/apple-touch-icon.png"
          type="image/png"
          sizes="180x180"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
