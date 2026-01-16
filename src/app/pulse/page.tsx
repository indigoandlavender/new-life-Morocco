import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What\'s Happening in Morocco | Morocco Advisors',
  description: 'Updates on what matters for American families considering Morocco: healthcare, infrastructure, expat community, and quality of life.',
};

const pulseCards = [
  {
    id: 1,
    category: 'Healthcare',
    title: 'New Private Hospitals Opening',
    source: 'Akdital Group',
    story: 'The Akdital hospital group continues expanding across Morocco, with new facilities in Tangier and other cities featuring modern oncology and cardiology units with internationally trained staff.',
    tags: ['Medical', 'Quality', 'Access'],
    note: 'Healthcare is the #1 concern for families we work with. These newer private hospitals offer care that meets the standards Americans expect, often at a fraction of US costs.',
    color: 'terracotta',
  },
  {
    id: 2,
    category: 'Transportation',
    title: 'High-Speed Rail Expansion',
    source: 'ONCF / Morocco Rail',
    story: 'Morocco\'s high-speed train network continues to expand, with the Marrakech extension in testing. The existing line already connects Tangier to Casablanca in about 2 hours.',
    tags: ['Travel', 'Convenience', 'Modern'],
    note: 'Getting around Morocco is easier than many people expect. The high-speed rail makes it practical to live in one city and easily visit others—no car required for most trips.',
    color: 'olive',
  },
  {
    id: 3,
    category: 'Expat Community',
    title: 'Growing American Presence',
    source: 'Expat Networks',
    story: 'The American expat community in Morocco continues to grow, with established groups in Casablanca, Rabat, Marrakech, and Tangier. Online communities and in-person meetups make it easier to connect.',
    tags: ['Community', 'Support', 'Connection'],
    note: 'You won\'t be alone. There\'s a helpful community of American families who\'ve made this move and are happy to share their experience. We can help you connect with them.',
    color: 'atlas',
  },
  {
    id: 4,
    category: 'Education',
    title: 'American Schools in Morocco',
    source: 'US Embassy / School Networks',
    story: 'American curriculum schools in Casablanca, Rabat, Tangier, and Marrakech continue to serve expat families. Most follow US standards and prepare students for American universities.',
    tags: ['Schools', 'Kids', 'Education'],
    note: 'Good schools are available, but the best ones fill up. If you have kids, this is one of the first things to research—we can help you understand your options.',
    color: 'terracotta',
  },
  {
    id: 5,
    category: 'US-Morocco Relations',
    title: 'America\'s Oldest Ally',
    source: 'US State Department',
    story: 'Morocco was the first country to recognize the United States in 1777 and remains a Major Non-NATO Ally. The Tangier American Legation is the oldest US diplomatic property in the world.',
    tags: ['History', 'Stability', 'Partnership'],
    note: 'This isn\'t just trivia—it matters for your peace of mind. Morocco has been a stable, consistent friend to the US for nearly 250 years. Americans are genuinely welcomed here.',
    color: 'olive',
  },
  {
    id: 6,
    category: 'Cost of Living',
    title: 'Your Money Goes Further',
    source: 'Expat Reports',
    story: 'American families consistently report their money stretches 3-5x further in Morocco. Quality housing, good food, and comfortable living are accessible at a fraction of US costs.',
    tags: ['Savings', 'Lifestyle', 'Value'],
    note: 'This is what gets most families interested. You can live well here—not just survive. The financial pressure many feel in the US simply doesn\'t exist in the same way.',
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
          <div className="text-center">
            <span className="text-sand-400 font-medium uppercase tracking-wider text-sm">
              Updates That Matter
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              What&apos;s Happening in Morocco
            </h1>
            <p className="mt-6 text-lg text-sand-300 max-w-2xl mx-auto">
              Information that actually matters for families considering the move.
              Healthcare, schools, infrastructure, community—the things you need to know.
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

                  {/* Tags */}
                  <div className="px-6 pb-4">
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-2 py-1 rounded-full ${colors.vibe}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Why It Matters */}
                  <div className="mt-auto bg-atlas-900 p-5">
                    <p className="text-xs text-sand-400 font-semibold uppercase tracking-wider mb-2">
                      Why It Matters
                    </p>
                    <p className="text-sm text-sand-200 leading-relaxed">
                      {card.note}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-8 bg-atlas-900 border-t-4 border-terracotta-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-sand-200 font-medium">
                Have questions about any of this?
              </span>
            </div>
            <p className="text-sand-300 text-sm text-center md:text-left">
              We&apos;re happy to share what we&apos;ve learned from helping families make this move.
            </p>
            <Link
              href="/contact"
              className="px-6 py-3 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors text-sm whitespace-nowrap"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-atlas-900 mb-6">
            What Families Tell Us
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-sand-50 rounded-xl p-6">
              <p className="text-atlas-900 font-semibold mb-2">Healthcare</p>
              <p className="text-sm text-atlas-600">
                &quot;The private hospitals here are better than I expected—and so much more affordable.&quot;
              </p>
            </div>
            <div className="bg-sand-50 rounded-xl p-6">
              <p className="text-atlas-900 font-semibold mb-2">Community</p>
              <p className="text-sm text-atlas-600">
                &quot;We were surprised how many American families are already here. It&apos;s been easy to make friends.&quot;
              </p>
            </div>
            <div className="bg-sand-50 rounded-xl p-6">
              <p className="text-atlas-900 font-semibold mb-2">Quality of Life</p>
              <p className="text-sm text-atlas-600">
                &quot;We live better here than we did in the US—and we&apos;re actually saving money.&quot;
              </p>
            </div>
          </div>
          <div className="bg-olive-50 border-2 border-olive-200 rounded-xl p-6">
            <p className="text-lg text-atlas-900 font-medium">
              These aren&apos;t exceptional stories—this is what families consistently experience.
            </p>
            <p className="mt-2 text-atlas-600">
              We can help you figure out if Morocco might be right for your family too.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-atlas-900">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Curious About Morocco?
          </h2>
          <p className="text-lg text-sand-200 mb-8">
            We&apos;re happy to answer questions and help you figure out if this might be
            the right move for your family. No pressure, just honest conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors"
            >
              Start the Conversation
            </Link>
            <Link
              href="/checklist"
              className="px-8 py-4 bg-transparent border-2 border-sand-300 text-sand-100 font-semibold rounded-lg hover:bg-sand-300/10 transition-colors"
            >
              See the Checklist
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
