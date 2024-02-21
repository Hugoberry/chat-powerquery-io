import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat to PowerQuery",
  description: "Chatbot for PowerQuery docs",
  openGraph: {
      type: "website",
      url: "https://chat.powerquery.io",
      title: "Chat PowerQuery.io",
      description: "Chatbot for PowerQuery docs",
      siteName: "Chat to PowerQuery.io",
      images: [{
        url: "/images/chat-powerquery-io.png",
      }],
    },
  twitter: { card: "summary_large_image", creator: "@igocrite", "images": "/images/chat-powerquery-io.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
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