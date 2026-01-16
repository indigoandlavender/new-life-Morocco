import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | The Bridge Between Two Worlds | New Life Morocco',
  description: 'We don\'t just know the Kingdom. We understand your expectations. American expats and local experts providing strategic advocacy for your Moroccan transition.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-atlas-900 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-terracotta-400 font-medium uppercase tracking-wide text-sm">
              The Bridge Between Two Worlds
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl leading-tight">
              We Don&apos;t Just Know the Kingdom.
              <span className="block text-terracotta-400">We Understand Your Expectations.</span>
            </h1>
            <p className="mt-6 text-xl text-sand-200">
              Most relocation services are built on paperwork.
              We are built on <strong>Advocacy</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* The Gap */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-xl text-atlas-700 leading-relaxed mb-6">
            We founded this partnership because we saw a gap between the rising, modern reality
            of Morocco and the American family&apos;s need for certainty, safety, and speed.
          </p>
          <p className="text-xl text-atlas-700 leading-relaxed">
            We know that for you, moving isn&apos;t just about a change of scenery—it&apos;s about
            maintaining a <strong>high-vibration lifestyle</strong> without the friction of &quot;starting over.&quot;
          </p>
        </div>
      </section>

      {/* Straight Talk Philosophy */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atlas-900">
              Our &quot;Straight Talk&quot; Philosophy
            </h2>
            <p className="mt-4 text-lg text-atlas-600">
              We are Americans and local experts who have navigated the &quot;Modern Kingdom&quot; at the highest levels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-200">
              <div className="w-14 h-14 bg-terracotta-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-terracotta-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-3">Radical Transparency</h3>
              <p className="text-atlas-600">
                We tell you what the forums won&apos;t. If a neighborhood isn&apos;t right for your kids or a
                document isn&apos;t up to federal standards, you&apos;ll hear it from us first.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-200">
              <div className="w-14 h-14 bg-olive-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-olive-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-3">The &quot;Skip the Line&quot; Mindset</h3>
              <p className="text-atlas-600">
                Your time is your most valuable asset. We treat the Moroccan administration like a
                high-speed rail—moving you through the &quot;red tape&quot; with Tier-1 consulting efficiency.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-200">
              <div className="w-14 h-14 bg-atlas-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-atlas-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-3">High-Vibration Integration</h3>
              <p className="text-atlas-600">
                We don&apos;t just get you a residency card. We connect you to the elite infrastructure—
                the American Schools, the private clinics, and the professional hubs.
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
              <span className="text-terracotta-600 font-semibold uppercase text-sm tracking-wide">
                The Role We Play
              </span>
              <h2 className="mt-2 text-3xl font-bold text-atlas-900 mb-6">
                Your Boots on the Ground
              </h2>
              <p className="text-lg text-atlas-700 mb-4">
                While you focus on your career, your children&apos;s transition, and your vision for 2030,
                we are at the Prefecture, the Bank, and the Ministry.
              </p>
              <p className="text-lg text-atlas-700 mb-4">
                We speak the language of the administration so you don&apos;t have to.
              </p>
              <p className="text-lg text-atlas-700">
                <strong>We are the bridge between the US mindset and the Moroccan reality.</strong>
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
            <span className="text-terracotta-400 font-medium uppercase tracking-wide text-sm">
              The Skip-the-Line Proof
            </span>
            <h2 className="mt-2 text-3xl font-bold text-white">
              Why Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-atlas-800/50 rounded-xl p-8 border border-atlas-700">
              <h3 className="text-terracotta-400 font-bold text-lg mb-3">200+ Year Heritage</h3>
              <p className="text-sand-200">
                We leverage the deep-rooted friendship between the US and Morocco to ensure you are
                seen as a &quot;Guest of the Kingdom,&quot; not just another file.
              </p>
            </div>

            <div className="bg-atlas-800/50 rounded-xl p-8 border border-atlas-700">
              <h3 className="text-olive-400 font-bold text-lg mb-3">Infrastructure Obsessed</h3>
              <p className="text-sand-200">
                We only operate in the hubs connected by the Al-Boraq and anchored by
                Akdital/American Hospital standards.
              </p>
            </div>

            <div className="bg-atlas-800/50 rounded-xl p-8 border border-atlas-700">
              <h3 className="text-terracotta-400 font-bold text-lg mb-3">Total Sovereignty</h3>
              <p className="text-sand-200">
                We specialize in the &quot;Convertible&quot; financial strategies and &quot;Federal-Level&quot;
                document vetting that most services overlook.
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
            You are moving to a country that is hosting the world in 2030.
            You are moving to a place that Madonna calls a sanctuary and where Brahim Diaz calls home.
          </p>
          <p className="text-2xl font-bold text-atlas-900">
            You deserve a partner who can match that energy.
          </p>
          <p className="mt-2 text-xl text-terracotta-600 font-medium">
            Let&apos;s get you to the front of the line.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors duration-200 text-lg"
            >
              Request a Strategy Session
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
