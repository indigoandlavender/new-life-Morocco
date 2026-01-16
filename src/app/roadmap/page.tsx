import { Metadata } from 'next';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata: Metadata = {
  title: 'Free Guide: Moving to Morocco | Morocco Advisors',
  description: 'Download our free guide for American families considering Morocco. Practical information on residency, schools, healthcare, cost of living, and what to expect.',
};

export default function RoadmapPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-atlas-900 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sand-400 font-medium uppercase tracking-wider text-sm">
              Free Guide
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl leading-tight">
              The American&apos;s Guide to Morocco
            </h1>
            <p className="mt-6 text-lg text-sand-200">
              Practical information for families considering the move.
              What you need to know about residency, schools, healthcare, and daily life.
            </p>
          </div>
        </div>
      </section>

      {/* The Hook */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <p className="text-xl text-atlas-700 leading-relaxed">
            We created this guide for American families who are curious about Morocco but don&apos;t know
            where to start. It covers the practical questions: How does residency work? What are the schools
            like? How far does your money go? What&apos;s daily life actually like?
          </p>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atlas-900">Inside This Free Guide</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-atlas-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-atlas-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-atlas-900 mb-2">Residency Basics</h3>
              <p className="text-atlas-600">
                How the residency process works, what documents you need, and the realistic
                timeline for getting your carte de séjour.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-olive-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-atlas-900 mb-2">Schools for Your Kids</h3>
              <p className="text-atlas-600">
                An overview of American curriculum schools in Tangier, Casablanca, Rabat, and
                Marrakech—so your children can continue their education seamlessly.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-atlas-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-atlas-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-atlas-900 mb-2">Cost of Living</h3>
              <p className="text-atlas-600">
                Real numbers on housing, groceries, healthcare, and daily expenses.
                See how far your money actually goes in Morocco.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-sand-200 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sand-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-atlas-900 mb-2">Location & Travel</h3>
              <p className="text-atlas-600">
                Morocco is closer than you think—7 hours from NYC, 1 hour from Spain.
                Easy access to Europe and straightforward flights home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opt-in Form */}
      <section id="opt-in" className="py-20 bg-white">
        <div className="mx-auto max-w-xl px-6 lg:px-8">
          <div className="bg-gradient-to-br from-atlas-900 to-atlas-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white text-center mb-2">
              Get the Free Guide
            </h2>
            <p className="text-sand-300 text-center mb-8">
              Practical information to help you decide if Morocco is right for your family.
            </p>
            <NewsletterForm
              showTimeline={true}
              buttonText="Send Me the Guide"
              source="roadmap-landing"
            />
          </div>
        </div>
      </section>

      {/* The Straight Talk */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-atlas-900">
              Can You Do This Yourself?
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-atlas-700">
            <p>
              Absolutely. Many families navigate the Moroccan residency process on their own, and it&apos;s
              completely doable. You&apos;ll spend time researching requirements, gathering documents,
              and working through the administrative process.
            </p>
            <p className="font-semibold text-atlas-900">
              We&apos;re here if you want help.
            </p>
            <p>
              We&apos;ve helped many families through this process. We know which documents you need,
              how to prepare them correctly, and how to navigate the steps efficiently. If you&apos;d
              rather focus on settling into your new home instead of paperwork, we can help with that.
            </p>
          </div>

          <div className="mt-10 bg-white rounded-xl p-8 border-2 border-atlas-200 text-center">
            <p className="text-2xl font-bold text-atlas-900 mb-4">
              It&apos;s your choice.
            </p>
            <p className="text-xl text-atlas-700 font-medium">
              The guide will help you understand what&apos;s involved, whether you do it yourself or work with us.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-atlas-900">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Learning About Morocco
          </h2>
          <p className="text-lg text-sand-200 mb-8">
            Download the free guide, or reach out if you have questions
            we can help answer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#opt-in"
              className="px-8 py-4 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors"
            >
              Get the Free Guide
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-sand-300 text-sand-100 font-semibold rounded-lg hover:bg-sand-300/10 transition-colors"
            >
              Start the Conversation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
