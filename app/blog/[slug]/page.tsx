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
    <article className="p-4">
      <header>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          <Balancer>{post.title}</Balancer>
        </h1>
        <div className="flex gap-2 items-center mb-6 md:mb-8 text-sm">
          <time className="font-mono text-white bg-neutral-800 p-2 shrink-0 rounded-md">
            {post.date}
          </time>
          <div className="bg-neutral-800 w-full h-[0.05rem]" />
        </div>
      </header>
      <section
        className="prose prose-invert prose-p:text-neutral-300"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  );
}
