import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          HERO: The Modern Kingdom / 2030 Vision
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-atlas-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-terracotta-400 font-medium uppercase tracking-wider text-sm">
              6.5 Hours from NYC · Closer than Hawaii
            </span>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              Morocco 2030:
              <span className="block text-terracotta-400">Don&apos;t Just Visit the Future. Own It.</span>
            </h1>
            <p className="mt-8 text-xl text-sand-200 max-w-3xl mx-auto leading-relaxed">
              200 MPH High-Speed Rail. US-Accredited Schools. American Hospital Networks.
              The high-vibration sanctuary for American families and global professionals.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/checklist" className="btn-primary text-center">
                Take the Readiness Audit
              </Link>
              <Link href="/pulse" className="btn-secondary text-center">
                See the Momentum
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          GLOBAL PULSE: The Momentum Ticker
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-10 bg-atlas-950 border-y border-atlas-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-olive-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-olive-500"></span>
              </span>
              <h2 className="text-sm font-semibold text-sand-200 uppercase tracking-wide">
                Global Pulse: Tracking the Momentum
              </h2>
            </div>
            <Link href="/pulse" className="text-sm text-terracotta-400 hover:text-terracotta-300 font-medium">
              Full Intel →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-atlas-900/50 rounded-lg p-4 border border-atlas-700/50">
              <span className="text-xs text-terracotta-400 font-medium">The Icon</span>
              <p className="text-sm text-sand-100 mt-1">
                &quot;I don&apos;t want to leave.&quot; — Madonna shares her Marrakech sanctuary with 19M+ followers.
              </p>
            </div>
            <div className="bg-atlas-900/50 rounded-lg p-4 border border-atlas-700/50">
              <span className="text-xs text-olive-400 font-medium">The Talent</span>
              <p className="text-sm text-sand-100 mt-1">
                The Choice of a Generation — NYT on why Brahim Diaz chose the Atlas Lions over Spain.
              </p>
            </div>
            <div className="bg-atlas-900/50 rounded-lg p-4 border border-atlas-700/50">
              <span className="text-xs text-terracotta-400 font-medium">2030 Vision</span>
              <p className="text-sm text-sand-100 mt-1">
                FIFA confirms Morocco as centerpiece for the most ambitious World Cup in history.
              </p>
            </div>
            <div className="bg-atlas-900/50 rounded-lg p-4 border border-atlas-700/50">
              <span className="text-xs text-olive-400 font-medium">The Growth</span>
              <p className="text-sm text-sand-100 mt-1">
                Oracle &amp; Google Cloud announce new R&amp;D centers in Casablanca Finance City.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          THE INFRASTRUCTURE PILLAR: The Modern Backbone
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-terracotta-600 font-semibold uppercase text-sm tracking-wide">
              The Modern Backbone
            </span>
            <h2 className="mt-2 text-3xl font-bold text-atlas-900 sm:text-4xl">
              Infrastructure That Rivals Europe
            </h2>
            <p className="mt-4 text-lg text-atlas-600 max-w-2xl mx-auto">
              This isn&apos;t a developing nation. This is a strategic hub with world-class systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* High-Speed Mobility */}
            <div className="bg-sand-50 rounded-2xl p-8 border border-sand-200">
              <div className="w-14 h-14 bg-atlas-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-3">High-Speed Mobility</h3>
              <p className="text-atlas-600 mb-4">
                Africa&apos;s only 320 km/h high-speed rail. Tangier to Casablanca in 80 minutes.
                Amtrak&apos;s Acela averages 109 km/h.
              </p>
              <div className="bg-white rounded-lg p-3 border border-sand-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-atlas-500">Al-Boraq TGV</span>
                  <span className="text-lg font-bold text-terracotta-600">320 km/h</span>
                </div>
              </div>
            </div>

            {/* Medical Sovereignty */}
            <div className="bg-sand-50 rounded-2xl p-8 border border-sand-200">
              <div className="w-14 h-14 bg-atlas-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-3">Medical Sovereignty</h3>
              <p className="text-atlas-600 mb-4">
                American Hospital of Casablanca. Akdital network with Mayo Clinic Care Network access.
                Same-week specialist appointments.
              </p>
              <div className="bg-white rounded-lg p-3 border border-sand-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-atlas-500">Cost vs. US</span>
                  <span className="text-lg font-bold text-olive-600">15%</span>
                </div>
              </div>
            </div>

            {/* Academic Excellence */}
            <div className="bg-sand-50 rounded-2xl p-8 border border-sand-200">
              <div className="w-14 h-14 bg-atlas-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-3">Academic Excellence</h3>
              <p className="text-atlas-600 mb-4">
                5 accredited American schools. US High School Diplomas. IB programmes.
                Direct paths to Ivy League universities.
              </p>
              <div className="bg-white rounded-lg p-3 border border-sand-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-atlas-500">AST Founded</span>
                  <span className="text-lg font-bold text-terracotta-600">1950</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/infrastructure" className="text-terracotta-600 hover:text-terracotta-700 font-medium">
              Explore the Full Infrastructure →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          THE GEOPOLITICAL ANCHOR: 200-Year Friendship
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-atlas-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-terracotta-400 font-semibold uppercase text-sm tracking-wide">
                The Geopolitical Anchor
              </span>
              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                You&apos;re Not Moving to a Foreign Land.
                <span className="block text-terracotta-400">You&apos;re Moving to an Old Friend.</span>
              </h2>
              <p className="mt-6 text-lg text-sand-200">
                In 1777, Morocco became the first country to recognize the United States.
                The Tangier American Legation—gifted in 1821—is the only U.S. National Historic
                Landmark on foreign soil.
              </p>
              <p className="mt-4 text-lg text-sand-300">
                As a Major Non-NATO Ally, Morocco is the most stable US partner in the Mediterranean.
                This isn&apos;t tourism. This is a 200-year strategic alliance.
              </p>
              <div className="mt-8">
                <Link
                  href="/tangier"
                  className="text-terracotta-400 hover:text-terracotta-300 font-medium"
                >
                  Discover Tangier: The American Gateway →
                </Link>
              </div>
            </div>
            <div className="bg-atlas-800/50 rounded-2xl p-8 border border-atlas-700">
              <h3 className="text-lg font-bold text-white mb-6">The Morocco-US Timeline</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-terracotta-400 font-bold text-lg w-16 shrink-0">1777</div>
                  <div className="text-sand-300">First nation to recognize American independence</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-terracotta-400 font-bold text-lg w-16 shrink-0">1786</div>
                  <div className="text-sand-300">Longest unbroken treaty in U.S. history signed</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-terracotta-400 font-bold text-lg w-16 shrink-0">1821</div>
                  <div className="text-sand-300">Tangier Legation gifted to the United States</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-terracotta-400 font-bold text-lg w-16 shrink-0">2004</div>
                  <div className="text-sand-300">Designated Major Non-NATO Ally</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-terracotta-400 font-bold text-lg w-16 shrink-0">2030</div>
                  <div className="text-sand-300">World Cup co-host with Spain &amp; Portugal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          THE READINESS AUDIT: Creates the Need
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-terracotta-600 font-semibold uppercase text-sm tracking-wide">
              The Sovereign Transition
            </span>
            <h2 className="mt-2 text-3xl font-bold text-atlas-900 sm:text-4xl">
              Are You Actually Ready?
            </h2>
            <p className="mt-4 text-lg text-atlas-600 max-w-2xl mx-auto">
              Success in the Kingdom is 90% preparation and 10% execution.
              Most people fail because they treat relocation like a vacation.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-sand-200">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'FBI clearance with Federal Apostille?',
                  'Convertible Dirham banking strategy?',
                  'American School seat secured?',
                  '90-day clock Phase II plan?',
                  'Lease meets Legalization standards?',
                  'Proof of Income correctly framed?',
                  'Tier-1 clinic mapped to residence?',
                  'Al-Boraq corridor proximity?',
                  'Prefecture advocate lined up?',
                  'Full document audit complete?',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-sand-50 rounded-lg">
                    <div className="w-5 h-5 rounded border-2 border-atlas-300 flex-shrink-0" />
                    <span className="text-sm text-atlas-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-sand-200 text-center">
                <p className="text-atlas-600 mb-4">
                  If you can&apos;t check 8 of these boxes, <strong>you aren&apos;t ready to board the plane.</strong>
                </p>
                <Link
                  href="/checklist"
                  className="inline-block px-8 py-4 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors"
                >
                  Take the Full Readiness Audit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          THE "SKIP THE LINE" OFFER: 3-Phase Process
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-terracotta-600 font-semibold uppercase text-sm tracking-wide">
              The Skip-the-Line Strategy
            </span>
            <h2 className="mt-2 text-3xl font-bold text-atlas-900 sm:text-4xl">
              Your First 90 Days on the Terrace, Not in a Waiting Room
            </h2>
            <p className="mt-4 text-lg text-atlas-600 max-w-2xl mx-auto">
              Like TSA PreCheck for your international life. We handle the friction
              so you can focus on your family, your career, and your new community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-terracotta-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                I
              </div>
              <div className="bg-sand-50 rounded-2xl p-8 pt-12 border border-sand-200 h-full">
                <h3 className="text-xl font-bold text-atlas-900 mb-3">Pre-Flight Audit</h3>
                <p className="text-atlas-600 mb-4">
                  US-side document integrity. FBI clearances, Federal Apostilles, and the specific
                  paperwork most people discover they&apos;re missing after arrival.
                </p>
                <p className="text-sm text-terracotta-600 font-medium">
                  Before you leave American soil
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-terracotta-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                II
              </div>
              <div className="bg-sand-50 rounded-2xl p-8 pt-12 border border-sand-200 h-full">
                <h3 className="text-xl font-bold text-atlas-900 mb-3">In-Country Navigation</h3>
                <p className="text-atlas-600 mb-4">
                  English-speaking advocacy at banks, clinics, and administrative offices.
                  We speak the language of the system so you don&apos;t have to.
                </p>
                <p className="text-sm text-terracotta-600 font-medium">
                  Your boots on the ground
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-terracotta-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                III
              </div>
              <div className="bg-sand-50 rounded-2xl p-8 pt-12 border border-sand-200 h-full">
                <h3 className="text-xl font-bold text-atlas-900 mb-3">Residency Activation</h3>
                <p className="text-atlas-600 mb-4">
                  Prefecture navigation, Carte de Séjour processing, and follow-through
                  until the Key to the Kingdom is in your hands.
                </p>
                <p className="text-sm text-terracotta-600 font-medium">
                  The finish line
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="text-terracotta-600 hover:text-terracotta-700 font-medium"
            >
              View Full Service Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          THE FIRM: Faceless Authority
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-atlas-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <span className="text-terracotta-400 font-semibold uppercase text-sm tracking-wide">
            The Firm
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            We Don&apos;t Just Know the Kingdom.
            <span className="block text-sand-300">We Understand Your Expectations.</span>
          </h2>
          <p className="mt-6 text-lg text-sand-200 max-w-2xl mx-auto">
            Most relocation services are built on paperwork. We are built on advocacy.
            While you focus on your career, your children&apos;s transition, and your vision for 2030,
            we are at the Prefecture, the Bank, and the Ministry.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors"
            >
              Request a Strategy Session
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-transparent border-2 border-sand-300 text-sand-100 font-semibold rounded-lg hover:bg-sand-300/10 transition-colors"
            >
              Our Philosophy
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          THE CLOSING: Morocco is a Strategy
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-atlas-950 border-t border-atlas-800">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <p className="text-xl text-terracotta-400 font-medium mb-2">
            Morocco is no longer a secret. It&apos;s a strategy.
          </p>
          <p className="text-sand-400">
            The World Cup is coming. The high-speed rail is running. The elite are arriving.
            The window is open. For now.
          </p>
        </div>
      </section>
    </>
  );
}
