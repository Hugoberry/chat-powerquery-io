import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat to PowerQuery documentation",
  description: "Engage in smart discussions on PowerQuery/M language, exploring its comprehensive documentation.",
  openGraph: {
      type: "website",
      url: "https://chat.powerquery.io",
      title: "Chat to PowerQuery documentation",
      description: "Engage in smart discussions on PowerQuery/M language, exploring its comprehensive documentation",
      siteName: "Chat to PowerQuery.io",
      images: [{
        url: "https://chat.powerquery.io/images/chat-powerquery-io.png",
      }],
    },
  twitter: { card: "summary_large_image", creator: "@igocrite", "images": "https://chat.powerquery.io/images/chat-powerquery-io.png" },
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