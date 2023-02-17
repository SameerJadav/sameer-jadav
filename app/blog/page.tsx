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
      <h1 className="mb-6 text-4xl font-bold">Blog</h1>
      {allPosts
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link className="w-min" key={post.url} href={`/blog/${post.url}`}>
            <p className="text-lg">{post.title}</p>
            <div className="flex gap-2 items-center mb-4 md:mb-6 text-sm">
              <time className="font-mono text-neutral-500 shrink-0">
                {post.date}
              </time>
              <div className="bg-neutral-800 w-full h-[0.05rem]" />
            </div>
          </Link>
        ))}
    </main>
  );
}
