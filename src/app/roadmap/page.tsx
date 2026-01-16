import { Metadata } from 'next';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata: Metadata = {
  title: 'The American\'s Roadmap to Morocco | Free Guide | New Life Morocco',
  description: 'Download the free guide: Why the 2030 World Cup Host is the #1 High-Vibration Sanctuary for American Families and Professionals.',
};

export default function RoadmapPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-atlas-900 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-terracotta-400 font-medium uppercase tracking-wide text-sm">
              Free Level 1 Guide
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl leading-tight">
              The American&apos;s Roadmap to Morocco
            </h1>
            <p className="mt-2 text-xl text-terracotta-400 font-medium">
              From NYC to the Mediterranean Hub
            </p>
            <p className="mt-6 text-lg text-sand-200">
              Why the 2030 World Cup Host is the #1 &quot;High-Vibration&quot; Sanctuary
              for American Families and Professionals.
            </p>
          </div>
        </div>
      </section>

      {/* The Hook */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <p className="text-xl text-atlas-700 leading-relaxed">
            We created this guide for the <strong>visionaries</strong> who see where the world is going.
            Morocco isn&apos;t just a destination; it&apos;s a <strong>rising global power</strong> with
            world-class infrastructure, American schools, and a 200-year history of friendship with the US.
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
              <div className="w-12 h-12 bg-terracotta-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-terracotta-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-atlas-900 mb-2">The Modern Kingdom</h3>
              <p className="text-atlas-600">
                A deep dive into the high-speed rail, 5G connectivity, and the American Hospital networks
                that make Morocco a Tier-1 destination.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-olive-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-atlas-900 mb-2">The Schooling Standard</h3>
              <p className="text-atlas-600">
                A directory of the elite US-accredited schools in Tangier, Casablanca, Rabat, and
                Marrakech—your children stay on the American track.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-atlas-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-atlas-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-atlas-900 mb-2">The 2030 Vision</h3>
              <p className="text-atlas-600">
                Why the World Cup is transforming Morocco into the &quot;Gateway of the Future&quot;
                and what that means for property values and opportunity.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-sand-200 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sand-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-atlas-900 mb-2">The Proximity Advantage</h3>
              <p className="text-atlas-600">
                How to live in a &quot;High-Vibe&quot; sanctuary while staying 1 hour from Spain
                and 7 hours from NYC.
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
              Download the Roadmap to Your New Life
            </h2>
            <p className="text-sand-300 text-center mb-8">
              Join thousands of Americans exploring their options.
            </p>
            <NewsletterForm
              showTimeline={true}
              buttonText="Get the Guide & Fast-Track Your Future"
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
              Can You Do This Yourself? Yes. Should You?
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-atlas-700">
            <p>
              Obtaining residency in any foreign country is a journey. You can absolutely attempt to
              navigate the Moroccan administration on your own. You can spend your first 90 days in lines,
              translating documents, and hoping you have the right federal stamps.
            </p>
            <p className="font-semibold text-atlas-900">
              But your time is your most valuable asset.
            </p>
            <p>
              We offer the <strong>&quot;Skip the Line&quot;</strong> experience for the Moroccan
              relocation process. We are the Fast-Track. We handle the friction, the follow-ups,
              and the &quot;administrative nuances&quot; so you can spend your first three months
              enjoying your new home, not sitting in a government office.
            </p>
          </div>

          <div className="mt-10 bg-white rounded-xl p-8 border-2 border-terracotta-200 text-center">
            <p className="text-2xl font-bold text-atlas-900 mb-4">
              We don&apos;t just sell residency.
            </p>
            <p className="text-xl text-terracotta-600 font-medium">
              We sell the 100 hours of your life you would have spent trying to figure it out alone.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-atlas-900">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Fast-Track Your Future?
          </h2>
          <p className="text-lg text-sand-200 mb-8">
            Download the free guide now, or skip straight to a conversation
            with our relocation team.
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
              Skip to Fast-Track Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
