"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CategoryNav() {
  const pathname = usePathname();

  const categories = [
    { href: '/articles', label: 'Articles' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/comparison-board', label: 'Comparison Board' },
  ];

  return (
    <nav className="category-nav-wrapper" aria-label="Resource categories">
      <div className="category-nav-inner">
        {categories.map((cat) => {
          const isActive = pathname === cat.href;
          return (
            <Link
              key={cat.href}
              href={cat.href}
              className={`category-nav-link ${isActive ? 'active' : ''}`}
            >
              {cat.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
