import "./globals.css";
import type { ReactNode } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
  pageTitle?: string; // Optional props for dynamic page titles
  pageDescription?: string; // Optional props for dynamic descriptions
  pageImage?: string; // Optional props for dynamic images
}

export default function RootLayout({
  children,
  pageTitle = "Chat to PowerQuery", // Default title
  pageDescription = "Chatbot for PowerQuery.io docs", // Default description
  pageImage = "/images/chat-powerquery-io.png", // Default image URL
}: RootLayoutProps) {
  return (
    <html lang="en" className="h-full">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content={pageImage} />
        {/* Ensure you add any other meta tags as needed */}
      </Head>
      <body className={`${inter.className} h-full`}>
        <div
          className="flex flex-col h-full md:p-8"
          style={{ background: "rgb(38, 38, 41)" }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
