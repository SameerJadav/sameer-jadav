import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "components/Sidebar";
import clsx from "clsx";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sameer Jadav",
    template: "%s | Sameer Jadav",
  },
  description:
    "I'm Sameer Jadav, a front-end developer and writer. I write about various topics such as web development, productivity, and health.",
  openGraph: {
    title: "Sameer Jadav",
    description:
      "I'm Sameer Jadav, a front-end developer and writer. I write about various topics such as web development, productivity, and health.",
    url: "https://sameerjadav.me",
    siteName: "Sameer Jadav",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Sameer Jadav",
    description:
      "I'm Sameer Jadav, a front-end developer and writer. I write about various topics such as web development, productivity, and health.",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx("bg-[#161616] text-zinc-300", inter.className)}
    >
      <body className="mx-auto mt-8 flex max-w-4xl flex-col antialiased lg:flex-row">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
