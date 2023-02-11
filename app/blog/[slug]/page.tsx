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
    <section>
      <h1>
        <Balancer>{post.title}</Balancer>
      </h1>
      <div>
        <div>{post.date}</div>
        <div>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.body.html }}
          />
        </div>
      </div>
    </section>
  );
}
