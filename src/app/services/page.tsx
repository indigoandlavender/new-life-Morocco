import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Morocco Relocation Services | New Life Morocco',
  description: 'Expert consulting services for Americans relocating to Morocco. Visa assistance, Carte de Séjour support, housing help, and ongoing guidance.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-atlas-900 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-terracotta-400 font-medium uppercase tracking-wide text-sm">
              Securing Your Status
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Your Key to the Kingdom
            </h1>
            <p className="mt-6 text-xl text-sand-200">
              Moving to Morocco is a choice to live with more freedom, more luxury, and more peace.
              We curate your transition so you can focus on what matters: your family, your career,
              and your new community.
            </p>
          </div>
        </div>
      </section>

      {/* What Your Residency Unlocks */}
      <section className="py-16 bg-white border-b border-sand-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-atlas-900">What Your Residency Unlocks</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-terracotta-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-atlas-900 text-sm mb-1">Financial Sovereignty</h3>
              <p className="text-atlas-600 text-xs">Open &quot;Convertible Dirham&quot; bank accounts</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-olive-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-semibold text-atlas-900 text-sm mb-1">Property Ownership</h3>
              <p className="text-atlas-600 text-xs">Sign leases or purchase your dream Riad</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-atlas-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-atlas-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-atlas-900 text-sm mb-1">Seamless Mobility</h3>
              <p className="text-atlas-600 text-xs">Bypass the 90-day tourist clock</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-sand-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-sand-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-semibold text-atlas-900 text-sm mb-1">Foundation for the Future</h3>
              <p className="text-atlas-600 text-xs">Position yourself in the 2030 growth hub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Consultation */}
            <div className="card border-2 border-terracotta-200 relative">
              <div className="absolute -top-3 left-6">
                <span className="bg-terracotta-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Start Here
                </span>
              </div>
              <div className="w-14 h-14 bg-terracotta-100 rounded-xl flex items-center justify-center mb-6 mt-2">
                <svg className="w-7 h-7 text-terracotta-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-atlas-900 mb-3">Free Initial Consultation</h3>
              <p className="text-atlas-600 mb-4">
                Start with a complimentary 30-minute consultation to discuss your goals,
                ask questions, and understand if Morocco is right for you.
              </p>
              <ul className="space-y-2 text-atlas-600 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-olive-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Personalized assessment
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-olive-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Answer your questions
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-olive-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Outline next steps
                </li>
              </ul>
              <div className="pt-4 border-t border-sand-200">
                <p className="text-terracotta-600 font-semibold">Free</p>
              </div>
            </div>

            {/* Visa Support */}
            <div className="card">
              <div className="w-14 h-14 bg-atlas-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-atlas-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-atlas-900 mb-3">Visa & Documentation</h3>
              <p className="text-atlas-600 mb-4">
                Expert guidance through the visa application process, from document
                preparation to submission and follow-up.
              </p>
              <ul className="space-y-2 text-atlas-600 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-olive-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Document checklist & review
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-olive-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Translation coordination
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-olive-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Application submission support
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-olive-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Status tracking & updates
                </li>
              </ul>
              <div className="pt-4 border-t border-sand-200">
                <p className="text-atlas-700 font-semibold">Starting at $500</p>
              </div>
            </div>

            {/* Carte de Séjour */}
            <div className="card">
              <div className="w-14 h-14 bg-olive-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-olive-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-atlas-900 mb-3">Carte de Séjour Support</h3>
              <p className="text-atlas-600 mb-4">
                Full support for obtaining your Moroccan residence permit, including
                document preparation and accompaniment to appointments.
              </p>
              <ul className="space-y-2 text-atlas-600 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-olive-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Complete document preparation
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-olive-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Prefecture appointment scheduling
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-olive-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  In-person accompaniment
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-olive-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Follow-up until approval
                </li>
              </ul>
              <div className="pt-4 border-t border-sand-200">
                <p className="text-atlas-700 font-semibold">Starting at $800</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* US Document Services - Featured */}
      <section className="section-padding bg-terracotta-50">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white rounded-2xl border-2 border-terracotta-300 p-8 md:p-10 shadow-lg relative">
            <div className="absolute -top-3 left-6">
              <span className="bg-terracotta-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Major Pain Point Solved
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-14 h-14 bg-terracotta-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-terracotta-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-atlas-900 mb-4">
                  FBI Background Check & Apostille Service
                </h2>
                <p className="text-atlas-600 mb-4">
                  Already in Morocco and need your FBI background check apostilled in Washington, DC?
                  This is one of the biggest hurdles for Americans abroad. <strong>We handle the entire
                  US side of your paperwork</strong> so you don&apos;t have to fly back or rely on distant
                  family members.
                </p>
                <ul className="space-y-2 text-atlas-600 text-sm mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-olive-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    FBI Identity History Summary request
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-olive-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Apostille through US Department of State in DC
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-olive-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Secure international shipping to Morocco
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-olive-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Status updates throughout the process
                  </li>
                </ul>
              </div>
              <div className="bg-sand-50 rounded-xl p-6">
                <p className="text-sm text-atlas-600 mb-2">FBI Check + Apostille Service</p>
                <p className="text-3xl font-bold text-atlas-900 mb-4">Starting at $400</p>
                <p className="text-atlas-600 text-sm mb-4">
                  Plus government fees (FBI: ~$18, Apostille: ~$20)
                </p>
                <div className="bg-terracotta-100 rounded-lg p-4 mb-6">
                  <p className="text-terracotta-800 text-sm font-medium">
                    Why this matters: The FBI check must be federal (not state) and apostilled
                    specifically at the US Department of State in Washington, DC—not at a state
                    Secretary of State office.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="block w-full btn-primary text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-sand-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atlas-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-atlas-600 max-w-2xl mx-auto">
              Beyond documentation, we offer a range of services to make your
              transition as smooth as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-terracotta-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-terracotta-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-atlas-900 mb-2">Housing Assistance</h3>
                  <p className="text-atlas-600 text-sm mb-3">
                    Help finding the perfect rental or property purchase, including neighborhood
                    recommendations, viewings, and lease negotiation.
                  </p>
                  <p className="text-atlas-700 font-medium">Starting at $300</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-atlas-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-atlas-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-atlas-900 mb-2">Bank Account Setup</h3>
                  <p className="text-atlas-600 text-sm mb-3">
                    Guidance on opening a Moroccan bank account, understanding banking options,
                    and setting up international transfers.
                  </p>
                  <p className="text-atlas-700 font-medium">Starting at $150</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-olive-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-atlas-900 mb-2">Arrival Support</h3>
                  <p className="text-atlas-600 text-sm mb-3">
                    Airport pickup, settling-in assistance, and orientation to help you hit
                    the ground running when you arrive.
                  </p>
                  <p className="text-atlas-700 font-medium">Starting at $200</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sand-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-sand-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-atlas-900 mb-2">SIM Card & Utilities</h3>
                  <p className="text-atlas-600 text-sm mb-3">
                    Help setting up your phone service, internet, and utilities so you&apos;re
                    connected from day one.
                  </p>
                  <p className="text-atlas-700 font-medium">Starting at $100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Package */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="bg-gradient-to-r from-atlas-800 to-atlas-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-terracotta-400 font-semibold">Best Value</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">
                  Complete Relocation Package
                </h2>
                <p className="text-sand-200 mb-6">
                  Our comprehensive package covers everything from initial planning
                  to settling into your new Moroccan home. Ideal for those who want
                  full support throughout the process.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sand-100">
                    <svg className="w-5 h-5 text-terracotta-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Everything in Visa & Carte de Séjour packages
                  </li>
                  <li className="flex items-center gap-3 text-sand-100">
                    <svg className="w-5 h-5 text-terracotta-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Housing search & lease support
                  </li>
                  <li className="flex items-center gap-3 text-sand-100">
                    <svg className="w-5 h-5 text-terracotta-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Bank account setup assistance
                  </li>
                  <li className="flex items-center gap-3 text-sand-100">
                    <svg className="w-5 h-5 text-terracotta-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Airport pickup & arrival orientation
                  </li>
                  <li className="flex items-center gap-3 text-sand-100">
                    <svg className="w-5 h-5 text-terracotta-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    3 months of ongoing support
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 text-atlas-900">
                <p className="text-sm text-atlas-600 mb-2">Complete Package</p>
                <p className="text-4xl font-bold mb-4">$2,500</p>
                <p className="text-atlas-600 text-sm mb-6">
                  Save over $500 compared to individual services
                </p>
                <Link
                  href="/contact"
                  className="block w-full btn-primary text-center"
                >
                  Get Started
                </Link>
                <p className="text-xs text-atlas-500 mt-4 text-center">
                  Payment plans available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-sand-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atlas-900 mb-4">
              Why Choose New Life Morocco?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-terracotta-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-atlas-900 mb-2">Expat Experience</h3>
              <p className="text-atlas-600 text-sm">
                Our team includes Americans who have made the move themselves.
                We understand your concerns and questions firsthand.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-atlas-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-atlas-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-atlas-900 mb-2">Local Expertise</h3>
              <p className="text-atlas-600 text-sm">
                Strong relationships with local officials, landlords, and service
                providers mean smoother processes and better outcomes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-olive-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-atlas-900 mb-2">Personal Approach</h3>
              <p className="text-atlas-600 text-sm">
                We take time to understand your unique situation and provide
                personalized guidance throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Straight Talk Commitment */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-sand-50 border-l-4 border-terracotta-500 rounded-r-2xl p-8">
            <h3 className="text-xl font-bold text-atlas-900 mb-4">The &quot;Straight Talk&quot; Commitment</h3>
            <p className="text-atlas-700 text-lg">
              &quot;Most people try to navigate the Moroccan administration alone and get caught in
              the &apos;waiting game.&apos; We believe your time is too valuable for that. We provide
              the insider expertise to ensure your residency is handled with the same modern
              efficiency as the Al-Boraq high-speed train.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-atlas-900">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Secure Your Status?
          </h2>
          <p className="mt-4 text-lg text-sand-200">
            Your time is valuable. Let us handle the friction so you can focus on
            building your new life in the Kingdom.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors duration-200 text-lg"
            >
              Speak With a Relocation Partner
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
