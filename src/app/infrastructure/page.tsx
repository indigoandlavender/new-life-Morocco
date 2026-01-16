import Link from 'next/link';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const InfrastructureMap = dynamic(() => import('@/components/HealthcareMap'), {
  ssr: false,
  loading: () => (
    <div className="bg-atlas-900 rounded-2xl h-[500px] flex items-center justify-center">
      <div className="text-sand-300">Loading infrastructure map...</div>
    </div>
  ),
});

export const metadata: Metadata = {
  title: 'A Fresh Start Within Reach | Morocco Advisors',
  description: 'For American families seeking peace of mind and new beginnings. A clear path to a life that works—just 7 hours from New York.',
};

export default function InfrastructurePage() {
  return (
    <>
      {/* Hero - Aspirational Framing */}
      <section className="bg-atlas-900 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sand-400 font-medium uppercase tracking-wider text-sm">
              Your Fresh Start
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl leading-tight">
              A New Beginning Within Reach
            </h1>
            <p className="mt-6 text-xl text-sand-200">
              The peace of mind you&apos;ve been looking for. Seven hours from New York.
            </p>
            <p className="mt-4 text-sand-400">
              You&apos;re not running away. You&apos;re running toward something better.
            </p>
          </div>

          {/* The Five Questions */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              { num: '1', q: 'Will we be safe?' },
              { num: '2', q: 'Will our life work?' },
              { num: '3', q: 'Can we still get home?' },
              { num: '4', q: 'Where would we live?' },
              { num: '5', q: 'How do we make it real?' },
            ].map((item) => (
              <div key={item.num} className="text-center">
                <div className="w-10 h-10 bg-terracotta-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">{item.num}</span>
                </div>
                <p className="text-sand-300 text-sm">{item.q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          QUESTION 1: WILL WE BE SAFE?
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white" id="safety">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-terracotta-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h2 className="text-3xl font-bold text-atlas-900">Will we be safe?</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xl text-atlas-700 mb-6">
                The peace of mind you&apos;ve been missing. No more school shooting drills.
                No more checking crime reports before choosing a restaurant.
                <strong> Your family walks freely.</strong>
              </p>

              <p className="text-atlas-700 mb-6">
                Morocco is a <strong>Major Non-NATO Ally</strong>—the same designation as Japan, Australia, and Israel.
                Strict gun control. Near-zero violent crime. A culture of communal safety
                that Americans find startling—and deeply reassuring.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-olive-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-atlas-700"><strong>No mass shootings.</strong> Strict gun control. Near-zero gun violence.</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-olive-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-atlas-700"><strong>No &quot;no-go&quot; zones.</strong> Walk anywhere, anytime—medinas at midnight.</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-olive-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-atlas-700"><strong>25+ years of stability.</strong> No coups. No civil unrest. Steady modernization.</span>
                </div>
              </div>

              <div className="bg-terracotta-50 border-l-4 border-terracotta-500 p-6 rounded-r-lg">
                <p className="text-atlas-900 font-medium">
                  &quot;For the first time in years, I don&apos;t think about safety. I just live.&quot;
                </p>
                <p className="text-atlas-600 text-sm mt-2">— American mother, relocated from Austin</p>
              </div>
            </div>

            {/* Morocco vs Mexico Comparison */}
            <div>
              <h3 className="text-lg font-bold text-atlas-900 mb-4">How Morocco Compares</h3>
              <p className="text-atlas-600 mb-6 text-sm">
                Mexico is a popular choice for Americans. But many expats there live in gated communities
                and stay aware of security concerns. Morocco offers a different experience.
              </p>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-sand-200">
                <div className="bg-atlas-900 text-white px-6 py-3">
                  <h4 className="font-bold text-sm">Safety Comparison</h4>
                </div>
                <div className="divide-y divide-sand-200">
                  <div className="grid grid-cols-3 px-4 py-3 bg-sand-50 text-xs font-semibold">
                    <div className="text-atlas-700">Factor</div>
                    <div className="text-center text-atlas-700">Mexico</div>
                    <div className="text-center text-atlas-700">Morocco</div>
                  </div>
                  {[
                    { factor: 'Cartel Activity', mexico: 'High', morocco: 'None' },
                    { factor: 'Kidnapping Risk', mexico: 'Elevated', morocco: 'Negligible' },
                    { factor: 'Gun Violence', mexico: 'High', morocco: 'Near Zero' },
                    { factor: 'Walking at Night', mexico: 'Area-Dependent', morocco: 'Everywhere' },
                    { factor: 'Security Model', mexico: 'Gated Bubble', morocco: 'Communal Safety' },
                  ].map((row, i) => (
                    <div key={i} className={`grid grid-cols-3 px-4 py-3 text-sm ${i % 2 === 0 ? '' : 'bg-sand-50'}`}>
                      <div className="text-atlas-700">{row.factor}</div>
                      <div className="text-center text-terracotta-600">{row.mexico}</div>
                      <div className="text-center text-olive-600 font-semibold">{row.morocco}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Answer */}
          <div className="mt-12 bg-olive-50 border border-olive-200 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-olive-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-bold text-atlas-900">Yes. Real peace of mind—not just a gated illusion.</p>
                <p className="text-atlas-600 text-sm">Your kids walk to school. You walk anywhere, anytime. The background anxiety disappears.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          QUESTION 2: WILL OUR LIFE WORK?
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-sand-50" id="infrastructure">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-terracotta-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h2 className="text-3xl font-bold text-atlas-900">Will our life actually work there?</h2>
          </div>

          <p className="text-xl text-atlas-700 mb-12 max-w-3xl">
            A fresh start shouldn&apos;t mean starting over. Your career continues. Your kids&apos; education stays on track.
            Your health is covered. <strong>Life actually works here.</strong>
          </p>

          {/* Three Proof Points */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Healthcare */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-200">
              <div className="w-12 h-12 bg-atlas-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-atlas-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-3">Your Health, Covered</h3>
              <p className="text-atlas-600 mb-4">
                American-trained doctors. Mayo Clinic Care Network members.
                Same-day specialist appointments—no 6-month waitlists, no $5,000 deductibles.
              </p>
              <div className="bg-sand-50 rounded-lg p-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-atlas-500">MRI Scan (US)</span>
                  <span className="text-atlas-400">$1,200-3,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-atlas-700 font-medium">MRI Scan here</span>
                  <span className="text-olive-600 font-bold">$150-300</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-200">
              <div className="w-12 h-12 bg-olive-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-olive-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-3">Your Kids, On Track</h3>
              <p className="text-atlas-600 mb-4">
                5 NEASC-accredited American schools. IB programs. AP courses.
                Your kids apply to the same colleges—Harvard, Stanford, MIT. No gap year required.
              </p>
              <div className="bg-sand-50 rounded-lg p-4">
                <div className="text-sm text-atlas-700 mb-2">
                  <strong>American School of Tangier</strong> — Founded 1950
                </div>
                <div className="text-sm text-atlas-700">
                  <strong>Casablanca American School</strong> — IB World School
                </div>
              </div>
            </div>

            {/* Connectivity */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-200">
              <div className="w-12 h-12 bg-atlas-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-atlas-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-3">Your Work, Uninterrupted</h3>
              <p className="text-atlas-600 mb-4">
                5G nationwide. Fiber in all major cities. 1 Gbps speeds.
                Your Zoom calls don&apos;t drop. Your trades execute. Your remote job stays remote.
              </p>
              <div className="bg-sand-50 rounded-lg p-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-atlas-500">US Fiber (100 Mbps)</span>
                  <span className="text-atlas-400">$80-120/mo</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-atlas-700 font-medium">Fiber here</span>
                  <span className="text-olive-600 font-bold">$30-50/mo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobility Bonus */}
          <div className="bg-atlas-900 rounded-2xl p-8 text-white">
            <h4 className="text-lg font-bold mb-4">Bonus: You Can Actually Get Around</h4>
            <p className="text-sand-300 mb-6">
              High-speed rail connects the major cities. Urban tramways serve Casablanca and Rabat. You don&apos;t need a car—but the roads are excellent if you want one.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-atlas-800 rounded-lg p-4">
                <div className="text-sand-400 text-sm font-medium mb-1">High-Speed Rail</div>
                <div className="text-2xl font-bold">200 mph</div>
                <div className="text-sand-400 text-sm">Tangier to Casa: 80 min</div>
              </div>
              <div className="bg-atlas-800 rounded-lg p-4">
                <div className="text-olive-400 text-sm font-medium mb-1">Urban Tramways</div>
                <div className="text-2xl font-bold">4 Lines</div>
                <div className="text-sand-400 text-sm">Casablanca + Rabat</div>
              </div>
              <div className="bg-atlas-800 rounded-lg p-4">
                <div className="text-sand-400 text-sm font-medium mb-1">Modern Highways</div>
                <div className="text-2xl font-bold">1,100+ mi</div>
                <div className="text-sand-400 text-sm">Coast-to-coast network</div>
              </div>
            </div>
          </div>

          {/* Answer */}
          <div className="mt-12 bg-olive-50 border border-olive-200 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-olive-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-bold text-atlas-900">Yes. Your life continues—no compromises.</p>
                <p className="text-atlas-600 text-sm">Healthcare, education, connectivity, mobility. Everything your family needs is here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          QUESTION 3: CAN WE STILL GET HOME?
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white" id="proximity">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-terracotta-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h2 className="text-3xl font-bold text-atlas-900">Can we still get home?</h2>
          </div>

          <p className="text-xl text-atlas-700 mb-12 max-w-3xl">
            A new beginning doesn&apos;t mean cutting ties. You&apos;re closer to New York than Hawaii.
            <strong> Grandma&apos;s birthday. Your sister&apos;s wedding. You&apos;re there.</strong>
          </p>

          {/* The 7/2 Proximity */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-sand-50 rounded-2xl p-8">
              <div className="text-6xl font-bold text-atlas-900 mb-2">7h</div>
              <div className="text-xl font-medium text-atlas-900 mb-2">To New York</div>
              <p className="text-atlas-600 text-sm">
                Direct flights daily. Family emergency? You&apos;re there by morning.
              </p>
            </div>
            <div className="text-center bg-sand-50 rounded-2xl p-8">
              <div className="text-6xl font-bold text-olive-600 mb-2">2h</div>
              <div className="text-xl font-medium text-atlas-900 mb-2">To London / Paris</div>
              <p className="text-atlas-600 text-sm">
                Europe becomes your weekend getaway. Paris for dinner. London for theater.
              </p>
            </div>
            <div className="text-center bg-sand-50 rounded-2xl p-8">
              <div className="text-6xl font-bold text-atlas-700 mb-2">5h</div>
              <div className="text-xl font-medium text-atlas-900 mb-2">Time Zone Overlap</div>
              <p className="text-atlas-600 text-sm">
                Overlap with US East Coast: 9am-2pm. No 3am calls. You stay connected.
              </p>
            </div>
          </div>

          {/* The Comparison */}
          <div className="bg-terracotta-50 border border-terracotta-200 rounded-2xl p-8">
            <h4 className="text-lg font-bold text-atlas-900 mb-4">What Real Distance Looks Like</h4>
            <div className="grid md:grid-cols-3 gap-6 text-atlas-700">
              <div>
                <p className="font-semibold text-terracotta-600">Thailand / Bali</p>
                <p className="text-sm">20+ hours. 12-hour time difference. You miss holidays. Your relationships strain.</p>
              </div>
              <div>
                <p className="font-semibold text-terracotta-600">Portugal</p>
                <p className="text-sm">Same time zone—but increasingly crowded and expensive. Golden visa now requires €500K+.</p>
              </div>
              <div>
                <p className="font-semibold text-olive-600">Here</p>
                <p className="text-sm">7 hours to New York. 2 hours to Europe. You&apos;re not disappearing. You&apos;re repositioning.</p>
              </div>
            </div>
          </div>

          {/* Answer */}
          <div className="mt-12 bg-olive-50 border border-olive-200 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-olive-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-bold text-atlas-900">Yes. You can always get home.</p>
                <p className="text-atlas-600 text-sm">Closer than Hawaii. Perfect time zone. Your American life doesn&apos;t end—it expands.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          QUESTION 4: WHERE WOULD WE LIVE?
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-sand-50" id="neighborhoods">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-terracotta-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">4</span>
            </div>
            <h2 className="text-3xl font-bold text-atlas-900">Where would we actually live?</h2>
          </div>

          <p className="text-xl text-atlas-700 mb-8 max-w-3xl">
            Picture your new morning: ocean breeze, kids walking to an American school,
            a café where the owner knows your name. <strong>This is where it happens.</strong>
          </p>

          <p className="text-atlas-600 mb-12 max-w-3xl">
            Explore the neighborhoods where American families have built their new lives.
            Healthcare, schools, transit—everything your family needs, mapped.
          </p>

          <InfrastructureMap />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          QUESTION 5: HOW DO WE MAKE IT REAL?
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-atlas-900 text-white" id="process">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-terracotta-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">5</span>
            </div>
            <h2 className="text-3xl font-bold text-white">How do we make it real?</h2>
          </div>

          <p className="text-xl text-sand-200 mb-12 max-w-3xl">
            You&apos;ve seen what&apos;s possible. Now comes the question: <strong className="text-white">how do you actually get there?</strong>
            The life is straightforward. The paperwork requires navigation.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* The Hurdles */}
            <div>
              <h3 className="text-xl font-bold mb-6">Three Hurdles Between You and Your New Life</h3>
              <div className="space-y-6">
                <div className="bg-atlas-800 rounded-xl p-6">
                  <h4 className="text-sand-400 font-semibold mb-2">1. Paperwork That Has to Be Perfect</h4>
                  <p className="text-sand-300 text-sm">
                    FBI background checks must be federal (not state) and apostilled at the US Department of State
                    in Washington, DC. One wrong step and you&apos;re starting over from scratch.
                  </p>
                </div>
                <div className="bg-atlas-800 rounded-xl p-6">
                  <h4 className="text-sand-400 font-semibold mb-2">2. Protecting Your Investment</h4>
                  <p className="text-sand-300 text-sm">
                    Two property title systems exist. <strong className="text-white">Titre Foncier</strong> is secure.
                    <strong className="text-amber-400"> Melkia</strong> can have disputed boundaries and hidden claims.
                    Knowing the difference protects your family&apos;s future.
                  </p>
                </div>
                <div className="bg-atlas-800 rounded-xl p-6">
                  <h4 className="text-sand-400 font-semibold mb-2">3. Keeping Your Money Accessible</h4>
                  <p className="text-sand-300 text-sm">
                    Without the right account structure, your capital can get trapped in local currency.
                    The solution exists—it just requires knowing which doors to knock on.
                  </p>
                </div>
              </div>
            </div>

            {/* The Path Forward */}
            <div>
              <h3 className="text-xl font-bold mb-6">You Don&apos;t Have to Figure This Out Alone</h3>
              <p className="text-sand-300 mb-6">
                The new beginning is real. The peace of mind is waiting.
                You just need someone who&apos;s done this before to clear the path.
              </p>

              <div className="bg-olive-500/10 border border-olive-500/30 rounded-xl p-6 mb-6">
                <h4 className="text-olive-400 font-semibold mb-2">We Handle The Complexity</h4>
                <ul className="text-sand-300 text-sm space-y-2">
                  <li>• Document audit before you leave (so nothing surprises you)</li>
                  <li>• Residency processing with English-speaking advocacy</li>
                  <li>• Bank account setup with the right structure</li>
                  <li>• Property verification (protect your investment)</li>
                  <li>• Someone in your corner at every step</li>
                </ul>
              </div>

              <p className="text-sand-400 text-sm">
                We don&apos;t sell real estate. We don&apos;t take commissions.
                We help American families navigate the transition—so you can focus on your new life.
              </p>
            </div>
          </div>

          {/* Answer */}
          <div className="mt-12 bg-atlas-800 border border-atlas-700 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-olive-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-bold text-white">You make it real with a partner who knows the way.</p>
                <p className="text-sand-400 text-sm">The life is waiting. We help you get there.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FINAL CTA
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-atlas-900">
            Your Fresh Start Is Closer Than You Think
          </h2>
          <div className="mt-6 grid grid-cols-5 gap-2 max-w-xl mx-auto text-sm">
            <div className="text-olive-600">✓ Safe</div>
            <div className="text-olive-600">✓ Works</div>
            <div className="text-olive-600">✓ Close</div>
            <div className="text-olive-600">✓ Beautiful</div>
            <div className="text-olive-600">✓ Possible</div>
          </div>
          <p className="mt-8 text-lg text-atlas-600 max-w-2xl mx-auto">
            The peace of mind you&apos;ve been looking for exists. The new beginning is real.
            The next step is a conversation about what your transition looks like.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors text-lg"
            >
              Start the Conversation
            </Link>
            <Link
              href="/checklist"
              className="inline-flex items-center justify-center px-8 py-4 bg-sand-100 text-atlas-900 font-semibold rounded-lg hover:bg-sand-200 transition-colors text-lg"
            >
              See If You&apos;re Ready
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
