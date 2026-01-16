import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Morocco? | The Smart Expat Choice | New Life Morocco',
  description: 'Why smart Americans are choosing Morocco over Costa Rica, Portugal, and Thailand. Discover the hidden gem that beats the usual expat spots on value, access, and lifestyle.',
};

export default function WhyMoroccoPage() {
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
              <div className="text-atlas-600 text-sm">Purchasing power</div>
              <div className="text-atlas-400 text-xs mt-1">vs. US cost of living</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-terracotta-600 mb-2">2h</div>
              <div className="text-atlas-600 text-sm">To Paris or Madrid</div>
              <div className="text-atlas-400 text-xs mt-1">$50 budget flights</div>
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
                Better Than Costa Rica
              </span>
              <h2 className="mt-2 text-3xl font-bold text-atlas-900 sm:text-4xl">
                The Luxury Arbitrage
              </h2>
              <div className="mt-6 space-y-4 text-atlas-700">
                <p>
                  Costa Rica has become &quot;Americanized&quot; and expensive. A nice villa in Nosara
                  or Escazu costs nearly US prices. The &quot;Pura Vida&quot; lifestyle now comes with
                  Silicon Valley rent.
                </p>
                <p>
                  Morocco offers something Costa Rica can&apos;t: <strong>true luxury arbitrage</strong>.
                </p>
                <p className="text-lg font-medium text-atlas-900">
                  For the price of a 1-bedroom apartment in San Jose (CR), you can live in a
                  palatial Riad with a courtyard, fountain, and rooftop terrace.
                </p>
                <p>
                  Labor is affordable. Having a private chef or a housekeeper isn&apos;t a 1% luxury
                  in Morocco—it&apos;s a standard middle-class reality. Your dollars stretch 10x further,
                  and you live like royalty.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-lg font-semibold text-atlas-900 mb-4">Monthly Cost Comparison</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-atlas-700">Beautiful 2BR Home</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="text-sm text-atlas-500 mb-1">Morocco</div>
                      <div className="text-xl font-bold text-olive-600">$500-800</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-atlas-500 mb-1">Costa Rica</div>
                      <div className="text-xl font-bold text-atlas-400">$1,500-2,500</div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-sand-200 pt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-atlas-700">Private Chef (per month)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="text-sm text-atlas-500 mb-1">Morocco</div>
                      <div className="text-xl font-bold text-olive-600">$300-500</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-atlas-500 mb-1">Costa Rica</div>
                      <div className="text-xl font-bold text-atlas-400">$1,500+</div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-sand-200 pt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-atlas-700">Housekeeper (weekly)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="text-sm text-atlas-500 mb-1">Morocco</div>
                      <div className="text-xl font-bold text-olive-600">$100-150</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-atlas-500 mb-1">Costa Rica</div>
                      <div className="text-xl font-bold text-atlas-400">$400-600</div>
                    </div>
                  </div>
                </div>
              </div>
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
                    <td className="px-6 py-4 font-medium text-atlas-900">Cost of Living</td>
                    <td className="px-6 py-4 text-center text-olive-600 font-semibold">Very Low</td>
                    <td className="px-6 py-4 text-center text-atlas-400">High</td>
                    <td className="px-6 py-4 text-center text-olive-600">Low</td>
                    <td className="px-6 py-4 text-center text-atlas-600">Medium</td>
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-terracotta-600 to-terracotta-700">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Before You Commit to the &quot;Usual&quot; Expat Spots
          </h2>
          <p className="mt-4 text-xl text-sand-100">
            See why Morocco is the ultimate lifestyle upgrade for Americans.
            Get our free guide and discover what the smart set already knows.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-terracotta-600 font-semibold rounded-lg hover:bg-sand-100 transition-colors duration-200 text-lg"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/benefits"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-lg"
            >
              Explore the Benefits
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
