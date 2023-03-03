/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { ArrowIcon, GitHubIcon, TwitterIcon } from '../../components/icons';

export default function AboutMe() {
  return (
    <main className="p-4">
      <h1 className="mb-6 text-4xl md:text-6xl">About Me</h1>
      <div>
        <div>
          <h2 className="mb-6">
            Hey, I am{' '}
            <span className="font-medium text-white">Sameer Jadav</span>, a
            front-end developer who also dabbles in design.
          </h2>
          <p className="mb-6">
            I am currently working as a freelancer. I love building for the web.
            From something as simple as a single HTML file – all the way to
            large Next.js applications. I am skilled in technologies such as
            JavaScript/TypeScript, Next.js,React.js, TailwindCSS, and Astro.
          </p>
          <p className="my-6">
            Outside of my work, I like to write. I write about programming,
            productivity, and health." make this a little bit longer. keep it
            straight. it should not be very long. make it longer in first-person
            view
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              className="rounded-xl transition-all hover:scale-[.99] hover:bg-neutral-900/90 sm:flex-1"
              href="https://twitter.com/SameerJadav_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex w-full items-center justify-between rounded-xl border border-gray-500 p-4 text-lg font-medium text-white">
                <div className="flex items-center gap-4">
                  <TwitterIcon />
                  <p>Twitter</p>
                </div>
                <div>
                  <ArrowIcon />
                </div>
              </div>
            </a>
            <a
              className="rounded-xl transition-all hover:scale-[.99] hover:bg-neutral-900/90 sm:flex-1"
              href="https://github.com/SameerJadav"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex w-full items-center justify-between rounded-xl border border-gray-500 p-4 text-lg font-medium text-white">
                <div className="flex items-center gap-4">
                  <GitHubIcon />
                  <p>Github</p>
                </div>
                <div>
                  <ArrowIcon />
                </div>
              </div>
            </a>
            <a
              className="rounded-xl transition-all hover:scale-[.99] hover:bg-neutral-900/90 sm:flex-1"
              href="mailto:sameerjadav001@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex w-full items-center justify-between rounded-xl border border-gray-500 p-4 text-lg font-medium text-white">
                <div className="flex items-center gap-4">
                  <Image src="/mail-20.svg" alt="mail" width={20} height={20} />
                  <p>Mail</p>
                </div>
                <div>
                  <ArrowIcon />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
