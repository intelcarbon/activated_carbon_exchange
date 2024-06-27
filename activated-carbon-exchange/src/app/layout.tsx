import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from '../components/footer'; // Adjusted import path according to your structure

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} {/* Content of the page */}
        <Footer /> {/* Footer component */}
      </body>
    </html>
  );
}