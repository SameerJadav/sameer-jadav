import './globals.css';

export const metadata = {
  title: {
    default: 'Sameer Jadav',
    template: '%s | Sameer Jadav',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Sameer Jadav',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#010101] text-neutral-400">
      <body className="antialiased max-w-2xl mx-auto mt-8 md:mt-20  tracking-wide">
        {children}
      </body>
    </html>
  );
}
