import Balancer from "react-wrap-balancer";
import { allPosts } from "contentlayer/generated";

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
      siteName: "Sameer Jadav",
      locale: "en-US",
      type: "article",
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
        <time className="font-mono text-lg">{post.date}</time>
        <h1 className="my-4 text-4xl prose-h1:font-kaisei md:my-6 md:text-6xl">
          <Balancer>{post.title}</Balancer>
        </h1>
      </header>
      <section
        className="prose prose-invert prose-quoteless prose-h2:font-kaisei prose-h2:text-3xl prose-h2:font-normal prose-p:text-neutral-300 md:prose-h2:text-4xl"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  );
}
