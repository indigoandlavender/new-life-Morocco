'use client';

import Link from 'next/link';
import { useState } from 'react';

// 4 Strategic Pillars
const navigation = [
  {
    name: 'The Momentum',
    href: '/pulse',
    description: 'Global intelligence on Morocco\'s rise',
    children: [
      { name: 'Global Pulse', href: '/pulse', description: 'News & signals' },
      { name: 'Why Morocco', href: '/why-morocco', description: 'The 2030 thesis' },
    ],
  },
  {
    name: 'The Infrastructure',
    href: '/infrastructure',
    description: 'Schools, healthcare, mobility',
    children: [
      { name: 'Infrastructure Overview', href: '/infrastructure', description: 'TGV, hospitals, connectivity' },
      { name: 'For Families', href: '/families', description: 'Schools & lifestyle' },
      { name: 'Tangier', href: '/tangier', description: 'The gateway city' },
    ],
  },
  {
    name: 'The Firm',
    href: '/about',
    description: 'Who we are',
    children: [
      { name: 'About Us', href: '/about', description: 'The bridge between two worlds' },
      { name: 'Contact', href: '/contact', description: 'Start the conversation' },
    ],
  },
  {
    name: 'The Roadmap',
    href: '/services',
    description: 'Your path forward',
    children: [
      { name: 'Services', href: '/services', description: 'Skip-the-line packages' },
      { name: 'Readiness Audit', href: '/checklist', description: '10-point assessment' },
      { name: 'Free Guide', href: '/roadmap', description: 'Download the roadmap' },
    ],
  },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-sand-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <div>
              <span className="text-xl font-semibold text-atlas-800">
                Morocco Advisors
              </span>
              <span className="hidden sm:block text-xs text-atlas-500 tracking-wide">
                American Relocation Consultancy
              </span>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-atlas-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation with Dropdowns */}
        <div className="hidden lg:flex lg:gap-x-1">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-atlas-700 hover:text-atlas-900 transition-colors"
              >
                {item.name}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Dropdown Menu */}
              {openDropdown === item.name && item.children && (
                <div className="absolute left-0 top-full pt-2 w-64 z-50">
                  <div className="bg-white rounded-xl shadow-lg border border-sand-200 overflow-hidden">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-3 hover:bg-sand-50 transition-colors"
                      >
                        <span className="block text-sm font-medium text-atlas-800">{child.name}</span>
                        <span className="block text-xs text-atlas-500 mt-0.5">{child.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="btn-primary text-sm"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-sand-200">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <div className="text-xs font-semibold text-atlas-500 uppercase tracking-wider px-3 py-2">
                  {item.name}
                </div>
                <div className="space-y-1">
                  {item.children?.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm text-atlas-700 hover:bg-sand-100"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link
              href="/contact"
              className="block btn-primary text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
