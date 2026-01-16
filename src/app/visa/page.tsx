import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Morocco Visa Requirements for Americans | New Life Morocco',
  description: 'Complete guide to Morocco visa requirements for US citizens. Learn about tourist visas, long-stay visas, work permits, and the path to residency.',
};

export default function VisaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sand-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-atlas-900 sm:text-5xl">
              Visa Requirements for Americans
            </h1>
            <p className="mt-6 text-lg leading-8 text-atlas-700">
              US citizens enjoy visa-free entry to Morocco for up to 90 days.
              Here&apos;s everything you need to know about staying longer and
              establishing residency.
            </p>
          </div>
        </div>
      </section>

      {/* Good News */}
      <section className="section-padding bg-olive-50">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-olive-200">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-olive-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-atlas-900 mb-4">
                  Good News: No Visa Required for Entry
                </h2>
                <p className="text-atlas-700 mb-4">
                  US passport holders can enter Morocco without a visa and stay for up to 90 days.
                  This makes it easy to explore the country, find your ideal location, and begin
                  the process of longer-term residency.
                </p>
                <p className="text-atlas-600">
                  All you need is a valid US passport with at least 6 months remaining validity
                  and proof of onward travel or sufficient funds for your stay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atlas-900 mb-4">
              Visa & Residency Options
            </h2>
            <p className="text-lg text-atlas-600 max-w-2xl mx-auto">
              Depending on your plans, there are several pathways to living in Morocco long-term.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tourist Entry */}
            <div className="card border-2 border-olive-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-olive-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-atlas-900">Tourist Entry</h3>
                  <span className="text-sm text-olive-600 font-medium">Up to 90 days</span>
                </div>
              </div>
              <p className="text-atlas-600 mb-4">
                Perfect for exploring Morocco and deciding if it&apos;s right for you.
                No advance application needed.
              </p>
              <h4 className="font-semibold text-atlas-800 mb-2">Requirements:</h4>
              <ul className="text-atlas-600 text-sm space-y-1">
                <li>• Valid US passport (6+ months validity)</li>
                <li>• Proof of accommodation</li>
                <li>• Proof of sufficient funds</li>
                <li>• Return/onward ticket (recommended)</li>
              </ul>
            </div>

            {/* Long-Stay Visa */}
            <div className="card border-2 border-atlas-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-atlas-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-atlas-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-atlas-900">Long-Stay Visa</h3>
                  <span className="text-sm text-atlas-600 font-medium">90+ days</span>
                </div>
              </div>
              <p className="text-atlas-600 mb-4">
                Required if you plan to stay beyond 90 days. Apply at a Moroccan
                consulate before traveling.
              </p>
              <h4 className="font-semibold text-atlas-800 mb-2">Requirements:</h4>
              <ul className="text-atlas-600 text-sm space-y-1">
                <li>• Completed visa application form</li>
                <li>• Valid passport with blank pages</li>
                <li>• Passport photos</li>
                <li>• Proof of accommodation in Morocco</li>
                <li>• Bank statements showing sufficient funds</li>
                <li>• Purpose of stay documentation</li>
              </ul>
            </div>

            {/* Work Visa */}
            <div className="card border-2 border-terracotta-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-terracotta-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-terracotta-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-atlas-900">Work Visa</h3>
                  <span className="text-sm text-terracotta-600 font-medium">Employment-based</span>
                </div>
              </div>
              <p className="text-atlas-600 mb-4">
                If you have a job offer from a Moroccan employer or plan to start
                a business, you&apos;ll need a work visa.
              </p>
              <h4 className="font-semibold text-atlas-800 mb-2">Requirements:</h4>
              <ul className="text-atlas-600 text-sm space-y-1">
                <li>• Job contract from Moroccan employer</li>
                <li>• ANAPEC (labor ministry) approval</li>
                <li>• Professional qualifications/diplomas</li>
                <li>• Medical certificate</li>
                <li>• Criminal background check</li>
              </ul>
            </div>

            {/* Retirement/Passive Income */}
            <div className="card border-2 border-sand-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-sand-200 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-sand-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-atlas-900">Retirement/Income Visa</h3>
                  <span className="text-sm text-sand-700 font-medium">Passive income holders</span>
                </div>
              </div>
              <p className="text-atlas-600 mb-4">
                Retirees and those with passive income (investments, pensions, remote work)
                can apply for long-term residency.
              </p>
              <h4 className="font-semibold text-atlas-800 mb-2">Requirements:</h4>
              <ul className="text-atlas-600 text-sm space-y-1">
                <li>• Proof of regular income (pension, investments)</li>
                <li>• Bank statements showing financial stability</li>
                <li>• Housing rental agreement or property deed</li>
                <li>• Health insurance coverage</li>
                <li>• Clean criminal record</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-sand-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atlas-900 mb-4">
              The Visa Process
            </h2>
            <p className="text-lg text-atlas-600 max-w-2xl mx-auto">
              Here&apos;s what to expect when applying for a long-stay visa to Morocco.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-terracotta-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div className="w-0.5 h-full bg-sand-300 mt-2"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-semibold text-atlas-900 mb-2">Gather Documents</h3>
                  <p className="text-atlas-600">
                    Collect all required documents including passport, photos, financial statements,
                    and purpose-specific documentation. All documents should be recent and some may
                    need to be translated into French or Arabic.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-terracotta-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div className="w-0.5 h-full bg-sand-300 mt-2"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-semibold text-atlas-900 mb-2">Submit Application</h3>
                  <p className="text-atlas-600">
                    Visit the Moroccan consulate or embassy in your jurisdiction. The US has
                    consulates in Washington DC, New York, and Los Angeles. Schedule an appointment
                    and submit your complete application.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-terracotta-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div className="w-0.5 h-full bg-sand-300 mt-2"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-semibold text-atlas-900 mb-2">Processing Period</h3>
                  <p className="text-atlas-600">
                    Visa processing typically takes 2-4 weeks but can vary. Some applications
                    may require additional documentation or interviews. Plan accordingly and
                    apply well before your intended travel date.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-terracotta-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-atlas-900 mb-2">Receive Visa & Travel</h3>
                  <p className="text-atlas-600">
                    Once approved, your visa will be stamped in your passport. You can then
                    travel to Morocco and begin the process of obtaining your Carte de Séjour
                    (residence permit) for longer-term stays.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="bg-atlas-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-atlas-900 mb-6">
              Important Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-atlas-800 mb-3">Visa Extensions</h3>
                <p className="text-atlas-600 text-sm">
                  If you&apos;re already in Morocco and need to extend your stay beyond 90 days,
                  you must apply at the local police station (Prefecture) before your current
                  authorization expires. Extensions are not guaranteed and require valid justification.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-atlas-800 mb-3">Border Runs</h3>
                <p className="text-atlas-600 text-sm">
                  While some expats attempt &quot;border runs&quot; (leaving and re-entering to reset
                  the 90-day clock), this is not recommended as a long-term strategy. Immigration
                  officials may deny entry if they suspect you&apos;re trying to circumvent visa requirements.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-atlas-800 mb-3">Document Legalization</h3>
                <p className="text-atlas-600 text-sm">
                  Some documents may need to be apostilled or legalized before submission.
                  This includes criminal background checks, marriage certificates, and
                  educational credentials. We can guide you through this process.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-atlas-800 mb-3">Processing Changes</h3>
                <p className="text-atlas-600 text-sm">
                  Visa requirements and procedures can change. We stay up-to-date with the
                  latest regulations and can help ensure your application reflects current
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-atlas-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need Help With Your Visa?
          </h2>
          <p className="mt-4 text-lg text-sand-200">
            Our team has guided hundreds of Americans through the visa process.
            Let us handle the paperwork while you plan your new adventure.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors duration-200">
              Get Visa Assistance
            </Link>
            <Link href="/carte-de-sejour" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200">
              Learn About Residency
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
