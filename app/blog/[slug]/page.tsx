import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(params: { slug: string }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const { title, date, description } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      date,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <h1>{post.title}</h1>
      <div>
        <div>{post.date}</div>
        <div />
      </div>
    </section>
  );
}
