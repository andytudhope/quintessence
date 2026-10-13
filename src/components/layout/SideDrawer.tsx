'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { categories } from '@/lib/books';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideDrawer = ({ isOpen, onClose }: SideDrawerProps) => {
  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
        <div className="p-4">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="mt-8 space-y-4">
            {Object.values(categories).map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                onClick={onClose}
                className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                {category.name}
              </Link>
            ))}
            <Link
              href="/about"
              onClick={onClose}
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;