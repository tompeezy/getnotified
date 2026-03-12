'use client'
import { useState } from 'react'

const terms = [
  {
    title: '🔧 What\'s Included in Every Install',
    content: 'Sensor mounting and placement, hub configuration, app setup, family notification testing, and a full walkthrough before we leave. Install typically takes 2–4 hours. We clean up — no mess left behind.',
  },
  {
    title: '🚫 What\'s Not Included',
    content: 'Licensed plumbing or electrical work. If we discover a pre-existing issue during install (corroded pipes, faulty wiring, etc.) we\'ll stop, show you, and recommend a licensed contractor before proceeding.',
  },
  {
    title: '💳 Deposit & Payment',
    content: '50% deposit is required to schedule your install. Equipment is ordered within 24–48 hours of receipt. Once ordered, deposits are non-refundable. Balance is due on the day of installation.',
  },
  {
    title: '📋 Your Responsibilities',
    content: 'An adult (18+) must be present for the entire installation. Please disclose any known plumbing or electrical issues beforehand. Safe access to all installation areas must be provided.',
  },
  {
    title: '🛡️ Warranty & Support',
    content: '30-day labor warranty on all installation work — if something we did isn\'t right, we come back and fix it free. Hardware carries manufacturer warranty (typically 1 year). Extended support available through our Guardian monitoring plans.',
  },
  {
    title: '⚠️ System Performance',
    content: 'Our systems are designed to detect and alert as fast as possible. They do not guarantee prevention of all damage — no system can. Performance depends on functioning power and network. We recommend monthly self-tests.',
  },
  {
    title: '📅 Monthly Monitoring Plans',
    content: 'Guardian plans run month-to-month. Cancel any time with 30 days written notice. No refunds for partial months already billed.',
  },
]

export default function ServiceAgreement() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white" id="service-agreement">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-block bg-[#fef3c7] text-[#92400e] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Plain English — No Surprises
          </div>
          <h2 className="text-3xl font-bold text-[#1a2744] mb-3">Service Agreement</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We believe in transparency. Read exactly what you're agreeing to before we ever schedule a visit.
          </p>
        </div>

        <div className="border border-gray-200 rounded-2xl overflow-hidden mb-6">
          {terms.map((term, i) => (
            <div key={i} className="border-b border-gray-100 last:border-b-0">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-[#f8fafc] transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[#1a2744] text-sm">{term.title}</span>
                <span className="text-[#f59e0b] font-bold text-lg ml-4 flex-shrink-0">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed">{term.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#f0f4f8] rounded-xl p-5 flex gap-4 items-start">
          <span className="text-2xl flex-shrink-0">📄</span>
          <div>
            <p className="text-sm text-[#1a2744] font-semibold mb-1">Need the full legal version?</p>
            <p className="text-xs text-gray-500 mb-2">The accordion above covers everything in plain language. For the complete legal document:</p>
            <div className="flex gap-3 flex-wrap">
              <a href="/installation-terms" className="text-xs text-[#f59e0b] font-bold hover:underline">Installation Terms →</a>
              <a href="/refund-policy" className="text-xs text-[#f59e0b] font-bold hover:underline">Refund Policy →</a>
              <a href="/terms" className="text-xs text-[#f59e0b] font-bold hover:underline">Terms of Service →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
