import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-sand-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-atlas-900 sm:text-6xl text-balance">
              Begin Your New Chapter in Morocco
            </h1>
            <p className="mt-6 text-lg leading-8 text-atlas-700">
              Discover a land of rich culture, warm hospitality, and endless possibilities.
              We guide Americans through every step of relocating to Morocco—from visa applications
              to finding your perfect home.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/contact" className="btn-primary">
                Schedule Free Consultation
              </Link>
              <Link href="/benefits" className="btn-secondary">
                Why Morocco?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-atlas-900 sm:text-4xl">
              Why Americans Choose Morocco
            </h2>
            <p className="mt-4 text-lg text-atlas-600 max-w-2xl mx-auto">
              A welcoming country with modern amenities, affordable living, and a quality of life
              that&apos;s hard to find anywhere else.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-12 h-12 bg-terracotta-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-terracotta-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-atlas-900 mb-2">Affordable Living</h3>
              <p className="text-atlas-600">
                Enjoy a high quality of life at a fraction of US costs. Rent, food, and healthcare
                are significantly more affordable.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-olive-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-atlas-900 mb-2">Beautiful Climate</h3>
              <p className="text-atlas-600">
                From Mediterranean coasts to mountain retreats, Morocco offers diverse climates
                with over 300 days of sunshine annually.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-atlas-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-atlas-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-atlas-900 mb-2">Welcoming Culture</h3>
              <p className="text-atlas-600">
                Moroccans are known for their hospitality. You&apos;ll find a warm welcome and
                a thriving expat community to help you settle in.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-sand-200 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sand-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-atlas-900 mb-2">Safe & Stable</h3>
              <p className="text-atlas-600">
                Morocco is one of the most stable countries in the region with low crime rates
                and a strong commitment to security.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-terracotta-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-terracotta-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-atlas-900 mb-2">Strategic Location</h3>
              <p className="text-atlas-600">
                Just a short flight to Europe, Morocco offers the perfect base for exploring
                multiple continents while staying connected to home.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-olive-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-atlas-900 mb-2">Rich History & Culture</h3>
              <p className="text-atlas-600">
                Immerse yourself in centuries of history, from ancient medinas to modern art scenes.
                Every day brings new discoveries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-sand-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-atlas-900 sm:text-4xl">
              Your Path to Morocco
            </h2>
            <p className="mt-4 text-lg text-atlas-600 max-w-2xl mx-auto">
              We simplify the relocation process so you can focus on planning your new adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-terracotta-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-atlas-900 mb-2">Free Consultation</h3>
              <p className="text-atlas-600 text-sm">
                Discuss your goals, timeline, and questions with our expert team.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-terracotta-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-atlas-900 mb-2">Personalized Plan</h3>
              <p className="text-atlas-600 text-sm">
                Receive a tailored relocation roadmap based on your unique situation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-terracotta-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-atlas-900 mb-2">Guided Process</h3>
              <p className="text-atlas-600 text-sm">
                We handle visa applications, documentation, and local arrangements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-terracotta-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-atlas-900 mb-2">Welcome Home</h3>
              <p className="text-atlas-600 text-sm">
                Arrive in Morocco with everything in place to start your new life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-atlas-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Explore Your Options?
          </h2>
          <p className="mt-4 text-lg text-sand-200">
            Take the first step toward your Moroccan adventure. Our team is here to answer
            your questions and help you understand what&apos;s possible.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors duration-200 text-lg"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
