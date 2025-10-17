// src/app/layout.tsx
import "./globals.css";
import Header from "@/app/components/organisms/Header/Header";
import Footer from "@/app/components/organisms/Footer/Footer";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
