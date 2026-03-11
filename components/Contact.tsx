"use client"
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    data.append('access_key', 'deb92298-a9aa-4396-aa38-429b40c16695')
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      if (json.success) { setStatus('success'); form.reset() }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#1a2744] text-center mb-4">Get a Free Quote</h2>
        <p className="text-center text-slate-500 mb-10">Tell us about your property and we'll put together a custom protection plan.</p>
        {status === 'success' ? (
          <div className="bg-green-50 border-2 border-green-400 rounded-xl p-8 text-center">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="text-xl font-extrabold text-green-800 mb-2">Quote Request Received!</h3>
            <p className="text-green-700">Thomas will be in touch within 24 hours.</p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <input name="name" className="border-2 border-slate-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-[#f59e0b] text-sm" placeholder="Your Name" required/>
              <input name="phone" className="border-2 border-slate-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-[#f59e0b] text-sm" placeholder="Phone Number" required/>
            </div>
            <input name="email" className="border-2 border-slate-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-[#f59e0b] text-sm" placeholder="Email Address"/>
            <select name="property_type" className="border-2 border-slate-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-[#f59e0b] text-sm text-slate-500">
              <option value="">Property Type</option>
              <option>Primary Residence</option>
              <option>Rental Property</option>
              <option>Vacant Home</option>
              <option>Multi-Unit</option>
              <option>Senior / Elder Care</option>
              <option>Commercial Facility</option>
            </select>
            <textarea name="message" className="border-2 border-slate-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-[#f59e0b] text-sm h-28 resize-none" placeholder="Tell us about your property or what you're trying to protect..."/>
            <div className="bg-amber-50 border-2 border-[#f59e0b] rounded-xl p-4 text-sm text-amber-800 font-semibold text-center">⚡ 50% deposit required to schedule install · Balance due at completion</div>
            <button type="submit" disabled={status==='sending'} className="w-full bg-[#f59e0b] text-[#1a2744] font-extrabold py-4 rounded-xl text-lg hover:bg-yellow-400 transition disabled:opacity-60">
              {status==='sending' ? 'Sending...' : 'Request Protection Quote →'}
            </button>
            {status==='error' && <p className="text-red-500 text-center text-sm">Something went wrong. Call us at 704-239-7532.</p>}
          </form>
        )}
        <div className="mt-8 text-center text-slate-400 text-sm">
          <p>📞 <a href="tel:7042397532" className="text-[#1a2744] font-bold hover:text-[#f59e0b]">704-239-7532</a> &nbsp;·&nbsp; ✉️ <a href="mailto:gettompoai@gmail.com" className="text-[#1a2744] font-bold hover:text-[#f59e0b]">gettompoai@gmail.com</a></p>
          <p className="mt-1">Salisbury, NC · Rowan County & surrounding areas</p>
        </div>
      </div>
    </section>
  )
}
