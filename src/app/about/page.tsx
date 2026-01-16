import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | New Life Morocco',
  description: 'Meet the team behind New Life Morocco. We are expats who made the move ourselves and now help Americans relocate to Morocco with confidence.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-sand-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-atlas-900 sm:text-5xl">
                We Made the Move. Now We Help Others.
              </h1>
              <p className="mt-6 text-lg leading-8 text-atlas-700">
                New Life Morocco was born from our own journey. After relocating from the US
                and navigating the process ourselves, we knew we could help others make the
                transition with confidence and ease.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-morocco-door.jpg"
                alt="Beautiful traditional Moroccan blue door"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about-riad.jpg"
                alt="Beautiful Moroccan riad courtyard"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-atlas-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-atlas-700">
                <p>
                  In 2019, we were living the typical American dream—good jobs, nice house,
                  busy schedules. But something was missing. We craved adventure, connection,
                  and a slower pace of life. After months of research, we took the leap and
                  moved to Morocco.
                </p>
                <p>
                  The transition wasn&apos;t always easy. Navigating visa requirements, finding
                  housing, understanding local customs—we learned it all the hard way. But
                  we also discovered something beautiful: a country full of warmth, opportunity,
                  and a quality of life we never knew existed.
                </p>
                <p>
                  Today, Morocco is our home. And we&apos;ve made it our mission to help other
                  Americans experience the same transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team - Without Photos */}
      <section className="section-padding bg-sand-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atlas-900 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-atlas-600 max-w-2xl mx-auto">
              A blend of American expats and local Moroccan experts, united by a passion
              for helping others discover life in Morocco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-terracotta-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-atlas-900 mb-2">Expat Experience</h3>
              <p className="text-atlas-600">
                Our American team members have lived the expat journey themselves—from
                the excitement of arrival to the challenges of settling in.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-atlas-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-atlas-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-atlas-900 mb-2">Local Expertise</h3>
              <p className="text-atlas-600">
                Our Moroccan team members bring years of experience navigating local
                bureaucracy, real estate, and cultural nuances.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-olive-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-atlas-900 mb-2">Bilingual Support</h3>
              <p className="text-atlas-600">
                We communicate fluently in English, French, and Arabic—ensuring nothing
                gets lost in translation during your relocation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atlas-900 mb-4">
              What We Believe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-terracotta-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-atlas-900 mb-2">Honest Guidance</h3>
              <p className="text-atlas-600">
                Morocco isn&apos;t for everyone, and we&apos;ll tell you that upfront. Our job is to
                help you make the right decision, not just any decision.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-atlas-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-atlas-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-atlas-900 mb-2">Personal Touch</h3>
              <p className="text-atlas-600">
                Every client is unique. We take time to understand your situation and
                provide guidance tailored to your specific needs and goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-olive-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-atlas-900 mb-2">Long-term Support</h3>
              <p className="text-atlas-600">
                Our relationship doesn&apos;t end when you arrive. We&apos;re here to help you
                settle in and thrive in your new Moroccan life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Strip */}
      <section className="py-8 bg-sand-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/about-medina.jpg"
                alt="Walking through a Moroccan medina"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/about-cafe.jpg"
                alt="Moroccan cafe with mint tea"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/about-market.jpg"
                alt="Colorful Moroccan spice market"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/about-sunset.jpg"
                alt="Moroccan rooftop sunset"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-atlas-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-4 text-lg text-sand-200">
            Let&apos;s talk about your dreams for life in Morocco. Schedule a free
            consultation and see if we&apos;re the right fit.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors duration-200 text-lg"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
