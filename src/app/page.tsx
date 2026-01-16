import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';

export default function Home() {
  return (
    <div className="bg-sand-50">
      {/* ═══════════════════════════════════════════════════════════════════
          HERO: Full Screen, Dramatic
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center bg-atlas-900 overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-atlas-900/90 via-atlas-900/70 to-atlas-900" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center py-20">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight">
            Better Infrastructure Than Portugal.
            <span className="block mt-2">Safer Than Mexico.</span>
            <span className="block mt-4 text-terracotta-400 italic">And You&apos;ve Never Considered It.</span>
          </h1>
          <p className="mt-10 text-xl md:text-2xl text-sand-200 max-w-2xl mx-auto leading-relaxed font-light">
            Morocco. 7 hours from New York. American schools. High-speed rail.
            The peace of mind you&apos;ve been searching for.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#guide"
              className="px-10 py-4 bg-terracotta-500 text-white text-sm tracking-widest uppercase hover:bg-terracotta-600 transition-colors"
            >
              Get the Free Guide
            </Link>
            <Link
              href="/why-morocco"
              className="px-10 py-4 border border-sand-300 text-sand-200 text-sm tracking-widest uppercase hover:bg-sand-300/10 transition-colors"
            >
              Why Morocco?
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-sand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          THE QUESTION: Interest
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-atlas-900 leading-tight">
            What if the best-kept secret in expat relocation was hiding in plain sight?
          </h2>
          <p className="mt-8 text-lg text-atlas-600 leading-relaxed max-w-2xl mx-auto">
            Everyone looks at Portugal. Everyone worries about Mexico.
            Nobody&apos;s looking here—yet.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          COMPARISON: The Reveal
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-sand-100">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Portugal */}
            <div className="bg-white p-8 rounded-sm">
              <p className="text-xs tracking-widest uppercase text-atlas-400 mb-4">Portugal</p>
              <h3 className="font-serif text-2xl text-atlas-900 mb-6">The Obvious Choice</h3>
              <ul className="space-y-4 text-atlas-600">
                <li className="flex items-start gap-3">
                  <span className="text-terracotta-500">—</span>
                  <span>Expensive. Overcrowded.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta-500">—</span>
                  <span>Limited rail connections</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta-500">—</span>
                  <span>4-hour US time overlap</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta-500">—</span>
                  <span>Few American schools</span>
                </li>
              </ul>
            </div>

            {/* Mexico */}
            <div className="bg-white p-8 rounded-sm">
              <p className="text-xs tracking-widest uppercase text-atlas-400 mb-4">Mexico</p>
              <h3 className="font-serif text-2xl text-atlas-900 mb-6">The Familiar Choice</h3>
              <ul className="space-y-4 text-atlas-600">
                <li className="flex items-start gap-3">
                  <span className="text-terracotta-500">—</span>
                  <span>Cartel presence. Gated living.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta-500">—</span>
                  <span>No high-speed rail</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta-500">—</span>
                  <span>Full time zone overlap</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta-500">—</span>
                  <span>Some American schools</span>
                </li>
              </ul>
            </div>

            {/* Morocco */}
            <div className="bg-atlas-900 p-8 rounded-sm text-white">
              <p className="text-xs tracking-widest uppercase text-terracotta-400 mb-4">Morocco</p>
              <h3 className="font-serif text-2xl mb-6">The Discovery</h3>
              <ul className="space-y-4 text-sand-200">
                <li className="flex items-start gap-3">
                  <span className="text-terracotta-400">+</span>
                  <span>3-5x your purchasing power</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta-400">+</span>
                  <span>200mph TGV. Africa&apos;s only.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta-400">+</span>
                  <span>5-hour US time overlap</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta-400">+</span>
                  <span>5+ American-accredited schools</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/why-morocco"
              className="text-sm tracking-widest uppercase border-b border-atlas-900 pb-1 hover:opacity-60 transition-opacity"
            >
              See the Full Comparison
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          INFRASTRUCTURE: Desire (Dark Section)
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-atlas-950 text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] text-sand-500 mb-4">THE INFRASTRUCTURE</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              This isn&apos;t the Morocco you&apos;re imagining.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 border border-sand-700 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-terracotta-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-3">Africa&apos;s Only High-Speed Rail</h3>
              <p className="text-sand-400 text-sm leading-relaxed">
                Tangier to Casablanca. 2 hours. 200mph. French TGV technology.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 border border-sand-700 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-terracotta-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-3">American-Accredited Schools</h3>
              <p className="text-sand-400 text-sm leading-relaxed">
                US diplomas. IB programs. Graduates at Yale, Stanford, MIT.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 border border-sand-700 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-terracotta-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-3">World-Class Healthcare</h3>
              <p className="text-sand-400 text-sm leading-relaxed">
                Mayo Clinic network. Same-day appointments. MRI for $200.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/infrastructure"
              className="inline-block border border-sand-600 px-10 py-4 text-xs tracking-widest uppercase hover:bg-sand-600/20 transition-colors"
            >
              Explore the Infrastructure
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          GET THE GUIDE: Primary Conversion
          ═══════════════════════════════════════════════════════════════════ */}
      <section id="guide" className="py-24 bg-white">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.3em] text-atlas-400 mb-4">FREE GUIDE</p>
          <h2 className="font-serif text-4xl md:text-5xl text-atlas-900 leading-tight mb-6">
            Get the Full Picture
          </h2>
          <p className="text-lg text-atlas-600 mb-10 leading-relaxed">
            Cost breakdowns. School comparisons. Residency requirements.
            Everything you need to make an informed decision.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm
              buttonText="Send Me the Guide"
              source="homepage-guide"
            />
          </div>
          <p className="text-atlas-400 text-sm mt-6">
            Free guide. No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          THE ROADMAP: Big Numbers
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-sand-100">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-atlas-900 leading-tight">
              How does this actually work?
            </h2>
            <p className="mt-6 text-lg text-atlas-600">
              From decision to residency. We&apos;ve mapped every step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="font-serif text-8xl md:text-9xl text-atlas-200 mb-4">1</div>
              <h3 className="font-serif text-xl text-atlas-900 mb-3">Prepare</h3>
              <p className="text-atlas-600 text-sm">
                Documents. Background checks. Banking structure.
              </p>
            </div>

            <div className="text-center">
              <div className="font-serif text-8xl md:text-9xl text-atlas-200 mb-4">2</div>
              <h3 className="font-serif text-xl text-atlas-900 mb-3">Arrive</h3>
              <p className="text-atlas-600 text-sm">
                In-country advocacy. Bank accounts. School enrollment.
              </p>
            </div>

            <div className="text-center">
              <div className="font-serif text-8xl md:text-9xl text-atlas-200 mb-4">3</div>
              <h3 className="font-serif text-xl text-atlas-900 mb-3">Settle</h3>
              <p className="text-atlas-600 text-sm">
                Residency card. Full integration. Your new life begins.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/services"
              className="text-sm tracking-widest uppercase border-b border-atlas-900 pb-1 hover:opacity-60 transition-opacity"
            >
              See How We Help
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FINAL CTA: The Close
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-atlas-900">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6">
            Ready to explore this?
          </h2>
          <p className="text-xl text-sand-300 mb-10">
            15-minute call. No pressure. Just answers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-terracotta-500 text-white text-sm tracking-widest uppercase hover:bg-terracotta-600 transition-colors"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="#guide"
              className="px-10 py-4 border border-sand-400 text-sand-200 text-sm tracking-widest uppercase hover:bg-sand-400/10 transition-colors"
            >
              Get the Free Guide First
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
