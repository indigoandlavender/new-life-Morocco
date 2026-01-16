'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    timeline: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sand-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-atlas-900 sm:text-5xl">
              Let&apos;s Talk
            </h1>
            <p className="mt-6 text-lg leading-8 text-atlas-700">
              Whether you have questions, want to learn more, or are ready to start planning—we&apos;re
              happy to chat. No pressure, just honest conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-atlas-900 mb-6">
                Get in Touch
              </h2>

              {submitted ? (
                <div className="bg-olive-50 border border-olive-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-olive-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-atlas-900 mb-2">
                    Thanks for reaching out!
                  </h3>
                  <p className="text-atlas-600">
                    We&apos;ve received your message and will get back to you within 24 hours.
                    Looking forward to chatting with you.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-atlas-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-sand-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-colors"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-atlas-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-sand-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-atlas-700 mb-2">
                      Phone Number (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-sand-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-atlas-700 mb-2">
                      When are you thinking of moving? *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      required
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-sand-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a timeline</option>
                      <option value="1-3 months">Within 1-3 months</option>
                      <option value="3-6 months">Within 3-6 months</option>
                      <option value="6-12 months">Within 6-12 months</option>
                      <option value="1+ year">More than a year from now</option>
                      <option value="just exploring">Just exploring options</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-atlas-700 mb-2">
                      Tell us about your situation (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-sand-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-colors"
                      placeholder="What brings you to consider Morocco? Any specific questions or concerns?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary py-4 text-lg"
                  >
                    Send Message
                  </button>

                  <p className="text-sm text-atlas-500 text-center">
                    By submitting, you agree to receive communications from us.
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-sand-50 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-semibold text-atlas-900 mb-6">
                  What Happens Next
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-atlas-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-atlas-600 font-semibold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-atlas-800">We&apos;ll Reply Quickly</h4>
                      <p className="text-atlas-600 text-sm">
                        Expect a response within 24 hours—usually sooner.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-atlas-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-atlas-600 font-semibold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-atlas-800">A Quick Chat</h4>
                      <p className="text-atlas-600 text-sm">
                        We can hop on a call to answer your questions and learn about your situation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-atlas-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-atlas-600 font-semibold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-atlas-800">Helpful Answers</h4>
                      <p className="text-atlas-600 text-sm">
                        We&apos;ll give you honest, practical guidance—whether or not you end up working with us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-atlas-800 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-atlas-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span className="text-sand-200">hello@moroccoadvisors.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-atlas-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sand-200">Response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-atlas-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    <span className="text-sand-200">Serving clients worldwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-sand-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-atlas-900 text-center mb-12">
            Common Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-atlas-900 mb-2">
                Is the consultation really free?
              </h3>
              <p className="text-atlas-600">
                Yes, absolutely. Our initial 30-minute consultation is completely free
                with no obligation. It&apos;s an opportunity for us to understand your
                situation and for you to learn how we can help.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-atlas-900 mb-2">
                How do consultations work?
              </h3>
              <p className="text-atlas-600">
                We conduct consultations via video call (Zoom, Google Meet, or your
                preference). This allows us to connect with you wherever you are in
                the world and share screens when needed.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-atlas-900 mb-2">
                What if I&apos;m not ready to move yet?
              </h3>
              <p className="text-atlas-600">
                That&apos;s perfectly fine. Many of our clients start planning 6-12 months
                before their move. Early planning often leads to better outcomes, and
                we&apos;re happy to help you prepare even if your timeline is flexible.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-atlas-900 mb-2">
                Do you help with locations outside major cities?
              </h3>
              <p className="text-atlas-600">
                Yes, we assist clients relocating throughout Morocco—from Casablanca
                and Marrakech to smaller coastal towns and mountain villages. Each
                location has its own considerations, and we&apos;ll help you find the right fit.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-atlas-600 mb-4">Have more questions?</p>
            <Link href="/benefits" className="text-atlas-700 font-medium hover:text-atlas-900 underline underline-offset-4">
              Explore our guides
            </Link>
            <span className="text-atlas-400 mx-3">or</span>
            <a href="#" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-atlas-700 font-medium hover:text-atlas-900 underline underline-offset-4">
              schedule a consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
