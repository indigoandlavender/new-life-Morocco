import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Morocco Advisors',
  description: 'Terms of Service for Morocco Advisors consulting services. Read our terms and conditions.',
};

export default function TermsPage() {
  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-atlas-900 mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-lg prose-atlas max-w-none">
          <p className="text-atlas-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-atlas-900 mb-4">Agreement to Terms</h2>
            <p className="text-atlas-700 mb-4">
              By accessing or using the Morocco Advisors website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-atlas-900 mb-4">Our Services</h2>
            <p className="text-atlas-700 mb-4">
              Morocco Advisors provides consulting services to help Americans relocate to Morocco. Our services include, but are not limited to:
            </p>
            <ul className="list-disc list-inside text-atlas-700 space-y-2 mb-4">
              <li>Visa and documentation assistance</li>
              <li>Carte de Sejour support</li>
              <li>Housing search assistance</li>
              <li>General relocation consulting</li>
            </ul>
            <p className="text-atlas-700">
              We provide guidance and support, but we are not immigration attorneys and do not provide legal advice. For legal matters, we recommend consulting with a qualified attorney.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-atlas-900 mb-4">Information Accuracy</h2>
            <p className="text-atlas-700 mb-4">
              We strive to provide accurate and up-to-date information about Morocco relocation. However, immigration laws and requirements can change. While we make every effort to keep our information current, we cannot guarantee its accuracy at all times.
            </p>
            <p className="text-atlas-700">
              You are responsible for verifying all information with official government sources before making any decisions based on our content or advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-atlas-900 mb-4">Consulting Services</h2>
            <p className="text-atlas-700 mb-4">
              Our consulting services are subject to separate service agreements. Payment terms, deliverables, and specific conditions will be outlined in individual service contracts.
            </p>
            <p className="text-atlas-700">
              We reserve the right to refuse service to anyone for any reason at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-atlas-900 mb-4">Intellectual Property</h2>
            <p className="text-atlas-700 mb-4">
              All content on this website, including text, graphics, logos, and images, is the property of Morocco Advisors and is protected by copyright laws. You may not reproduce, distribute, or use our content without written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-atlas-900 mb-4">User Responsibilities</h2>
            <p className="text-atlas-700 mb-4">
              When using our website or services, you agree to:
            </p>
            <ul className="list-disc list-inside text-atlas-700 space-y-2">
              <li>Provide accurate and truthful information</li>
              <li>Not use our services for any unlawful purpose</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Respect the intellectual property rights of others</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-atlas-900 mb-4">Limitation of Liability</h2>
            <p className="text-atlas-700 mb-4">
              Morocco Advisors and its team members shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our website or services.
            </p>
            <p className="text-atlas-700">
              Our total liability for any claims arising from your use of our services shall not exceed the amount you paid for those services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-atlas-900 mb-4">Disclaimer</h2>
            <p className="text-atlas-700 mb-4">
              Our website and services are provided &quot;as is&quot; without warranties of any kind, either express or implied. We do not guarantee that our services will meet your specific requirements or that our website will be uninterrupted or error-free.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-atlas-900 mb-4">Changes to Terms</h2>
            <p className="text-atlas-700 mb-4">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of our website or services after any changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-atlas-900 mb-4">Governing Law</h2>
            <p className="text-atlas-700 mb-4">
              These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-atlas-900 mb-4">Contact Us</h2>
            <p className="text-atlas-700">
              If you have any questions about these Terms of Service, please contact us through our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
