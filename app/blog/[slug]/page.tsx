import { allPosts } from 'contentlayer/generated';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.url,
  }));
}

export default async function Blog({ params }) {
  const post = allPosts.find((post) => post.url === params.slug);

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif max-w-[650px]">
        {post.title}
      </h1>
      <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
          {post.date}
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
        </div>
      </div>
    </section>
  );
}
