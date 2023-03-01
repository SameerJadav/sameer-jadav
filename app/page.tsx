/* eslint-disable react/no-unescaped-entities */
import { ArrowIcon } from 'components/icons';
import Link from 'next/link';

export const metadata = {
  description: 'I am a front-end web developer with a passion for writing.',
  openGraph: {
    title: 'Sameer Jadav',
    description: 'I am a front-end web developer with a passion for writing.',
    siteName: 'Sameer Jadav',
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    description: 'I am a front-end web developer with a passion for writing.',
  },
};

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="mb-6 text-2xl md:text-4xl font-semibold">Sameer Jadav</h1>
      <h2 className="mb-2">
        Hey there, I'm <span className="font-medium text-white">Sameer</span> -
        a front-end developer with a passion for web development. I enjoy
        writing about programming, productivity, and health in my free time.
        Currently, I work as a freelancer, building websites and web
        applications for clients.
      </h2>
      <div className="flex gap-4 md:gap-6 items-center mb-6">
        <a
          className="flex gap-1 hover:text-white items-center"
          href="https://twitter.com/SameerJadav_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ArrowIcon />
          <p>Twitter</p>
        </a>
        <a
          className="flex gap-1 hover:text-white items-center"
          href="https://github.com/SameerJadav"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ArrowIcon />
          <p>Github</p>
        </a>
        <a
          className="flex gap-1 hover:text-white items-center"
          href="https://www.linkedin.com/in/sameer-jadav"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ArrowIcon />
          <p>Linkedin</p>
        </a>
      </div>
      <div>
        <p className="text-xl text-white mb-6">Selectd Posts</p>
        <div>
          <Link
            className="hover:text-white"
            href="/blog/blog-website-with-nextjs-and-contentlayer"
          >
            <p>
              Simplifying Your Content Management with Next.js and Contentlayer
            </p>
            <time className="font-mono text-neutral-500 shrink-0 mb-4 md:mb-6 text-sm">
              February 17, 2023
            </time>
          </Link>
        </div>
      </div>
    </main>
  );
}
