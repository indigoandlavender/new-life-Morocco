import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-sand-50 to-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-terracotta-600 font-medium text-sm tracking-wide uppercase mb-4">
                6.5 Hours from NYC. Closer than Hawaii.
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-atlas-900 sm:text-5xl lg:text-6xl text-balance">
                Skip Costa Rica. Discover Morocco.
              </h1>
              <p className="mt-6 text-lg leading-8 text-atlas-700">
                While everyone else is paying US prices in &quot;Americanized&quot; expat spots, smart Americans are
                finding 10x their purchasing power in Morocco. US-friendly time zones. $50 flights to Europe.
                1,000 years of culture. This isn&apos;t a vacation destination—it&apos;s the lifestyle upgrade you&apos;ve been looking for.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  Schedule Free Consultation
                </Link>
                <Link href="/why-morocco" className="btn-secondary text-center">
                  See the Comparison
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero-morocco.jpg"
                alt="Beautiful Moroccan architecture with blue doors and vibrant tiles"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Momentum Ticker */}
      <section className="py-8 bg-atlas-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-olive-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-olive-500"></span>
              </span>
              <h2 className="text-sm font-semibold text-sand-200 uppercase tracking-wide">
                The Kingdom in Motion
              </h2>
            </div>
            <Link href="/pulse" className="text-sm text-terracotta-400 hover:text-terracotta-300 font-medium">
              View Full Intel →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-atlas-800/50 rounded-lg p-4 border border-atlas-700/50">
              <span className="text-xs text-terracotta-400 font-medium">The Icon</span>
              <p className="text-sm text-sand-100 mt-1">
                &quot;I don&apos;t want to leave.&quot; — Madonna shares her Marrakech sanctuary.
              </p>
            </div>
            <div className="bg-atlas-800/50 rounded-lg p-4 border border-atlas-700/50">
              <span className="text-xs text-olive-400 font-medium">The Talent</span>
              <p className="text-sm text-sand-100 mt-1">
                The Choice of a Generation — NYT on why Brahim Diaz chose the Atlas Lions.
              </p>
            </div>
            <div className="bg-atlas-800/50 rounded-lg p-4 border border-atlas-700/50">
              <span className="text-xs text-terracotta-400 font-medium">2030 Vision</span>
              <p className="text-sm text-sand-100 mt-1">
                FIFA confirms Morocco as centerpiece for the most ambitious World Cup ever.
              </p>
            </div>
            <div className="bg-atlas-800/50 rounded-lg p-4 border border-atlas-700/50">
              <span className="text-xs text-olive-400 font-medium">The Growth</span>
              <p className="text-sm text-sand-100 mt-1">
                Oracle & Google Cloud announce new R&D centers in Casablanca Finance City.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Gallery */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/gallery-medina.jpg"
                alt="Colorful Moroccan medina street"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/gallery-food.jpg"
                alt="Traditional Moroccan tagine dish"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/gallery-beach.jpg"
                alt="Beautiful Moroccan coastline"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/gallery-mountains.jpg"
                alt="Atlas Mountains landscape"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
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

      {/* Vision for Your New Life - Three Pillars */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-terracotta-600 font-semibold uppercase text-sm tracking-wide">
              The Vision for Your New Life
            </span>
            <h2 className="mt-2 text-3xl font-bold text-atlas-900 sm:text-4xl">
              More Than a Destination. A Foundation for Your Future.
            </h2>
            <p className="mt-6 text-lg text-atlas-600 max-w-3xl mx-auto">
              We could show you the golden sands of Taghazout, the peaks of the Atlas,
              or the soul-stirring history of our Medinas. But this is not a tourism site.
            </p>
            <p className="mt-4 text-lg text-atlas-700 max-w-3xl mx-auto font-medium">
              We are here to help you envision—and build—a better future for you and your children.
              Morocco isn&apos;t just a place to visit; it&apos;s a modern Kingdom where tradition
              meets world-class infrastructure.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Pillar 1: Education */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-200">
              <div className="w-12 h-12 bg-terracotta-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-terracotta-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-2">World-Class Education</h3>
              <p className="text-sm text-terracotta-600 font-medium mb-4">
                Your children deserve a global perspective without sacrificing American standards.
              </p>
              <p className="text-atlas-600">
                From the American School of Tangier (the oldest in the Arab world) to the high-tech
                campuses of Casablanca and Rabat, your children stay on the US track while gaining
                the gift of multilingualism and a global network.
              </p>
              <Link href="/families" className="inline-block mt-4 text-terracotta-600 hover:text-terracotta-700 font-medium text-sm">
                Explore American Schools →
              </Link>
            </div>

            {/* Pillar 2: Healthcare */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-200">
              <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-olive-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-2">Medical Excellence & Peace of Mind</h3>
              <p className="text-sm text-terracotta-600 font-medium mb-4">
                Healthcare should be a pillar of your security, not a source of stress.
              </p>
              <p className="text-atlas-600">
                Access the American Hospital of Casablanca and the elite International Clinics of
                Marrakech, where US and European standards are the baseline. You are treated with
                dignity, seen immediately, and cared for by specialists who prioritize your well-being.
              </p>
              <Link href="/infrastructure" className="inline-block mt-4 text-terracotta-600 hover:text-terracotta-700 font-medium text-sm">
                See Healthcare Options →
              </Link>
            </div>

            {/* Pillar 3: Future-Proof Economy */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-200">
              <div className="w-12 h-12 bg-atlas-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-atlas-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-atlas-900 mb-2">A Future-Proof Economy</h3>
              <p className="text-sm text-terracotta-600 font-medium mb-4">
                Join a country that is moving upward. The 2030 Vision.
              </p>
              <p className="text-atlas-600">
                As the co-host of the 2030 World Cup, Morocco is undergoing a national metamorphosis.
                With the Al-Boraq High-Speed Rail connecting our cities and a 5G/Fiber-optic backbone
                powering your career, you are moving to a hub of innovation and connectivity.
              </p>
              <Link href="/guide" className="inline-block mt-4 text-terracotta-600 hover:text-terracotta-700 font-medium text-sm">
                Read The 2030 Vision →
              </Link>
            </div>
          </div>

          {/* Direct & Straight Sidebar as Cards */}
          <div className="bg-atlas-900 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-white mb-6 text-center">The Straight Talk</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-terracotta-400">7 Hours</div>
                <div className="text-sand-300 text-sm mt-1">from JFK to Casablanca</div>
                <div className="text-sand-400 text-xs mt-1">Shorter than Hawaii</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-terracotta-400">1777</div>
                <div className="text-sand-300 text-sm mt-1">A Strategic Ally</div>
                <div className="text-sand-400 text-xs mt-1">Oldest friend of the US</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-terracotta-400">1-2 hrs</div>
                <div className="text-sand-300 text-sm mt-1">To Europe</div>
                <div className="text-sand-400 text-xs mt-1">Spain, Portugal, Paris</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-terracotta-400">320 km/h</div>
                <div className="text-sand-300 text-sm mt-1">Al-Boraq TGV</div>
                <div className="text-sand-400 text-xs mt-1">Faster trains than Amtrak</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/Story Section */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/expat-couple.jpg"
                alt="Happy American couple enjoying life in Morocco"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-atlas-900 mb-6">
                &ldquo;Morocco gave us the life we always dreamed of&rdquo;
              </h2>
              <p className="text-atlas-700 text-lg mb-6">
                After 30 years in corporate America, we were ready for something different.
                Morocco offered us adventure, community, and a pace of life we never knew
                was possible. The team at New Life Morocco made our transition seamless.
              </p>
              <p className="text-atlas-600">
                — Sarah & Michael, moved from California in 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-white">
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

      {/* Featured Locations */}
      <section className="section-padding bg-sand-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atlas-900 sm:text-4xl">
              Popular Destinations
            </h2>
            <p className="mt-4 text-lg text-atlas-600 max-w-2xl mx-auto">
              From bustling cities to peaceful coastal towns, find your perfect Moroccan home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/marrakech.jpg"
                alt="Marrakech cityscape with Koutoubia Mosque"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Marrakech</h3>
                <p className="text-sand-200 text-sm">Vibrant culture, historic medina, warm climate</p>
              </div>
            </div>

            <div className="group relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/casablanca.jpg"
                alt="Modern Casablanca skyline"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Casablanca</h3>
                <p className="text-sand-200 text-sm">Economic hub, modern amenities, coastal living</p>
              </div>
            </div>

            <div className="group relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/essaouira.jpg"
                alt="Essaouira coastal town"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Essaouira</h3>
                <p className="text-sand-200 text-sm">Laid-back beach town, artistic community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Map - Line of Modernity */}
      <section className="py-20 bg-atlas-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-terracotta-400 font-medium uppercase tracking-wide text-sm">
              The Line of Modernity
            </span>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Four Cities. One Modern Kingdom.
            </h2>
            <p className="mt-4 text-lg text-sand-300 max-w-3xl mx-auto">
              When you see this infrastructure corridor, the &quot;third world&quot; fear disappears.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Tangier */}
            <Link href="/tangier" className="group bg-atlas-800/50 rounded-xl p-6 hover:bg-atlas-800 transition-colors">
              <div className="w-10 h-10 bg-terracotta-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold">T</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Tangier</h3>
              <p className="text-sand-300 text-sm mb-3">Gateway to Europe</p>
              <ul className="space-y-1 text-xs text-sand-400">
                <li>• Oldest US Legation (1821)</li>
                <li>• #1 Port in Africa</li>
                <li>• TGV Northern Hub</li>
              </ul>
            </Link>

            {/* Rabat */}
            <div className="group bg-atlas-800/50 rounded-xl p-6 hover:bg-atlas-800 transition-colors">
              <div className="w-10 h-10 bg-olive-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold">R</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Rabat</h3>
              <p className="text-sand-300 text-sm mb-3">The Capital</p>
              <ul className="space-y-1 text-xs text-sand-400">
                <li>• Diplomatic Schools</li>
                <li>• Government Hub</li>
                <li>• Cultural Center</li>
              </ul>
            </div>

            {/* Casablanca */}
            <div className="group bg-atlas-800/50 rounded-xl p-6 hover:bg-atlas-800 transition-colors">
              <div className="w-10 h-10 bg-atlas-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold">C</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Casablanca</h3>
              <p className="text-sand-300 text-sm mb-3">Financial Hub</p>
              <ul className="space-y-1 text-xs text-sand-400">
                <li>• American Hospital</li>
                <li>• TGV Central Hub</li>
                <li>• Economic Capital</li>
              </ul>
            </div>

            {/* Marrakech */}
            <div className="group bg-atlas-800/50 rounded-xl p-6 hover:bg-atlas-800 transition-colors">
              <div className="w-10 h-10 bg-terracotta-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold">M</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Marrakech</h3>
              <p className="text-sand-300 text-sm mb-3">World Cup 2030</p>
              <ul className="space-y-1 text-xs text-sand-400">
                <li>• Concierge Healthcare</li>
                <li>• Tourism Capital</li>
                <li>• TGV Extension Coming</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/infrastructure" className="text-terracotta-400 hover:text-terracotta-300 font-medium">
              Explore the full infrastructure network →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - The Closing Statement */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cta-background.jpg"
            alt="Beautiful Moroccan sunset"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-atlas-900/85" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            You Aren&apos;t Moving to a Foreign Land.
            <span className="block mt-2 text-terracotta-400">You&apos;re Moving to an Old Friend.</span>
          </h2>
          <p className="mt-6 text-lg text-sand-200 max-w-3xl mx-auto">
            From the American Hospital of Casablanca to the American School of Tangier
            and the concierge clinics of Marrakech, Morocco has built the infrastructure
            for your success.
          </p>
          <p className="mt-4 text-lg text-sand-300 max-w-3xl mx-auto">
            Whether you&apos;re looking for the 320 km/h speed of the TGV or the 200-year
            history of the Tangier Legation, you&apos;re not just moving abroad—you&apos;re moving up.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors duration-200 text-lg"
            >
              Book Your Free Consultation
            </Link>
            <Link
              href="/tangier"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-sand-300 text-sand-100 font-semibold rounded-lg hover:bg-sand-300/10 transition-colors duration-200 text-lg"
            >
              Discover Tangier
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
