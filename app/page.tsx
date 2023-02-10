import Link from 'next/link';

export const metadata = {
  title: 'Home',
  description: 'This is the home page',
};

export default function Home() {
  return (
    <main>
      <Link href="/blog">Blog Page</Link>
    </main>
  );
}
