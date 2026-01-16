import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Global Pulse | Morocco 2030 Intelligence | New Life Morocco',
  description: 'Curated intelligence on Morocco\'s rise. Track the global shift toward the Kingdom: World Cup 2030, infrastructure, high-profile residents, and geopolitical stability.',
};

const pulseCards = [
  {
    id: 1,
    category: 'The Identity Shift',
    title: 'The "Brahim Diaz" Effect',
    source: 'The New York Times',
    story: 'The New York Times reports on the emotional "homecoming" of Real Madrid star Brahim Diaz. His choice to represent the Atlas Lions over Spain signals a massive shift in how the world\'s elite view the Kingdom\'s potential.',
    vibe: ['High-Vibration', 'Heart', 'Patriotism'],
    consultantNote: 'When the world\'s top 1% of talent chooses Morocco, they aren\'t just choosing a team—they are choosing a project. This surge of high-net-worth bi-nationals is driving a new era of luxury infrastructure and international standards.',
    color: 'terracotta',
  },
  {
    id: 2,
    category: 'The Iconic Endorsement',
    title: 'Madonna\'s Sanctuary',
    source: 'Instagram / Global Media',
    story: 'Pop icon Madonna shares her Marrakech retreat with millions, stating she "does not want to leave." Her long-term affinity for the "Red City" highlights its status as a premier global sanctuary for the creative and financial elite.',
    vibe: ['Luxury', 'Peace', 'Lifestyle'],
    consultantNote: 'Madonna\'s experience is the typical expat experience: you come for the culture, you stay for the soul. We help you make that "I don\'t want to leave" feeling a permanent reality.',
    color: 'olive',
  },
  {
    id: 3,
    category: 'The World Cup Catalyst',
    title: '2030 Infrastructure Surge',
    source: 'FIFA / Government of Morocco',
    story: 'Final architectural renders released for the Grand Stade de Casablanca (Benslimane). Set to be the world\'s largest football stadium, it is the crown jewel of a multi-billion dollar national development plan.',
    vibe: ['Modernity', 'Investment', 'Scale'],
    consultantNote: '2030 is a hard deadline. Billions are being poured into airports, highways, and public spaces. Moving now means securing your place before the global spotlight fully descends.',
    color: 'atlas',
  },
  {
    id: 4,
    category: 'The Healthcare Evolution',
    title: 'Akdital & American Standards',
    source: 'Akdital Group / Industry Reports',
    story: 'Opening of the newest Akdital "Center of Excellence" in Tangier, featuring US-standard oncology and cardiology units. The expansion of private, high-tech healthcare is rapidly closing the gap with Western systems.',
    vibe: ['Security', 'Reliability', 'Well-being'],
    consultantNote: 'Our clients\' #1 concern is healthcare. We only recommend cities and neighborhoods anchored by these Tier-1 medical facilities. We treat your health as the foundation of your relocation.',
    color: 'terracotta',
  },
  {
    id: 5,
    category: 'The Transit Revolution',
    title: 'Al-Boraq Phase II',
    source: 'ONCF / Infrastructure Ministry',
    story: 'Morocco\'s High-Speed Rail (TGV) begins the testing phase for its Marrakech extension. The Kingdom continues to outpace North American rail infrastructure, offering 320 km/h connectivity between its major economic hubs.',
    vibe: ['Efficiency', 'Technology', 'Connectivity'],
    consultantNote: 'Connectivity is the backbone of the Modern Kingdom. We focus your search on the "HSR Corridor," ensuring you are never more than 90 minutes from the country\'s most important financial and cultural centers.',
    color: 'olive',
  },
  {
    id: 6,
    category: 'The Geopolitical Anchor',
    title: '200 Years of Friendship',
    source: 'US State Department / Tangier American Legation',
    story: 'The Tangier American Legation marks its bicentennial as a symbol of the unique bond between the US and Morocco. As a Major Non-NATO Ally, Morocco remains the most stable US partner in the Mediterranean.',
    vibe: ['Stability', 'History', 'Safety'],
    consultantNote: 'You aren\'t moving to a "foreign" land; you are moving to America\'s oldest friend. This geopolitical stability is why Morocco is the safest high-vibe destination for American families today.',
    color: 'atlas',
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case 'terracotta':
      return {
        badge: 'bg-terracotta-100 text-terracotta-700',
        border: 'border-terracotta-200 hover:border-terracotta-300',
        vibe: 'bg-terracotta-50 text-terracotta-600',
      };
    case 'olive':
      return {
        badge: 'bg-olive-100 text-olive-700',
        border: 'border-olive-200 hover:border-olive-300',
        vibe: 'bg-olive-50 text-olive-600',
      };
    case 'atlas':
      return {
        badge: 'bg-atlas-100 text-atlas-700',
        border: 'border-atlas-200 hover:border-atlas-300',
        vibe: 'bg-atlas-50 text-atlas-600',
      };
    default:
      return {
        badge: 'bg-sand-100 text-sand-700',
        border: 'border-sand-200 hover:border-sand-300',
        vibe: 'bg-sand-50 text-sand-600',
      };
  }
};

export default function PulsePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-atlas-900 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-olive-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-olive-500"></span>
            </span>
            <span className="text-olive-400 font-medium uppercase tracking-wider text-sm">
              Live Intelligence Feed
            </span>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              The Global Pulse
            </h1>
            <p className="mt-2 text-xl text-terracotta-400 font-medium">
              Morocco 2030
            </p>
            <p className="mt-6 text-lg text-sand-300 max-w-2xl mx-auto">
              Curated intelligence on the Kingdom&apos;s rise. This isn&apos;t news for the sake of news—it&apos;s
              momentum tracking for those who see where the world is going.
            </p>
          </div>
        </div>
      </section>

      {/* Pulse Cards Grid */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pulseCards.map((card) => {
              const colors = getColorClasses(card.color);
              return (
                <article
                  key={card.id}
                  className={`bg-white rounded-xl border-2 ${colors.border} transition-all duration-300 hover:shadow-lg overflow-hidden flex flex-col`}
                >
                  {/* Card Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${colors.badge}`}>
                        {card.category}
                      </span>
                      <span className="text-xs text-atlas-400">{card.source}</span>
                    </div>
                    <h3 className="text-xl font-bold text-atlas-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-atlas-600 text-sm leading-relaxed">
                      {card.story}
                    </p>
                  </div>

                  {/* Vibe Tags */}
                  <div className="px-6 pb-4">
                    <div className="flex flex-wrap gap-2">
                      {card.vibe.map((v) => (
                        <span
                          key={v}
                          className={`text-xs px-2 py-1 rounded-full ${colors.vibe}`}
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Consultant's Note */}
                  <div className="mt-auto bg-atlas-900 p-5">
                    <p className="text-xs text-terracotta-400 font-semibold uppercase tracking-wide mb-2">
                      Consultant&apos;s Note
                    </p>
                    <p className="text-sm text-sand-200 leading-relaxed italic">
                      &quot;{card.consultantNote}&quot;
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Status Ticker */}
      <section className="py-8 bg-atlas-900 border-t-4 border-terracotta-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-olive-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-olive-500"></span>
                </span>
                <span className="text-olive-400 font-bold uppercase text-sm tracking-wide">
                  Status: High Momentum
                </span>
              </div>
            </div>
            <p className="text-sand-300 text-sm text-center md:text-left">
              Residency inquiries for Tangier and Marrakech are at record highs.
              Avoid the administrative bottleneck.
            </p>
            <Link
              href="/contact"
              className="px-6 py-3 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors text-sm whitespace-nowrap"
            >
              Secure Your Strategy Session
            </Link>
          </div>
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-atlas-900 mb-6">
            The Bottom Line
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-4">
              <p className="text-3xl mb-2">🎭</p>
              <p className="text-sm text-atlas-600">
                <strong>Madonna</strong> = It&apos;s glamorous and safe.
              </p>
            </div>
            <div className="p-4">
              <p className="text-3xl mb-2">📰</p>
              <p className="text-sm text-atlas-600">
                <strong>NYT / Brahim Diaz</strong> = It&apos;s serious and respected.
              </p>
            </div>
            <div className="p-4">
              <p className="text-3xl mb-2">🚄</p>
              <p className="text-sm text-atlas-600">
                <strong>Infrastructure</strong> = It&apos;s functional and modern.
              </p>
            </div>
          </div>
          <div className="bg-terracotta-50 border-2 border-terracotta-200 rounded-xl p-6">
            <p className="text-lg text-atlas-900 font-medium">
              <strong>You</strong> = The person who makes it happen.
            </p>
            <p className="mt-2 text-atlas-600">
              We are your &quot;Skip the Line&quot; partner for the Moroccan transition.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-atlas-900">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            The Window Is Open. For Now.
          </h2>
          <p className="text-lg text-sand-200 mb-8">
            As global attention shifts to Morocco for 2030, the &quot;early mover&quot; advantage
            is narrowing. Secure your position in the Modern Kingdom before the world arrives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors"
            >
              Request Your Strategy Session
            </Link>
            <Link
              href="/roadmap"
              className="px-8 py-4 bg-transparent border-2 border-sand-300 text-sand-100 font-semibold rounded-lg hover:bg-sand-300/10 transition-colors"
            >
              Download the Free Roadmap
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
