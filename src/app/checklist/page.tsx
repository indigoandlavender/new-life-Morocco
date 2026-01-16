'use client';

import { useState } from 'react';
import Link from 'next/link';

const checklistItems = [
  {
    id: 1,
    title: 'The Federal Status Audit',
    question: 'Do you have the specific FBI-level clearances required for residency, and more importantly, are they Federally Apostilled (not just notarized)?',
    note: 'A state-level check is a Day 1 rejection.',
  },
  {
    id: 2,
    title: 'The "Convertible" Financial Strategy',
    question: 'Have you identified the specific Moroccan banking institutions that allow for "Convertible Dirham" accounts?',
    note: 'This is the only way to ensure your US capital remains fluid and repatriable.',
  },
  {
    id: 3,
    title: 'The Schooling Window',
    question: 'Top-tier American schools in Rabat and Casablanca often have waiting lists that close 6 months before the semester. Is your child\'s seat secured?',
    note: 'Early movers get first choice.',
  },
  {
    id: 4,
    title: 'The 90-Day Clock',
    question: 'Your US passport allows you 90 days of "Tourist" status. Do you have a Phase II strategy to transition to residency before your visa-free clock expires?',
    note: 'Running out the clock is a common and costly mistake.',
  },
  {
    id: 5,
    title: 'The Real Estate "Legalization" Check',
    question: 'Does your lease or property deed meet the specific "Legalization" standards required by the Prefecture?',
    note: 'A standard contract is often not enough for residency.',
  },
  {
    id: 6,
    title: 'The Professional Alignment',
    question: 'Are you moving as a Remote Worker, an Entrepreneur, or a Retiree? Each path has a completely different "Proof of Income" requirement.',
    note: 'The framing matters as much as the facts.',
  },
  {
    id: 7,
    title: 'The Healthcare Integration',
    question: 'Have you mapped your residence to the nearest Tier-1 Private Clinic (Akdital or American Hospital networks)?',
    note: 'Your health infrastructure is the foundation of your relocation.',
  },
  {
    id: 8,
    title: 'The "Legation" Connection',
    question: 'Are you aware of the specific diplomatic and cultural resources available to Americans in Tangier and the capital?',
    note: 'The American community is deeper than you think.',
  },
  {
    id: 9,
    title: 'The Mobility Hub',
    question: 'Is your home base connected to the Al-Boraq (HSR) corridor?',
    note: 'Your quality of life is directly tied to your proximity to high-speed rail.',
  },
  {
    id: 10,
    title: 'The Partner Network',
    question: 'Do you have a "Boots on the Ground" advocate to navigate the language and administrative nuances of the Prefecture?',
    note: 'Or are you planning to spend your first 100 hours in a waiting room?',
  },
];

export default function ChecklistPage() {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const toggleItem = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    if (!showResult && checkedItems.length >= 2) {
      setShowResult(true);
    }
  };

  const checkedCount = checkedItems.length;
  const isReady = checkedCount >= 8;

  return (
    <>
      {/* Hero */}
      <section className="bg-atlas-900 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-terracotta-400 font-medium uppercase tracking-wide text-sm">
              The Sovereign Transition
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              Your 10-Point Readiness Audit
            </h1>
            <p className="mt-6 text-lg text-sand-200">
              Success in the Kingdom is 90% preparation and 10% execution.
              Most people fail because they treat their relocation like a vacation.
              <span className="text-terracotta-400 font-medium"> We treat it like a sovereign transition.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Score Bar */}
      <section className="sticky top-16 z-40 bg-white border-b border-sand-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-atlas-700 font-medium">Your Score:</span>
              <div className="flex gap-1">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-6 h-6 rounded ${
                      i < checkedCount
                        ? isReady
                          ? 'bg-olive-500'
                          : 'bg-terracotta-500'
                        : 'bg-sand-200'
                    } transition-colors`}
                  />
                ))}
              </div>
              <span className={`font-bold ${isReady ? 'text-olive-600' : 'text-terracotta-600'}`}>
                {checkedCount}/10
              </span>
            </div>
            {checkedCount > 0 && checkedCount < 8 && (
              <span className="text-sm text-terracotta-600 font-medium hidden md:block">
                {8 - checkedCount} more to be flight-ready
              </span>
            )}
            {isReady && (
              <span className="text-sm text-olive-600 font-medium hidden md:block">
                You&apos;re ahead of most — let&apos;s optimize your path
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-12 bg-sand-50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-4">
            {checklistItems.map((item) => {
              const isChecked = checkedItems.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`bg-white rounded-xl p-6 border-2 cursor-pointer transition-all ${
                    isChecked
                      ? 'border-olive-500 shadow-md'
                      : 'border-sand-200 hover:border-sand-300'
                  }`}
                >
                  <div className="flex gap-4">
                    <div
                      className={`w-6 h-6 rounded-md border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                        isChecked
                          ? 'bg-olive-500 border-olive-500'
                          : 'border-atlas-300'
                      }`}
                    >
                      {isChecked && (
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h3 className={`font-bold ${isChecked ? 'text-olive-700' : 'text-atlas-900'}`}>
                          {item.id}. {item.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-atlas-600">
                        {item.question}
                      </p>
                      <p className="mt-2 text-sm text-terracotta-600 italic">
                        {item.note}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Result Section */}
      {showResult && (
        <section className="py-12 bg-white border-t border-sand-200">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            {checkedCount < 8 ? (
              <div className="bg-terracotta-50 border-2 border-terracotta-200 rounded-2xl p-8 text-center">
                <p className="text-2xl font-bold text-atlas-900 mb-4">
                  If you checked fewer than 8 of these boxes,
                  <span className="text-terracotta-600"> you aren&apos;t ready to board the plane.</span>
                </p>
                <p className="text-atlas-600 mb-6">
                  You have a vision, but you lack a roadmap. You could spend the next 6 months
                  researching these nuances on forums and blogs, or you can <strong>Skip the Line</strong>.
                </p>
                <p className="text-atlas-700 mb-8">
                  We provide the blueprint, the contacts, and the advocacy to turn this 10-point audit
                  into a seamless reality.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors"
                >
                  Request Your Strategic Roadmap Session
                </Link>
              </div>
            ) : (
              <div className="bg-olive-50 border-2 border-olive-200 rounded-2xl p-8 text-center">
                <p className="text-2xl font-bold text-atlas-900 mb-4">
                  You&apos;re ahead of 90% of prospective relocators.
                  <span className="text-olive-600"> Let&apos;s optimize your path.</span>
                </p>
                <p className="text-atlas-600 mb-6">
                  You&apos;ve done your homework. Now let&apos;s make sure every piece falls into place
                  with precision. Our role is to eliminate the friction and accelerate your timeline.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-olive-600 text-white font-semibold rounded-lg hover:bg-olive-700 transition-colors"
                >
                  Schedule Your Fast-Track Session
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* The Straight Talk */}
      <section className="py-16 bg-atlas-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              The &quot;Skip the Line&quot; Reality
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-atlas-800/50 rounded-xl p-6 border border-atlas-700">
              <h3 className="text-terracotta-400 font-semibold mb-3">The DIY Path</h3>
              <ul className="space-y-2 text-sand-300 text-sm">
                <li>• 6+ months of forum research</li>
                <li>• Trial-and-error with document requirements</li>
                <li>• Language barriers at the Prefecture</li>
                <li>• Potential 90-day clock expiration</li>
                <li>• ~100+ hours in administrative limbo</li>
              </ul>
            </div>
            <div className="bg-olive-900/30 rounded-xl p-6 border border-olive-700">
              <h3 className="text-olive-400 font-semibold mb-3">The Fast-Track Path</h3>
              <ul className="space-y-2 text-sand-300 text-sm">
                <li>• Pre-flight document audit</li>
                <li>• Direct Prefecture advocacy</li>
                <li>• English-speaking navigation</li>
                <li>• Proactive timeline management</li>
                <li>• First 90 days on your terrace, not in a waiting room</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="text-terracotta-400 hover:text-terracotta-300 font-medium"
            >
              See Our Full Service Menu →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
