import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | New Life Morocco',
  description: 'Privacy policy for New Life Morocco. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-atlas-900 mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg prose-atlas max-w-none">
          <p className="text-atlas-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-atlas-900 mb-4">Information We Collect</h2>
            <p className="text-atlas-700 mb-4">
              We collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc list-inside text-atlas-700 space-y-2 mb-4">
              <li>Fill out a contact form or request a consultation</li>
              <li>Subscribe to our newsletter</li>
              <li>Communicate with us via email or other channels</li>
              <li>Use our consulting services</li>
            </ul>
            <p className="text-atlas-700">
              This information may include your name, email address, phone number, and any other details you choose to share with us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-atlas-900 mb-4">How We Use Your Information</h2>
            <p className="text-atlas-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-atlas-700 space-y-2">
              <li>Respond to your inquiries and provide consulting services</li>
              <li>Send you newsletters and updates about Morocco relocation (if subscribed)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-atlas-900 mb-4">Newsletter Subscriptions</h2>
            <p className="text-atlas-700 mb-4">
              When you subscribe to our newsletter, we store your email address securely. You can unsubscribe at any time by clicking the unsubscribe link in any email we send, or by contacting us directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-atlas-900 mb-4">Information Sharing</h2>
            <p className="text-atlas-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services or as required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-atlas-900 mb-4">Data Security</h2>
            <p className="text-atlas-700 mb-4">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-atlas-900 mb-4">Cookies</h2>
            <p className="text-atlas-700 mb-4">
              Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-atlas-900 mb-4">Your Rights</h2>
            <p className="text-atlas-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-atlas-700 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Unsubscribe from marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-atlas-900 mb-4">Contact Us</h2>
            <p className="text-atlas-700">
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us through our website or email us directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-atlas-900 mb-4">Changes to This Policy</h2>
            <p className="text-atlas-700">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
