'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  number: number;
  title: string;
  links: FooterLink[];
}

interface FooterData {
  newsletter: {
    show: boolean;
    title: string;
    description: string;
    ctaText: string;
  };
  columns: FooterColumn[];
  legal: FooterLink[];
  copyright: {
    year: number;
    name: string;
  };
}

const defaultFooterData: FooterData = {
  newsletter: {
    show: true,
    title: "Your Free Morocco Relocation Guide",
    description: "Everything you need to know about moving to Morocco - visa requirements, cost of living, and insider tips from expats who've made the move.",
    ctaText: "Get Your Free Guide",
  },
  columns: [
    {
      number: 1,
      title: "Explore",
      links: [
        { label: "Why Morocco", href: "/benefits" },
        { label: "Visa Requirements", href: "/visa" },
        { label: "Carte de Sejour", href: "/carte-de-sejour" },
      ],
    },
    {
      number: 2,
      title: "Services",
      links: [
        { label: "Our Services", href: "/services" },
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  copyright: {
    year: new Date().getFullYear(),
    name: "New Life Morocco",
  },
};

export default function Footer() {
  const [footerData, setFooterData] = useState<FooterData>(defaultFooterData);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState('');

  useEffect(() => {
    fetch('/api/footer')
      .then((r) => r.json())
      .then((data) => {
        if (data.success && data.data) {
          setFooterData({
            newsletter: data.data.newsletter || defaultFooterData.newsletter,
            columns: data.data.columns || defaultFooterData.columns,
            legal: data.data.legal || defaultFooterData.legal,
            copyright: data.data.copyright || defaultFooterData.copyright,
          });
        }
      })
      .catch((err) => {
        console.error('Failed to fetch footer data:', err);
      });
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isSubscribing) return;

    setIsSubscribing(true);
    setSubscribeMessage('');

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (data.success) {
        setSubscribed(true);
        setSubscribeMessage(data.message);
        setEmail('');
      } else {
        setSubscribeMessage(data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubscribeMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer>
      {/* ════════════════════════════════════════════════════════════════════
          LEVEL 1: Newsletter / Lead Magnet (Sales Funnel)
          - Free guide offering to capture emails
          ════════════════════════════════════════════════════════════════════ */}
      {footerData.newsletter.show && (
        <section className="py-16 md:py-20 bg-gradient-to-br from-terracotta-600 to-terracotta-700">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {footerData.newsletter.title}
              </h3>
              <p className="text-sand-100 text-lg mb-8 max-w-2xl mx-auto">
                {footerData.newsletter.description}
              </p>

              {subscribed ? (
                <div className="bg-white/20 rounded-lg p-6">
                  <svg className="w-12 h-12 text-white mx-auto mb-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-white font-semibold text-lg">{subscribeMessage}</p>
                </div>
              ) : (
                <>
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      disabled={isSubscribing}
                      className="flex-1 px-4 py-3 rounded-lg border-2 border-white/30 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={isSubscribing}
                      className="px-8 py-3 bg-white text-terracotta-600 font-semibold rounded-lg hover:bg-sand-100 transition-colors disabled:opacity-50 whitespace-nowrap"
                    >
                      {isSubscribing ? 'Sending...' : footerData.newsletter.ctaText}
                    </button>
                  </form>
                  {subscribeMessage && !subscribed && (
                    <p className="text-white/80 text-sm mt-4">{subscribeMessage}</p>
                  )}
                  <p className="text-white/60 text-sm mt-4">
                    No spam. Unsubscribe anytime.
                  </p>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════════════════
          LEVEL 2: Brand Content (Navigation Links)
          - Site-specific navigation and contact info
          - Ombre effect: Darkest level
          ════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-atlas-950 text-sand-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-semibold text-white mb-4">New Life Morocco</h3>
              <p className="text-sand-300 max-w-md mb-6">
                Helping Americans discover the beauty and opportunity of life in Morocco.
                Expert guidance for your relocation journey.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="mailto:hello@newlifemorocco.com"
                  className="text-sand-300 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Columns */}
            {footerData.columns.map((column) => (
              <div key={column.number}>
                <h4 className="text-sm font-semibold text-white mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sand-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          LEVEL 3: Legal (Terms, Privacy - from shared Nexus database)
          - Legal links + Copyright
          - Ombre effect: Lighter than Level 2
          ════════════════════════════════════════════════════════════════════ */}
      <section className="py-6 bg-atlas-900 border-t border-atlas-800/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-4">
            {footerData.legal.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm text-sand-400 hover:text-sand-200 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sand-500 text-sm text-center">
            &copy; {footerData.copyright.year} {footerData.copyright.name}. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
