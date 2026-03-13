"use client"
import { useState } from "react"

export default function DamageCalculator() {
  const [type, setType] = useState("water")
  const [size, setSize] = useState("medium")

  const costs: Record<string, Record<string, { low: number; high: number; avg: number }>> = {
    water: {
      small: { low: 1500, high: 5000, avg: 3000 },
      medium: { low: 8000, high: 20000, avg: 13000 },
      large: { low: 25000, high: 75000, avg: 45000 },
    },
    fire: {
      small: { low: 2000, high: 8000, avg: 5000 },
      medium: { low: 15000, high: 50000, avg: 30000 },
      large: { low: 60000, high: 200000, avg: 120000 },
    },
    fall: {
      small: { low: 5000, high: 15000, avg: 9000 },
      medium: { low: 20000, high: 80000, avg: 45000 },
      large: { low: 100000, high: 500000, avg: 250000 },
    },
  }

  const labels: Record<string, string> = { water: "💧 Water Damage", fire: "🔥 Fire / Smoke", fall: "🏥 Fall / Medical" }
  const sizes: Record<string, string> = { small: "Minor incident", medium: "Moderate damage", large: "Major disaster" }
  const data = costs[type][size]
  const systemCost = 599

  return (
    <section className="py-20 px-6 bg-[#1a2744]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">What Does It Cost to Wait?</h2>
        <p className="text-slate-400 mb-12">See how fast damage adds up — and what our system costs by comparison.</p>

        <div className="bg-white rounded-2xl p-8">
          <div className="grid grid-cols-3 gap-3 mb-6">
            {Object.entries(labels).map(([k, v]) => (
              <button key={k} onClick={() => setType(k)}
                className={`py-3 px-2 rounded-xl font-bold text-sm transition ${type === k ? "bg-[#1a2744] text-[#f59e0b]" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                {v}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3 mb-8">
            {Object.entries(sizes).map(([k, v]) => (
              <button key={k} onClick={() => setSize(k)}
                className={`py-3 px-2 rounded-xl font-bold text-sm transition ${size === k ? "bg-[#f59e0b] text-[#1a2744]" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                {v}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
              <div className="text-xs font-extrabold text-red-400 uppercase tracking-widest mb-2">Without Protection</div>
              <div className="text-4xl font-black text-red-500">${data.avg.toLocaleString()}</div>
              <div className="text-sm text-red-400 mt-1">avg. damage cost</div>
              <div className="text-xs text-slate-400 mt-2">${data.low.toLocaleString()} – ${data.high.toLocaleString()} range</div>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <div className="text-xs font-extrabold text-green-600 uppercase tracking-widest mb-2">With Get Notified</div>
              <div className="text-4xl font-black text-green-600">${systemCost.toLocaleString()}</div>
              <div className="text-sm text-green-500 mt-1">one-time install</div>
              <div className="text-xs text-slate-400 mt-2">no monthly fees, ever</div>
            </div>
          </div>

          <div className="bg-amber-50 border border-[#f59e0b] rounded-xl p-4">
            <div className="font-extrabold text-[#1a2744] text-lg">
              You save up to <span className="text-[#f59e0b]">${(data.high - systemCost).toLocaleString()}</span> with early detection
            </div>
            <div className="text-sm text-slate-500 mt-1">That's a {Math.round(data.avg / systemCost)}× return on your investment.</div>
          </div>

          <a href="#contact" className="block mt-6 bg-[#1a2744] text-[#f59e0b] font-extrabold py-4 rounded-xl text-lg hover:bg-slate-800 transition">
            Get Protected for ${systemCost} →
          </a>
        </div>
      </div>
    </section>
  )
}
