import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { useRouter } from "next/router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import "./normalize.css";
import HydrationZustand from "./components/HydrationZustand";
import CookieComponent from "./components/CookieComponent";
import ScrollButtonTop from "./components/ScrollButtonTop";

const manrope = Manrope({
  weight: ["200", "300", "400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next Ap",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <body className={manrope.className}>
        <HydrationZustand>
          <ScrollButtonTop />
          <Navbar />
          {children}
          <Footer />
        </HydrationZustand>
      </body>
    </html>
  );
}
