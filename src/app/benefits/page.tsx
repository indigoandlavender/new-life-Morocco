import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A Better Quality of Life | Morocco Advisors',
  description: 'Better food, real safety, healthcare that works, and a pace of life that lets you actually live. What American families discover when they make the move.',
};

export default function BenefitsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-atlas-900 to-atlas-800 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sand-400 font-medium tracking-wider uppercase text-sm">
              What Families Discover
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              A Genuinely Better Quality of Life
            </h1>
            <p className="mt-6 text-xl text-sand-200 leading-relaxed">
              This isn&apos;t about &quot;cheap living.&quot; It&apos;s about getting back what matters:
              time with family, peace of mind, fresh food, and a pace of life that lets you breathe.
            </p>
          </div>
        </div>
      </section>

      {/* Your Money Goes Further */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-atlas-500 font-semibold uppercase text-sm tracking-wider">
                The Cost of Living
              </span>
              <h2 className="mt-2 text-3xl font-bold text-atlas-900 mb-6">
                Your Money Goes 3-5x Further
              </h2>
              <p className="text-atlas-700 mb-4">
                Things that feel like luxuries in the US—household help, fresh organic food,
                healthcare without long waits—are just normal here. It&apos;s not about
                &quot;cheap living.&quot; It&apos;s about getting more life for your money.
              </p>
              <p className="text-atlas-700 mb-6">
                Families tell us they&apos;re surprised how much better they live here on the
                same income that had them stressed at home.
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
              <h3 className="text-xl font-semibold mb-6">What Families Actually Experience</h3>
              <p className="text-sand-300 mb-6">
                The same income that keeps you stretched thin at home gives you breathing
                room here. Here&apos;s what that looks like in practice:
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

      {/* Better Food, Better Health */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-atlas-500 font-semibold uppercase text-sm tracking-wider">
              What Families Notice First
            </span>
            <h2 className="text-3xl font-bold text-atlas-900 mb-4">
              Better Food, Better Health
            </h2>
            <p className="text-lg text-atlas-600 max-w-2xl mx-auto">
              Families often tell us they feel physically different within the first few weeks.
              The reason is simple: the food here is just... food. Grown locally, sold fresh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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

          {/* US Food Supply Reality */}
          <div className="bg-white rounded-2xl p-8 border border-sand-200">
            <h4 className="text-lg font-bold text-atlas-900 mb-4">What You&apos;re Leaving Behind</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-semibold text-atlas-600 mb-3">The US Food Reality</h5>
                <ul className="space-y-2 text-sm text-atlas-600">
                  <li className="flex items-start gap-2">
                    <span className="text-terracotta-400 mt-0.5">•</span>
                    <span>85% of US honey is imported, much adulterated with corn syrup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terracotta-400 mt-0.5">•</span>
                    <span>PFAS &quot;forever chemicals&quot; found in 45% of US tap water</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terracotta-400 mt-0.5">•</span>
                    <span>Average supermarket tomato traveled 1,500 miles, picked green</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terracotta-400 mt-0.5">•</span>
                    <span>70% of US antibiotics go to livestock, not humans</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-olive-600 mb-3">The Morocco Default</h5>
                <ul className="space-y-2 text-sm text-atlas-600">
                  <li className="flex items-start gap-2">
                    <span className="text-olive-400 mt-0.5">•</span>
                    <span>Local souks sell produce harvested that morning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-olive-400 mt-0.5">•</span>
                    <span>Traditional farming methods, minimal industrial inputs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-olive-400 mt-0.5">•</span>
                    <span>Meat from local butchers, not factory farms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-olive-400 mt-0.5">•</span>
                    <span>Olive oil pressed from family groves, not blended commodities</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-atlas-700 text-center font-medium">
              This isn&apos;t &quot;organic premium pricing.&quot; This is just how food works when the system hasn&apos;t been corrupted.
            </p>
          </div>
        </div>
      </section>

      {/* Real Peace of Mind */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-sand-50 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-atlas-900 mb-6">What Changes</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-atlas-600 font-medium mb-2">What You Leave Behind</h4>
                  <ul className="space-y-2 text-sm text-atlas-600">
                    <li className="flex items-start gap-2">
                      <span className="text-atlas-400 mt-1">•</span>
                      <span>The constant low-level anxiety about safety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-atlas-400 mt-1">•</span>
                      <span>Feeling like everything is getting more tense</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-atlas-400 mt-1">•</span>
                      <span>Working harder but feeling like you&apos;re falling behind</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-atlas-400 mt-1">•</span>
                      <span>Healthcare that&apos;s expensive and hard to access</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-olive-600 font-medium mb-2">What You Find Here</h4>
                  <ul className="space-y-2 text-sm text-atlas-600">
                    <li className="flex items-start gap-2">
                      <span className="text-olive-400 mt-1">•</span>
                      <span>A culture built around hospitality and community</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-olive-400 mt-1">•</span>
                      <span>Kids playing outside without constant supervision</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-olive-400 mt-1">•</span>
                      <span>America&apos;s oldest ally—friendly to US families</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-olive-400 mt-1">•</span>
                      <span>Same-day doctor appointments that don&apos;t break the bank</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-atlas-500 font-semibold uppercase text-sm tracking-wider">
                The Feeling
              </span>
              <h2 className="mt-2 text-3xl font-bold text-atlas-900 mb-6">
                Real Peace of Mind
              </h2>
              <p className="text-atlas-700 mb-4">
                Safety isn&apos;t just about statistics. It&apos;s about how a place feels—
                the comfort of walking at night, the way strangers treat each other,
                whether you can relax in public spaces.
              </p>
              <p className="text-atlas-700 mb-4">
                There&apos;s a level of calm here—especially at night and in public spaces—
                that many American families say they&apos;d forgotten was possible.
              </p>
              <p className="text-lg font-medium text-atlas-900">
                It&apos;s not about escaping. It&apos;s about finding a place that feels like home should feel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Lifestyle, Upgraded */}
      <section className="py-20 bg-atlas-900 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="text-sand-400 font-semibold uppercase text-sm tracking-wider">
              What You Keep
            </span>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Your Lifestyle, Upgraded
            </h2>
            <p className="mt-4 text-lg text-sand-200">
              You don&apos;t have to give up the things you love. You just get them without
              the premium price tag.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-atlas-800/50 rounded-xl p-8 border border-atlas-700">
              <h3 className="text-sand-400 font-semibold text-lg mb-3">Beach & Wellness</h3>
              <p className="text-sand-200">
                World-class surf beaches, yoga retreats, and coastal towns—without the
                crowds or the California prices.
              </p>
            </div>
            <div className="bg-atlas-800/50 rounded-xl p-8 border border-atlas-700">
              <h3 className="text-olive-400 font-semibold text-lg mb-3">Modern Fitness</h3>
              <p className="text-sand-200">
                Pilates, CrossFit, gyms, and boutique fitness studios in every major city.
                Same quality, fraction of the cost.
              </p>
            </div>
            <div className="bg-atlas-800/50 rounded-xl p-8 border border-atlas-700">
              <h3 className="text-sand-400 font-semibold text-lg mb-3">Fresh, Local Food</h3>
              <p className="text-sand-200">
                What&apos;s a $40 &quot;farm-to-table&quot; experience in Austin is just... how food
                works here. Organic and seasonal by default.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Close Enough to Come Home */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-atlas-500 font-semibold uppercase text-sm tracking-wider">
              Not As Far As You Think
            </span>
            <h2 className="text-3xl font-bold text-atlas-900 mb-4">
              Close Enough to Come Home
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-atlas-900 mb-2">6.5h</div>
              <div className="text-atlas-900 font-medium">To NYC</div>
              <div className="text-atlas-500 text-sm">Closer than Hawaii</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-atlas-900 mb-2">2h</div>
              <div className="text-atlas-900 font-medium">To Paris</div>
              <div className="text-atlas-500 text-sm">Europe is your backyard</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-atlas-900 mb-2">GMT+1</div>
              <div className="text-atlas-900 font-medium">Time Zone</div>
              <div className="text-atlas-500 text-sm">Perfect for US remote work</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-atlas-900 mb-2">90</div>
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
            Ready to See What Life Could Look Like?
          </h2>
          <p className="mt-4 text-xl text-sand-100">
            Better food, real safety, healthcare that works, and a pace of life that
            lets you actually live. Let&apos;s talk about whether this is right for your family.
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
              See What&apos;s There
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
