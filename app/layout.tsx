import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rafik bendjema",
  description: "rafik bendjema portfolio website",
  keywords : ["rafik bendjema" , "rafik" , "bendjema ahmed rafik" , "website" , "portfolio" , "mobile app developer" , "laghouat"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
