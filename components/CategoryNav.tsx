"use client"

import { useState } from "react"
import DamageRisk from "@/components/DamageRisk"
import HowItWorks from "@/components/HowItWorks"
import DamageCalculator from "@/components/DamageCalculator"
import PrivacyHub from "@/components/PrivacyHub"

// ── Inline package data (from Packages.tsx) ─────────────────────────────────

const landlord = [
  {name:"Property Guardian",price:"$599",badge:"Most Popular",desc:"Prevent the worst",features:["3 leak sensors","Automatic water shutoff valve","2 door sensors","1 temp sensor (crawlspace)","Instant alerts to your phone","One-time fee — no subscription"]},
  {name:"Landlord Shield",price:"$899",badge:"Best Value",desc:"Full property awareness",features:["Everything in Guardian","5 leak sensors (full coverage)","2 window sensors","1 motion sensor","2 humidity sensors","Smart plug (crawlspace heater)","Power loss detection"]},
  {name:"Estate Protector",price:"$1,299",badge:"Total Protection",desc:"Nothing gets past this",features:["Everything in Landlord Shield","Smart smoke detector","UPS backup (works during outages)","12+ devices total","Full property layout","Remote access via secure tunnel"]},
]

const elder = [
  {name:"Safe Nights Essentials",price:"$1,499",badge:"Start Here",desc:"Perfect for getting started",features:["Hub computer + Zigbee dongle","2 smart plugs (mesh range)","3 door/window sensors","1 motion sensor","Phone alerts to entire family","One-time fee — no subscription"]},
  {name:"Complete Home Safety",price:"$2,999",badge:"Most Popular",desc:"Full coverage + fall detection",features:["Everything in Essentials","1 fall/presence sensor","2 additional door sensors","1 water leak sensor","UPS battery backup","Remote dashboard access"]},
  {name:"Total Peace of Mind",price:"$3,999",badge:"Maximum Protection",desc:"Nothing gets missed",features:["Everything in Complete","2 fall/presence sensors","2 water leak sensors","2 temp/humidity sensors","1 smoke detector","Medication cabinet monitoring","Wellness activity tracking"]},
]

function PkgCard({ p }: { p: typeof landlord[0] }) {
  return (
    <div className="bg-white rounded-2xl border-2 border-slate-100 overflow-hidden hover:border-[#f59e0b] hover:shadow-xl transition flex flex-col">
      <div className="bg-[#1a2744] p-6 text-white text-center">
        <div className="inline-block bg-[#f59e0b] text-[#1a2744] text-xs font-extrabold px-3 py-1 rounded-full mb-3">{p.badge}</div>
        <div className="font-extrabold text-xl mb-1">{p.name}</div>
        <div className="text-slate-400 text-sm mb-3">{p.desc}</div>
        <div className="text-4xl font-black text-[#f59e0b]">{p.price}</div>
        <div className="text-slate-400 text-xs mt-1">one-time · ships nationwide</div>
      </div>
      <div className="p-6 flex-1">
        <ul className="space-y-3">
          {p.features.map(f => (
            <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
              <span className="text-green-500 font-bold mt-0.5">✓</span>{f}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 pb-6">
        <a href="#contact" className="block w-full bg-[#f59e0b] text-[#1a2744] font-extrabold text-center py-3 rounded-xl hover:bg-yellow-400 transition">
          Get This Package
        </a>
      </div>
    </div>
  )
}

// ── Category definitions ────────────────────────────────────────────────────

type Category = {
  id: string
  emoji: string
  title: string
  description: string
  content: React.ReactNode
}

const categories: Category[] = [
  {
    id: "property",
    emoji: "🏠",
    title: "Property Protection",
    description: "Water leak detection + automatic shutoff for landlords and homeowners",
    content: (
      <div>
        <DamageRisk />
        <HowItWorks />
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">🏠</span>
              <div>
                <h3 className="text-2xl font-extrabold text-[#1a2744]">Landlord &amp; Property Protection</h3>
                <p className="text-slate-500 text-sm">Protect your investment before damage happens.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {landlord.map(p => <PkgCard key={p.name} p={p} />)}
            </div>
            <div className="mt-6 bg-amber-50 border border-[#f59e0b] rounded-xl p-4 text-sm text-amber-800 text-center font-semibold">
              Multi-property discounts: 2–4 units 10% off · 5–9 units 15% off · 10+ units 20% + custom contract
            </div>
          </div>
        </section>
        <DamageCalculator />
      </div>
    ),
  },
  {
    id: "elder",
    emoji: "👴",
    title: "Elder Safety",
    description: "Keep aging parents safe without cameras or surveillance",
    content: (
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">👴</span>
            <div>
              <h3 className="text-2xl font-extrabold text-[#1a2744]">Elder Safety Monitoring</h3>
              <p className="text-slate-500 text-sm">Independence for them. Peace of mind for you.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {elder.map(p => <PkgCard key={p.name} p={p} />)}
          </div>
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800 text-center font-semibold">
            Add-ons: Medication Management +$250 · Wellness Monitoring +$175 · Monthly Guardian Watch +$35/mo
          </div>
        </div>
      </section>
    ),
  },
  {
    id: "privacy",
    emoji: "🔒",
    title: "Privacy Hub",
    description: "Block ads on every device. Private cloud. No monthly fees.",
    content: <PrivacyHub />,
  },
  {
    id: "tools",
    emoji: "🛠️",
    title: "Digital Tools",
    description: "Landlord analytics, home security dashboards, and more — instant download",
    content: (
      <section className="py-16 px-6 bg-[#1a2744]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-4">🛠️</div>
          <h3 className="text-3xl font-extrabold text-white mb-4">Digital Tools Store</h3>
          <p className="text-slate-300 text-lg mb-8">
            Landlord analytics spreadsheets, home security dashboards, ROI calculators, and more.
            Instant download — no subscription, yours forever.
          </p>
          <a
            href="/store"
            className="inline-block bg-[#f59e0b] text-[#1a2744] font-extrabold text-xl px-10 py-4 rounded-2xl hover:bg-yellow-400 transition shadow-lg"
          >
            Browse the Store →
          </a>
        </div>
      </section>
    ),
  },
]

// ── Main component ──────────────────────────────────────────────────────────

export default function CategoryNav() {
  const [openId, setOpenId] = useState<string | null>(null)

  function toggle(id: string) {
    setOpenId(prev => (prev === id ? null : id))
  }

  return (
    <section className="py-16 px-6 bg-[#0f1a35]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white text-center mb-3">
          What do you need to protect?
        </h2>
        <p className="text-slate-400 text-center mb-12">
          Choose a category to explore solutions built for you.
        </p>

        <div className="flex flex-col gap-4">
          {categories.map(cat => {
            const isOpen = openId === cat.id
            return (
              <div
                key={cat.id}
                className="rounded-2xl border-2 border-[#f59e0b] overflow-hidden transition-all duration-300"
                style={{ background: "#1a2744" }}
              >
                {/* Card header — always visible */}
                <button
                  onClick={() => toggle(cat.id)}
                  className="w-full text-left flex items-center gap-5 px-8 py-6 hover:bg-[#1e2f55] transition-colors duration-200 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-5xl leading-none select-none">{cat.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-extrabold text-xl mb-1">{cat.title}</div>
                    <div className="text-slate-400 text-sm leading-snug">{cat.description}</div>
                  </div>
                  <span className="text-[#f59e0b] font-bold text-sm whitespace-nowrap flex items-center gap-1 ml-4">
                    {isOpen ? "Close ▲" : "Learn More ▼"}
                  </span>
                </button>

                {/* Expandable content */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[9999px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-[#f59e0b]/30">
                    {cat.content}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
