import Balancer from 'react-wrap-balancer';
import { allPosts } from 'contentlayer/generated';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.url,
  }));
}

export async function generateMetadata({ params }) {
  const post = allPosts.find((post) => post.url === params.slug);

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      siteName: 'Sameer Jadav',
      locale: 'en-US',
      type: 'article',
    },
    twitter: {
      title: post.title,
      description: post.description,
    },
  };
}

export default async function Blog({ params }) {
  const post = allPosts.find((post) => post.url === params.slug);

  return (
    <article>
      <header>
        <h1>
          <Balancer>{post.title}</Balancer>
        </h1>
        <time className="font-mono text-gray-400">{post.date}</time>
      </header>
      <section
        className="prose prose-invert prose-p:text-neutral-100"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  );
}
