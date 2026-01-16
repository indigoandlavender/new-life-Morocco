import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          HERO: New Beginnings
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-atlas-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              Better Infrastructure Than Portugal. Safer Than Mexico.
              <span className="block text-terracotta-400 mt-2">And You&apos;ve Never Considered It.</span>
            </h1>
            <p className="mt-8 text-xl text-sand-200 max-w-3xl mx-auto leading-relaxed">
              Welcome to Morocco! 7 hours from New York. American schools. High-speed rail.
              And the peace of mind you&apos;ve been searching for.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-center">
                Start the Conversation
              </Link>
              <Link href="/infrastructure" className="btn-secondary text-center">
                See What&apos;s Possible
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          WHAT FAMILIES FIND: The Reality Check
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-10 bg-atlas-950 border-y border-atlas-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-atlas-900/50 rounded-lg p-4 border border-atlas-700/50">
              <span className="text-xs text-olive-400 font-medium">Safety</span>
              <p className="text-sm text-sand-100 mt-1">
                &quot;For the first time in years, I don&apos;t think about safety. I just live.&quot;
              </p>
            </div>
            <div className="bg-atlas-900/50 rounded-lg p-4 border border-atlas-700/50">
              <span className="text-xs text-olive-400 font-medium">Healthcare</span>
              <p className="text-sm text-sand-100 mt-1">
                Same-day specialist appointments. MRI for $200. No insurance battles.
              </p>
            </div>
            <div className="bg-atlas-900/50 rounded-lg p-4 border border-atlas-700/50">
              <span className="text-xs text-olive-400 font-medium">Education</span>
              <p className="text-sm text-sand-100 mt-1">
                American-accredited schools. IB programs. Graduates at Ivy League universities.
              </p>
            </div>
            <div className="bg-atlas-900/50 rounded-lg p-4 border border-atlas-700/50">
              <span className="text-xs text-olive-400 font-medium">Proximity</span>
              <p className="text-sm text-sand-100 mt-1">
                7 hours to New York. 2 hours to Paris. You&apos;re not disappearing—you&apos;re repositioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          YOUR LIFE WORKS HERE
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-atlas-500 font-semibold uppercase text-sm tracking-wider">
              No Compromises
            </span>
            <h2 className="mt-2 text-3xl font-bold text-atlas-900 sm:text-4xl">
              Everything Your Family Needs Is Here
            </h2>
            <p className="mt-4 text-lg text-atlas-600 max-w-2xl mx-auto">
              A fresh start shouldn&apos;t mean starting over. Your career continues. Your kids stay on track. Your health is covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Healthcare */}
            <div className="bg-sand-50 rounded-2xl p-8 border border-sand-200">
              <div className="w-14 h-14 bg-atlas-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-3">Your Health, Covered</h3>
              <p className="text-atlas-600 mb-4">
                American-trained doctors. Mayo Clinic Care Network members.
                Same-day appointments. No $5,000 deductibles. No insurance battles.
              </p>
              <div className="bg-white rounded-lg p-3 border border-sand-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-atlas-500">MRI Scan</span>
                  <span className="text-lg font-bold text-olive-600">$150-300</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-sand-50 rounded-2xl p-8 border border-sand-200">
              <div className="w-14 h-14 bg-atlas-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-3">Your Kids, On Track</h3>
              <p className="text-atlas-600 mb-4">
                5 American-accredited schools. US diplomas. IB programs.
                Your kids apply to the same colleges—no gap year required.
              </p>
              <div className="bg-white rounded-lg p-3 border border-sand-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-atlas-500">American Schools</span>
                  <span className="text-lg font-bold text-atlas-900">Since 1950</span>
                </div>
              </div>
            </div>

            {/* Connectivity */}
            <div className="bg-sand-50 rounded-2xl p-8 border border-sand-200">
              <div className="w-14 h-14 bg-atlas-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-3">Your Work, Uninterrupted</h3>
              <p className="text-atlas-600 mb-4">
                5G nationwide. Gigabit fiber. Your Zoom calls don&apos;t drop.
                Your remote job stays remote. Your trades execute.
              </p>
              <div className="bg-white rounded-lg p-3 border border-sand-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-atlas-500">Fiber Internet</span>
                  <span className="text-lg font-bold text-olive-600">$30-50/mo</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/infrastructure" className="text-atlas-700 hover:text-atlas-900 font-medium underline underline-offset-4">
              See the Full Picture →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          A WELCOMING HISTORY
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-atlas-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
            <span className="text-sand-400 font-semibold uppercase text-sm tracking-wider">
                You&apos;re Welcome Here
              </span>
              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                America&apos;s Oldest Friend
                <span className="block text-terracotta-400">Has Always Been Here</span>
              </h2>
              <p className="mt-6 text-lg text-sand-200">
                In 1777, Morocco became the first country to recognize the United States.
                The Tangier American Legation—gifted in 1821—is the only U.S. National Historic
                Landmark on foreign soil.
              </p>
              <p className="mt-4 text-lg text-sand-300">
                This isn&apos;t a place where Americans are tolerated. It&apos;s a place where Americans
                have been welcomed for 250 years. The longest unbroken friendship in U.S. history.
              </p>
              <div className="mt-8">
                <Link
                  href="/why-morocco"
                  className="text-sand-300 hover:text-white font-medium underline underline-offset-4"
                >
                  Why American Families Choose This →
                </Link>
              </div>
            </div>
            <div className="bg-atlas-800/50 rounded-2xl p-8 border border-atlas-700">
              <h3 className="text-lg font-bold text-white mb-6">A 250-Year Welcome</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-white font-bold text-lg w-16 shrink-0">1777</div>
                  <div className="text-sand-300">First nation to recognize American independence</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-white font-bold text-lg w-16 shrink-0">1786</div>
                  <div className="text-sand-300">Longest unbroken treaty in U.S. history signed</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-white font-bold text-lg w-16 shrink-0">1821</div>
                  <div className="text-sand-300">Tangier Legation gifted to the United States</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-white font-bold text-lg w-16 shrink-0">1950</div>
                  <div className="text-sand-300">American School of Tangier founded</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-white font-bold text-lg w-16 shrink-0">Today</div>
                  <div className="text-sand-300">American families building new lives here</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CLOSE ENOUGH TO COME HOME
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white border-y border-sand-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-atlas-500 font-semibold uppercase text-sm tracking-wider">
              A New Beginning, Not a Goodbye
            </span>
            <h2 className="mt-2 text-3xl font-bold text-atlas-900">
              Close Enough to Come Home Whenever You Need
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-atlas-900 mb-2">7h</div>
              <div className="text-lg font-medium text-atlas-900 mb-1">To New York</div>
              <p className="text-atlas-600 text-sm">Family emergency? You&apos;re there by morning. Grandma&apos;s birthday? You&apos;re there.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-olive-600 mb-2">2h</div>
              <div className="text-lg font-medium text-atlas-900 mb-1">To London / Paris</div>
              <p className="text-atlas-600 text-sm">Europe becomes your weekend. Paris for dinner. London for theater.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-atlas-700 mb-2">5h</div>
              <div className="text-lg font-medium text-atlas-900 mb-1">Time Zone Overlap</div>
              <p className="text-atlas-600 text-sm">9am-2pm overlap with the East Coast. You stay connected. No 3am calls.</p>
            </div>
          </div>
          <p className="mt-10 text-center text-atlas-700 max-w-2xl mx-auto">
            Thailand is 20+ hours away. Bali means missing holidays. Portugal is overcrowded.
            <strong className="text-atlas-900"> Here, you&apos;re not disappearing. You&apos;re repositioning—close enough to come home, far enough to breathe.</strong>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          REAL PEACE OF MIND
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-atlas-500 font-semibold uppercase text-sm tracking-wider">
                Real Peace of Mind
              </span>
              <h2 className="mt-2 text-3xl font-bold text-atlas-900 sm:text-4xl">
                The Safety You&apos;ve Been Missing
              </h2>
              <p className="mt-6 text-lg text-atlas-700">
                No more school shooting drills. No more checking crime maps before choosing a neighborhood.
                No more background anxiety about what could happen.
              </p>
              <p className="mt-4 text-lg text-atlas-700">
                Here, your kids walk to school. You walk anywhere, anytime. The doors don&apos;t need three locks.
                <strong> The peace of mind isn&apos;t a gated illusion—it&apos;s real.</strong>
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-olive-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-atlas-700">Walk anywhere, anytime—medinas at midnight</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-olive-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-atlas-700">Strict gun control. Near-zero gun violence.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-olive-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-atlas-700">25+ years of stability. No civil unrest.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-atlas-900 text-white px-6 py-4">
                <h3 className="font-bold">A Different Reality</h3>
              </div>
              <div className="divide-y divide-sand-200">
                <div className="grid grid-cols-3 px-6 py-4 bg-sand-50 font-semibold text-sm">
                  <div className="text-atlas-700">Factor</div>
                  <div className="text-center text-atlas-700">Mexico</div>
                  <div className="text-center text-atlas-700">Here</div>
                </div>
                <div className="grid grid-cols-3 px-6 py-4 text-sm">
                  <div className="text-atlas-700">Cartel Activity</div>
                  <div className="text-center text-terracotta-600">High</div>
                  <div className="text-center text-olive-600 font-semibold">None</div>
                </div>
                <div className="grid grid-cols-3 px-6 py-4 text-sm bg-sand-50">
                  <div className="text-atlas-700">Kidnapping Risk</div>
                  <div className="text-center text-terracotta-600">Elevated</div>
                  <div className="text-center text-olive-600 font-semibold">Negligible</div>
                </div>
                <div className="grid grid-cols-3 px-6 py-4 text-sm">
                  <div className="text-atlas-700">Gun Violence</div>
                  <div className="text-center text-terracotta-600">High</div>
                  <div className="text-center text-olive-600 font-semibold">Near Zero</div>
                </div>
                <div className="grid grid-cols-3 px-6 py-4 text-sm bg-sand-50">
                  <div className="text-atlas-700">Walking at Night</div>
                  <div className="text-center text-terracotta-600">Area-Dependent</div>
                  <div className="text-center text-olive-600 font-semibold">Everywhere</div>
                </div>
                <div className="grid grid-cols-3 px-6 py-4 text-sm">
                  <div className="text-atlas-700">Your Reality</div>
                  <div className="text-center text-atlas-500">Gated Bubble</div>
                  <div className="text-center text-olive-600 font-semibold">Real Freedom</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          ARE YOU READY?
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-atlas-500 font-semibold uppercase text-sm tracking-wider">
              Your Transition
            </span>
            <h2 className="mt-2 text-3xl font-bold text-atlas-900 sm:text-4xl">
              Making It Real Takes Preparation
            </h2>
            <p className="mt-4 text-lg text-atlas-600 max-w-2xl mx-auto">
              The new beginning is closer than you think. But getting there smoothly
              requires the right paperwork, the right planning, and the right partner.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-sand-200">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Background checks with proper apostille?',
                  'Banking structure that protects your money?',
                  'School enrollment timeline mapped?',
                  'Visa strategy for your situation?',
                  'Housing that meets legal requirements?',
                  'Income documentation correctly framed?',
                  'Healthcare facilities identified?',
                  'Transportation options understood?',
                  'Someone to advocate at government offices?',
                  'Complete document audit done?',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-sand-50 rounded-lg">
                    <div className="w-5 h-5 rounded border-2 border-atlas-300 flex-shrink-0" />
                    <span className="text-sm text-atlas-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-sand-200 text-center">
                <p className="text-atlas-600 mb-4">
                  Don&apos;t worry if you can&apos;t check all these boxes yet. <strong>That&apos;s what we help with.</strong>
                </p>
                <Link
                  href="/checklist"
                  className="inline-block px-8 py-4 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors"
                >
                  See Where You Stand
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          HOW WE HELP
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-atlas-500 font-semibold uppercase text-sm tracking-wider">
              You Don&apos;t Have to Figure This Out Alone
            </span>
            <h2 className="mt-2 text-3xl font-bold text-atlas-900 sm:text-4xl">
              We Handle the Complexity So You Can Focus on Your New Life
            </h2>
            <p className="mt-4 text-lg text-atlas-600 max-w-2xl mx-auto">
              Your first days should be spent exploring your new neighborhood,
              not sitting in government offices. We clear the path.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-terracotta-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                1
              </div>
              <div className="bg-sand-50 rounded-2xl p-8 pt-12 border border-sand-200 h-full">
                <h3 className="text-xl font-bold text-atlas-900 mb-3">Before You Leave</h3>
                <p className="text-atlas-600 mb-4">
                  Document audit. Background checks. Apostilles. Everything you need
                  prepared correctly—so nothing surprises you after arrival.
                </p>
                <p className="text-sm text-atlas-600 font-semibold">
                  Start your journey right
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-terracotta-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                2
              </div>
              <div className="bg-sand-50 rounded-2xl p-8 pt-12 border border-sand-200 h-full">
                <h3 className="text-xl font-bold text-atlas-900 mb-3">When You Arrive</h3>
                <p className="text-atlas-600 mb-4">
                  English-speaking advocacy at banks, government offices, and healthcare facilities.
                  Someone in your corner who knows the system.
                </p>
                <p className="text-sm text-atlas-600 font-semibold">
                  You&apos;re not alone
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-terracotta-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                3
              </div>
              <div className="bg-sand-50 rounded-2xl p-8 pt-12 border border-sand-200 h-full">
                <h3 className="text-xl font-bold text-atlas-900 mb-3">Until You&apos;re Settled</h3>
                <p className="text-atlas-600 mb-4">
                  Residency processing. Bank accounts. School enrollment.
                  We stay with you until your new life is fully operational.
                </p>
                <p className="text-sm text-atlas-600 font-semibold">
                  The finish line
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="text-atlas-700 hover:text-atlas-900 font-medium underline underline-offset-4"
            >
              See How We Help →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          YOUR PARTNER
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-atlas-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <span className="text-sand-400 font-semibold uppercase text-sm tracking-wider">
            Your Partner in This
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            We Help American Families
            <span className="block text-sand-300">Build New Lives Here</span>
          </h2>
          <p className="mt-6 text-lg text-sand-200 max-w-2xl mx-auto">
            We don&apos;t sell real estate. We don&apos;t take commissions.
            We provide the human advocacy that makes your transition smooth—
            so you can focus on your family, your work, and your new beginning.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors"
            >
              Start the Conversation
            </Link>
            <Link
              href="/infrastructure"
              className="px-8 py-4 bg-transparent border-2 border-sand-300 text-sand-100 font-semibold rounded-lg hover:bg-sand-300/10 transition-colors"
            >
              See What&apos;s Possible →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          THE CLOSING: Your Fresh Start
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-atlas-950 border-t border-atlas-800">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <p className="text-xl text-terracotta-400 font-medium mb-2">
            Your fresh start is closer than you think.
          </p>
          <p className="text-sand-400">
            Seven hours from New York. Real peace of mind. A life that actually works.
            The new beginning is waiting.
          </p>
        </div>
      </section>
    </>
  );
}
