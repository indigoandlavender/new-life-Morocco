'use client';

import Link from 'next/link';
import { useState } from 'react';

const faqItems = [
  {
    category: 'Safety & Daily Life',
    questions: [
      {
        q: 'Is it really safer than the U.S.?',
        a: 'This is the #1 question families ask. While no place is perfect, the difference is immediate and tangible. Strict gun control means near-zero gun violence. No mass shooting drills at schools. You can walk anywhere at night—medinas, beaches, city streets. The background anxiety that many Americans carry simply dissolves here.',
      },
      {
        q: 'What\'s the quality of life like day-to-day?',
        a: 'Imagine waking up without the morning news cycle stress. Your kids walk to school safely. You have time for a real lunch, not something eaten at your desk. The food is fresh and seasonal. The air is clean. The pace allows you to actually live, not just survive.',
      },
      {
        q: 'What about the food?',
        a: 'This surprises most families. The food here is largely seasonal, locally grown, and free of the industrial additives common in American supermarkets. Fresh produce, real bread, olive oil from local groves. Many families report feeling physically better within weeks.',
      },
    ],
  },
  {
    category: 'Practical Life',
    questions: [
      {
        q: 'How is the healthcare?',
        a: 'American-trained doctors. Mayo Clinic Care Network facilities. Same-day specialist appointments—no 6-month waitlists. An MRI costs $150-300, not $3,000. You get better care, faster, for less. Healthcare stops being something you dread and starts being something that actually works.',
      },
      {
        q: 'Can I work remotely?',
        a: '5G nationwide. Gigabit fiber in major cities. Your Zoom calls work perfectly. The time zone actually helps—you overlap with the US East Coast from 9am-2pm, so you get your mornings free and work a comfortable afternoon schedule.',
      },
      {
        q: 'What about my kids\' education?',
        a: 'Five American-accredited schools with US diplomas and IB programs. Your kids apply to the same universities—Harvard, Stanford, MIT. The American School of Tangier has been operating since 1950. Your children\'s education doesn\'t skip a beat.',
      },
    ],
  },
  {
    category: 'Making It Happen',
    questions: [
      {
        q: 'Can I handle the move myself?',
        a: 'You could. But you\'d likely spend your first months in government offices instead of enjoying your new life. The paperwork has specific requirements that aren\'t obvious until you\'re already there. We help you get it right the first time so you can focus on settling in.',
      },
      {
        q: 'What do I need to prepare before moving?',
        a: 'Background checks with the right apostille. Income documentation formatted correctly. Housing that meets legal requirements. Banking structure that protects your money. We audit all of this before you leave—so nothing surprises you after arrival.',
      },
      {
        q: 'How long does the process take?',
        a: 'With proper preparation, you can be settled with residency in 90 days. Without it, people often spend 6+ months sorting out paperwork issues. The difference is having someone who knows the system in your corner.',
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
            <span className="text-sand-400 font-medium tracking-wider uppercase text-sm">
              Why Here
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              The Fresh Start You&apos;ve Been Looking For—Closer Than You Think
            </h1>
            <p className="mt-6 text-xl text-sand-200 leading-relaxed">
              Real safety. Healthcare that works. Schools your kids thrive in.
              Seven hours from New York, with Europe in your backyard. This is where American families are building new lives.
            </p>
          </div>
        </div>
      </section>

      {/* The Numbers That Matter */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-atlas-900 mb-2">7h</div>
              <div className="text-atlas-600 text-sm">Direct flight from NYC</div>
              <div className="text-atlas-400 text-xs mt-1">Closer than Hawaii</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-atlas-900 mb-2">5h</div>
              <div className="text-atlas-600 text-sm">Time zone overlap</div>
              <div className="text-atlas-400 text-xs mt-1">Stay connected to home</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-atlas-900 mb-2">3-5x</div>
              <div className="text-atlas-600 text-sm">Your money goes further</div>
              <div className="text-atlas-400 text-xs mt-1">Same income, better life</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-atlas-900 mb-2">2h</div>
              <div className="text-atlas-600 text-sm">To Paris or Madrid</div>
              <div className="text-atlas-400 text-xs mt-1">Europe in your backyard</div>
            </div>
          </div>
        </div>
      </section>

      {/* Close Enough to Come Home */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-atlas-500 font-semibold uppercase text-sm tracking-wider">
                A New Beginning, Not a Goodbye
              </span>
              <h2 className="mt-2 text-3xl font-bold text-atlas-900 sm:text-4xl">
                Close Enough to Come Home
              </h2>
              <div className="mt-6 space-y-4 text-atlas-700">
                <p>
                  A fresh start shouldn&apos;t mean cutting ties. If there&apos;s a family emergency,
                  you need to be able to get home. If grandma has a birthday, you want to be there.
                </p>
                <p>
                  That&apos;s why location matters so much.
                </p>
                <p className="text-lg font-medium text-atlas-900">
                  A direct 7-hour flight from New York. You can have breakfast here
                  and dinner in Manhattan. Your family is a same-day flight away, not a
                  two-day odyssey.
                </p>
                <p>
                  This isn&apos;t just convenience—it&apos;s peace of mind. You&apos;re close
                  enough to come home when it matters, far enough to breathe.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-lg font-semibold text-atlas-900 mb-4">Flight Times from New York</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-sand-200">
                  <span className="text-atlas-700">Here (Casablanca)</span>
                  <span className="font-semibold text-olive-600">7 hours</span>
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

      {/* Work-Life Balance */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-atlas-900 rounded-2xl p-8 text-white">
              <h3 className="text-lg font-semibold mb-6">What Your Day Actually Looks Like</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sand-400 font-medium mb-3">Here</h4>
                  <ul className="space-y-2 text-sm text-sand-200">
                    <li className="flex items-start gap-2">
                      <span className="text-olive-400 mt-1">7am</span>
                      <span>Wake up naturally, morning sun</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-olive-400 mt-1">8am</span>
                      <span>Beach walk, gym, or café</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-olive-400 mt-1">12pm</span>
                      <span>Long lunch with the family</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-olive-400 mt-1">2pm</span>
                      <span>Start work (9am EST)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-olive-400 mt-1">7pm</span>
                      <span>Done. Evening with family.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sand-400 font-medium mb-3">Bali / Thailand</h4>
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
              <span className="text-atlas-500 font-semibold uppercase text-sm tracking-wider">
                Work-Life Balance That Actually Works
              </span>
              <h2 className="mt-2 text-3xl font-bold text-atlas-900 sm:text-4xl">
                Your Remote Job + Mornings Free
              </h2>
              <div className="mt-6 space-y-4 text-atlas-700">
                <p>
                  If you work remotely for US clients, location matters. Bali means working 8pm to 4am.
                  Your sleep is destroyed. Your family time disappears.
                </p>
                <p>
                  Here, the time zone works <em>for</em> you, not against you.
                </p>
                <p className="text-lg font-medium text-atlas-900">
                  Your entire morning is free—beach, gym, time with kids before school.
                  You start your workday at 2pm local time. You&apos;re done by dinner.
                </p>
                <p>
                  This isn&apos;t just convenience—it&apos;s finally having the life where work fits
                  around <em>living</em>, not the other way around.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Money Goes Further */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-atlas-500 font-semibold uppercase text-sm tracking-wider">
                A Better Life for Less
              </span>
              <h2 className="mt-2 text-3xl font-bold text-atlas-900 sm:text-4xl">
                Your Money Goes 3-5x Further
              </h2>
              <div className="mt-6 space-y-4 text-atlas-700">
                <p>
                  Costa Rica used to be affordable. Now a villa in Nosara costs
                  Silicon Valley prices. Portugal is overcrowded and expensive.
                  The &quot;escape&quot; options have been priced out for most families.
                </p>
                <p>
                  Here, your money actually works for you.
                </p>
                <p className="text-lg font-medium text-atlas-900">
                  For what a cramped apartment costs in Austin or Denver, you get a spacious
                  home with a garden, rooftop terrace, and room for your family to breathe.
                </p>
                <p>
                  Healthcare that doesn&apos;t bankrupt you. Fresh, organic food that&apos;s affordable.
                  Household help if you want it. This isn&apos;t about &quot;cheap living&quot;—it&apos;s about
                  a genuinely better quality of life that your current income can actually support.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-lg font-semibold text-atlas-900 mb-2">What Your Budget Unlocks Here</h3>
              <p className="text-sm text-atlas-600 mb-6">The same income, a completely different life</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-olive-50 rounded-xl">
                  <div className="w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-olive-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-atlas-900">Spacious Home with a Garden</div>
                    <div className="text-sm text-atlas-600">Room for your family to actually live</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-olive-50 rounded-xl">
                  <div className="w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-olive-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-atlas-900">Healthcare That Works</div>
                    <div className="text-sm text-atlas-600">Quality care without the financial stress</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-olive-50 rounded-xl">
                  <div className="w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-olive-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-atlas-900">Time to Actually Live</div>
                    <div className="text-sm text-atlas-600">Less financial pressure means more freedom</div>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-atlas-500 italic text-center">
                This isn&apos;t about sacrifice. It&apos;s about finally getting the life your hard work deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* European Gateway */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="text-atlas-500 font-semibold uppercase text-sm tracking-wider">
              Europe in Your Backyard
            </span>
            <h2 className="mt-2 text-3xl font-bold text-atlas-900 sm:text-4xl">
              Weekend Trips to Paris, Madrid, Barcelona
            </h2>
            <p className="mt-4 text-lg text-atlas-700">
              Budget flights to European capitals in 1-3 hours. Your kids grow up
              experiencing the world, not just reading about it.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-sand-50 rounded-xl">
              <div className="text-2xl font-bold text-atlas-900">Paris</div>
              <div className="text-atlas-600 font-medium">3h flight</div>
              <div className="text-atlas-500 text-sm">from $40</div>
            </div>
            <div className="text-center p-6 bg-sand-50 rounded-xl">
              <div className="text-2xl font-bold text-atlas-900">Madrid</div>
              <div className="text-atlas-600 font-medium">1.5h flight</div>
              <div className="text-atlas-500 text-sm">from $30</div>
            </div>
            <div className="text-center p-6 bg-sand-50 rounded-xl">
              <div className="text-2xl font-bold text-atlas-900">Lisbon</div>
              <div className="text-atlas-600 font-medium">1h flight</div>
              <div className="text-atlas-500 text-sm">from $25</div>
            </div>
            <div className="text-center p-6 bg-sand-50 rounded-xl">
              <div className="text-2xl font-bold text-atlas-900">Barcelona</div>
              <div className="text-atlas-600 font-medium">2h flight</div>
              <div className="text-atlas-500 text-sm">from $35</div>
            </div>
          </div>
          <p className="mt-8 text-center text-atlas-600">
            Weekend in Paris for your anniversary. Family trip to Barcelona.
            Summer break exploring Portugal. Europe becomes part of your life.
          </p>
        </div>
      </section>

      {/* A Real Place, Not a Resort */}
      <section className="py-20 bg-atlas-900 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sand-400 font-semibold uppercase text-sm tracking-wider">
              A Real Community
            </span>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Not a Tourist Destination. A Real Home.
            </h2>
            <div className="mt-8 space-y-4 text-sand-200 text-lg">
              <p>
                Many expat destinations feel hollow—resort towns built for tourists,
                where you never quite belong. After a few months, the novelty wears thin.
              </p>
              <p>
                Here, you&apos;re joining a real community with deep roots. Ancient cities with
                living history. Neighbors who know your name. A culture of hospitality
                that welcomes families, not just vacationers.
              </p>
              <p className="text-white font-medium">
                This isn&apos;t a place you escape to. It&apos;s a place you build a life in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-atlas-900 text-center mb-12">
              How It Compares
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-atlas-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Factor</th>
                    <th className="px-6 py-4 text-center">Here</th>
                    <th className="px-6 py-4 text-center">Costa Rica</th>
                    <th className="px-6 py-4 text-center">Thailand</th>
                    <th className="px-6 py-4 text-center">Portugal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-atlas-900">Flight from NYC</td>
                    <td className="px-6 py-4 text-center text-olive-600 font-semibold">7h</td>
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
                    <td className="px-6 py-4 font-medium text-atlas-900">Cost of Living</td>
                    <td className="px-6 py-4 text-center text-olive-600 font-semibold">3-5x cheaper</td>
                    <td className="px-6 py-4 text-center text-atlas-400">Expensive</td>
                    <td className="px-6 py-4 text-center text-olive-600">Cheap</td>
                    <td className="px-6 py-4 text-center text-atlas-400">Expensive</td>
                  </tr>
                  <tr className="bg-sand-50">
                    <td className="px-6 py-4 font-medium text-atlas-900">Europe Access</td>
                    <td className="px-6 py-4 text-center text-olive-600 font-semibold">2h, $40</td>
                    <td className="px-6 py-4 text-center text-atlas-400">10h+</td>
                    <td className="px-6 py-4 text-center text-atlas-400">12h+</td>
                    <td className="px-6 py-4 text-center text-olive-600">In Europe</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-atlas-900">Safety</td>
                    <td className="px-6 py-4 text-center text-olive-600 font-semibold">Very High</td>
                    <td className="px-6 py-4 text-center text-atlas-600">Moderate</td>
                    <td className="px-6 py-4 text-center text-atlas-600">Moderate</td>
                    <td className="px-6 py-4 text-center text-olive-600">High</td>
                  </tr>
                  <tr className="bg-sand-50">
                    <td className="px-6 py-4 font-medium text-atlas-900">American Schools</td>
                    <td className="px-6 py-4 text-center text-olive-600 font-semibold">5 accredited</td>
                    <td className="px-6 py-4 text-center text-atlas-600">Limited</td>
                    <td className="px-6 py-4 text-center text-atlas-600">Limited</td>
                    <td className="px-6 py-4 text-center text-atlas-600">Limited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-atlas-500 font-semibold uppercase text-sm tracking-wider">
              Common Questions
            </span>
            <h2 className="mt-2 text-3xl font-bold text-atlas-900 sm:text-4xl">
              What Families Ask Before Making the Move
            </h2>
            <p className="mt-4 text-lg text-atlas-600">
              Honest answers to the questions that matter most.
            </p>
          </div>

          <div className="space-y-8">
            {faqItems.map((category) => (
              <div key={category.category}>
                <h3 className="text-lg font-semibold text-atlas-700 mb-4">
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
              Have a question we didn&apos;t answer?
            </p>
            <p className="text-sand-300 mb-6">
              Every family&apos;s situation is different. We&apos;re happy to talk through
              what your transition would actually look like.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors"
            >
              Start the Conversation
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-terracotta-600 to-terracotta-700">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Your Fresh Start Is Closer Than You Think
          </h2>
          <p className="mt-4 text-xl text-sand-100">
            Real safety. Healthcare that works. Schools your kids thrive in.
            Seven hours from New York, with Europe in your backyard.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-terracotta-600 font-semibold rounded-lg hover:bg-sand-100 transition-colors duration-200 text-lg"
            >
              Start the Conversation
            </Link>
            <Link
              href="/infrastructure"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-lg"
            >
              See What&apos;s Possible
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
