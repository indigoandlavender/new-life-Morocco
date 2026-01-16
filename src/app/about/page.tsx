import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Morocco Advisors',
  description: 'Americans who\'ve made the move, helping families like yours do the same. We handle the logistics so you can focus on your family.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-atlas-900 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sand-400 font-medium uppercase tracking-wider text-sm">
              Who We Are
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl leading-tight">
              We&apos;ve Made This Move.
              <span className="block text-terracotta-400">Now We Help Families Like Yours.</span>
            </h1>
            <p className="mt-6 text-xl text-sand-200">
              We&apos;re not a faceless agency. We&apos;re Americans who live here,
              paired with local experts who know the system inside and out.
            </p>
          </div>
        </div>
      </section>

      {/* The Gap */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-xl text-atlas-700 leading-relaxed mb-6">
            We started this because we saw how hard it was to get straight answers.
            The expat forums are full of outdated info. The official processes are confusing.
            And most &quot;relocation services&quot; just hand you a checklist.
          </p>
          <p className="text-xl text-atlas-700 leading-relaxed">
            We wanted something better: a team that actually understands what American families
            need, and can make the transition feel manageable instead of overwhelming.
          </p>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atlas-900">
              How We Work
            </h2>
            <p className="mt-4 text-lg text-atlas-600">
              We&apos;re Americans who&apos;ve been through this, working with local experts who know the system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-200">
              <div className="w-14 h-14 bg-atlas-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-atlas-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-3">Honest Answers</h3>
              <p className="text-atlas-600">
                We tell you what the forums won&apos;t. If a neighborhood isn&apos;t right for your kids or a
                document needs work, you&apos;ll hear it from us first—not after you&apos;ve already committed.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-200">
              <div className="w-14 h-14 bg-olive-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-olive-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-3">We Handle the Bureaucracy</h3>
              <p className="text-atlas-600">
                Paperwork, government offices, waiting in line—we do it so you don&apos;t have to.
                You focus on your family; we focus on the logistics.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-200">
              <div className="w-14 h-14 bg-atlas-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-atlas-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-3">Beyond Just Paperwork</h3>
              <p className="text-atlas-600">
                We don&apos;t just get you a residency card. We help you find the right schools,
                doctors, neighborhoods—everything you need to actually feel settled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Role We Play */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-atlas-500 font-semibold uppercase text-sm tracking-wider">
                What We Do
              </span>
              <h2 className="mt-2 text-3xl font-bold text-atlas-900 mb-6">
                Your Team on the Ground
              </h2>
              <p className="text-lg text-atlas-700 mb-4">
                While you&apos;re focused on your family and your work, we&apos;re at the government offices,
                the banks, dealing with the paperwork.
              </p>
              <p className="text-lg text-atlas-700 mb-4">
                We speak the language—literally and figuratively—so you don&apos;t have to figure it all out yourself.
              </p>
              <p className="text-lg text-atlas-700">
                <strong>Think of us as your local friends who&apos;ve already been through this.</strong>
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-morocco-door.jpg"
                alt="Beautiful traditional Moroccan blue door"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Sidebar */}
      <section className="py-20 bg-atlas-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sand-400 font-medium uppercase tracking-wider text-sm">
              What Makes Us Different
            </span>
            <h2 className="mt-2 text-3xl font-bold text-white">
              Why Families Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-atlas-800/50 rounded-xl p-8 border border-atlas-700">
              <h3 className="text-sand-400 font-bold text-lg mb-3">We&apos;ve Done This Ourselves</h3>
              <p className="text-sand-200">
                We&apos;re not just consultants reading from a guidebook. We&apos;re Americans who
                actually made this move and know what you&apos;re going through.
              </p>
            </div>

            <div className="bg-atlas-800/50 rounded-xl p-8 border border-atlas-700">
              <h3 className="text-olive-400 font-bold text-lg mb-3">We Know What Matters</h3>
              <p className="text-sand-200">
                Good schools, reliable healthcare, safe neighborhoods. We focus on the cities
                and areas where American families can actually thrive.
              </p>
            </div>

            <div className="bg-atlas-800/50 rounded-xl p-8 border border-atlas-700">
              <h3 className="text-sand-400 font-bold text-lg mb-3">We Sweat the Details</h3>
              <p className="text-sand-200">
                From making sure your documents are right the first time to helping you
                set up banking—we handle the stuff that trips people up.
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

      {/* The Closing Invitation */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <p className="text-xl text-atlas-700 leading-relaxed mb-8">
            Moving abroad is a big decision. It helps to have someone in your corner who&apos;s
            been through it and can give you straight answers about what to expect.
          </p>
          <p className="text-2xl font-bold text-atlas-900">
            We&apos;re happy to talk—even if you&apos;re just exploring the idea.
          </p>
          <p className="mt-2 text-xl text-atlas-700 font-medium">
            No pressure. Just honest conversation.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors duration-200 text-lg"
            >
              Start the Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
