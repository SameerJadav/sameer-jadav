import Link from 'next/link';
import { allPosts, Post } from 'contentlayer/generated';

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
