/* eslint-disable react/no-unescaped-entities */
import { ArrowIcon, GitHubIcon, TwitterIcon } from '../../components/icons';

export default function AboutMe() {
  return (
    <main className="p-4">
      <h1 className="mb-6 text-4xl font-bold">About Me</h1>
      <div className="divide-y-2 divide-gray-500">
        <div>
          <h2 className="mb-6">
            Hey, I'm{' '}
            <span className="font-semibold text-white">Sameer Jadav</span>, a
            front-end web developer based in Gujarat, India.
          </h2>
          <p className="mb-6">
            I have a passion for learning new technologies and making the web a
            faster and more accessible place. As a student, I enjoy
            experimenting with the latest advancements in the field and using my
            skills to bring new and exciting web experiences to life.
          </p>
        </div>
        <div>
          <p className="my-6">
            I am skilled in technologies such as{' '}
            <a
              className="font-medium text-white transition-all hover:text-gray-300"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              JavaScript
            </a>
            /
            <a
              className="font-medium text-white transition-all hover:text-gray-300"
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TypeScript
            </a>
            ,{' '}
            <a
              className="font-medium text-white transition-all hover:text-gray-300"
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>
            ,
            <a
              className="font-medium text-white transition-all hover:text-gray-300"
              href="https://beta.reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React.js
            </a>
            ,{' '}
            <a
              className="font-medium text-white transition-all hover:text-gray-300"
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TailwindCSS
            </a>
            , and{' '}
            <a
              className="font-medium text-white transition-all hover:text-gray-300"
              href="https://astro.build/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Astro
            </a>
            . With my expertise, I bring new and innovative ideas to the table,
            helping to create websites that are both functional and visually
            appealing.
          </p>
          <p className="mb-6">
            My passion for the web and desire to help others led me to pursue a
            career in front-end development, and I am proud to have honed my
            skills over the years. I am committed to continuing to learn and
            grow in this field, and I am excited about the possibilities that
            the future holds for the web.
          </p>
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
          </div>
        </div>
      </div>
    </main>
  );
}
