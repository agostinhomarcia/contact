import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PeoplePulse",
  description: "A simple contact management system built with Next.js",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className="flex flex-col min-h-screen">
      <AuthProvider>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer /> 
      </AuthProvider>
      </body>
    </html>
  );
}
