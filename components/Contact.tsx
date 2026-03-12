'use client'
import { useState } from 'react'

export default function Contact() {
  const [agreed, setAgreed] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!agreed) {
      setError('Please read and agree to the service agreement before submitting.')
      return
    }
    setError('')
    setSubmitting(true)

    const form = e.currentTarget
    const data = new FormData(form)

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data,
    })

    if (res.ok) {
      setSubmitted(true)
    } else {
      setError('Something went wrong. Please call us directly at 704-239-7532.')
    }
    setSubmitting(false)
  }

  if (submitted) {
    return (
      <section className="py-16 bg-[#1a2744]" id="contact">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-white mb-3">Request Received!</h2>
          <p className="text-gray-400">Thomas will reach out within 24 hours to schedule your free property assessment.</p>
          <p className="text-[#f59e0b] font-bold mt-4">📞 704-239-7532</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-[#1a2744]" id="contact">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">Request a Free Assessment</h2>
          <p className="text-gray-400">We'll visit your property, map every risk point, and give you a custom quote — no obligation.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 space-y-5">
          <input type="hidden" name="access_key" value="deb92298-a9aa-4396-aa38-429b40c16695" />
          <input type="hidden" name="subject" value="New Quote Request — Get Notified LLC" />
          <input type="hidden" name="from_name" value="Get Notified LLC Website" />
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Your Name *</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Jane Smith"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#1a2744] text-sm focus:outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Phone *</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="(704) 555-0100"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#1a2744] text-sm focus:outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="jane@email.com"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#1a2744] text-sm focus:outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Property Address</label>
            <input
              type="text"
              name="address"
              placeholder="123 Main St, Salisbury NC"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#1a2744] text-sm focus:outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Property Type</label>
            <select
              name="property_type"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#1a2744] text-sm focus:outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20"
            >
              <option value="">Select one...</option>
              <option value="Home">Primary Home</option>
              <option value="Rental Property">Rental Property</option>
              <option value="Airbnb / Short-Term Rental">Airbnb / Short-Term Rental</option>
              <option value="Vacation Home">Vacation Home</option>
              <option value="Elder Safety">Elder Safety (parent / family member)</option>
              <option value="Business">Small Business</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Tell Us About Your Property</label>
            <textarea
              name="message"
              rows={3}
              placeholder="Size of home, any specific concerns, how you heard about us..."
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#1a2744] text-sm focus:outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 resize-none"
            />
          </div>

          {/* Agreement Checkbox */}
          <div
            className={`rounded-xl border-2 p-4 transition-colors cursor-pointer ${agreed ? 'border-[#f59e0b] bg-[#fef3c7]' : 'border-gray-200 bg-gray-50'}`}
            onClick={() => setAgreed(!agreed)}
          >
            <label className="flex gap-3 items-start cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={e => setAgreed(e.target.checked)}
                onClick={e => e.stopPropagation()}
                className="mt-0.5 w-5 h-5 accent-[#f59e0b] flex-shrink-0"
              />
              <span className="text-sm text-[#1a2744] leading-relaxed">
                <strong>I have read and agree to the{' '}</strong>
                <a
                  href="/installation-terms"
                  target="_blank"
                  className="text-[#f59e0b] font-bold underline hover:text-[#e48e00]"
                  onClick={e => e.stopPropagation()}
                >
                  Installation Terms &amp; Service Agreement
                </a>
                , including the deposit policy, labor warranty, and system performance expectations.
              </span>
            </label>
          </div>

          {error && (
            <p className="text-red-500 text-sm font-medium text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#f59e0b] text-[#1a2744] font-bold py-4 rounded-xl hover:bg-[#e48e00] transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-base"
          >
            {submitting ? 'Sending...' : '🔒 Request My Free Assessment'}
          </button>

          <p className="text-center text-xs text-gray-400">
            Or call directly:{' '}
            <a href="tel:7042397532" className="text-[#f59e0b] font-bold hover:underline">704-239-7532</a>
          </p>
        </form>
      </div>
    </section>
  )
}
