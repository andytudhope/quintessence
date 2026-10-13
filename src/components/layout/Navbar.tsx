'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { categories } from '@/lib/books';
import SideDrawer from './SideDrawer';
import SearchBox from '../search/SearchBox';

const Navbar = () => {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full top-0 z-30 text-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between h-20">
            {/* Desktop Logo */}
            <div className="flex md:hidden items-center">
              <Link href="/">
                <Image src="/images/logo.jpg" alt="Quintessence Publishing" width={150} height={70} style={{ objectFit: 'contain' }} />
              </Link>
            </div>
            {/* Mobile Logo */}
            <div className="hidden md:flex items-center">
              <Link href="/">
                <Image src="/images/logo.jpg" alt="Quintessence Publishing" width={120} height={50} style={{ objectFit: 'contain' }} />
              </Link>
            </div>

            <div className="flex items-center">
              {/* Desktop Navigation */}
              <div 
                className="relative mr-4 md:hidden"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="flex items-center space-x-1 py-2">
                  <span>Categories</span>
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                {/* Invisible hover bridge */}
                <div className="absolute top-full left-0 w-full h-2" />

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute z-10 top-[calc(100%+8px)] w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {Object.values(categories).map((category) => (
                        <Link
                          key={category.slug}
                          href={`/${category.slug}`}
                          className="block px-4 py-2 text-sm font-bold text-black hover:underline"
                        >
                          {category.name}
                        </Link>
                      ))}
                      <Link
                        href="/about"
                        className="block px-4 py-2 text-sm font-bold text-black hover:underline"
                      >
                        About
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Search Box - Always visible */}
              <div className="mr-4">
                <SearchBox />
              </div>

              {/* Mobile menu button */}
              <div className="hidden md:flex items-center">
                <button
                  onClick={() => setIsSideDrawerOpen(true)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Add padding to account for fixed navbar */}
      <div className="h-16" />

      {/* Side Drawer */}
      <SideDrawer 
        isOpen={isSideDrawerOpen}
        onClose={() => setIsSideDrawerOpen(false)}
      />
    </>
  );
};

export default Navbar;