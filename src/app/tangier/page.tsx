import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tangier: Your American Home Since 1821 | New Life Morocco',
  description: 'The oldest US diplomatic property in the world. 200+ years of American-Moroccan friendship. Gateway to Europe. Your American home awaits.',
};

export default function TangierPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-atlas-900 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-terracotta-400 font-medium uppercase tracking-wide text-sm">
              Your Gateway to a Global Heritage
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl leading-tight">
              Tangier: Live Where History Meets the Future
            </h1>
            <p className="mt-6 text-xl text-sand-200">
              Tangier isn&apos;t just a city—it&apos;s a legendary meeting point of civilizations.
              The only U.S. National Historic Landmark on foreign soil.
              Moving here isn&apos;t just relocation—it&apos;s a homecoming.
            </p>
          </div>
        </div>
      </section>

      {/* The High-Vibration Lifestyle */}
      <section className="py-16 bg-terracotta-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-terracotta-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-atlas-900 mb-2">The Energy of the Strait</h3>
              <p className="text-atlas-600 text-sm">
                Wake up to two seas meeting. See Spain from your terrace—a constant reminder you&apos;re
                1 hour from the heart of Europe.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-olive-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-atlas-900 mb-2">A Legacy of Intellect</h3>
              <p className="text-atlas-600 text-sm">
                Join a community that inspired generations of American writers, artists, and diplomats.
                A city of deep thinkers where creativity thrives.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-atlas-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-atlas-900 mb-2">Modernity in the Mediterranean</h3>
              <p className="text-atlas-600 text-sm">
                Walk historic Kasbah streets, minutes from the Tanger-Med mega-port and Al-Boraq
                High-Speed Rail—connected at 320 km/h.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The History */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-terracotta-600 font-semibold uppercase text-sm tracking-wide">
                200+ Years of Friendship
              </span>
              <h2 className="mt-2 text-3xl font-bold text-atlas-900">
                The Tangier American Legation
              </h2>
              <p className="mt-6 text-lg text-atlas-700">
                In 1777, Morocco became the first country in the world to recognize the United States.
                The Sultan&apos;s letter to George Washington marked the beginning of the longest
                unbroken treaty relationship in American history.
              </p>
              <p className="mt-4 text-lg text-atlas-700">
                The Tangier American Legation, gifted to the U.S. by Sultan Moulay Suliman in 1821,
                is the <strong>oldest American diplomatic property in the world</strong>—and the only
                U.S. National Historic Landmark on foreign soil.
              </p>
              <p className="mt-4 text-lg text-atlas-700">
                Americans aren&apos;t newcomers here. We&apos;ve been part of Tangier&apos;s story
                for over two centuries. The American presence is woven into the very streets of the Medina.
              </p>
            </div>
            <div className="bg-sand-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-atlas-900 mb-6">The Morocco-US Timeline</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-terracotta-600 font-bold text-lg w-16 shrink-0">1777</div>
                  <div className="text-atlas-700">Morocco becomes the first nation to recognize American independence</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-terracotta-600 font-bold text-lg w-16 shrink-0">1786</div>
                  <div className="text-atlas-700">Treaty of Friendship signed—the longest unbroken treaty in U.S. history</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-terracotta-600 font-bold text-lg w-16 shrink-0">1821</div>
                  <div className="text-atlas-700">Sultan gifts the Legation building to the United States</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-terracotta-600 font-bold text-lg w-16 shrink-0">1950</div>
                  <div className="text-atlas-700">American School of Tangier founded</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-terracotta-600 font-bold text-lg w-16 shrink-0">1982</div>
                  <div className="text-atlas-700">Tangier American Legation designated a National Historic Landmark</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-terracotta-600 font-bold text-lg w-16 shrink-0">2004</div>
                  <div className="text-atlas-700">Morocco designated a Major Non-NATO Ally</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Gateway */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-terracotta-600 font-semibold uppercase text-sm tracking-wide">
              The Gateway
            </span>
            <h2 className="mt-2 text-3xl font-bold text-atlas-900">
              You Can See Spain From Your Window
            </h2>
            <p className="mt-4 text-lg text-atlas-600 max-w-3xl mx-auto">
              Tangier sits at the literal bridge between Africa and Europe.
              The Strait of Gibraltar is just 14 kilometers wide. This isn&apos;t metaphorical—it&apos;s geography.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-terracotta-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-terracotta-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-2">1 Hour to Spain</h3>
              <p className="text-atlas-600">
                A 30-minute flight or a ferry ride. Barcelona, Madrid, Lisbon—all within easy reach
                for weekend getaways or business trips.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-olive-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-2">TGV Northern Hub</h3>
              <p className="text-atlas-600">
                Tangier is the northern terminus of Al-Boraq. Casablanca in 80 minutes.
                You&apos;re connected to the entire country at 320 km/h.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-atlas-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-atlas-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-2">English Everywhere</h3>
              <p className="text-atlas-600">
                Tangier&apos;s history as an International Zone means a higher density of English speakers
                than almost anywhere else in the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tanger-Med Powerhouse */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-atlas-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Tanger-Med by the Numbers</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-atlas-700 pb-3">
                  <span className="text-sand-200">Global Port Ranking</span>
                  <span className="text-terracotta-400 font-bold text-lg">#1 in Africa</span>
                </div>
                <div className="flex justify-between items-center border-b border-atlas-700 pb-3">
                  <span className="text-sand-200">Container Capacity</span>
                  <span className="text-terracotta-400 font-bold text-lg">9M+ TEU</span>
                </div>
                <div className="flex justify-between items-center border-b border-atlas-700 pb-3">
                  <span className="text-sand-200">Industrial Free Zone</span>
                  <span className="text-terracotta-400 font-bold text-lg">1,000+ Companies</span>
                </div>
                <div className="flex justify-between items-center border-b border-atlas-700 pb-3">
                  <span className="text-sand-200">Major Tenants</span>
                  <span className="text-terracotta-400 font-bold">Renault, Boeing</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sand-200">To Spain</span>
                  <span className="text-terracotta-400 font-bold text-lg">35 min ferry</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-terracotta-600 font-semibold uppercase text-sm tracking-wide">
                Global Logistics Beast
              </span>
              <h2 className="mt-2 text-3xl font-bold text-atlas-900">
                Tanger-Med: Not Just History—Pure Power
              </h2>
              <p className="mt-6 text-lg text-atlas-700">
                Americans need to know: Tangier isn&apos;t just &quot;old history.&quot; It&apos;s one of
                the most modern logistics hubs on the planet.
              </p>
              <p className="mt-4 text-lg text-atlas-700">
                <strong>Tanger-Med Port</strong> is the largest port in Africa and the Mediterranean.
                It&apos;s why global giants like Renault and Boeing have massive manufacturing and
                assembly hubs here.
              </p>
              <p className="mt-4 text-lg text-atlas-700">
                The <strong>Tanger-Med Industrial Free Zone</strong> hosts over 1,000 companies
                and creates direct supply chain connections to Europe in hours, not days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare */}
      <section className="py-20 bg-terracotta-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-terracotta-600 font-semibold uppercase text-sm tracking-wide">
              Modern Healthcare
            </span>
            <h2 className="mt-2 text-3xl font-bold text-atlas-900">
              You&apos;re Not &quot;Away&quot; From Anything
            </h2>
            <p className="mt-4 text-lg text-atlas-600 max-w-3xl mx-auto">
              Don&apos;t let anyone tell you Tangier is &quot;remote.&quot; The healthcare
              infrastructure rivals anything you&apos;d find in a mid-size American city.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-terracotta-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-terracotta-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-2">
                International Hospital of Tangier
              </h3>
              <p className="text-sm text-terracotta-600 font-medium mb-3">Akdital Network</p>
              <p className="text-atlas-600 mb-4">
                Ultra-modern facility with 24/7 emergency services, advanced oncology,
                cardiology, and English-speaking staff. Part of Morocco&apos;s premier
                private healthcare network.
              </p>
              <ul className="space-y-2 text-atlas-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-olive-600 mt-1">&#10003;</span>
                  24/7 Emergency Services
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-olive-600 mt-1">&#10003;</span>
                  Advanced Oncology Center
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-olive-600 mt-1">&#10003;</span>
                  English-Speaking Staff
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-olive-600 mt-1">&#10003;</span>
                  JCI-Style Standards
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-olive-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-2">
                American School of Tangier
              </h3>
              <p className="text-sm text-terracotta-600 font-medium mb-3">Founded 1950</p>
              <p className="text-atlas-600 mb-4">
                The oldest American school in the Arab world. A legendary reputation for
                preparing students for U.S. universities. It&apos;s not just a school—it&apos;s
                a community.
              </p>
              <ul className="space-y-2 text-atlas-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-olive-600 mt-1">&#10003;</span>
                  US High School Diploma
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-olive-600 mt-1">&#10003;</span>
                  IB Programme Available
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-olive-600 mt-1">&#10003;</span>
                  70+ Years of Excellence
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-olive-600 mt-1">&#10003;</span>
                  Strong Alumni Network
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Straight Talk */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-terracotta-600 font-semibold uppercase text-sm tracking-wide">
              The Straight Talk
            </span>
            <h2 className="mt-2 text-3xl font-bold text-atlas-900">
              Tangier: The Facts That Matter
            </h2>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-atlas-200">
                  <th className="py-4 px-6 text-left text-atlas-900 font-bold">The Tangier Fact</th>
                  <th className="py-4 px-6 text-left text-atlas-900 font-bold">Why It Matters to You</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-200">
                <tr className="hover:bg-sand-50">
                  <td className="py-4 px-6 text-atlas-800 font-medium">Oldest US Legation</td>
                  <td className="py-4 px-6 text-atlas-600">Proof of a 200+ year friendship and deep cultural respect</td>
                </tr>
                <tr className="hover:bg-sand-50">
                  <td className="py-4 px-6 text-atlas-800 font-medium">1 Hour to Spain</td>
                  <td className="py-4 px-6 text-atlas-600">Weekend trips to Europe are a ferry ride or 30-minute flight away</td>
                </tr>
                <tr className="hover:bg-sand-50">
                  <td className="py-4 px-6 text-atlas-800 font-medium">The TGV (Al-Boraq)</td>
                  <td className="py-4 px-6 text-atlas-600">You aren&apos;t &quot;isolated&quot; in the North—you&apos;re connected at 320 km/h</td>
                </tr>
                <tr className="hover:bg-sand-50">
                  <td className="py-4 px-6 text-atlas-800 font-medium">English Everywhere</td>
                  <td className="py-4 px-6 text-atlas-600">International Zone history = highest English density in the region</td>
                </tr>
                <tr className="hover:bg-sand-50">
                  <td className="py-4 px-6 text-atlas-800 font-medium">Tanger-Med Port</td>
                  <td className="py-4 px-6 text-atlas-600">#1 port in Africa—Boeing, Renault, 1,000+ companies nearby</td>
                </tr>
                <tr className="hover:bg-sand-50">
                  <td className="py-4 px-6 text-atlas-800 font-medium">American School (AST)</td>
                  <td className="py-4 px-6 text-atlas-600">70+ years preparing students for US universities</td>
                </tr>
                <tr className="hover:bg-sand-50">
                  <td className="py-4 px-6 text-atlas-800 font-medium">Akdital Hospital</td>
                  <td className="py-4 px-6 text-atlas-600">24/7 emergency, oncology, English staff—not a &quot;remote&quot; city</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-atlas-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Old World Soul. New World Efficiency.
          </h2>
          <p className="text-xl text-terracotta-400 font-medium mb-6">
            In Tangier, you don&apos;t have to choose.
          </p>
          <p className="text-lg text-sand-200 mb-8 max-w-2xl mx-auto">
            From the American Legation in the Medina to the modern villas of the Mountain,
            Tangier is a city that has welcomed the American spirit since 1821.
            Come see why the oldest friend of the United States is the best place for your next chapter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Plan Your Transition
            </Link>
            <Link
              href="/guide"
              className="px-6 py-3 bg-transparent border-2 border-sand-300 text-sand-100 rounded-lg font-medium hover:bg-sand-300/10 transition-colors"
            >
              Read: The Upgrade Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
