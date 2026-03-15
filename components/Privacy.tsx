"use client"
import { useState } from "react"

const points = [
  {
    icon: "🚫",
    title: "No Cloud",
    desc: "Your data never leaves your property. No Amazon. No Google. No third-party servers.",
    details: [
      "Everything runs on YOUR hardware, in YOUR home",
      "No account required — nothing to hack, breach, or sell",
      "Not subject to company policy changes or shutdowns",
      "Ring, Nest, and Alexa send your data to corporate servers 24/7 — we don't",
      "If we go out of business tomorrow, your system keeps running forever",
    ],
  },
  {
    icon: "🎤",
    title: "No Microphones",
    desc: "We don't install listening devices. Your home is not being recorded.",
    details: [
      "Zero audio devices in our entire product line",
      "Motion and presence sensing uses radar — not cameras or sound",
      "Your conversations stay private, period",
      "Alexa and Google Home are always listening — we never are",
      "Families with elderly parents especially value this — their dignity matters",
    ],
  },
  {
    icon: "📡",
    title: "Works Without Internet",
    desc: "Core protections run locally. If the internet goes down, your system keeps working.",
    details: [
      "All automations run on the local hub — no cloud dependency",
      "Leak shutoff, motion alerts, and door sensors work offline",
      "ISP outage? Your system doesn't even notice",
      "Most smart home systems go dead when internet drops — ours doesn't",
      "Remote access (Tailscale) is the only feature that requires internet",
    ],
  },
  {
    icon: "🔋",
    title: "Survives Power Outages",
    desc: "UPS backup keeps your hub running for hours during an outage.",
    details: [
      "Small UPS battery keeps your GuardianHub and router running during outages",
      "Sensors run on batteries — fully independent of house power",
      "Critical alerts (fall detection, water leak) still fire during blackouts",
      "Especially important for elderly residents living alone",
      "Most smart home systems go completely dark when power cuts — ours stays on",
    ],
  },
  {
    icon: "🏠",
    title: "You Own It",
    desc: "No subscriptions required. No account to cancel. It's your system, forever.",
    details: [
      "One-time purchase — no monthly fees, ever",
      "No app store. No login. No subscription creep.",
      "We go out of business? Your system still runs.",
      "Price never increases — you paid once, you're done",
      "Optional monitoring plans available but never required",
    ],
  },
  {
    icon: "🔒",
    title: "Local Voice Control",
    desc: "Optional: voice commands processed entirely on your device. Not sent to Amazon or Google.",
    details: [
      "Voice processing happens on your hub — never leaves your home",
      "No wake word data sent to corporate servers",
      "Works offline — no internet needed for voice commands",
      "Completely optional — system works perfectly without it",
      "Compatible with privacy-focused local voice assistants",
    ],
  },
]

export default function Privacy() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <section className="py-20 px-6 bg-[#1a2744]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white text-center mb-4">Safety Without Surveillance</h2>
        <p className="text-center text-slate-400 mb-3">
          Ring sends your footage to Amazon. Alexa records your conversations. Nest tracks your schedule.<br/>
          <span className="text-[#f59e0b] font-semibold">Ours stays in your house.</span>
        </p>
        <p className="text-center text-slate-500 text-sm mb-12">👇 Click any card to learn more</p>

        <div className="grid md:grid-cols-3 gap-6">
          {points.map((p) => {
            const isOpen = open === p.title
            return (
              <div
                key={p.title}
                onClick={() => setOpen(isOpen ? null : p.title)}
                className={`border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  isOpen
                    ? "bg-white/10 border-[#f59e0b]"
                    : "bg-white/5 border-white/10 hover:border-[#f59e0b] hover:bg-white/10"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl">{p.icon}</div>
                  <span className="text-xs font-bold text-slate-400 bg-white/10 px-2 py-1 rounded-full">
                    {isOpen ? "▲" : "▼"}
                  </span>
                </div>
                <h3 className="font-extrabold text-white mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>

                {isOpen && (
                  <div className="mt-5 pt-5 border-t border-white/10">
                    <ul className="space-y-2">
                      {p.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="text-[#f59e0b] mt-0.5 shrink-0">✓</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
