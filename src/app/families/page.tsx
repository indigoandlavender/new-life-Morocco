import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'American Families & Education | Accredited US Schools | Morocco Advisors',
  description: 'Accredited American schools in Morocco. US curriculum, IB programs, Ivy League preparation. Your children don\'t skip a beat.',
};

export default function FamiliesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-atlas-900 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sand-400 font-medium uppercase tracking-wider text-sm">
              For American Families
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl leading-tight">
              Your Children Stay on the US Track
            </h1>
            <p className="mt-6 text-xl text-sand-200">
              Accredited American schools in every major city. US High School Diplomas.
              IB programs. Direct paths to Ivy League and state universities.
              Your kids don&apos;t skip a beat.
            </p>
          </div>
        </div>
      </section>

      {/* The #1 Question */}
      <section className="py-16 bg-terracotta-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-atlas-900 mb-4">
            &quot;But What About the Schools?&quot;
          </h2>
          <p className="text-lg text-atlas-700">
            We hear this from every American family. It&apos;s the #1 deal-breaker—and the #1 surprise
            when they discover what&apos;s actually available in Morocco.
          </p>
        </div>
      </section>

      {/* Accredited American Schools */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-atlas-500 font-semibold uppercase text-sm tracking-wider">
              Accredited American Schools
            </span>
            <h2 className="mt-2 text-3xl font-bold text-atlas-900">
              US Curriculum. International Recognition.
            </h2>
            <p className="mt-4 text-lg text-atlas-600 max-w-2xl">
              Morocco has a network of accredited American schools that follow US curriculum standards.
              These aren&apos;t &quot;international schools that teach some English.&quot; These are full American
              schools with US High School Diplomas, AP courses, and direct university pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Casablanca */}
            <div className="bg-sand-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-atlas-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CAS</span>
                </div>
                <h3 className="text-xl font-bold text-atlas-900">Casablanca</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-atlas-900 mb-1">American Academy Casablanca (AAC)</h4>
                  <p className="text-atlas-600 text-sm mb-2">Pre-K through Grade 12</p>
                  <ul className="text-atlas-600 text-sm space-y-1">
                    <li>• US High School Diploma</li>
                    <li>• Advanced Placement (AP) courses</li>
                    <li>• NCAA-approved curriculum</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-atlas-900 mb-1">George Washington Academy (GWA)</h4>
                  <p className="text-atlas-600 text-sm mb-2">Pre-K through Grade 12</p>
                  <ul className="text-atlas-600 text-sm space-y-1">
                    <li>• US curriculum with French option</li>
                    <li>• International Baccalaureate (IB)</li>
                    <li>• STEM-focused programs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Rabat */}
            <div className="bg-sand-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-atlas-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">RAB</span>
                </div>
                <h3 className="text-xl font-bold text-atlas-900">Rabat (Capital)</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-atlas-900 mb-1">Rabat American School (RAS)</h4>
                  <p className="text-atlas-600 text-sm mb-2">Pre-K through Grade 12</p>
                  <ul className="text-atlas-600 text-sm space-y-1">
                    <li>• Accredited by Middle States Association</li>
                    <li>• US High School Diploma</li>
                    <li>• College counseling for US universities</li>
                    <li>• 60+ years of operation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Marrakech */}
            <div className="bg-sand-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-atlas-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MRK</span>
                </div>
                <h3 className="text-xl font-bold text-atlas-900">Marrakech</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-atlas-900 mb-1">American School of Marrakesh (ASM)</h4>
                  <p className="text-atlas-600 text-sm mb-2">Pre-K through Grade 12</p>
                  <ul className="text-atlas-600 text-sm space-y-1">
                    <li>• US-accredited curriculum</li>
                    <li>• Small class sizes</li>
                    <li>• Strong arts and athletics programs</li>
                    <li>• International student community</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tangier */}
            <div className="bg-sand-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-atlas-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TNG</span>
                </div>
                <h3 className="text-xl font-bold text-atlas-900">Tangier</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border-2 border-terracotta-200">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-atlas-900">American School of Tangier (AST)</h4>
                    <span className="bg-terracotta-100 text-terracotta-700 text-xs px-2 py-0.5 rounded">Historic</span>
                  </div>
                  <p className="text-atlas-600 text-sm mb-2">Pre-K through Grade 12</p>
                  <p className="text-atlas-700 text-sm font-medium mb-2">
                    The oldest American school in the Arab world. Founded 1950.
                  </p>
                  <ul className="text-atlas-600 text-sm space-y-1">
                    <li>• US High School Diploma</li>
                    <li>• International Baccalaureate (IB)</li>
                    <li>• 70+ years of proven results</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What This Means */}
      <section className="py-16 bg-atlas-900 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">What This Means for Your Family</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="w-16 h-16 bg-terracotta-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Academic Gap</h3>
              <p className="text-sand-200 text-sm">
                Your children continue with US curriculum standards. When you return to the States
                (or apply to US colleges), there&apos;s no transition gap.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-terracotta-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">College Ready</h3>
              <p className="text-sand-200 text-sm">
                AP courses, IB programs, and college counseling designed to get American students
                into US universities. The path to college stays on track.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-terracotta-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Advantage</h3>
              <p className="text-sand-200 text-sm">
                Your kids gain fluency in French or Arabic, international experience,
                and a worldview that sets them apart in any university application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond School */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-atlas-500 font-semibold uppercase text-sm tracking-wider">
              Family Life
            </span>
            <h2 className="mt-2 text-3xl font-bold text-atlas-900">
              Beyond the Classroom
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-sand-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-atlas-900 mb-3">Sports & Activities</h3>
              <p className="text-atlas-600 text-sm">
                Soccer, tennis, swimming, horseback riding, golf—Morocco has extensive youth sports
                programs. The climate allows outdoor activities year-round.
              </p>
            </div>
            <div className="bg-sand-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-atlas-900 mb-3">Safety</h3>
              <p className="text-atlas-600 text-sm">
                No active shooter drills. No metal detectors at school entrances. Kids walk to
                school. They play outside. It&apos;s the childhood many American parents remember but
                can&apos;t provide in the US.
              </p>
            </div>
            <div className="bg-sand-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-atlas-900 mb-3">Cost</h3>
              <p className="text-atlas-600 text-sm">
                Top-tier private school tuition: $8,000-15,000/year. Compare that to $30,000-50,000+
                for equivalent schools in US metros. The savings alone can fund college.
              </p>
            </div>
            <div className="bg-sand-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-atlas-900 mb-3">Expat Community</h3>
              <p className="text-atlas-600 text-sm">
                American families are part of a thriving international community. Your kids will
                have friends from the US, Europe, and around the world—all sharing the same experience.
              </p>
            </div>
            <div className="bg-sand-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-atlas-900 mb-3">Travel & Exploration</h3>
              <p className="text-atlas-600 text-sm">
                Weekend trips to Europe. School holidays in the Atlas Mountains or Sahara.
                Your children grow up as global citizens, not tourists.
              </p>
            </div>
            <div className="bg-sand-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-atlas-900 mb-3">Healthcare</h3>
              <p className="text-atlas-600 text-sm">
                Pediatric care at European standards, 15% of US costs. No insurance nightmares.
                When your kid needs to see a doctor, you see a doctor—same day, affordable, excellent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <svg className="w-12 h-12 text-atlas-300 mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p className="text-xl text-atlas-700 mb-6 leading-relaxed">
              &quot;Our biggest fear was the schools. We spent months researching before we finally
              visited AST in Tangier. Within an hour, we knew it was the right choice. Our daughter
              is thriving—better teachers, smaller classes, and she&apos;s learning French on top of her
              regular curriculum. She&apos;s more prepared for college now than she would have been
              staying in our California public school.&quot;
            </p>
            <p className="text-atlas-900 font-medium">— The Martinez Family, moved from San Diego in 2023</p>
          </div>
        </div>
      </section>

      {/* Essentials Data Table */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-atlas-500 font-semibold uppercase text-sm tracking-wider">
              The Basics
            </span>
            <h2 className="mt-2 text-3xl font-bold text-atlas-900">
              What Families Need to Know
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-atlas-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Area</th>
                  <th className="px-6 py-4 text-left">What It&apos;s Like</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-200">
                <tr>
                  <td className="px-6 py-4 font-semibold text-atlas-900">Education</td>
                  <td className="px-6 py-4 text-atlas-700">
                    <strong>American School System.</strong> Accredited US-curriculum schools in Casablanca,
                    Rabat, Tangier, and Marrakech. Your kids don&apos;t skip a beat for college prep.
                  </td>
                </tr>
                <tr className="bg-sand-50">
                  <td className="px-6 py-4 font-semibold text-atlas-900">Healthcare</td>
                  <td className="px-6 py-4 text-atlas-700">
                    <strong>European Standards.</strong> World-class private clinics (AKDITAL network) offering
                    MRI, oncology, and pediatric care at 1/10th of US costs. No 6-month wait times.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-atlas-900">Connectivity</td>
                  <td className="px-6 py-4 text-atlas-700">
                    <strong>Global Hub.</strong> 5G is standard in major cities. Fiber-optic internet more
                    reliable and cheaper than Comcast or Cox.
                  </td>
                </tr>
                <tr className="bg-sand-50">
                  <td className="px-6 py-4 font-semibold text-atlas-900">Safety</td>
                  <td className="px-6 py-4 text-atlas-700">
                    <strong>Low Crime.</strong> Violent crime significantly lower than any major US city.
                    No &quot;no-go&quot; zones. High-tech national security focus.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-atlas-900">Cost of Living</td>
                  <td className="px-6 py-4 text-atlas-700">
                    <strong>Your money goes 3-5x further.</strong> Private school tuition, healthcare, housing, and
                    daily expenses are a fraction of US costs with equal or better quality.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-terracotta-600 to-terracotta-700">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Have Questions About Schools or Family Life?
          </h2>
          <p className="mt-4 text-xl text-sand-100">
            We&apos;re happy to talk through what this looks like for your specific situation—schools,
            neighborhoods, costs, whatever&apos;s on your mind.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-terracotta-600 font-semibold rounded-lg hover:bg-sand-100 transition-colors duration-200 text-lg"
            >
              Start the Conversation
            </Link>
            <Link
              href="/infrastructure"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-lg"
            >
              See What&apos;s There
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
