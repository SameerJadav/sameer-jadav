'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { icon, draw } from 'components/motion';

const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
  '/blog': {
    name: 'blog',
  },
};

function Logo() {
  return (
    <Link href="/">
      <motion.svg
        width="50"
        height="57"
        viewBox="0 0 84 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
      >
        {/* SHAPE */}
        <motion.path
          d="M42 3L3 25V70L42 93L81 71V26L42 3Z"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
          variants={draw}
        />
        {/* TEXT */}
        <motion.path
          d="M54.7 57.05C54.7 58.9833 54.2667 60.6 53.4 61.9C52.5333 63.1667 51.3833 64.1667 49.95 64.9C48.55 65.6333 47.0167 66.15 45.35 66.45C43.6833 66.75 42.05 66.9 40.45 66.9C39.2167 66.9 38.0333 66.7167 36.9 66.35C35.7667 66.0167 34.6167 65.6333 33.45 65.2C32.8833 65 32.3167 64.8833 31.75 64.85C31.2167 64.7833 30.65 64.75 30.05 64.75C29.95 63.95 29.85 63.1667 29.75 62.4C29.65 61.6 29.5333 60.8 29.4 60C29.3333 59.4333 29.25 58.8833 29.15 58.35C29.05 57.8167 29 57.2833 29 56.75C29 56.2833 29.0833 55.9 29.25 55.6C29.45 55.3 29.8 55.15 30.3 55.15C30.7667 55.15 31.1167 55.25 31.35 55.45C31.6167 55.6167 31.8167 55.9167 31.95 56.35C32.1833 56.95 32.3667 57.5667 32.5 58.2C32.6667 58.8333 32.8667 59.4667 33.1 60.1C33.6667 61.6667 34.5833 62.9167 35.85 63.85C37.15 64.7833 38.6667 65.25 40.4 65.25C42.7333 65.25 44.5167 64.5833 45.75 63.25C47.0167 61.8833 47.65 60.05 47.65 57.75C47.65 56.4167 47.3667 55.3167 46.8 54.45C46.2333 53.55 45.5 52.7833 44.6 52.15C43.7 51.5167 42.7333 50.9167 41.7 50.35C40.7333 49.8167 39.75 49.3167 38.75 48.85C37.75 48.3833 36.7667 47.9 35.8 47.4C34.7333 46.8333 33.6833 46.1333 32.65 45.3C31.65 44.4333 30.8167 43.45 30.15 42.35C29.5167 41.2167 29.2 40 29.2 38.7C29.2 36.5 29.7667 34.6833 30.9 33.25C32.0667 31.8167 33.55 30.75 35.35 30.05C37.1833 29.35 39.0833 29 41.05 29C42.3167 29 43.5333 29.1833 44.7 29.55C45.9 29.8833 47.0667 30.2833 48.2 30.75C48.5667 30.8833 48.9 30.9833 49.2 31.05C49.5333 31.1167 49.8833 31.15 50.25 31.15C50.5167 31.15 50.7667 31.15 51 31.15C51.2333 31.1167 51.4667 31.0833 51.7 31.05C51.8 32.1167 51.9167 33.1833 52.05 34.25C52.1833 35.3167 52.3167 36.3833 52.45 37.45C52.4833 37.6167 52.5 37.8 52.5 38C52.5333 38.1667 52.55 38.3333 52.55 38.5C52.55 38.9667 52.45 39.4 52.25 39.8C52.05 40.1667 51.6667 40.35 51.1 40.35C50.6667 40.35 50.35 40.25 50.15 40.05C49.95 39.85 49.7667 39.5667 49.6 39.2C49.2 38.1667 48.8167 37.15 48.45 36.15C48.0833 35.15 47.55 34.2167 46.85 33.35C46.1167 32.4167 45.2 31.7333 44.1 31.3C43 30.8333 41.8667 30.6 40.7 30.6C39.5667 30.6 38.6167 30.9167 37.85 31.55C37.0833 32.15 36.5167 32.9333 36.15 33.9C35.7833 34.8667 35.6 35.8667 35.6 36.9C35.6 38.5 36.0167 39.75 36.85 40.65C37.7167 41.5167 38.7833 42.3167 40.05 43.05C40.75 43.4167 41.45 43.7833 42.15 44.15C42.8833 44.4833 43.6 44.8167 44.3 45.15C45.9667 45.9167 47.5833 46.85 49.15 47.95C50.75 49.0167 52.0667 50.3 53.1 51.8C54.1667 53.2667 54.7 55.0167 54.7 57.05Z"
          fill="white"
          variants={draw}
        />
      </motion.svg>
    </Link>
  );
}

export default function Navbar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <aside className="lg:w-[150px] lg:flex-shrink-0 lg:mt-7">
      <div className="lg:sticky lg:top-20 flex justify-between items-center lg:block">
        <div className="lg:ml-5 mb-2 px-4 lg:px-0 lg:mb-8 space-y-10 flex flex-col lg:flex-row items-start ">
          <Logo />
        </div>
        <motion.nav
          className="flex flex-row lg:flex-col items-start relative px-4 lg:px-0 pb-0 fade lg:relative"
          id="nav"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="flex flex-row lg:flex-col gap-1 lg:pr-10 mb-2 mt-2 lg:mt-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === pathname;

              return (
                <Link
                  key={path}
                  href={path}
                  className={clsx(
                    'transition-all hover:text-white text-xl py-1 px-2 ml-2',
                    {
                      'text-neutral-400 capitalize': !isActive,
                      'text-white bg-neutral-800 rounded-lg capitalize transition-all duration-300 ease-in-out':
                        isActive,
                    }
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </motion.nav>
      </div>
    </aside>
  );
}
