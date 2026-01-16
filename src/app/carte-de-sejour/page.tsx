import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carte de Séjour Morocco | Residence Permit Guide for Americans',
  description: 'Complete guide to obtaining your Carte de Séjour (residence permit) in Morocco. FBI background check, document requirements, 15-day rule, and step-by-step process.',
};

export default function CarteDeSejourPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sand-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-atlas-900 sm:text-5xl">
              Carte de Séjour
            </h1>
            <p className="mt-6 text-lg leading-8 text-atlas-700">
              Your comprehensive guide to obtaining Morocco&apos;s residence permit—with the
              specific details Americans need to know.
            </p>
          </div>
        </div>
      </section>

      {/* Critical Warning - 15 Day Rule */}
      <section className="py-8 bg-terracotta-50 border-y border-terracotta-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-terracotta-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-terracotta-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-terracotta-800">The 15-Day Rule</h3>
              <p className="text-terracotta-700 text-sm mt-1">
                While you technically have 90 days of visa-free entry, <strong>most prefectures strongly prefer
                (or effectively require) that you submit your application within the first 15–30 days of arrival</strong>.
                Applying on day 85 is technically legal but often causes significant friction with authorities.
                Start gathering documents before you arrive and submit early.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-atlas-900 mb-6">
                What is a Carte de Séjour?
              </h2>
              <p className="text-atlas-700 mb-4">
                The Carte de Séjour (literally &quot;residence card&quot;) is Morocco&apos;s official
                residence permit for foreign nationals who wish to stay in the country
                for more than 90 days. It&apos;s your legal authorization to live in Morocco.
              </p>
              <p className="text-atlas-700 mb-6">
                Once obtained, the Carte de Séjour allows you to:
              </p>
              <ul className="space-y-3 text-atlas-600">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-olive-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Live legally in Morocco for the duration of the permit</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-olive-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Open a local bank account (ideally a convertible Dirham account)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-olive-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Sign lease agreements and purchase property</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-olive-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Access healthcare and register with local services</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-olive-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Travel freely in and out of Morocco</span>
                </li>
              </ul>
            </div>
            <div className="bg-terracotta-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-atlas-900 mb-4">Types of Carte de Séjour</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-atlas-800">1-Year Permit</h4>
                  <p className="text-atlas-600 text-sm mt-1">
                    Standard initial residence permit, renewable annually. This is what most Americans will receive
                    and renew for many years.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-atlas-800">&quot;Sans Profession&quot; (Visitor/Retiree)</h4>
                  <p className="text-atlas-600 text-sm mt-1">
                    For retirees, those with passive income, and digital nomads working for foreign companies.
                    The most common category for Americans.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-atlas-800">Work Permit Card</h4>
                  <p className="text-atlas-600 text-sm mt-1">
                    Combined residence and work authorization for those employed by Moroccan companies.
                    Requires employer sponsorship.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-atlas-800">Family Reunification</h4>
                  <p className="text-atlas-600 text-sm mt-1">
                    For those married to Moroccan nationals. A different (and often easier) process—see section below.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Nomads Section */}
      <section className="section-padding bg-atlas-50">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-atlas-900 mb-6">
              Digital Nomads & Remote Workers
            </h2>
            <p className="text-atlas-700 mb-6">
              Many Americans moving to Morocco work remotely for US companies. While Morocco doesn&apos;t yet have
              a specific &quot;Digital Nomad Visa,&quot; there&apos;s a well-established path for remote workers:
            </p>

            <div className="bg-white rounded-xl p-6 border border-atlas-200 mb-6">
              <h3 className="font-semibold text-atlas-900 mb-3">The &quot;Sans Profession&quot; Path</h3>
              <p className="text-atlas-600 mb-4">
                If you work remotely for a non-Moroccan company, you&apos;ll apply under the &quot;Sans Profession&quot;
                (No Profession/Visitor) status. This isn&apos;t as limiting as it sounds—it simply means you&apos;re not
                employed locally and won&apos;t be taking jobs from Moroccan workers.
              </p>
              <h4 className="font-medium text-atlas-800 mb-2">Key requirements:</h4>
              <ul className="space-y-2 text-atlas-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-terracotta-500 mt-1">•</span>
                  <span><strong>Attestation de Non-Travail:</strong> A legalized declaration stating you are not employed
                  in Morocco. This proves you won&apos;t be taking local jobs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terracotta-500 mt-1">•</span>
                  <span><strong>Proof of foreign income:</strong> Bank statements showing regular deposits from your
                  US employer or clients, pension, investments, etc.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terracotta-500 mt-1">•</span>
                  <span><strong>Sufficient funds:</strong> Generally, authorities want to see you can support yourself
                  without working locally (roughly $1,000–1,500/month minimum).</span>
                </li>
              </ul>
            </div>

            <div className="bg-olive-50 rounded-xl p-6 border border-olive-200">
              <h4 className="font-semibold text-olive-800 mb-2">Pro Tip: Attestation de Travail vs. Non-Travail</h4>
              <p className="text-olive-700 text-sm">
                Most prefectures require a document stating your professional status. If you&apos;re a digital nomad or retiree,
                you need an <strong>&quot;Attestation de Non-Travail&quot;</strong> (declaration of non-employment). If you&apos;re employed
                by a Moroccan company, you need an <strong>&quot;Attestation de Travail&quot;</strong> from your employer. Getting this
                wrong is a common reason for application delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Family Reunification */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-atlas-900 mb-6">
              Marriage to a Moroccan National
            </h2>
            <p className="text-atlas-700 mb-6">
              If you&apos;re married to a Moroccan citizen, the Carte de Séjour process is different—and generally easier.
              This is one of the most common reasons Americans relocate to Morocco.
            </p>

            <div className="bg-sand-50 rounded-xl p-6 border border-sand-200">
              <h3 className="font-semibold text-atlas-900 mb-4">Family Reunification Process</h3>
              <ul className="space-y-3 text-atlas-600">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-olive-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Your Moroccan spouse&apos;s <strong>CNIE</strong> (Carte Nationale d&apos;Identité Électronique) is required</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-olive-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Marriage certificate (Acte de Mariage) must be registered with Moroccan authorities</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-olive-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Less stringent financial requirements (your spouse can be your sponsor)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-olive-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Generally faster processing times</span>
                </li>
              </ul>
              <p className="text-atlas-500 text-sm mt-4">
                Note: If you were married abroad, your marriage must be transcribed into Moroccan civil records first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding bg-sand-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atlas-900 mb-4">
              Required Documents
            </h2>
            <p className="text-lg text-atlas-600 max-w-2xl mx-auto">
              Gathering the right documents is crucial. Here&apos;s what Americans specifically need to know.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-atlas-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-terracotta-100 text-terracotta-700 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Identity Documents
              </h3>
              <ul className="space-y-2 text-atlas-600">
                <li>• Valid passport (6+ months validity)</li>
                <li>• <strong>High-quality copies of ID page and entry stamp page</strong> (not all pages—just these two)</li>
                <li>• Passport-size photos (recent, white background)</li>
                <li>• Birth certificate (apostilled and translated to French)</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-atlas-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-terracotta-100 text-terracotta-700 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Proof of Address
              </h3>
              <ul className="space-y-2 text-atlas-600">
                <li>• Rental contract (<strong>legalized at the Commune/Moqata&apos;a</strong>—see note below)</li>
                <li>• Property deed (if you own property)</li>
                <li>• Utility bill in your name (recent)</li>
                <li>• Certificate of residence from local authorities</li>
              </ul>
            </div>

            <div className="card border-2 border-terracotta-200">
              <h3 className="text-xl font-semibold text-atlas-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-terracotta-600 text-white rounded-full flex items-center justify-center text-sm font-bold">!</span>
                FBI Background Check (Critical)
              </h3>
              <p className="text-atlas-700 mb-3 text-sm">
                This is the #1 hurdle for Americans. State-level background checks are often rejected.
              </p>
              <ul className="space-y-2 text-atlas-600 text-sm">
                <li>• <strong>Must be a Federal FBI Identity History Summary</strong></li>
                <li>• <strong>Apostilled by the US Department of State in Washington, DC</strong> (not a local notary)</li>
                <li>• Translated into French by a certified translator</li>
                <li>• Should be less than 3 months old when submitted</li>
              </ul>
              <div className="mt-4 p-3 bg-terracotta-50 rounded-lg">
                <p className="text-terracotta-700 text-xs">
                  <strong>Do this before you leave the US!</strong> Getting your FBI check apostilled from Morocco
                  requires mailing documents internationally and can take months.
                </p>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-atlas-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-terracotta-100 text-terracotta-700 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                Financial & Professional
              </h3>
              <ul className="space-y-2 text-atlas-600">
                <li>• Bank statements (last 3-6 months)</li>
                <li>• Proof of income (pension, investments, remote employment)</li>
                <li>• <strong>Attestation de Non-Travail</strong> (if not employed in Morocco)</li>
                <li>• Moroccan bank account statement (ideally a <strong>convertible Dirham account</strong>)</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-atlas-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-terracotta-100 text-terracotta-700 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                Medical Certificate
              </h3>
              <ul className="space-y-2 text-atlas-600">
                <li>• <strong>Must be from a doctor in Morocco</strong></li>
                <li>• Certificates from US doctors are always rejected</li>
                <li>• Usually a simple examination (costs ~200-400 MAD)</li>
                <li>• Valid for 3 months</li>
              </ul>
              <div className="mt-4 p-3 bg-atlas-50 rounded-lg">
                <p className="text-atlas-600 text-xs">
                  We can recommend English-speaking doctors in major cities who are familiar with the
                  Carte de Séjour medical requirements.
                </p>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-atlas-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-terracotta-100 text-terracotta-700 rounded-full flex items-center justify-center text-sm font-bold">6</span>
                Additional Documents
              </h3>
              <ul className="space-y-2 text-atlas-600">
                <li>• Marriage certificate (if applicable, apostilled)</li>
                <li>• Work contract (if employed in Morocco)</li>
                <li>• Health insurance documentation</li>
                <li>• Completed application forms (from prefecture)</li>
              </ul>
            </div>
          </div>

          {/* Legalization Explanation */}
          <div className="mt-8 bg-white rounded-xl p-6 border border-sand-200">
            <h4 className="font-semibold text-atlas-800 mb-3">Understanding &quot;Legalization&quot; (Commune/Moqata&apos;a)</h4>
            <p className="text-atlas-600 text-sm mb-3">
              Americans often don&apos;t understand what &quot;legalized&quot; means in Morocco. When a document needs to be
              &quot;legalized,&quot; you take it to your local <strong>Commune</strong> (in rural areas) or <strong>Moqata&apos;a</strong> (in cities)—a
              small local government office.
            </p>
            <p className="text-atlas-600 text-sm">
              A clerk will stamp and sign the document, certifying it&apos;s legitimate. This takes about 2 minutes and
              is free or costs a few dirhams. <strong>Every lease agreement and many other documents must go through this process.</strong>
            </p>
          </div>

          {/* Bank Account Note */}
          <div className="mt-6 bg-atlas-50 rounded-xl p-6 border border-atlas-200">
            <h4 className="font-semibold text-atlas-800 mb-3">Important: Convertible vs. Standard Dirham Accounts</h4>
            <p className="text-atlas-600 text-sm">
              When you open a Moroccan bank account, ask for a <strong>&quot;compte en dirhams convertibles&quot;</strong> (convertible
              Dirham account). If you transfer USD to a standard Dirham account, you cannot easily transfer that money
              back out of Morocco. A convertible account lets you repatriate funds when needed. This is essential for
              anyone who may want to move money back to the US eventually.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atlas-900 mb-4">
              The Application Process
            </h2>
            <p className="text-lg text-atlas-600 max-w-2xl mx-auto">
              Understanding each step helps ensure a successful application.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sand-300 hidden md:block"></div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-terracotta-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-atlas-900 mb-2">Before You Arrive</h3>
                    <p className="text-atlas-600">
                      <strong>Get your FBI background check and apostille it in DC before leaving the US.</strong> This
                      is the most important step. Also gather apostilled copies of your birth certificate and
                      marriage certificate (if applicable). Have everything translated into French.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-terracotta-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-atlas-900 mb-2">Arrive & Secure Housing (Days 1-7)</h3>
                    <p className="text-atlas-600">
                      Find and sign a rental agreement immediately. Have the lease legalized at your local
                      Commune/Moqata&apos;a. Open a bank account (request a convertible Dirham account). Get your
                      medical certificate from a local Moroccan doctor.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-terracotta-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-atlas-900 mb-2">Gather Remaining Documents (Days 7-14)</h3>
                    <p className="text-atlas-600">
                      Collect all remaining documents: proof of residence certificate from the Commune,
                      attestation de non-travail (if applicable), photos, and copies of everything. Organize
                      your dossier carefully—prefectures appreciate well-organized applications.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-terracotta-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-atlas-900 mb-2">Submit Application (Days 14-30)</h3>
                    <p className="text-atlas-600">
                      Visit the police prefecture (Service des Étrangers) in your district with all documents.
                      Submit your application and receive a <strong>récépissé</strong> (receipt) that serves as temporary
                      authorization while your application is processed.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-terracotta-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    5
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-atlas-900 mb-2">Wait for Processing (2-8 weeks)</h3>
                    <p className="text-atlas-600">
                      Processing typically takes 2-8 weeks but can vary by prefecture and time of year.
                      Your récépissé allows you to stay legally while waiting. You may be called for an
                      interview or asked to provide additional documents.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-olive-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    6
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-atlas-900 mb-2">Receive Your Card</h3>
                    <p className="text-atlas-600">
                      Once approved, you&apos;ll be notified to pick up your Carte de Séjour. The card is valid
                      for one year and must be renewed before expiration. Start the renewal process 2 months early.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Renewal & Long-term */}
      <section className="section-padding bg-atlas-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-atlas-900 mb-6">
                Annual Renewal
              </h2>
              <p className="text-atlas-700 mb-4">
                Your Carte de Séjour must be renewed before it expires. Start the process at least
                2 months before expiration. The renewal process is generally simpler than the initial application.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-terracotta-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-terracotta-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-atlas-600">Updated passport copies and photos</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-terracotta-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-terracotta-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-atlas-600">Current proof of address</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-terracotta-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-terracotta-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-atlas-600">Recent bank statements</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-terracotta-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-terracotta-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-atlas-600">Original Carte de Séjour</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-atlas-900 mb-6">
                The 10-Year Permit
              </h2>
              <p className="text-atlas-700 mb-4">
                Moroccan law provides for 10-year residence permits, but Americans should set realistic expectations.
              </p>
              <div className="bg-white rounded-xl p-6 border border-sand-200">
                <h4 className="font-semibold text-atlas-800 mb-3">Reality Check</h4>
                <p className="text-atlas-600 text-sm mb-4">
                  While the law says 10-year permits are available after several years of continuous residence,
                  they are <strong>notoriously difficult to obtain</strong> for Americans and other non-French/non-married
                  foreigners. Most Americans will be on 1-year renewals for many years—potentially indefinitely.
                </p>
                <p className="text-atlas-600 text-sm">
                  Think of the 10-year card as a <strong>long-term goal rather than a standard expectation</strong>.
                  The 1-year renewal process becomes routine, and many expats find it manageable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Departure Checklist */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-atlas-900 mb-4">
                Pre-Departure Checklist for Americans
              </h2>
              <p className="text-lg text-atlas-600">
                Complete these steps before you leave the United States.
              </p>
            </div>

            <div className="bg-terracotta-50 rounded-2xl p-8 border border-terracotta-200">
              <div className="space-y-4">
                <label className="flex items-start gap-4 cursor-pointer">
                  <div className="w-6 h-6 border-2 border-terracotta-400 rounded mt-0.5 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-atlas-900">Get FBI Identity History Summary</p>
                    <p className="text-atlas-600 text-sm">Request from FBI.gov—takes 3-5 days digitally or up to 8 weeks by mail</p>
                  </div>
                </label>

                <label className="flex items-start gap-4 cursor-pointer">
                  <div className="w-6 h-6 border-2 border-terracotta-400 rounded mt-0.5 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-atlas-900">Apostille the FBI check at US Department of State</p>
                    <p className="text-atlas-600 text-sm">Must be done in Washington, DC—not a local notary. Takes 4-8 weeks.</p>
                  </div>
                </label>

                <label className="flex items-start gap-4 cursor-pointer">
                  <div className="w-6 h-6 border-2 border-terracotta-400 rounded mt-0.5 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-atlas-900">Apostille birth certificate (and marriage certificate if applicable)</p>
                    <p className="text-atlas-600 text-sm">Done by your state&apos;s Secretary of State office</p>
                  </div>
                </label>

                <label className="flex items-start gap-4 cursor-pointer">
                  <div className="w-6 h-6 border-2 border-terracotta-400 rounded mt-0.5 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-atlas-900">Get certified French translations of all documents</p>
                    <p className="text-atlas-600 text-sm">Can be done in US or Morocco—often easier in Morocco</p>
                  </div>
                </label>

                <label className="flex items-start gap-4 cursor-pointer">
                  <div className="w-6 h-6 border-2 border-terracotta-400 rounded mt-0.5 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-atlas-900">Research neighborhoods and have housing leads ready</p>
                    <p className="text-atlas-600 text-sm">You&apos;ll need to secure housing within days of arrival</p>
                  </div>
                </label>

                <label className="flex items-start gap-4 cursor-pointer">
                  <div className="w-6 h-6 border-2 border-terracotta-400 rounded mt-0.5 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-atlas-900">Ensure passport has 6+ months validity and blank pages</p>
                    <p className="text-atlas-600 text-sm">Renew passport if needed before traveling</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-atlas-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need Help With Your Carte de Séjour?
          </h2>
          <p className="mt-4 text-lg text-sand-200">
            The process can seem overwhelming, but we&apos;ve helped hundreds of Americans successfully
            obtain their residence permits. We can even help with the FBI apostille process while
            you&apos;re already in Morocco.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors duration-200">
              Get Expert Assistance
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
