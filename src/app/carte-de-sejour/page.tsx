import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carte de Séjour Morocco | Residence Permit Guide',
  description: 'Complete guide to obtaining your Carte de Séjour (residence permit) in Morocco. Learn about requirements, documents, process, and renewal procedures.',
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
              Your guide to obtaining Morocco&apos;s residence permit—the key to making
              Morocco your long-term home.
            </p>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-atlas-900 mb-6">
                What is a Carte de Séjour?
              </h2>
              <p className="text-atlas-700 mb-4">
                The Carte de Séjour (literally &quot;residence card&quot;) is Morocco&apos;s official
                residence permit for foreign nationals who wish to stay in the country
                for more than 90 days. It&apos;s essentially your legal authorization to
                live in Morocco.
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
                  <span>Open a local bank account</span>
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
                  <span>Access healthcare and other services</span>
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
                    Standard initial residence permit, renewable annually. Most common for new residents.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-atlas-800">10-Year Permit</h4>
                  <p className="text-atlas-600 text-sm mt-1">
                    Available after several years of continuous residence. Similar to permanent residency.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-atlas-800">Work Permit Card</h4>
                  <p className="text-atlas-600 text-sm mt-1">
                    Combined residence and work authorization for employed individuals.
                  </p>
                </div>
              </div>
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
              Gathering the right documents is crucial for a smooth application process.
              Here&apos;s what you&apos;ll typically need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-atlas-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-terracotta-100 text-terracotta-700 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Identity Documents
              </h3>
              <ul className="space-y-2 text-atlas-600">
                <li>• Valid passport (original + copies of all pages)</li>
                <li>• Passport-size photos (recent, white background)</li>
                <li>• Copy of entry stamp to Morocco</li>
                <li>• Birth certificate (apostilled and translated)</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-atlas-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-terracotta-100 text-terracotta-700 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Proof of Address
              </h3>
              <ul className="space-y-2 text-atlas-600">
                <li>• Rental contract (legalized at municipality)</li>
                <li>• Property deed (if you own property)</li>
                <li>• Utility bill in your name (recent)</li>
                <li>• Certificate of residence from local authorities</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-atlas-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-terracotta-100 text-terracotta-700 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                Financial Documents
              </h3>
              <ul className="space-y-2 text-atlas-600">
                <li>• Bank statements (last 3-6 months)</li>
                <li>• Proof of income (pension, investments, employment)</li>
                <li>• Moroccan bank account statement (if available)</li>
                <li>• Evidence of financial self-sufficiency</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-atlas-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-terracotta-100 text-terracotta-700 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                Additional Documents
              </h3>
              <ul className="space-y-2 text-atlas-600">
                <li>• Criminal background check (apostilled)</li>
                <li>• Medical certificate (from Moroccan doctor)</li>
                <li>• Marriage certificate (if applicable)</li>
                <li>• Work contract (if employed in Morocco)</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-atlas-100 rounded-xl p-6">
            <h4 className="font-semibold text-atlas-800 mb-2">Important Note on Documents</h4>
            <p className="text-atlas-600 text-sm">
              All foreign documents must be apostilled by the appropriate authority in your home country,
              then translated into French or Arabic by a certified translator. Requirements may vary
              by prefecture and can change, so it&apos;s important to verify current requirements before applying.
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
                    <h3 className="text-xl font-semibold text-atlas-900 mb-2">Arrive in Morocco</h3>
                    <p className="text-atlas-600">
                      Enter Morocco on your tourist entry (90 days visa-free for US citizens).
                      Begin gathering your documents immediately. You should apply for your
                      Carte de Séjour before your 90-day period expires.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-terracotta-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-atlas-900 mb-2">Secure Housing</h3>
                    <p className="text-atlas-600">
                      Find and sign a rental agreement or complete a property purchase.
                      Your lease must be legalized at the local municipality (Commune).
                      This step is essential as you need a fixed address for your application.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-terracotta-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-atlas-900 mb-2">Gather Documents</h3>
                    <p className="text-atlas-600">
                      Collect all required documents, including apostilled certificates
                      from the US, translations, bank statements, and local documents like
                      your medical certificate and proof of residence.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-terracotta-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-atlas-900 mb-2">Submit Application</h3>
                    <p className="text-atlas-600">
                      Visit the police prefecture (Service des Étrangers) in your district
                      with all your documents. You&apos;ll submit your application and receive
                      a receipt (récépissé) that serves as temporary authorization.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-terracotta-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    5
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-atlas-900 mb-2">Wait for Processing</h3>
                    <p className="text-atlas-600">
                      Processing typically takes 2-8 weeks but can vary. Your récépissé
                      allows you to stay legally while waiting. You may be called for an
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
                      Once approved, you&apos;ll be notified to pick up your Carte de Séjour.
                      The card is typically valid for one year and must be renewed before
                      expiration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Renewal */}
      <section className="section-padding bg-atlas-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-atlas-900 mb-6">
                Renewal Process
              </h2>
              <p className="text-atlas-700 mb-4">
                Your Carte de Séjour must be renewed before it expires. The renewal
                process is generally simpler than the initial application, but you
                should start at least 2 months before expiration.
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
                Path to 10-Year Permit
              </h2>
              <p className="text-atlas-700 mb-4">
                After maintaining continuous legal residence in Morocco (typically 4-5 years
                of annual renewals), you may be eligible for a 10-year Carte de Séjour.
                This provides greater stability and reduces administrative burden.
              </p>
              <div className="bg-white rounded-xl p-6 border border-sand-200">
                <h4 className="font-semibold text-atlas-800 mb-3">Eligibility factors include:</h4>
                <ul className="space-y-2 text-atlas-600 text-sm">
                  <li>• Consistent residence history in Morocco</li>
                  <li>• Timely renewal of previous permits</li>
                  <li>• Clean record with Moroccan authorities</li>
                  <li>• Stable financial situation</li>
                  <li>• Integration into Moroccan society</li>
                </ul>
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
            The process can seem daunting, but we&apos;ve helped hundreds of Americans
            successfully obtain their residence permits. Let us guide you through every step.
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
