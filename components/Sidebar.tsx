'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: 'spring',
          stiffness: 30,
        }}
      >
        <Image src="/logo-n.svg" alt="logo" width={50} height={50} />
      </motion.div>
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
        <nav
          className="flex flex-row lg:flex-col items-start relative px-4 lg:px-0 pb-0 fade lg:relative"
          id="nav"
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
                      'text-white bg-neutral-800 rounded-lg font-medium capitalize transition-all duration-300 ease-in-out':
                        isActive,
                    }
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
