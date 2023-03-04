import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "components/Sidebar";

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
    <html lang="en" className="bg-[#010101] font-inter text-neutral-400">
      <body className="mx-auto mt-8 flex max-w-4xl flex-col antialiased md:mt-20 lg:flex-row">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
