---
title: 'Simplifying Your Content Management with Next.js and Contentlayer'
description: ''
keywords: 'Next.js 13, Contentlayer'
date: 'February 17, 2023'
---

Content management can be a tedious and time-consuming task, but what if I told you that there's a tool that can simplify the process and make it a breeze? Introducing Contentlayer, a powerful tool that converts your content into data and makes it easy to work with `.md` and `.mdx` files. With Contentlayer, all you need to do is install and configure it, and you can start writing in your preferred file format. The best part? Contentlayer automatically adds types to your data, ensuring that your content is always type-safe. Say goodbye to the hassle of content management and hello to a more streamlined process with Contentlayer and Next.js.

## Setting up a Next.js App

To create a Next.js app with server components, we'll be utilizing the new appDir feature. Simply add the --experimental-app flag to your command and a new app directory will be created for you. It's worth noting that everything in this directory will be considered a server component by default.

To get started, run any of the following commands:

```bash
npx create-next-app@latest --experimental-app
# or
yarn create next-app --experimental-app
# or
pnpm create next-app --experimental-app
```

Once your Next.js app is created, it's a good idea to clean up any unnecessary code to keep your project organized and efficient.

## Install Contentlayer

To use Contentlayer, you must install the Contentlayer package and the Next.js plugin. To install these packages, run the following commands:

```bash
npm install contentlayer next-contentlayer
#or
yarn add contentlayer next-contentlayer
#or
pnpm add contentlayer next-contentlayer
```

### Configuration for Contentlayer

To integrate contentlayer into `next dev` and `next build` process we need to wrap `nextConfig` with `withContentlayer` method.

```js
// next.config.js

const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = withContentlayer(nextConfig);
```

Additionally, we need to update our tsconfig.json or jsconfig.json file with the following changes:

```ts
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "contentlayer/generated": ["./.contentlayer/generated"]
    }
  },
  "include": ["next-env.d.ts", "**/*.tsx", "**/*.ts", ".contentlayer/generated"]
}
```

### Defining Post schema

Let's start by introducing the importance of defining a Post schema for our blog. This schema will help contentlayer convert our content into data that can be used on our blog. To create this schema, we need to create a new file called contentlayer.config.js in the root of our project and include the following code:

```js
// contentlayer.config.js

import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
});
```

This code will define the Post document type, which will represent our blog posts. Each post is expected to be a .md file located in the posts directory. This schema will include the following properties:

- `title`: a required string that will be used as the title of the blog post.
- `description`: a required string that will be used as the description of the blog post.
- `date`: a required string that will be used as the date of the blog post.
- `url`: a computed string that will take the name of the file without extension and will be used as the URL of the blog post.

It is important to note that the title of the blog post will also be used as the h1 of the blog post, so no other h1 tags should be used in the content. By defining the Post schema, we can easily convert our content into data that can be used on our blog.

### Add posts

To populate our blog, we need to add some content. Start by creating a new directory called post and add all of your posts there.

For example, here is a sample post titled what-is-contentlayer.md located in the post directory:

```markdown
---
title: 'What is Contentlayer?'
description: 'Demo description'
keywords: 'content, preprocessor, type-safe'
date: '2022-02-22'
---

**Contentlayer makes working with content easy.** It is a content preprocessor that validates and transforms your content into type-safe JSON you can easily import into your application.
```

**_Important note: Make sure to start the development environment now. Doing so will generate a .contentlayer directory containing all of our content in .json format. This means that our content has been transformed into data, making it easier to manage._**

### Blogs page

To showcase all our blog posts, we will replace the homepage (`app/page.tsx`) with the following code:

```tsx
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
          <Link key={post.url} href={`/blog/${post.url}`}>
            <p className="text-lg">{post.title}</p>
          </Link>
        ))}
    </main>
  );
}
```

We import all of our blog posts from contentlayer/generated and display them as links, sorted by date. By destructuring each post object, we can easily access its url and title properties.

Note that we use new Date(b.date) - new Date(a.date) instead of an if statement to sort posts in descending order. We also renamed the component to Blog for clarity. Additionally, we included metadata for SEO purposes using the new metadata format available in next: 13.1.7-canary.5.

### Creating a Single Blog Post Layout

To render each blog post in its own page, we need to create a slug page. This page will use a specific URL format to identify the post. We can create a file called [slug]/page.tsx and place the following content in it:

```tsx
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
```

- The `generateStaticParams()` function creates a new object from allPosts with only one property, slug, and assigns it to post.url. This object is then used to retrieve the requested blog post.
- The `generateMetadata()` function generates metadata for the blog post, such as the title, description, and social media tags.
- The `Blog` component renders the post's title, date, and body.

Now, you have successfully created a blog app. You can design your own UI and start writing your own blog posts. Keep learning and sharing your knowledge with others.
