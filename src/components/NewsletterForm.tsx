'use client';

import { useState } from 'react';

interface NewsletterFormProps {
  showTimeline?: boolean;
  buttonText?: string;
  source?: string;
}

export default function NewsletterForm({
  showTimeline = false,
  buttonText = 'Get the Guide',
  source = 'newsletter',
}: NewsletterFormProps) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [timeline, setTimeline] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstName,
          timeline: showTimeline ? timeline : undefined,
          source,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Welcome! Check your email for the guide.');
        setFirstName('');
        setEmail('');
        setTimeline('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-olive-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">You&apos;re In!</h3>
        <p className="text-sand-300">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-sand-200 mb-1">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-sand-600 text-white placeholder-sand-400 focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
          placeholder="Your first name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-sand-200 mb-1">
          Best Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-sand-600 text-white placeholder-sand-400 focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
          placeholder="you@example.com"
        />
      </div>

      {showTimeline && (
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-sand-200 mb-1">
            When are you planning your move?
          </label>
          <select
            id="timeline"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-sand-600 text-white focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
          >
            <option value="" className="bg-atlas-900">Select a timeline</option>
            <option value="3-months" className="bg-atlas-900">Within 3 Months</option>
            <option value="6-months" className="bg-atlas-900">Within 6 Months</option>
            <option value="1-year" className="bg-atlas-900">Within 1 Year</option>
            <option value="just-dreaming" className="bg-atlas-900">Just Dreaming</option>
          </select>
        </div>
      )}

      {status === 'error' && (
        <p className="text-red-400 text-sm">{message}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-6 py-4 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Submitting...' : buttonText}
      </button>

      <p className="text-xs text-sand-400 text-center">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </form>
  );
}
