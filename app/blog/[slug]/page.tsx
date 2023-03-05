import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";
import { allPosts } from "contentlayer/generated";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.url,
  }));
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.url === params.slug);

  if (!post) {
    return;
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://sameerjadav.me/blog/${post.url}`,
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

  if (!post) {
    notFound();
  }

  return (
    <article className="p-4">
      <header>
        <time className="font-mono text-lg">{post.date}</time>
        <h1 className="my-4 text-4xl md:my-6 md:text-6xl">
          <Balancer>{post.title}</Balancer>
        </h1>
      </header>
      <section
        className="prose prose-invert prose-quoteless prose-h2:font-serif prose-h2:text-3xl prose-h2:font-normal prose-p:text-neutral-300 md:prose-h2:text-4xl"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  );
}
