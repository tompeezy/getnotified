"use client"
import { useState } from "react"

const markets = [
  {
    icon: "👴",
    title: "Elder Safety",
    desc: "Keep aging parents independent longer. Monitor activity, detect falls, send family alerts — without cameras or microphones.",
    color: "blue",
    details: [
      "Motion sensors detect if your parent hasn't moved in hours — you get a text",
      "Medication reminder alerts (cabinet sensor tracks if meds were taken)",
      "Door & window sensors alert you if mom wanders at night",
      "Temperature monitoring — too hot or too cold triggers an alert",
      "Fall detection zones in bathroom, bedroom, and living room",
      "NO cameras, NO microphones — their dignity stays intact",
      "Works without internet — local system runs 24/7",
    ],
    cta: "View Elder Safety Packages →",
    ctaHref: "#packages",
  },
  {
    icon: "🏠",
    title: "Landlords & Rentals",
    desc: "A burst pipe in a vacant home costs $10,000–$40,000. One system pays for itself the first time a sensor fires.",
    color: "amber",
    details: [
      "Leak sensors shut off water automatically before damage spreads",
      "Instant text alert the moment a leak is detected",
      "Vacancy monitoring — know if someone enters an empty property",
      "Temperature alerts — catch a frozen pipe before it bursts",
      "Works across multiple properties from one dashboard",
      "No monthly fees — one-time installation, yours forever",
      "Documented proof for insurance claims",
    ],
    cta: "Protect Your Properties →",
    ctaHref: "#packages",
  },
  {
    icon: "🇺🇸",
    title: "Veterans & TBI",
    desc: "Smart home systems that support independence for veterans and those with traumatic brain injury. Ask about our discount.",
    color: "red",
    details: [
      "Automated reminders for medications, appointments, and routines",
      "Voice-free, camera-free — no Big Tech listening in your home",
      "Customized alerts for caregivers and family members",
      "Lighting automation reduces cognitive load and stress",
      "Simple, consistent routines programmed into the system",
      "Works offline — no internet dependency",
      "Veteran discount available — ask us when you call",
    ],
    cta: "Ask About Veteran Discount →",
    ctaHref: "#contact",
  },
  {
    icon: "👶",
    title: "Growing Families",
    desc: "Baby monitor integration, entry alerts, and whole-home safety — all on one private, local system.",
    color: "green",
    details: [
      "Door alerts when kids come home from school",
      "GuardianHub blocks adult content on every device — no app needed",
      "Screen time schedules — WiFi off at bedtime, automatically",
      "Entry sensor alerts when doors or windows open",
      "Temperature monitoring in baby's room",
      "All data stays in your house — no cloud, no company watching",
      "Grows with your family — add sensors anytime",
    ],
    cta: "Protect Your Family →",
    ctaHref: "#packages",
  },
  {
    icon: "🏢",
    title: "Facilities & Care Homes",
    desc: "Scalable monitoring for senior living facilities, memory care units, and multi-unit properties. Built for staff and families.",
    color: "purple",
    details: [
      "Room-by-room presence monitoring without cameras",
      "Staff alert dashboard — one screen shows every resident",
      "Family portal — loved ones get updates without calling the desk",
      "Wandering prevention — door alerts for memory care units",
      "Medication compliance tracking per resident",
      "Reduces liability — documented safety logs for every event",
      "Custom pricing for multi-room deployments — call us",
    ],
    cta: "Request Facility Consultation →",
    ctaHref: "#contact",
  },
  {
    icon: "🚐",
    title: "RV & Camper Owners",
    desc: "Leak detection, temperature alerts, door sensors, and CO monitoring — all running locally with no cell data required.",
    color: "orange",
    details: [
      "Water leak sensors under sinks and near water heater",
      "CO and propane detection with instant alerts",
      "Temperature monitoring — protect pipes and pets",
      "Door and compartment sensors — know if anything's opened",
      "Runs locally — no cell signal required at the campsite",
      "Solar-friendly low-power setup available",
      "Monitor remotely when you're away from your rig via Tailscale",
    ],
    cta: "Protect Your Rig →",
    ctaHref: "#packages",
  },
]

const colorMap: Record<string, string> = {
  blue: "border-blue-400 bg-blue-50",
  amber: "border-amber-400 bg-amber-50",
  red: "border-red-400 bg-red-50",
  green: "border-green-400 bg-green-50",
  purple: "border-purple-400 bg-purple-50",
  orange: "border-orange-400 bg-orange-50",
}

const badgeMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700",
  amber: "bg-amber-100 text-amber-700",
  red: "bg-red-100 text-red-700",
  green: "bg-green-100 text-green-700",
  purple: "bg-purple-100 text-purple-700",
  orange: "bg-orange-100 text-orange-700",
}

export default function Markets() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <section id="elder-safety" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#1a2744] text-center mb-4">Who We Protect</h2>
        <p className="text-center text-slate-500 mb-3">One platform. Six markets. Built for the people who need it most.</p>
        <p className="text-center text-slate-400 text-sm mb-12">👇 Click any card to learn more</p>

        <div className="grid md:grid-cols-3 gap-6">
          {markets.map((m) => {
            const isOpen = open === m.title
            return (
              <div
                key={m.title}
                className={`border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  isOpen
                    ? `${colorMap[m.color]} border-2`
                    : "border-slate-100 hover:border-[#f59e0b] hover:shadow-lg"
                }`}
                onClick={() => setOpen(isOpen ? null : m.title)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{m.icon}</div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${badgeMap[m.color]}`}>
                    {isOpen ? "▲ Less" : "▼ More"}
                  </span>
                </div>
                <h3 className="font-extrabold text-[#1a2744] text-lg mb-2">{m.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>

                {isOpen && (
                  <div className="mt-5 pt-5 border-t border-slate-200">
                    <ul className="space-y-2 mb-5">
                      {m.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={m.ctaHref}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-block bg-[#1a2744] hover:bg-[#243460] text-white text-sm font-bold py-2 px-5 rounded-xl transition-colors"
                    >
                      {m.cta}
                    </a>
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
