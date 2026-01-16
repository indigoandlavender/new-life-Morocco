import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Move to Morocco | Benefits of Living in Morocco',
  description: 'Discover the benefits of living in Morocco: affordable cost of living, beautiful climate, rich culture, modern healthcare, and welcoming communities.',
};

export default function BenefitsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sand-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-atlas-900 sm:text-5xl">
              Why Morocco?
            </h1>
            <p className="mt-6 text-lg leading-8 text-atlas-700">
              From its stunning landscapes to its affordable lifestyle, Morocco offers
              a unique combination of benefits that make it an ideal destination for
              Americans seeking a fresh start.
            </p>
          </div>
        </div>
      </section>

      {/* Cost of Living */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-atlas-900 mb-6">
                Affordable Cost of Living
              </h2>
              <p className="text-atlas-700 mb-4">
                Your money goes significantly further in Morocco. Many expats find they can
                live comfortably on 30-50% of what they would spend in the United States.
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-olive-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-olive-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-atlas-900">Housing</h4>
                    <p className="text-atlas-600">Modern apartments in major cities from $400-800/month; beautiful riads available for purchase</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-olive-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-olive-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-atlas-900">Dining</h4>
                    <p className="text-atlas-600">Delicious local meals from $3-5; fresh produce from souks at a fraction of US prices</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-olive-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-olive-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-atlas-900">Healthcare</h4>
                    <p className="text-atlas-600">Quality private healthcare at 70-80% less than US costs; excellent dental and medical care</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-olive-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-olive-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-atlas-900">Services</h4>
                    <p className="text-atlas-600">Domestic help, transportation, and personal services at very accessible rates</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-sand-100 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-atlas-900 mb-6">Monthly Cost Comparison</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-sand-300">
                  <span className="text-atlas-700">Expense</span>
                  <div className="flex gap-8">
                    <span className="text-atlas-700 font-medium w-20 text-right">USA</span>
                    <span className="text-atlas-700 font-medium w-20 text-right">Morocco</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-atlas-600">Rent (2BR apartment)</span>
                  <div className="flex gap-8">
                    <span className="text-atlas-700 w-20 text-right">$2,000</span>
                    <span className="text-terracotta-600 font-medium w-20 text-right">$600</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-atlas-600">Groceries</span>
                  <div className="flex gap-8">
                    <span className="text-atlas-700 w-20 text-right">$600</span>
                    <span className="text-terracotta-600 font-medium w-20 text-right">$200</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-atlas-600">Dining out (8x)</span>
                  <div className="flex gap-8">
                    <span className="text-atlas-700 w-20 text-right">$400</span>
                    <span className="text-terracotta-600 font-medium w-20 text-right">$80</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-atlas-600">Transportation</span>
                  <div className="flex gap-8">
                    <span className="text-atlas-700 w-20 text-right">$300</span>
                    <span className="text-terracotta-600 font-medium w-20 text-right">$50</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-atlas-600">Healthcare</span>
                  <div className="flex gap-8">
                    <span className="text-atlas-700 w-20 text-right">$500</span>
                    <span className="text-terracotta-600 font-medium w-20 text-right">$100</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-sand-300">
                  <span className="text-atlas-900 font-semibold">Total</span>
                  <div className="flex gap-8">
                    <span className="text-atlas-900 font-semibold w-20 text-right">$3,800</span>
                    <span className="text-terracotta-600 font-bold w-20 text-right">$1,030</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-atlas-500 mt-4">*Estimates based on major city living. Actual costs vary by location.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Climate */}
      <section className="section-padding bg-sand-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atlas-900 mb-4">
              A Climate for Every Preference
            </h2>
            <p className="text-lg text-atlas-600 max-w-2xl mx-auto">
              Morocco&apos;s diverse geography means you can choose your ideal climate,
              from Mediterranean beaches to mountain retreats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-atlas-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-atlas-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-atlas-900 mb-2">Coastal Cities</h3>
              <p className="text-atlas-600 mb-4">
                Casablanca, Tangier, Essaouira
              </p>
              <p className="text-atlas-600 text-sm">
                Mediterranean climate with mild winters (50-60°F) and warm summers (75-85°F).
                Ocean breezes keep temperatures comfortable year-round.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-terracotta-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-atlas-900 mb-2">Imperial Cities</h3>
              <p className="text-atlas-600 mb-4">
                Marrakech, Fez, Meknes
              </p>
              <p className="text-atlas-600 text-sm">
                Semi-arid climate with hot summers (90-100°F) and mild winters (45-65°F).
                Perfect for those who love warm, sunny days.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-olive-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-atlas-900 mb-2">Mountain Regions</h3>
              <p className="text-atlas-600 mb-4">
                Ifrane, Chefchaouen, Atlas Mountains
              </p>
              <p className="text-atlas-600 text-sm">
                Alpine climate with cool summers (65-80°F) and snowy winters.
                Popular with those seeking a European-style climate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Safety */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-atlas-900 mb-6">
                Rich Culture & Heritage
              </h2>
              <p className="text-atlas-700 mb-6">
                Morocco sits at the crossroads of Africa, Europe, and the Arab world,
                creating a uniquely diverse cultural experience. From ancient medinas
                to modern galleries, you&apos;ll never run out of things to explore.
              </p>
              <ul className="space-y-3 text-atlas-600">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-terracotta-500 rounded-full"></span>
                  World-renowned cuisine blending Berber, Arab, and Mediterranean influences
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-terracotta-500 rounded-full"></span>
                  UNESCO World Heritage sites including ancient medinas
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-terracotta-500 rounded-full"></span>
                  Vibrant arts scene with traditional crafts and modern galleries
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-terracotta-500 rounded-full"></span>
                  Year-round festivals celebrating music, film, and culture
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-terracotta-500 rounded-full"></span>
                  French and English widely spoken alongside Arabic and Berber
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-atlas-900 mb-6">
                Safety & Stability
              </h2>
              <p className="text-atlas-700 mb-6">
                Morocco has invested heavily in security and stability, making it one of
                the safest destinations in Africa and the wider region. The country
                welcomes millions of tourists and expats each year.
              </p>
              <ul className="space-y-3 text-atlas-600">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-olive-500 rounded-full"></span>
                  Constitutional monarchy with stable government since 1956
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-olive-500 rounded-full"></span>
                  Low crime rates, especially in expat-populated areas
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-olive-500 rounded-full"></span>
                  Strong tourism infrastructure with tourist police assistance
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-olive-500 rounded-full"></span>
                  Welcoming attitude toward foreigners and religious tolerance
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-olive-500 rounded-full"></span>
                  Growing modern economy with improving infrastructure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare & Infrastructure */}
      <section className="section-padding bg-atlas-800 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Modern Amenities & Healthcare
            </h2>
            <p className="text-lg text-sand-200 max-w-2xl mx-auto">
              Morocco offers excellent healthcare and modern infrastructure,
              especially in major cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-terracotta-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Quality Healthcare</h3>
              <p className="text-sand-300 text-sm">
                Private clinics with Western-trained doctors and modern equipment
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-terracotta-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">High-Speed Internet</h3>
              <p className="text-sand-300 text-sm">
                Fiber optic available in cities; 4G/5G mobile coverage nationwide
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-terracotta-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Easy Travel</h3>
              <p className="text-sand-300 text-sm">
                Direct flights to US and Europe; modern trains connecting cities
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-terracotta-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">International Brands</h3>
              <p className="text-sand-300 text-sm">
                Major supermarkets, international restaurants, and familiar stores
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sand-50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-atlas-900 sm:text-4xl">
            Ready to Learn More?
          </h2>
          <p className="mt-4 text-lg text-atlas-600">
            Every situation is unique. Let&apos;s discuss your specific goals and how
            Morocco might be the perfect fit for your next chapter.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Schedule Free Consultation
            </Link>
            <Link href="/visa" className="btn-secondary">
              Explore Visa Options
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
