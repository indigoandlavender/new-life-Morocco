import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          HERO: Attention
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-atlas-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              Better Infrastructure Than Portugal. Safer Than Mexico.
              <span className="block text-terracotta-400 mt-2">And You&apos;ve Never Considered It.</span>
            </h1>
            <p className="mt-8 text-xl text-sand-200 max-w-3xl mx-auto leading-relaxed">
              Morocco. 7 hours from New York. American schools. High-speed rail.
              And the peace of mind you&apos;ve been searching for.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#guide" className="btn-primary text-center">
                Get the Free Guide
              </Link>
              <Link href="/why-morocco" className="btn-secondary text-center">
                Why Morocco?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          COMPARISON: Interest
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atlas-900 sm:text-4xl">
              The Destination You Haven&apos;t Compared
            </h2>
            <p className="mt-4 text-lg text-atlas-600 max-w-2xl mx-auto">
              Everyone looks at Portugal. Everyone worries about Mexico. Nobody&apos;s looking here—yet.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-sand-200">
            <div className="grid grid-cols-4 bg-atlas-900 text-white">
              <div className="px-6 py-4 font-semibold"></div>
              <div className="px-6 py-4 font-semibold text-center">Portugal</div>
              <div className="px-6 py-4 font-semibold text-center">Mexico</div>
              <div className="px-6 py-4 font-semibold text-center bg-terracotta-600">Morocco</div>
            </div>

            <div className="divide-y divide-sand-200">
              <div className="grid grid-cols-4 text-sm">
                <div className="px-6 py-4 font-medium text-atlas-900">Cost of Living</div>
                <div className="px-6 py-4 text-center text-atlas-600">Expensive</div>
                <div className="px-6 py-4 text-center text-atlas-600">Moderate</div>
                <div className="px-6 py-4 text-center font-semibold text-olive-600 bg-olive-50">3-5x Further</div>
              </div>
              <div className="grid grid-cols-4 text-sm bg-sand-50">
                <div className="px-6 py-4 font-medium text-atlas-900">Safety</div>
                <div className="px-6 py-4 text-center text-atlas-600">Good</div>
                <div className="px-6 py-4 text-center text-terracotta-600">Cartel Risk</div>
                <div className="px-6 py-4 text-center font-semibold text-olive-600 bg-olive-50">Excellent</div>
              </div>
              <div className="grid grid-cols-4 text-sm">
                <div className="px-6 py-4 font-medium text-atlas-900">High-Speed Rail</div>
                <div className="px-6 py-4 text-center text-atlas-600">Limited</div>
                <div className="px-6 py-4 text-center text-atlas-400">None</div>
                <div className="px-6 py-4 text-center font-semibold text-olive-600 bg-olive-50">200mph TGV</div>
              </div>
              <div className="grid grid-cols-4 text-sm bg-sand-50">
                <div className="px-6 py-4 font-medium text-atlas-900">US Time Zone Overlap</div>
                <div className="px-6 py-4 text-center text-atlas-600">4 hours</div>
                <div className="px-6 py-4 text-center text-atlas-600">Full</div>
                <div className="px-6 py-4 text-center font-semibold text-olive-600 bg-olive-50">5 hours</div>
              </div>
              <div className="grid grid-cols-4 text-sm">
                <div className="px-6 py-4 font-medium text-atlas-900">American Schools</div>
                <div className="px-6 py-4 text-center text-atlas-600">Few</div>
                <div className="px-6 py-4 text-center text-atlas-600">Some</div>
                <div className="px-6 py-4 text-center font-semibold text-olive-600 bg-olive-50">5+ Accredited</div>
              </div>
              <div className="grid grid-cols-4 text-sm bg-sand-50">
                <div className="px-6 py-4 font-medium text-atlas-900">Expat Saturation</div>
                <div className="px-6 py-4 text-center text-terracotta-600">Overcrowded</div>
                <div className="px-6 py-4 text-center text-atlas-600">High in spots</div>
                <div className="px-6 py-4 text-center font-semibold text-olive-600 bg-olive-50">Under Radar</div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/why-morocco" className="text-atlas-700 hover:text-atlas-900 font-medium underline underline-offset-4">
              See the Full Comparison →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          INFRASTRUCTURE TEASER: Desire
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atlas-900 sm:text-4xl">
              Infrastructure That Surprises
            </h2>
            <p className="mt-4 text-lg text-atlas-600">
              This isn&apos;t the Morocco you&apos;re imagining.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-sand-200 text-center">
              <div className="w-16 h-16 bg-atlas-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-2">Africa&apos;s Only High-Speed Rail</h3>
              <p className="text-atlas-600">Tangier to Casablanca in 2 hours. 200mph. French TGV technology.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-sand-200 text-center">
              <div className="w-16 h-16 bg-atlas-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-2">American-Accredited Schools</h3>
              <p className="text-atlas-600">US diplomas. IB programs. Ivy League acceptances.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-sand-200 text-center">
              <div className="w-16 h-16 bg-atlas-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-2">World-Class Healthcare</h3>
              <p className="text-atlas-600">Mayo Clinic network. Same-day appointments. No insurance battles.</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/infrastructure" className="text-atlas-700 hover:text-atlas-900 font-medium underline underline-offset-4">
              Explore the Infrastructure →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          GET THE GUIDE: Action (Primary Conversion)
          ═══════════════════════════════════════════════════════════════════ */}
      <section id="guide" className="py-20 bg-atlas-900">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get the Full Picture
            </h2>
            <p className="text-lg text-sand-200 mb-8 max-w-xl mx-auto">
              The complete guide to Morocco for American families. Cost breakdowns. School comparisons.
              Residency requirements. Everything you need to make an informed decision.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm
                buttonText="Send Me the Guide"
                source="homepage-guide"
              />
            </div>
            <p className="text-sand-400 text-sm mt-4">
              Free guide. No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          ROADMAP TEASER: Desire
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atlas-900 sm:text-4xl">
              The Path Forward
            </h2>
            <p className="mt-4 text-lg text-atlas-600">
              From decision to residency. We&apos;ve mapped every step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-terracotta-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-atlas-900 mb-2">Prepare</h3>
              <p className="text-atlas-600 text-sm">Documents. Background checks. Banking structure.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-terracotta-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-atlas-900 mb-2">Arrive</h3>
              <p className="text-atlas-600 text-sm">In-country advocacy. Bank accounts. School enrollment.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-terracotta-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-atlas-900 mb-2">Settle</h3>
              <p className="text-atlas-600 text-sm">Residency card. Full integration. Your new life begins.</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/services" className="text-atlas-700 hover:text-atlas-900 font-medium underline underline-offset-4">
              See How We Help →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FINAL CTA: Action (Secondary Conversion)
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-atlas-950">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Explore This?
          </h2>
          <p className="text-lg text-sand-300 mb-8">
            15-minute call. No pressure. Just answers to your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="#guide"
              className="px-8 py-4 bg-transparent border-2 border-sand-400 text-sand-200 font-semibold rounded-lg hover:bg-sand-400/10 transition-colors"
            >
              Get the Free Guide First
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
