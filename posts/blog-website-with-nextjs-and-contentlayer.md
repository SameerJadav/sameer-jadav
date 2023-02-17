---
title: 'Simplifying Your Content Management with Next.js and Contentlayer'
description: ''
keywords: 'Next.js 13, Contentlayer'
date: 'Februaru 17, 2023'
---

## Contentlayer

Contentlayer turns your content into data. And It makes it so easy to work with `.md` and `.mdx` files. You just install contentlayer and do some configuration and you are done. you can start writing in your md/mdx files and everything works. contentlayer adds types to your data automatically, so your data is always type-safe.

## Create a Next.js app

We are going to use the new `appDir` in this setup. `--experimental-app` this flag will create a Next.js app with an `appDir`. Everything in this app directory is a server component by default.

<aside>
💡 Use pnpm to get faster results and save a lot of space on your PC. Pnpm holds all the packages at a global (centralized) store and uses them if needed by other projects by creating hard links to them.

</aside>

```bash
npx create-next-app@latest --experimental-app
# or
yarn create next-app --experimental-app
# or
pnpm create next-app --experimental-app
```

when your Next app is created clean it up, and remove all the unnecessary code.

## Install Contentlayer

Now we need to install contentlayer and next.js plugin.

```bash
npm install contentlayer next-contentlayer
#or
yarn add contentlayer next-contentlayer
#or
pnpm add contentlayer next-contentlayer
```

### Configuration for Contentlayer

To integrate contentlayer into `next dev` and `next build` process we need to wrap `nextConfig` with `withContentlayer` method.

```jsx
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

Then we need to make some changes in our `tsconfig.json` or `jsconfig.json` file.

```tsx
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

Now that we have everything installed, we can begin defining our document schema. This will help contentlayer convert our content to data, which we can later use in our blog. Create a new file in root of your project called `contentlayer.config.js` and place the following content in it.

```tsx
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

This will create a document type called `Post` this document is expected to be a `.md` file that lives in you `post` directory. We will use these properties for SEO. These files will have the following properties:

- `title` ,`description`, and `keywords`: This will be a string pulled off from the frontmatter of your file.

> **_Note: This `title` will be your `h1` so you should not use any other `h1` ’s._**

- `url`: This is a string that will take the name of the file without extension.

`defineDocumentType()` will define document types and `makeSource()` will convert all the content(`md`) files into data with the `Post` document type.

### Add posts

Let’s add some content in our blog post. Create a `post` directory and add all of your posts to it.

Here is an example post, `post/what-is-contentlayer.md`

```markdown
---
title: 'What is Contentlayer?'
description: 'Demo description'
keywords: 'content, preprocessor, type-safe'
date: '2022-02-22'
---

**Contentlayer makes working with content easy.** It is a content preprocessor that validates and transforms your content into type-safe JSON you can easily import into your application.
```

> **_Note: It is very important to start the dev environment at this moment. This will generate a directory named `.contentlayer` this directory will have all of our content in `.json` format. it means that our content is converted to data. That’s awesome_**

### Blogs page

Now we need to replace the homepage(`app/page.tsx`) to this:

```markdown
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

Rember all of our post are now data, that means now we can destructure them use them as we please. Now you can see all of your blog posts.

We are importing all of our posts from `contentlayer/generated` and creating links for all the posts and sorting them through date.

> Note: I am using `next: 13.1.7-canary.5` which has improved support for metadata.

### Blog layout

Now we will render every single blog posts in it’s own page. We need to create a slug page. Create a file like this `[slug]/page.tsx` and place the following content in it.

```markdown
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

We are making a new object from `allPosts` which has only one property called `slug`and it is assigned to `post.url` . We are using this object to get the exact blog post that the user has requested. Then we are rendering the title and body of post.

There you have it, we have successfully created a blog app. You can design a UI and make it your own. Start writing your blog and keep learning new things
