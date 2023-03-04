/* eslint-disable react/no-unescaped-entities */
import { ArrowIcon } from "components/icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="mb-4 text-4xl md:mb-6 md:text-6xl">Sameer Jadav</h1>
      <h2 className="md:mb-2">
        Hey there, I'm <span className="font-medium text-white">Sameer</span> -
        a front-end developer with a passion for web development. I enjoy
        writing about programming, productivity, and health in my free time.
        Currently, I work as a freelancer, building websites and web
        applications for clients.
      </h2>
      <div className="mb-6 flex items-center gap-4 md:mb-8 md:gap-6">
        <a
          className="flex items-center gap-1 hover:text-white"
          href="https://twitter.com/SameerJadav_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ArrowIcon />
          <p>Twitter</p>
        </a>
        <a
          className="flex items-center gap-1 hover:text-white"
          href="https://github.com/SameerJadav"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ArrowIcon />
          <p>Github</p>
        </a>
        <a
          className="flex items-center gap-1 hover:text-white"
          href="https://www.linkedin.com/in/sameer-jadav"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ArrowIcon />
          <p>Linkedin</p>
        </a>
      </div>
      <div>
        <h2 className="mb-4 font-kaisei text-xl text-white md:mb-6 md:text-2xl">
          Selectd Posts
        </h2>
        <div>
          <Link
            className="mb-4 hover:text-white md:mb-6"
            href="/blog/blog-website-with-nextjs-and-contentlayer"
          >
            <p>
              Simplifying Your Content Management with Next.js and Contentlayer
            </p>
            <time className="font-mono">February 17, 2023</time>
          </Link>
        </div>
      </div>
    </main>
  );
}
