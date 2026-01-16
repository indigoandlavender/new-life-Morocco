'use client';

import { useState } from 'react';
import Link from 'next/link';

const checklistItems = [
  {
    id: 1,
    title: 'FBI Background Check',
    question: 'Do you have your FBI background check, and is it apostilled by the US Department of State (not just notarized)?',
    note: 'This is required for residency and takes time to get—start early.',
  },
  {
    id: 2,
    title: 'Banking Setup',
    question: 'Do you know which Moroccan banks offer "convertible Dirham" accounts that let you move money back to the US if needed?',
    note: 'Regular accounts can make it hard to transfer money out later.',
  },
  {
    id: 3,
    title: 'Schools',
    question: 'If you have kids, have you looked into American schools? Good ones often have waiting lists that fill up months ahead.',
    note: 'Worth researching early, even if you\'re not 100% sure yet.',
  },
  {
    id: 4,
    title: 'The 90-Day Timeline',
    question: 'Do you have a plan for applying for residency within your 90-day visa-free period?',
    note: 'It\'s best to submit your application in the first few weeks, not at the end.',
  },
  {
    id: 5,
    title: 'Housing Documents',
    question: 'Do you know that your lease needs to be "legalized" at a local government office before you can use it for residency?',
    note: 'A regular rental contract isn\'t enough—it needs an official stamp.',
  },
  {
    id: 6,
    title: 'Income Documentation',
    question: 'Do you know what income documentation you\'ll need? (It\'s different for remote workers, retirees, and business owners.)',
    note: 'Having the right paperwork ready makes the process much smoother.',
  },
  {
    id: 7,
    title: 'Healthcare',
    question: 'Have you looked into healthcare options? Do you know where the good hospitals and clinics are?',
    note: 'There are excellent private hospitals—worth knowing where they are.',
  },
  {
    id: 8,
    title: 'Expat Community',
    question: 'Have you connected with any American expats or expat communities in Morocco?',
    note: 'There\'s a helpful community that can share firsthand experience.',
  },
  {
    id: 9,
    title: 'Location',
    question: 'Have you thought about which city is right for you? (Each has different pros and cons.)',
    note: 'Casablanca, Rabat, Marrakech, and Tangier all offer different lifestyles.',
  },
  {
    id: 10,
    title: 'Local Help',
    question: 'Do you have someone who can help navigate the paperwork and language barriers at government offices?',
    note: 'Having local help can save a lot of time and frustration.',
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
            <span className="text-sand-400 font-medium uppercase tracking-wider text-sm">
              Are You Ready?
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              The Relocation Checklist
            </h1>
            <p className="mt-6 text-lg text-sand-200">
              Moving to a new country takes some preparation. Here are the key things
              to think about before you go.
              <span className="text-sand-300 font-medium"> Don&apos;t worry if you can&apos;t check everything yet—that&apos;s what we help with.</span>
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
              <span className={`font-bold ${isReady ? 'text-olive-600' : 'text-atlas-700'}`}>
                {checkedCount}/10
              </span>
            </div>
            {checkedCount > 0 && checkedCount < 8 && (
              <span className="text-sm text-atlas-600 font-medium hidden md:block">
                Some things to work on—we can help
              </span>
            )}
            {isReady && (
              <span className="text-sm text-olive-600 font-medium hidden md:block">
                You&apos;re well prepared!
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
                      <p className="mt-2 text-sm text-atlas-600 italic">
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
                  Still have some boxes to check?
                  <span className="text-atlas-700"> That&apos;s completely normal.</span>
                </p>
                <p className="text-atlas-600 mb-6">
                  Most families have questions about these things when they start exploring.
                  That&apos;s exactly what we help with—walking you through each step so it
                  doesn&apos;t feel overwhelming.
                </p>
                <p className="text-atlas-700 mb-8">
                  We&apos;re happy to answer your questions and help you figure out what you need.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors"
                >
                  Start the Conversation
                </Link>
              </div>
            ) : (
              <div className="bg-olive-50 border-2 border-olive-200 rounded-2xl p-8 text-center">
                <p className="text-2xl font-bold text-atlas-900 mb-4">
                  Looks like you&apos;ve done your research!
                  <span className="text-olive-600"> You&apos;re well on your way.</span>
                </p>
                <p className="text-atlas-600 mb-6">
                  You&apos;ve already thought through the big things. If you want help
                  with the details or just want to talk through your plans, we&apos;re here.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-olive-600 text-white font-semibold rounded-lg hover:bg-olive-700 transition-colors"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* How We Help */}
      <section className="py-16 bg-atlas-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              How We Can Help
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-atlas-800/50 rounded-xl p-6 border border-atlas-700">
              <h3 className="text-sand-400 font-semibold mb-3">Doing It Yourself</h3>
              <ul className="space-y-2 text-sand-300 text-sm">
                <li>• Researching everything on forums and blogs</li>
                <li>• Figuring out document requirements as you go</li>
                <li>• Navigating government offices without local help</li>
                <li>• Learning from mistakes along the way</li>
                <li>• Totally doable, but takes more time</li>
              </ul>
            </div>
            <div className="bg-olive-900/30 rounded-xl p-6 border border-olive-700">
              <h3 className="text-olive-400 font-semibold mb-3">Working With Us</h3>
              <ul className="space-y-2 text-sand-300 text-sm">
                <li>• We help you get documents right the first time</li>
                <li>• Local team handles government paperwork</li>
                <li>• Someone to answer questions as they come up</li>
                <li>• Guidance based on what actually works</li>
                <li>• Less stress, more time to settle in</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="text-sand-300 hover:text-white underline underline-offset-4 font-medium"
            >
              See How We Help →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
