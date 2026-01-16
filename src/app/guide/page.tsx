import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Upgrade: Why Morocco is More Modern Than Your Current US Zip Code | New Life Morocco',
  description: 'High-speed rail, 5G fiber, World Cup 2030. Morocco isn\'t what you think. A blunt comparison of infrastructure, stability, and opportunity.',
};

export default function GuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-atlas-900 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <span className="text-terracotta-400 font-medium uppercase tracking-wide text-sm">
            Free Guide: Chapter 1
          </span>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl leading-tight">
            The Upgrade: Why Morocco is More &quot;Modern&quot; Than Your Current US Zip Code
          </h1>
          <p className="mt-6 text-xl text-sand-200">
            Forget what you think you know. This isn&apos;t about tagines and camels.
            It&apos;s about infrastructure, stability, and a country that&apos;s building the future
            while the US argues about the past.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">

          {/* The Reality Check */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-atlas-900 mb-6">
              Let&apos;s Get Something Straight
            </h2>
            <div className="prose prose-lg prose-atlas max-w-none text-atlas-700">
              <p>
                When Americans hear &quot;Morocco,&quot; they picture souks, snake charmers, and maybe
                a scene from a Bourne movie. They file it under &quot;interesting vacation spot&quot;
                and move on to Google &quot;Costa Rica expat communities.&quot;
              </p>
              <p>
                That mental model is about 20 years out of date.
              </p>
              <p>
                Morocco is a <strong>Major Non-NATO Ally</strong> of the United States. It has
                the only high-speed rail system in Africa. It&apos;s building the world&apos;s largest
                concentrated solar plant. And in 2030, it&apos;s co-hosting the FIFA World Cup
                alongside Spain and Portugal.
              </p>
              <p className="text-xl font-medium text-atlas-900">
                Read that last sentence again. Morocco is co-hosting the World Cup with two
                EU nations. FIFA doesn&apos;t hand that honor to &quot;third-world&quot; countries.
              </p>
            </div>
          </section>

          {/* Infrastructure Comparison */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-atlas-900 mb-6">
              The Infrastructure Reality Check
            </h2>
            <div className="prose prose-lg prose-atlas max-w-none text-atlas-700">
              <p>
                Let&apos;s talk about what &quot;modern&quot; actually looks like.
              </p>
            </div>

            <div className="mt-8 grid gap-6">
              {/* High-Speed Rail */}
              <div className="bg-sand-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-terracotta-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-terracotta-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-atlas-900 mb-2">Al-Boraq High-Speed Rail</h3>
                    <p className="text-atlas-700 mb-3">
                      Morocco has Africa&apos;s first (and only) high-speed train. The Al-Boraq runs at
                      320 km/h (200 mph), connecting Tangier to Casablanca in 2 hours.
                    </p>
                    <p className="text-atlas-600 text-sm">
                      <strong>Meanwhile in the US:</strong> Amtrak&apos;s &quot;high-speed&quot; Acela averages 68 mph
                      between NYC and DC. California&apos;s high-speed rail project, started in 2008,
                      still hasn&apos;t carried a single passenger.
                    </p>
                  </div>
                </div>
              </div>

              {/* Solar Power */}
              <div className="bg-sand-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-olive-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-atlas-900 mb-2">Noor-Ouarzazate Solar Complex</h3>
                    <p className="text-atlas-700 mb-3">
                      The world&apos;s largest concentrated solar power plant. It covers an area the
                      size of 3,500 football fields and provides electricity to 2 million people.
                      Morocco aims to generate 52% of its power from renewables by 2030.
                    </p>
                    <p className="text-atlas-600 text-sm">
                      <strong>Meanwhile in the US:</strong> Texas can&apos;t keep the lights on during a
                      cold snap. California has rolling blackouts every summer.
                    </p>
                  </div>
                </div>
              </div>

              {/* Digital Infrastructure */}
              <div className="bg-sand-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-atlas-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-atlas-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-atlas-900 mb-2">5G & Fiber Nationwide</h3>
                    <p className="text-atlas-700 mb-3">
                      Morocco has 5G coverage in all major cities. Fiber-optic internet reaches
                      even smaller towns. You can work remotely from a riad in the medina with
                      better bandwidth than most American suburbs.
                    </p>
                    <p className="text-atlas-600 text-sm">
                      <strong>Meanwhile in the US:</strong> 21 million Americans still lack access
                      to broadband. Rural areas are stuck with satellite or DSL.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The 2030 Vision */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-atlas-900 mb-6">
              The 2030 World Cup: What It Actually Means
            </h2>
            <div className="prose prose-lg prose-atlas max-w-none text-atlas-700">
              <p>
                When FIFA announced that Morocco would co-host the 2030 World Cup with Spain
                and Portugal, it wasn&apos;t a &quot;feel-good&quot; story. It was a recognition of reality.
              </p>
              <p>
                Morocco has spent the last decade quietly becoming a regional powerhouse.
                The World Cup is the coming-out party.
              </p>
              <p>Here&apos;s what&apos;s happening between now and 2030:</p>
            </div>

            <ul className="mt-6 space-y-4 text-atlas-700">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-olive-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>$5+ billion in stadium and infrastructure investment</strong> — New stadiums in Casablanca, Marrakech, Tangier, and more.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-olive-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Massive expansion of English-language services</strong> — Morocco is training hospitality workers, government officials, and service providers in English. The country is actively becoming more accessible to Anglophones.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-olive-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Property values are climbing</strong> — Smart money is already moving in. The time to establish yourself is before the World Cup, not after.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-olive-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>International credibility boost</strong> — Morocco will be in the global spotlight alongside Spain and Portugal. The &quot;third-world&quot; perception dies in 2030.</span>
              </li>
            </ul>

            <div className="mt-8 bg-terracotta-50 border-l-4 border-terracotta-500 p-6 rounded-r-lg">
              <p className="text-atlas-900 font-medium">
                You&apos;re not moving to a country that&apos;s &quot;developing.&quot; You&apos;re moving to a country
                that&apos;s leveling up—and you can be there before the rest of the world catches on.
              </p>
            </div>
          </section>

          {/* The Geopolitical Advantage */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-atlas-900 mb-6">
              The Geopolitical Sweet Spot
            </h2>
            <div className="prose prose-lg prose-atlas max-w-none text-atlas-700">
              <p>
                Here&apos;s the part nobody talks about: <strong>location matters more than you think</strong>.
              </p>
              <p>
                Thailand is beautiful. But if something goes wrong—a family emergency, a health crisis,
                a global event—you&apos;re 20+ hours from home and 15+ hours from any major Western hub.
                You&apos;re isolated.
              </p>
              <p>
                Costa Rica is closer, but you&apos;re still in the Americas, cut off from Europe,
                Africa, and the Middle East.
              </p>
              <p>
                Morocco sits at the intersection of three continents. Look at what that means:
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-atlas-900 text-white rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-terracotta-400">7h</div>
                <div className="text-sm text-sand-200">to New York</div>
              </div>
              <div className="bg-atlas-900 text-white rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-terracotta-400">1h</div>
                <div className="text-sm text-sand-200">to Madrid</div>
              </div>
              <div className="bg-atlas-900 text-white rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-terracotta-400">2h</div>
                <div className="text-sm text-sand-200">to Paris</div>
              </div>
              <div className="bg-atlas-900 text-white rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-terracotta-400">3h</div>
                <div className="text-sm text-sand-200">to London</div>
              </div>
            </div>

            <div className="mt-8 prose prose-lg prose-atlas max-w-none text-atlas-700">
              <p>
                From Morocco, all of Europe is a cheap weekend trip. Paris for dinner? €50 flight.
                Barcelona for the weekend? €40. You&apos;re not trapped in &quot;paradise&quot;—you have
                access to the entire world.
              </p>
              <p>
                And when you need to get back to the US? Same-day arrival. Breakfast in Marrakech,
                dinner in Manhattan.
              </p>
              <p className="text-xl font-medium text-atlas-900">
                Don&apos;t trap yourself in paradise. Position yourself at the crossroads.
              </p>
            </div>
          </section>

          {/* Stability */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-atlas-900 mb-6">
              The Stability Factor
            </h2>
            <div className="prose prose-lg prose-atlas max-w-none text-atlas-700">
              <p>
                Morocco is a constitutional monarchy. King Mohammed VI has been in power since 1999,
                and the country has been on a steady, peaceful path of modernization ever since.
              </p>
              <p>
                There are no coups. No civil wars. No political chaos every election cycle.
                The government has its issues (what government doesn&apos;t?), but the trajectory
                is consistently upward.
              </p>
              <p>
                Morocco is also a <strong>Major Non-NATO Ally</strong>—the same designation given to
                Japan, South Korea, Australia, and Israel. The US has deep military and intelligence
                ties with Morocco. It&apos;s not an accident.
              </p>
              <p>
                For Americans exhausted by the political rollercoaster back home, Morocco offers
                something rare: <strong>predictability</strong>.
              </p>
            </div>
          </section>

          {/* The Bottom Line */}
          <section className="mb-16">
            <div className="bg-atlas-900 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">The Bottom Line</h2>
              <div className="space-y-4 text-sand-200 text-lg">
                <p>
                  Morocco isn&apos;t a &quot;downgrade.&quot; It&apos;s a side-step into a country that&apos;s
                  actively building while America stagnates.
                </p>
                <p>
                  High-speed rail. Renewable energy leadership. World Cup 2030. Gateway to Europe.
                  Political stability. And a cost of living that lets you live like royalty on
                  a middle-class income.
                </p>
                <p className="text-white font-semibold text-xl">
                  The question isn&apos;t &quot;Is Morocco good enough?&quot; The question is:
                  &quot;Why are you still paying US prices for crumbling infrastructure and constant stress?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-atlas-900 mb-4">
              Ready to Begin Your Assessment?
            </h2>
            <p className="text-atlas-600 mb-8">
              This is just Chapter 1. Take the Readiness Audit and see where you stand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/checklist"
                className="btn-primary text-center"
              >
                Take the Readiness Audit
              </Link>
              <Link
                href="/contact"
                className="btn-secondary text-center"
              >
                Request Your Strategic Roadmap
              </Link>
            </div>
          </section>

        </div>
      </article>
    </>
  );
}
