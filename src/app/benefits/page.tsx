import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Return on Life | Why Morocco | New Life Morocco',
  description: 'Beyond cost arbitrage: biological integrity, sanctuary frequency, and sovereign lifestyle. Why high-achieving Americans are choosing Morocco for the ultimate life upgrade.',
};

export default function BenefitsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-atlas-900 to-atlas-800 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-terracotta-400 font-medium tracking-wide uppercase text-sm">
              Beyond the Numbers
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              The Return on Life
            </h1>
            <p className="mt-6 text-xl text-sand-200 leading-relaxed">
              This isn&apos;t about &quot;cheap living.&quot; It&apos;s about reclaiming the lifestyle
              that used to be the American Dream—and finding it preserved in the Kingdom.
            </p>
          </div>
        </div>
      </section>

      {/* The Sovereign Lifestyle */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-terracotta-600 font-semibold uppercase text-sm tracking-wide">
                The Purchasing Power Upgrade
              </span>
              <h2 className="mt-2 text-3xl font-bold text-atlas-900 mb-6">
                The Sovereign Lifestyle Standard
              </h2>
              <p className="text-atlas-700 mb-4">
                In the US, private household staff, organic farm-to-table meals, and concierge
                healthcare are 1% luxuries. In Morocco, they&apos;re the standard for families
                who&apos;ve made the move.
              </p>
              <p className="text-atlas-700 mb-6">
                Your purchasing power doesn&apos;t just stretch here—it <strong>multiplies</strong>.
                The lifestyle that costs $250K in Austin or Denver? Unlocked at a fraction.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-olive-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-olive-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-atlas-900">Courtyard Riad or Modern Villa</h4>
                    <p className="text-atlas-600 text-sm">With rooftop terrace and private garden—not a cramped apartment</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-olive-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-olive-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-atlas-900">Private Household Staff</h4>
                    <p className="text-atlas-600 text-sm">Not a luxury—the middle-class standard for relocating families</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-olive-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-olive-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-atlas-900">Concierge Healthcare</h4>
                    <p className="text-atlas-600 text-sm">American Hospital networks, same-day appointments, zero wait times</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-atlas-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-6">The 10x Lifestyle Multiplier</h3>
              <p className="text-sand-300 mb-6">
                The same income that keeps you &quot;comfortable&quot; in the US unlocks a
                fundamentally different quality of life in Morocco.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-atlas-700">
                  <span className="text-sand-200">Organic, chemical-free food</span>
                  <span className="text-olive-400 font-semibold">Standard</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-atlas-700">
                  <span className="text-sand-200">Private household chef</span>
                  <span className="text-olive-400 font-semibold">Accessible</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-atlas-700">
                  <span className="text-sand-200">Same-day specialist appointments</span>
                  <span className="text-olive-400 font-semibold">Normal</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-atlas-700">
                  <span className="text-sand-200">Villa with rooftop terrace</span>
                  <span className="text-olive-400 font-semibold">Expected</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-sand-200">Weekly housekeeping service</span>
                  <span className="text-olive-400 font-semibold">Baseline</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biological Integrity */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-terracotta-600 font-semibold uppercase text-sm tracking-wide">
              The System Reset
            </span>
            <h2 className="text-3xl font-bold text-atlas-900 mb-4">
              Biological Integrity
            </h2>
            <p className="text-lg text-atlas-600 max-w-2xl mx-auto">
              Most of our clients report a physical &quot;system reset&quot; within their first month.
              The reason is simple: Morocco&apos;s food supply hasn&apos;t been industrialized.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-200">
              <div className="w-14 h-14 bg-olive-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-olive-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-atlas-900 mb-3">Sun-Ripened & Seasonal</h3>
              <p className="text-atlas-600">
                Produce is grown in actual sunlight, harvested in season, and sold within days.
                No 6-month cold storage. No artificial ripening chambers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-200">
              <div className="w-14 h-14 bg-olive-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-olive-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-atlas-900 mb-3">Chemical-Free Standard</h3>
              <p className="text-atlas-600">
                No PFAS. No bio-engineered additives. No industrial chemical load. The food
                supply here hasn&apos;t been &quot;optimized&quot; for shelf life over nutrition.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-200">
              <div className="w-14 h-14 bg-olive-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-olive-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-atlas-900 mb-3">The Physical Reset</h3>
              <p className="text-atlas-600">
                Clients report clearer skin, better sleep, improved digestion, and sustained
                energy—simply from eating real food grown in real soil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sanctuary Frequency */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-sand-50 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-atlas-900 mb-6">The Sanctuary Contrast</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-terracotta-600 font-medium mb-2">US Systemic Friction</h4>
                  <ul className="space-y-2 text-sm text-atlas-600">
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta-400 mt-1">•</span>
                      <span>Zero-tolerance bureaucracy (the &quot;Flagged Room&quot; experience)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta-400 mt-1">•</span>
                      <span>Social polarization and ambient hostility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta-400 mt-1">•</span>
                      <span>Rising costs with declining quality of life</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta-400 mt-1">•</span>
                      <span>Healthcare gatekeeping and 6-week wait times</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-olive-600 font-medium mb-2">Morocco Sanctuary Frequency</h4>
                  <ul className="space-y-2 text-sm text-atlas-600">
                    <li className="flex items-start gap-2">
                      <span className="text-olive-400 mt-1">•</span>
                      <span>Deep-rooted hospitality culture (Chabel)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-olive-400 mt-1">•</span>
                      <span>Communal vigilance and &quot;background peace&quot;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-olive-400 mt-1">•</span>
                      <span>200-year friendship with America honored</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-olive-400 mt-1">•</span>
                      <span>Same-day healthcare, zero gatekeeping</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-terracotta-600 font-semibold uppercase text-sm tracking-wide">
                The Ambient Reality
              </span>
              <h2 className="mt-2 text-3xl font-bold text-atlas-900 mb-6">
                Sanctuary Frequency
              </h2>
              <p className="text-atlas-700 mb-4">
                Safety isn&apos;t just about crime statistics. It&apos;s about the ambient energy
                of a place—the feeling of walking at night, the way strangers interact,
                the baseline trust in public spaces.
              </p>
              <p className="text-atlas-700 mb-4">
                Morocco&apos;s culture is built on communal vigilance and a deep-rooted law of
                hospitality. You will find a level of &quot;background peace&quot; here—especially
                at night and in public spaces—that has become a luxury in many American cities.
              </p>
              <p className="text-lg font-medium text-atlas-900">
                This isn&apos;t escapism. It&apos;s a strategic upgrade to a higher-frequency environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* California Soul Upgrade */}
      <section className="py-20 bg-atlas-900 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="text-terracotta-400 font-semibold uppercase text-sm tracking-wide">
              The Lifestyle Continuity
            </span>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              California Soul, Preserved
            </h2>
            <p className="mt-4 text-lg text-sand-200">
              You&apos;re not sacrificing your wellness routine. You&apos;re upgrading the quality
              of the inputs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-atlas-800/50 rounded-xl p-8 border border-atlas-700">
              <h3 className="text-terracotta-400 font-semibold text-lg mb-3">Surf & Yoga Culture</h3>
              <p className="text-sand-200">
                Taghazout is world-class surf with zero Venice Beach crowds. Essaouira has the
                yoga retreats without the $300/night price tag.
              </p>
            </div>
            <div className="bg-atlas-800/50 rounded-xl p-8 border border-atlas-700">
              <h3 className="text-olive-400 font-semibold text-lg mb-3">Elite Wellness Studios</h3>
              <p className="text-sand-200">
                Pilates, CrossFit, and boutique fitness in Casablanca and Marrakech. The
                same high-vibration wellness, without the LA markup.
              </p>
            </div>
            <div className="bg-atlas-800/50 rounded-xl p-8 border border-atlas-700">
              <h3 className="text-terracotta-400 font-semibold text-lg mb-3">Farm-to-Table Standard</h3>
              <p className="text-sand-200">
                What costs $40/plate in Austin is the baseline here. Organic, seasonal,
                locally sourced—because that&apos;s just how food works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Position */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-terracotta-600 font-semibold uppercase text-sm tracking-wide">
              The Strategic Position
            </span>
            <h2 className="text-3xl font-bold text-atlas-900 mb-4">
              Your Global Base
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-terracotta-600 mb-2">6.5h</div>
              <div className="text-atlas-900 font-medium">To NYC</div>
              <div className="text-atlas-500 text-sm">Closer than Hawaii</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-terracotta-600 mb-2">2h</div>
              <div className="text-atlas-900 font-medium">To Paris</div>
              <div className="text-atlas-500 text-sm">Europe is your backyard</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-terracotta-600 mb-2">GMT+1</div>
              <div className="text-atlas-900 font-medium">Time Zone</div>
              <div className="text-atlas-500 text-sm">Perfect for US remote work</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-terracotta-600 mb-2">90</div>
              <div className="text-atlas-900 font-medium">Days Visa-Free</div>
              <div className="text-atlas-500 text-sm">Explore before committing</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-terracotta-600 to-terracotta-700">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Calculate Your Return on Life?
          </h2>
          <p className="mt-4 text-xl text-sand-100">
            Every family&apos;s transition is unique. Let&apos;s discuss your specific situation
            and map out what&apos;s possible.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-terracotta-600 font-semibold rounded-lg hover:bg-sand-100 transition-colors duration-200 text-lg"
            >
              Request Your Strategic Roadmap
            </Link>
            <Link
              href="/checklist"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-lg"
            >
              Take the Readiness Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
