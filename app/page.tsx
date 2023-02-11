import Link from 'next/link';

export const metadata = {
  description: 'I am a front-end web developer with a passion for writing.',
  openGraph: {
    title: 'Sameer Jadav',
    description: 'I am a front-end web developer with a passion for writing.',
    siteName: 'Sameer Jadav',
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    description: 'I am a front-end web developer with a passion for writing.',
  },
};

export default function Home() {
  return (
    <main>
      <Link href="/blog">Blog Page</Link>
      <Link href="/about">About</Link>
    </main>
  );
}
