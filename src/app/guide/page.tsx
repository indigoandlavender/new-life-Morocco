import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Morocco Is Actually Like | Morocco Advisors',
  description: 'Morocco isn\'t what most Americans picture. Modern infrastructure, reliable internet, good healthcare, and a surprisingly comfortable life. Here\'s the reality.',
};

export default function GuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-atlas-900 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <span className="text-sand-400 font-medium uppercase tracking-wider text-sm">
            What It&apos;s Really Like
          </span>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl leading-tight">
            Morocco Isn&apos;t What You Picture
          </h1>
          <p className="mt-6 text-xl text-sand-200">
            Most Americans have outdated ideas about Morocco. The reality? Modern infrastructure,
            fast internet, good healthcare, and a comfortable quality of life. Here&apos;s what
            families actually find when they get here.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">

          {/* The Reality Check */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-atlas-900 mb-6">
              What Most People Don&apos;t Know
            </h2>
            <div className="prose prose-lg prose-atlas max-w-none text-atlas-700">
              <p>
                When Americans hear &quot;Morocco,&quot; they often picture souks, camels, and maybe
                a scene from a movie. It sounds exotic but not necessarily... livable.
              </p>
              <p>
                That picture is pretty outdated.
              </p>
              <p>
                Morocco has the only high-speed rail system in Africa. It has 5G coverage
                in all major cities. It&apos;s America&apos;s oldest ally (seriously—since 1777).
                And it has a thriving community of American families who&apos;ve made it home.
              </p>
              <p className="text-xl font-medium text-atlas-900">
                It&apos;s not a &quot;developing country&quot; in the way most people imagine.
                It&apos;s a comfortable, modern place to live.
              </p>
            </div>
          </section>

          {/* Infrastructure Comparison */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-atlas-900 mb-6">
              The Infrastructure Might Surprise You
            </h2>
            <div className="prose prose-lg prose-atlas max-w-none text-atlas-700">
              <p>
                Here&apos;s what families find when they arrive.
              </p>
            </div>

            <div className="mt-8 grid gap-6">
              {/* High-Speed Rail */}
              <div className="bg-sand-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-atlas-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-atlas-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-atlas-900 mb-2">High-Speed Rail</h3>
                    <p className="text-atlas-700 mb-3">
                      Morocco has Africa&apos;s first high-speed train, connecting Tangier to Casablanca
                      in about 2 hours. It&apos;s clean, reliable, and affordable.
                    </p>
                    <p className="text-atlas-600 text-sm">
                      Getting between major cities is easy—no car required for most families.
                    </p>
                  </div>
                </div>
              </div>

              {/* Solar Power */}
              <div className="bg-sand-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-olive-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-atlas-900 mb-2">Reliable Power</h3>
                    <p className="text-atlas-700 mb-3">
                      Morocco has invested heavily in renewable energy, including one of the world&apos;s
                      largest solar plants. The power grid is stable and outages are rare.
                    </p>
                    <p className="text-atlas-600 text-sm">
                      You won&apos;t be dealing with rolling blackouts or grid instability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Digital Infrastructure */}
              <div className="bg-sand-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-atlas-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-atlas-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-atlas-900 mb-2">Fast, Reliable Internet</h3>
                    <p className="text-atlas-700 mb-3">
                      5G coverage in all major cities. Fiber-optic internet is widely available
                      and affordable. Remote work is completely doable here.
                    </p>
                    <p className="text-atlas-600 text-sm">
                      Many families work US remote jobs with no connectivity issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Growing & Improving */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-atlas-900 mb-6">
              A Country That&apos;s Growing
            </h2>
            <div className="prose prose-lg prose-atlas max-w-none text-atlas-700">
              <p>
                Morocco has been steadily modernizing for years. The infrastructure keeps
                getting better, English is increasingly common, and the expat community
                continues to grow.
              </p>
              <p>Here&apos;s what that means for families:</p>
            </div>

            <ul className="mt-6 space-y-4 text-atlas-700">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-olive-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>English is increasingly common</strong> — More people speak English every year, especially in cities and tourist areas. You don&apos;t need to be fluent in French or Arabic to get by.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-olive-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Growing expat community</strong> — More American and European families are making the move. You won&apos;t be pioneers—there&apos;s a community waiting.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-olive-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Continued investment</strong> — New roads, hospitals, and services continue to be built. The trajectory is clearly upward.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-olive-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Warm welcome for Americans</strong> — Morocco has been friends with the US longer than any other country. Americans are genuinely welcomed here.</span>
              </li>
            </ul>

            <div className="mt-8 bg-terracotta-50 border-l-4 border-terracotta-500 p-6 rounded-r-lg">
              <p className="text-atlas-900 font-medium">
                This isn&apos;t about &quot;getting in early&quot; on some opportunity. It&apos;s about
                finding a place where your family can genuinely thrive.
              </p>
            </div>
          </section>

          {/* Close to Home */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-atlas-900 mb-6">
              Closer Than You Think
            </h2>
            <div className="prose prose-lg prose-atlas max-w-none text-atlas-700">
              <p>
                One of the biggest concerns families have is being &quot;too far away.&quot;
                Morocco is actually surprisingly close.
              </p>
              <p>
                Unlike Southeast Asia or even parts of Central America, Morocco is just a
                direct flight from the East Coast. If there&apos;s a family emergency back home,
                you can be there the same day.
              </p>
              <p>
                And Europe is right next door:
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-atlas-900 text-white rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">7h</div>
                <div className="text-sm text-sand-200">to New York</div>
              </div>
              <div className="bg-atlas-900 text-white rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">1h</div>
                <div className="text-sm text-sand-200">to Madrid</div>
              </div>
              <div className="bg-atlas-900 text-white rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">2h</div>
                <div className="text-sm text-sand-200">to Paris</div>
              </div>
              <div className="bg-atlas-900 text-white rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">3h</div>
                <div className="text-sm text-sand-200">to London</div>
              </div>
            </div>

            <div className="mt-8 prose prose-lg prose-atlas max-w-none text-atlas-700">
              <p>
                From Morocco, all of Europe is a quick, cheap flight away. Paris, Barcelona,
                London—all easy weekend trips. Your kids can experience Europe without it
                being a big production.
              </p>
              <p>
                And when you need to get back to the US? Direct flights to the East Coast.
                You can leave in the morning and be home for dinner.
              </p>
              <p className="text-xl font-medium text-atlas-900">
                You&apos;re not moving to the other side of the world. You&apos;re just moving
                across the Atlantic.
              </p>
            </div>
          </section>

          {/* Stability */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-atlas-900 mb-6">
              A Stable, Safe Place
            </h2>
            <div className="prose prose-lg prose-atlas max-w-none text-atlas-700">
              <p>
                Morocco is a constitutional monarchy that&apos;s been on a steady, peaceful path
                for decades. There&apos;s no political chaos, no instability, no uncertainty about
                what comes next.
              </p>
              <p>
                It&apos;s also one of America&apos;s closest allies—designated a &quot;Major Non-NATO Ally,&quot;
                the same status as Japan, Australia, and Israel. The US and Morocco have deep ties
                going back to 1777.
              </p>
              <p>
                For families looking for somewhere stable and predictable, Morocco offers
                something increasingly rare: <strong>peace of mind</strong>.
              </p>
            </div>
          </section>

          {/* The Bottom Line */}
          <section className="mb-16">
            <div className="bg-atlas-900 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">The Bottom Line</h2>
              <div className="space-y-4 text-sand-200 text-lg">
                <p>
                  Morocco isn&apos;t what most people picture. It&apos;s a modern, comfortable place
                  with good infrastructure, fast internet, and a welcoming culture.
                </p>
                <p>
                  It&apos;s close enough to come home when you need to. Your money goes 3-5x further.
                  And there&apos;s a community of American families who&apos;ve already made it work.
                </p>
                <p className="text-white font-semibold text-xl">
                  It&apos;s worth a closer look.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-atlas-900 mb-4">
              Want to Learn More?
            </h2>
            <p className="text-atlas-600 mb-8">
              We&apos;re happy to answer questions about what life here is actually like.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary text-center"
              >
                Start the Conversation
              </Link>
              <Link
                href="/checklist"
                className="btn-secondary text-center"
              >
                See the Checklist
              </Link>
            </div>
          </section>

        </div>
      </article>
    </>
  );
}
