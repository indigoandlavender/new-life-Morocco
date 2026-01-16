'use client';

import Link from 'next/link';
import { useState } from 'react';

const faqItems = [
  {
    category: 'The Sanctuary & Lifestyle',
    questions: [
      {
        q: 'Is Morocco really "safer" than the U.S.?',
        a: 'Safety is our clients\' #1 priority. While no country is perfect, Morocco\'s culture is built on communal vigilance and a deep-rooted law of hospitality (Chabel). You will find a level of "background peace" here—especially at night and in public spaces—that has become a luxury in many American cities.',
      },
      {
        q: 'Can I maintain my "California" wellness routine?',
        a: 'Absolutely. From the world-class surf and yoga culture in Taghazout to elite Pilates studios and farm-to-table Western cafes in Casablanca and Marrakech, you aren\'t sacrificing your lifestyle. You are simply upgrading the quality of the food and the frequency of the environment.',
      },
      {
        q: 'What about the food quality?',
        a: 'This is one of the most immediate "Life Upgrades." Morocco\'s food supply is largely seasonal and sun-ripened, lacking the heavy industrial chemical load, PFAS, and bio-engineered additives prevalent in Western supermarkets. Most of our clients report a physical "system reset" within their first month.',
      },
    ],
  },
  {
    category: 'Infrastructure & Logistics',
    questions: [
      {
        q: 'How is the healthcare, really?',
        a: 'We focus on the Infrastructure Corridor. This gives you access to the American Hospital of Casablanca and the Akdital "Concierge" networks. These are private, US-standard facilities with world-class specialists and, crucially, zero wait times compared to the strained systems in the US or Canada.',
      },
      {
        q: 'Will I be able to work remotely?',
        a: 'Morocco is a digital hub. With a 5G backbone and widespread fiber-optic connectivity, your "virtual office" will run faster here than in many parts of North America. Plus, the time zone is highly advantageous for Atlantic-coast business.',
      },
      {
        q: 'Is the 200 MPH train (TGV) accessible?',
        a: 'Yes. The Al-Boraq high-speed rail connects Tangier, Rabat, and Casablanca in under 2 hours. It is cleaner, faster, and more reliable than any rail project currently operating in the United States.',
      },
    ],
  },
  {
    category: 'The "Skip the Line" Process',
    questions: [
      {
        q: 'Can I handle the residency process myself?',
        a: 'Yes, you could. However, you will likely spend your first 90 days navigating a "Flagged Room" of bureaucracy, document legalization, and mistranslations. We offer a "Skip the Line" service because our clients value their time more than the "learning curve" of administrative friction.',
      },
      {
        q: 'What is the "10-Point Readiness Audit"?',
        a: 'It is our proprietary vetting process to ensure you don\'t board a plane with a "deal-breaker" mistake. Most Americans don\'t realize they have the wrong type of FBI check or an un-legalized lease until it\'s too late. We catch those errors in Phase I.',
      },
      {
        q: 'Why don\'t you show your founders\' faces on the site?',
        a: 'We are a private advocacy firm, not social media influencers. We prioritize discretion and institutional results. Our "faceless" approach reflects the level of privacy and security we provide for our high-net-worth and professional clients.',
      },
    ],
  },
];

export default function WhyMoroccoPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };
  return (
    <>
      {/* Hero - The Hook */}
      <section className="relative bg-gradient-to-b from-atlas-900 to-atlas-800 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/morocco-pattern.svg')] opacity-5" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-terracotta-400 font-medium tracking-wide uppercase text-sm">
              The Insider&apos;s Choice
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Why Smart Expats Are Skipping Costa Rica for the &quot;Other Side of the Pond&quot;
            </h1>
            <p className="mt-6 text-xl text-sand-200 leading-relaxed">
              Most Americans looking for a new life look South. They find high prices,
              tourist crowds, and a rising cost of living. The smart set is looking East—to Morocco.
            </p>
          </div>
        </div>
      </section>

      {/* The Numbers That Matter */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-terracotta-600 mb-2">6.5h</div>
              <div className="text-atlas-600 text-sm">Direct flight from NYC</div>
              <div className="text-atlas-400 text-xs mt-1">Closer than Hawaii</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-terracotta-600 mb-2">GMT+1</div>
              <div className="text-atlas-600 text-sm">Perfect US time zone</div>
              <div className="text-atlas-400 text-xs mt-1">Work 2-10pm local</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-terracotta-600 mb-2">10x</div>
              <div className="text-atlas-600 text-sm">Lifestyle multiplier</div>
              <div className="text-atlas-400 text-xs mt-1">Same income, sovereign life</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-terracotta-600 mb-2">2h</div>
              <div className="text-atlas-600 text-sm">To Paris or Madrid</div>
              <div className="text-atlas-400 text-xs mt-1">Europe in your backyard</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Atlantic Advantage */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-terracotta-600 font-semibold uppercase text-sm tracking-wide">
                Better Than Thailand
              </span>
              <h2 className="mt-2 text-3xl font-bold text-atlas-900 sm:text-4xl">
                The Atlantic Advantage
              </h2>
              <div className="mt-6 space-y-4 text-atlas-700">
                <p>
                  Thailand is beautiful. But it&apos;s also <strong>20+ hours away</strong>. If there&apos;s
                  a family emergency in the US, you&apos;re two days of travel away. The jet lag alone
                  takes a week to recover from.
                </p>
                <p>
                  Morocco changes the equation entirely.
                </p>
                <p className="text-lg font-medium text-atlas-900">
                  Casablanca to JFK is a direct 7-hour flight. You can have breakfast in Marrakech
                  and dinner in Manhattan. Your parents are a same-day flight away, not a
                  transcontinental odyssey.
                </p>
                <p>
                  For Americans, this isn&apos;t just convenience—it&apos;s peace of mind. You&apos;re close
                  enough to come home when it matters, far enough to build the life you want.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-lg font-semibold text-atlas-900 mb-4">Flight Times from NYC</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-sand-200">
                  <span className="text-atlas-700">Morocco (Casablanca)</span>
                  <span className="font-semibold text-olive-600">6.5 hours</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-sand-200">
                  <span className="text-atlas-700">Hawaii (Honolulu)</span>
                  <span className="text-atlas-500">11 hours</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-sand-200">
                  <span className="text-atlas-700">Thailand (Bangkok)</span>
                  <span className="text-atlas-500">17-22 hours</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-atlas-700">Bali (Denpasar)</span>
                  <span className="text-atlas-500">22-24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Time Zone Bridge */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-atlas-900 rounded-2xl p-8 text-white">
              <h3 className="text-lg font-semibold mb-6">A Day in the Life: Morocco vs. Bali</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-terracotta-400 font-medium mb-3">Working from Morocco</h4>
                  <ul className="space-y-2 text-sm text-sand-200">
                    <li className="flex items-start gap-2">
                      <span className="text-olive-400 mt-1">7am</span>
                      <span>Wake up naturally, morning sun</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-olive-400 mt-1">8am</span>
                      <span>Surf, gym, or medina walk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-olive-400 mt-1">12pm</span>
                      <span>Long lunch at a rooftop cafe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-olive-400 mt-1">2pm</span>
                      <span>Start work (9am EST)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-olive-400 mt-1">10pm</span>
                      <span>End work, evening free</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sand-400 font-medium mb-3">Working from Bali</h4>
                  <ul className="space-y-2 text-sm text-sand-400">
                    <li className="flex items-start gap-2">
                      <span className="text-sand-500 mt-1">8pm</span>
                      <span>Start work (9am EST)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sand-500 mt-1">2am</span>
                      <span>Still in meetings...</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sand-500 mt-1">4am</span>
                      <span>Finally done, exhausted</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sand-500 mt-1">12pm</span>
                      <span>Wake up groggy, day half gone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sand-500 mt-1">6pm</span>
                      <span>Brief freedom before work</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-terracotta-600 font-semibold uppercase text-sm tracking-wide">
                Better Than Bali or Portugal
              </span>
              <h2 className="mt-2 text-3xl font-bold text-atlas-900 sm:text-4xl">
                The Time Zone Bridge
              </h2>
              <div className="mt-6 space-y-4 text-atlas-700">
                <p>
                  If you work for US clients or keep US hours, Bali is a nightmare. You&apos;re working
                  from 8pm to 4am. Your social life is non-existent. Your sleep schedule is destroyed.
                </p>
                <p>
                  Portugal is better, but Morocco&apos;s alignment with the East Coast is <em>perfect</em>.
                </p>
                <p className="text-lg font-medium text-atlas-900">
                  You get your entire morning to enjoy the sun, the surf, or the medina. You start
                  your &quot;9-to-5&quot; workday at 2pm local time. You never sacrifice your sleep for
                  your paycheck.
                </p>
                <p>
                  This isn&apos;t just about convenience—it&apos;s about building a life where work fits
                  around <em>living</em>, not the other way around.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Arbitrage */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-terracotta-600 font-semibold uppercase text-sm tracking-wide">
                The Purchasing Power Upgrade
              </span>
              <h2 className="mt-2 text-3xl font-bold text-atlas-900 sm:text-4xl">
                The Sovereign Lifestyle Unlock
              </h2>
              <div className="mt-6 space-y-4 text-atlas-700">
                <p>
                  Costa Rica has become &quot;Americanized&quot; and overrun. A villa in Nosara now
                  commands Silicon Valley prices. The &quot;Pura Vida&quot; promise has been priced
                  out of reach for most families.
                </p>
                <p>
                  Morocco offers something different: <strong>true lifestyle sovereignty</strong>.
                </p>
                <p className="text-lg font-medium text-atlas-900">
                  For what a cramped apartment costs in Austin or Denver, you live in a palatial
                  Riad with a courtyard, fountain, and rooftop terrace overlooking the Atlas.
                </p>
                <p>
                  Private household staff, organic farm-to-table meals, and concierge healthcare
                  aren&apos;t 1% luxuries here—they&apos;re the standard for families who made the move.
                  Your purchasing power multiplies. Your quality of life transforms.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-lg font-semibold text-atlas-900 mb-2">The Sovereign Lifestyle Standard</h3>
              <p className="text-sm text-atlas-600 mb-6">What becomes accessible when your dollars work 10x harder</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-olive-50 rounded-xl">
                  <div className="w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-olive-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-atlas-900">Courtyard Riad or Modern Villa</div>
                    <div className="text-sm text-atlas-600">With rooftop terrace and private garden</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-olive-50 rounded-xl">
                  <div className="w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-olive-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-atlas-900">Private Household Chef</div>
                    <div className="text-sm text-atlas-600">Organic, farm-to-table meals daily</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-olive-50 rounded-xl">
                  <div className="w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-olive-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-atlas-900">Full-Time Household Staff</div>
                    <div className="text-sm text-atlas-600">Not a luxury—the middle-class standard</div>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-atlas-500 italic text-center">
                This isn&apos;t &quot;cheap living.&quot; This is the lifestyle that $250K buys in the US—unlocked at a fraction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* European Gateway */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="text-terracotta-600 font-semibold uppercase text-sm tracking-wide">
              The Hidden Advantage
            </span>
            <h2 className="mt-2 text-3xl font-bold text-atlas-900 sm:text-4xl">
              Your Gateway to Europe
            </h2>
            <p className="mt-4 text-lg text-atlas-700">
              From Morocco, you&apos;re a $50, 2-hour budget flight away from Paris, Madrid, Barcelona,
              or Lisbon. Costa Rica and Thailand can&apos;t offer this.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-sand-50 rounded-xl">
              <div className="text-2xl font-bold text-atlas-900">Paris</div>
              <div className="text-terracotta-600 font-medium">3h flight</div>
              <div className="text-atlas-500 text-sm">from $40</div>
            </div>
            <div className="text-center p-6 bg-sand-50 rounded-xl">
              <div className="text-2xl font-bold text-atlas-900">Madrid</div>
              <div className="text-terracotta-600 font-medium">1.5h flight</div>
              <div className="text-atlas-500 text-sm">from $30</div>
            </div>
            <div className="text-center p-6 bg-sand-50 rounded-xl">
              <div className="text-2xl font-bold text-atlas-900">Lisbon</div>
              <div className="text-terracotta-600 font-medium">1h flight</div>
              <div className="text-atlas-500 text-sm">from $25</div>
            </div>
            <div className="text-center p-6 bg-sand-50 rounded-xl">
              <div className="text-2xl font-bold text-atlas-900">Barcelona</div>
              <div className="text-terracotta-600 font-medium">2h flight</div>
              <div className="text-atlas-500 text-sm">from $35</div>
            </div>
          </div>
          <p className="mt-8 text-center text-atlas-600">
            Weekend in Paris? Tuesday meetings in Madrid? A long weekend on the Algarve?
            From Morocco, all of Europe is your backyard.
          </p>
        </div>
      </section>

      {/* Cultural Depth */}
      <section className="py-20 bg-atlas-900 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-terracotta-400 font-semibold uppercase text-sm tracking-wide">
              Beyond the Beach
            </span>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              1,000 Years of History vs. Resort Towns
            </h2>
            <div className="mt-8 space-y-4 text-sand-200 text-lg">
              <p>
                Many popular expat destinations feel manufactured—resort towns built for tourists,
                lacking depth or history. After a few months, the novelty wears thin.
              </p>
              <p>
                Morocco is different. You&apos;re living in cities that have been continuously inhabited
                for a millennium. The medinas of Fes and Marrakech are UNESCO World Heritage sites.
                The architecture, the food, the craftsmanship—it&apos;s all authentically, deeply real.
              </p>
              <p className="text-white font-medium">
                This isn&apos;t a place you visit. It&apos;s a place you become part of.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Verdict */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-atlas-900 text-center mb-12">
              The Verdict: Morocco vs. The World
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-atlas-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Factor</th>
                    <th className="px-6 py-4 text-center">Morocco</th>
                    <th className="px-6 py-4 text-center">Costa Rica</th>
                    <th className="px-6 py-4 text-center">Thailand</th>
                    <th className="px-6 py-4 text-center">Portugal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-atlas-900">Flight from NYC</td>
                    <td className="px-6 py-4 text-center text-olive-600 font-semibold">6.5h</td>
                    <td className="px-6 py-4 text-center text-atlas-600">5h</td>
                    <td className="px-6 py-4 text-center text-atlas-400">20h+</td>
                    <td className="px-6 py-4 text-center text-atlas-600">7h</td>
                  </tr>
                  <tr className="bg-sand-50">
                    <td className="px-6 py-4 font-medium text-atlas-900">US Time Zone Fit</td>
                    <td className="px-6 py-4 text-center text-olive-600 font-semibold">Excellent</td>
                    <td className="px-6 py-4 text-center text-olive-600">Good</td>
                    <td className="px-6 py-4 text-center text-terracotta-600">Poor</td>
                    <td className="px-6 py-4 text-center text-atlas-600">Good</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-atlas-900">Purchasing Power</td>
                    <td className="px-6 py-4 text-center text-olive-600 font-semibold">10x Multiplier</td>
                    <td className="px-6 py-4 text-center text-atlas-400">1.5x</td>
                    <td className="px-6 py-4 text-center text-olive-600">5x</td>
                    <td className="px-6 py-4 text-center text-atlas-600">2x</td>
                  </tr>
                  <tr className="bg-sand-50">
                    <td className="px-6 py-4 font-medium text-atlas-900">Europe Access</td>
                    <td className="px-6 py-4 text-center text-olive-600 font-semibold">2h, $40</td>
                    <td className="px-6 py-4 text-center text-atlas-400">10h+</td>
                    <td className="px-6 py-4 text-center text-atlas-400">12h+</td>
                    <td className="px-6 py-4 text-center text-olive-600">In Europe</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-atlas-900">Visa for Americans</td>
                    <td className="px-6 py-4 text-center text-olive-600 font-semibold">90 days free</td>
                    <td className="px-6 py-4 text-center text-olive-600">90 days free</td>
                    <td className="px-6 py-4 text-center text-atlas-600">60 days free</td>
                    <td className="px-6 py-4 text-center text-olive-600">90 days free</td>
                  </tr>
                  <tr className="bg-sand-50">
                    <td className="px-6 py-4 font-medium text-atlas-900">Cultural Depth</td>
                    <td className="px-6 py-4 text-center text-olive-600 font-semibold">1000+ years</td>
                    <td className="px-6 py-4 text-center text-atlas-400">Limited</td>
                    <td className="px-6 py-4 text-center text-olive-600">Rich</td>
                    <td className="px-6 py-4 text-center text-olive-600">Rich</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-terracotta-600 font-semibold uppercase text-sm tracking-wide">
              The Strategic FAQ
            </span>
            <h2 className="mt-2 text-3xl font-bold text-atlas-900 sm:text-4xl">
              Your Sovereign Transition
            </h2>
            <p className="mt-4 text-lg text-atlas-600">
              The questions serious relocators ask before they commit.
            </p>
          </div>

          <div className="space-y-8">
            {faqItems.map((category) => (
              <div key={category.category}>
                <h3 className="text-lg font-semibold text-terracotta-600 mb-4">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.questions.map((item, index) => {
                    const itemId = `${category.category}-${index}`;
                    const isOpen = openItem === itemId;
                    return (
                      <div
                        key={itemId}
                        className="bg-sand-50 rounded-xl overflow-hidden border border-sand-200"
                      >
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-sand-100 transition-colors"
                        >
                          <span className="font-medium text-atlas-900">{item.q}</span>
                          <svg
                            className={`w-5 h-5 text-atlas-500 flex-shrink-0 transition-transform duration-200 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-atlas-700 leading-relaxed">{item.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Closure */}
          <div className="mt-12 bg-atlas-900 rounded-2xl p-8 text-center">
            <p className="text-xl text-white font-medium mb-2">
              Still have a question we didn&apos;t cover?
            </p>
            <p className="text-sand-300 mb-6">
              The most important questions are the ones unique to your family&apos;s journey.
              We reserve those deep dives for our Private Strategy Sessions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors"
            >
              Open the Door to Your Transition
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-terracotta-600 to-terracotta-700">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            The Window Is Open. The Infrastructure Is Ready.
          </h2>
          <p className="mt-4 text-xl text-sand-100">
            Portugal is crowded. Mexico is compromised. Thailand is 20 hours away.
            Morocco is the strategic choice for those who think in decades.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-terracotta-600 font-semibold rounded-lg hover:bg-sand-100 transition-colors duration-200 text-lg"
            >
              Begin Your Exit Strategy
            </Link>
            <Link
              href="/infrastructure"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-lg"
            >
              View the Infrastructure
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
