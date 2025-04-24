// import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Verdure",
  description: "Premium natural cosmetics for your everyday beauty routine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <Footer />

      </body>
    </html>
  );
}
