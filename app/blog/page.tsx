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
    <main className="p-4">
      <h1 className="mb-6 text-6xl">Blogs</h1>
      {allPosts
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            className="hover:text-white mb-4 md:mb-6"
            key={post.url}
            href={`/blog/${post.url}`}
          >
            <p className="text-lg">{post.title}</p>
            <time className="font-mono">{post.date}</time>
          </Link>
        ))}
    </main>
  );
}
