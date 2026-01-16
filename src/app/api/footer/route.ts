import { NextResponse } from "next/server";
import { getNexusData } from "@/lib/sheets";

// Force dynamic rendering - no caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const SITE_ID = process.env.SITE_ID || "new-life-morocco";

export async function GET() {
  try {
    // Get legal pages from Nexus (shared across all brands)
    let legal: { label: string; href: string }[] = [];

    try {
      const legalPages = await getNexusData("Nexus_Legal_Pages");
      const siteLegalPages = legalPages.filter((p) =>
        !p.brand_id || p.brand_id === SITE_ID || p.brand_id === "all"
      );
      legal = siteLegalPages
        .filter((p) => p.page_slug && p.page_title)
        .map((p) => ({
          label: p.page_title,
          href: `/${p.page_slug}`,
        }));
    } catch (e) {
      console.warn("Could not fetch legal pages from Nexus:", e);
    }

    // Fallback legal if Nexus is empty
    const finalLegal = legal.length > 0 ? legal : [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ];

    const footerData = {
      brandId: SITE_ID,
      newsletter: {
        show: true,
        title: "Your Free Morocco Relocation Guide",
        description: "Everything you need to know about moving to Morocco - visa requirements, cost of living, and insider tips from expats who've made the move.",
        ctaText: "Get Your Free Guide",
      },
      columns: [
        {
          number: 1,
          title: "Explore",
          links: [
            { label: "Why Morocco", href: "/benefits" },
            { label: "Visa Requirements", href: "/visa" },
            { label: "Carte de Sejour", href: "/carte-de-sejour" },
          ],
        },
        {
          number: 2,
          title: "Services",
          links: [
            { label: "Our Services", href: "/services" },
            { label: "About Us", href: "/about" },
            { label: "Contact", href: "/contact" },
          ],
        },
      ],
      legal: finalLegal,
      copyright: {
        year: new Date().getFullYear(),
        name: "New Life Morocco",
      },
    };

    const response = NextResponse.json({
      success: true,
      data: footerData,
    });

    // Prevent caching
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');

    return response;
  } catch (error) {
    console.error("Footer fetch error:", error);

    // Return fallback on error
    return NextResponse.json({
      success: true,
      data: {
        brandId: SITE_ID,
        newsletter: {
          show: true,
          title: "Your Free Morocco Relocation Guide",
          description: "Everything you need to know about moving to Morocco - visa requirements, cost of living, and insider tips from expats who've made the move.",
          ctaText: "Get Your Free Guide",
        },
        columns: [
          {
            number: 1,
            title: "Explore",
            links: [
              { label: "Why Morocco", href: "/benefits" },
              { label: "Visa Requirements", href: "/visa" },
              { label: "Carte de Sejour", href: "/carte-de-sejour" },
            ],
          },
          {
            number: 2,
            title: "Services",
            links: [
              { label: "Our Services", href: "/services" },
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" },
            ],
          },
        ],
        legal: [
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
        ],
        copyright: {
          year: new Date().getFullYear(),
          name: "New Life Morocco",
        },
      },
    });
  }
}
