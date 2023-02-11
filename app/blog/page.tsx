import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
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
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        ))}
    </main>
  );
}
