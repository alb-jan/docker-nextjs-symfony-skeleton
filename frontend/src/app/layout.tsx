import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Noto_Sans } from 'next/font/google'

const noto = Noto_Sans({
    subsets: ['latin'],
    weight: ['300'],
    display: 'swap',
});

export const metadata: Metadata = {
  title: "Next-App"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${noto.className} bg-amber-50`}>
        {children}
      </body>
    </html>
  );
}
