import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Infrastructure & Modernity | The Backbone of the Kingdom | New Life Morocco',
  description: 'High-speed rail, 5G fiber, world-class healthcare. Morocco\'s infrastructure rivals Europe. See the hard data.',
};

export default function InfrastructurePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-atlas-900 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-terracotta-400 font-medium uppercase tracking-wide text-sm">
              The Hard Data
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl leading-tight">
              The Backbone of the Kingdom
            </h1>
            <p className="mt-6 text-xl text-sand-200">
              Morocco isn&apos;t what you think. High-speed rail. 5G fiber. European-standard healthcare.
              This is the infrastructure reality that destroys the &quot;third-world&quot; myth.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b border-sand-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-terracotta-600">320</div>
              <div className="text-atlas-600 text-sm">km/h High-Speed Rail</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-terracotta-600">5G</div>
              <div className="text-atlas-600 text-sm">Coverage in Major Cities</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-terracotta-600">4</div>
              <div className="text-atlas-600 text-sm">Modern Tramway Lines</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-terracotta-600">2030</div>
              <div className="text-atlas-600 text-sm">World Cup Co-Host</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Mobility Stack */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-terracotta-600 font-semibold uppercase text-sm tracking-wide">
              The Mobility Stack
            </span>
            <h2 className="mt-2 text-3xl font-bold text-atlas-900">
              Integrated Transit That US Cities Can Only Dream Of
            </h2>
            <p className="mt-4 text-lg text-atlas-600 max-w-3xl">
              While American cities struggle with crumbling subways and decades-delayed rail projects,
              Morocco has built an integrated mobility network that rivals Western Europe.
            </p>
          </div>

          {/* Three-tier mobility */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* High-Speed Rail */}
            <div className="bg-atlas-900 rounded-2xl p-8 text-white">
              <div className="w-14 h-14 bg-terracotta-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-sm text-terracotta-400 font-medium mb-2">TIER 1: INTERCITY</div>
              <h3 className="text-2xl font-bold mb-3">Al-Boraq TGV</h3>
              <p className="text-sand-300 mb-4">
                Africa&apos;s only high-speed rail. Tangier to Casablanca in 80 minutes.
              </p>
              <div className="bg-atlas-800 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sand-400">Top Speed</span>
                  <span className="text-2xl font-bold text-white">320 km/h</span>
                </div>
              </div>
              <p className="text-sand-400 text-sm mt-4">
                Amtrak Acela: 109 km/h average. California HSR: 0 passengers since 2008.
              </p>
            </div>

            {/* Tramway */}
            <div className="bg-olive-900 rounded-2xl p-8 text-white">
              <div className="w-14 h-14 bg-olive-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <div className="text-sm text-olive-400 font-medium mb-2">TIER 2: URBAN RAIL</div>
              <h3 className="text-2xl font-bold mb-3">Modern Tramways</h3>
              <p className="text-sand-300 mb-4">
                Sleek, air-conditioned light rail networks in Rabat and Casablanca.
              </p>
              <div className="bg-olive-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sand-400">Casablanca</span>
                  <span className="font-bold text-white">2 Lines, 48 Stations</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sand-400">Rabat-Salé</span>
                  <span className="font-bold text-white">2 Lines, 31 Stations</span>
                </div>
              </div>
              <p className="text-sand-400 text-sm mt-4">
                Clean. Reliable. Under $1 per ride. Most US cities have nothing comparable.
              </p>
            </div>

            {/* Electric Buses */}
            <div className="bg-sand-50 rounded-2xl p-8 border border-sand-200">
              <div className="w-14 h-14 bg-atlas-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                </svg>
              </div>
              <div className="text-sm text-terracotta-600 font-medium mb-2">TIER 3: LAST MILE</div>
              <h3 className="text-2xl font-bold text-atlas-900 mb-3">Electric Bus Networks</h3>
              <p className="text-atlas-600 mb-4">
                Growing fleet of zero-emission buses connecting neighborhoods to transit hubs.
              </p>
              <div className="bg-white rounded-lg p-4 border border-sand-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-atlas-500">Marrakech Fleet</span>
                  <span className="font-bold text-olive-600">100% Electric</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-atlas-500">Casablanca Expansion</span>
                  <span className="font-bold text-olive-600">In Progress</span>
                </div>
              </div>
              <p className="text-atlas-500 text-sm mt-4">
                No diesel fumes. No aging, unreliable buses. The fleet is new.
              </p>
            </div>
          </div>

          {/* The US Transit Reality */}
          <div className="bg-terracotta-50 border border-terracotta-200 rounded-2xl p-8">
            <h4 className="text-lg font-bold text-atlas-900 mb-4">Meanwhile, in America...</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-atlas-700">
              <div>
                <p className="font-semibold text-terracotta-600">Los Angeles</p>
                <p className="text-sm">No rail from LAX to downtown. 90-minute bus ride. $28B subway delayed again.</p>
              </div>
              <div>
                <p className="font-semibold text-terracotta-600">Houston</p>
                <p className="text-sm">4th largest US city. One light rail line. 7 miles. Opens in segments over 20 years.</p>
              </div>
              <div>
                <p className="font-semibold text-terracotta-600">California HSR</p>
                <p className="text-sm">Started 2008. Zero passengers. Budget: $100B+. Completion: &quot;Sometime.&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Backbone */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-terracotta-600 font-semibold uppercase text-sm tracking-wide">
                The Digital Backbone
              </span>
              <h2 className="mt-2 text-3xl font-bold text-atlas-900 mb-6">
                5G and Fiber-to-the-Home
              </h2>
              <p className="text-atlas-700 mb-4">
                Morocco is a digital-first economy. Whether you&apos;re trading on Wall Street
                or hosting Zoom calls with London, the fiber-optic network offers 99.9%
                uptime at a fraction of US prices.
              </p>
              <p className="text-atlas-700 mb-6">
                21 million Americans still lack broadband access. In Morocco, fiber reaches
                cities most Americans have never heard of.
              </p>
              <div className="bg-white rounded-xl p-6 border border-sand-200">
                <h4 className="font-semibold text-atlas-900 mb-4">Monthly Internet Comparison</h4>
                <div className="flex justify-between items-center mb-3 pb-3 border-b border-sand-200">
                  <span className="text-atlas-600">Morocco Fiber (100Mbps)</span>
                  <span className="text-xl font-bold text-olive-600">$30-50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-atlas-600">US Fiber (Comcast/Cox)</span>
                  <span className="text-xl font-bold text-atlas-400">$80-120</span>
                </div>
              </div>
            </div>
            <div className="bg-atlas-900 rounded-2xl p-8 text-white">
              <h4 className="text-lg font-semibold mb-6">Why Remote Workers Choose Morocco</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-olive-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sand-200"><strong className="text-white">5G Coverage</strong> — Nationwide in major cities</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-olive-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sand-200"><strong className="text-white">GMT+1 Time Zone</strong> — Perfect overlap with NYC (work 2-10pm local)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-olive-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sand-200"><strong className="text-white">Co-Working Spaces</strong> — Modern hubs in Casablanca, Rabat, Marrakech</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-olive-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sand-200"><strong className="text-white">Tech Hub Growth</strong> — Oracle, Google Cloud, and African startups HQ&apos;d here</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-terracotta-600 font-semibold uppercase text-sm tracking-wide">
              Healthcare
            </span>
            <h2 className="mt-2 text-3xl font-bold text-atlas-900">
              European Standards. African Prices.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-atlas-900 mb-6">
                The Private Clinic Network
              </h3>
              <p className="text-atlas-700 mb-6">
                Access state-of-the-art private clinics in every major city. Specialized oncology,
                cardiology, and maternity care with US/European-trained specialists.
              </p>
              <p className="text-atlas-700 mb-4">
                The <strong>AKDITAL Group</strong> operates 20+ clinics and hospitals across Morocco,
                offering MRI, CT scans, advanced surgery, and 24/7 emergency care at standards that
                rival any European facility.
              </p>
              <p className="text-atlas-700 mb-4">
                <strong>Hôpital Américain de Casablanca (HAC)</strong> — The gold standard. A multidisciplinary
                facility built to North American technical and medical specifications, replicating the
                American patient experience.
              </p>
              <p className="text-atlas-700 mb-6">
                <strong>Mayo Clinic Care Network:</strong> Several elite Moroccan medical groups are members
                of the Mayo Clinic Care Network, allowing local doctors to consult directly with Mayo Clinic
                experts on complex cases.
              </p>
              <div className="bg-terracotta-50 border-l-4 border-terracotta-500 p-6 rounded-r-lg">
                <p className="text-atlas-900 font-medium">
                  Cost? Roughly <strong>15% of what you pay in the US</strong> for the same outcome.
                  No 6-month wait times. No $5,000 deductibles. No medical bankruptcy.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-lg font-semibold text-atlas-900 mb-6">Healthcare Cost Comparison</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-sand-200">
                  <span className="text-atlas-700">MRI Scan</span>
                  <div className="text-right">
                    <div className="text-sm text-atlas-500">US: $1,200-3,000</div>
                    <div className="font-bold text-olive-600">Morocco: $150-300</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-sand-200">
                  <span className="text-atlas-700">Hip Replacement</span>
                  <div className="text-right">
                    <div className="text-sm text-atlas-500">US: $32,000-44,000</div>
                    <div className="font-bold text-olive-600">Morocco: $6,000-10,000</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-sand-200">
                  <span className="text-atlas-700">Dental Implant</span>
                  <div className="text-right">
                    <div className="text-sm text-atlas-500">US: $3,000-4,500</div>
                    <div className="font-bold text-olive-600">Morocco: $600-1,000</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-atlas-700">Childbirth (C-Section)</span>
                  <div className="text-right">
                    <div className="text-sm text-atlas-500">US: $22,000-32,000</div>
                    <div className="font-bold text-olive-600">Morocco: $2,000-4,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Stability */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-terracotta-600 font-semibold uppercase text-sm tracking-wide">
              Safety & Stability
            </span>
            <h2 className="mt-2 text-3xl font-bold text-atlas-900">
              The Sanctuary of Stability
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-atlas-700 mb-6">
                A <strong>Major Non-NATO Ally</strong>. While global tensions rise, Morocco remains
                the anchor of stability in the Mediterranean.
              </p>
              <p className="text-atlas-700 mb-6">
                With a pro-Western, moderate monarchy and a highly sophisticated national security
                apparatus, our clients often tell us they feel safer walking in Casablanca at midnight
                than they ever did in San Francisco, Chicago, or Atlanta.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-olive-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-atlas-700"><strong>No mass shootings.</strong> Morocco has strict gun control and virtually zero gun violence.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-olive-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-atlas-700"><strong>Low violent crime.</strong> Significantly lower rates than any major US city.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-olive-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-atlas-700"><strong>No &quot;no-go&quot; zones.</strong> Walk anywhere, anytime.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-olive-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-atlas-700"><strong>Political stability.</strong> 25+ years of steady modernization. No coups, no civil unrest.</span>
                </li>
              </ul>
            </div>
            <div className="bg-atlas-900 rounded-2xl p-8 text-white">
              <h4 className="text-lg font-semibold mb-6">Morocco&apos;s Strategic Position</h4>
              <ul className="space-y-4 text-sand-200">
                <li className="flex items-start gap-3">
                  <span className="text-terracotta-400 font-bold">•</span>
                  <span><strong className="text-white">Major Non-NATO Ally</strong> — Same status as Japan, South Korea, Australia, Israel</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta-400 font-bold">•</span>
                  <span><strong className="text-white">Deep US ties</strong> — Military cooperation, intelligence sharing, counterterrorism partnership</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta-400 font-bold">•</span>
                  <span><strong className="text-white">World Cup 2030 co-host</strong> — FIFA doesn&apos;t choose unstable countries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta-400 font-bold">•</span>
                  <span><strong className="text-white">Gateway to Africa & Europe</strong> — Strategic position between three continents</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Compare Module */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-terracotta-600 font-semibold uppercase text-sm tracking-wide">
              Side by Side
            </span>
            <h2 className="mt-2 text-3xl font-bold text-atlas-900">
              The US (Status Quo) vs. Morocco (Your Future)
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-atlas-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-center">The US (Status Quo)</th>
                  <th className="px-6 py-4 text-center">Morocco (Your Future)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-atlas-900">High-Speed Rail</td>
                  <td className="px-6 py-4 text-center text-atlas-500">0 Miles (Nationwide)</td>
                  <td className="px-6 py-4 text-center text-olive-600 font-semibold">200+ Miles (Expanding)</td>
                </tr>
                <tr className="bg-sand-50">
                  <td className="px-6 py-4 font-medium text-atlas-900">Fiber Internet</td>
                  <td className="px-6 py-4 text-center text-atlas-500">$80-120/month</td>
                  <td className="px-6 py-4 text-center text-olive-600 font-semibold">$30-50/month</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-atlas-900">Healthcare (MRI)</td>
                  <td className="px-6 py-4 text-center text-atlas-500">$1,200-3,000</td>
                  <td className="px-6 py-4 text-center text-olive-600 font-semibold">$150-300</td>
                </tr>
                <tr className="bg-sand-50">
                  <td className="px-6 py-4 font-medium text-atlas-900">Violent Crime</td>
                  <td className="px-6 py-4 text-center text-atlas-500">High (Major Cities)</td>
                  <td className="px-6 py-4 text-center text-olive-600 font-semibold">Low (One of Safest in MENA)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-atlas-900">Property Tax</td>
                  <td className="px-6 py-4 text-center text-atlas-500">1.1% Average (Annually)</td>
                  <td className="px-6 py-4 text-center text-olive-600 font-semibold">Negligible / Near Zero</td>
                </tr>
                <tr className="bg-sand-50">
                  <td className="px-6 py-4 font-medium text-atlas-900">Political Stability</td>
                  <td className="px-6 py-4 text-center text-atlas-500">Polarized / Uncertain</td>
                  <td className="px-6 py-4 text-center text-olive-600 font-semibold">Stable Monarchy (25+ years)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-atlas-900">World Cup 2030</td>
                  <td className="px-6 py-4 text-center text-atlas-500">2026 (Joint with Canada/Mexico)</td>
                  <td className="px-6 py-4 text-center text-olive-600 font-semibold">Co-Host with Spain & Portugal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 2030 Vision */}
      <section className="py-20 bg-atlas-900 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-terracotta-400 font-semibold uppercase text-sm tracking-wide">
              The 2030 Vision
            </span>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Investing in a Global Hub
            </h2>
            <p className="mt-6 text-xl text-sand-200">
              As the co-host of the 2030 FIFA World Cup, Morocco is undergoing a <strong>$5+ billion
              infrastructure surge</strong>. New airports, expanded highways, and the world&apos;s largest
              grand stadium in Benslimane.
            </p>
            <p className="mt-6 text-xl text-sand-200">
              Moving here now is like buying into Dubai in 2005 or Portugal in 2015.
            </p>
            <p className="mt-8 text-2xl font-semibold text-white">
              The smart money is already here. Where will you be?
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-atlas-900">
            Ready to See the Reality?
          </h2>
          <p className="mt-4 text-lg text-atlas-600">
            Schedule a free consultation. We&apos;ll show you exactly what life in modern Morocco looks like.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Request Your Strategic Roadmap
            </Link>
            <Link href="/families" className="btn-secondary">
              Education & Schools
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
