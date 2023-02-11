import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';

export const metadata = {
  title: 'Blog',
  description:
    'Discover insights, tips, and techniques on front-end web development. Join me on my journey to create exceptional user-friendly websites.',
  openGraph: {
    title: 'Blog',
    description:
      'Discover insights, tips, and techniques on front-end web development. Join me on my journey to create exceptional user-friendly websites.',
    siteName: 'Sameer Jadav',
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    title: 'Blog',
    description:
      'Discover insights, tips, and techniques on front-end web development. Join me on my journey to create exceptional user-friendly websites.',
  },
};

export default function Home() {
  return (
    <main>
      {allPosts
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link key={post.url} href={`/blog/${post.url}`}>
            {post.title}
          </Link>
        ))}
    </main>
  );
}
