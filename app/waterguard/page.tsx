import type { Metadata } from "next"
import NavBar from "@/components/NavBar"
import SiteFooter from "@/components/SiteFooter"

export const metadata: Metadata = {
  title: "WaterGuard – Automatic Leak Detection & Shutoff | Get Notified LLC",
  description:
    "Stop water damage before it starts. WaterGuard automatically detects leaks and shuts off your water in milliseconds. One-time install, no monthly fees. Ships nationwide.",
}

export default function WaterGuardPage() {
  return (
    <main className="bg-[#0a0f1e] text-white min-h-screen">
      <NavBar />

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden pt-24 pb-20 px-6">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,170,60,0.15),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(212,170,60,0.08),transparent_30%)]" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-sm font-medium text-yellow-300 mb-6">
            💧 WaterGuard by Get Notified LLC
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Stop Water Damage{" "}
            <span className="text-yellow-400">Before It Starts</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Automatic leak detection and water shutoff for your home or rental
            property. One-time install. No monthly fees.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold px-8 py-4 text-lg transition-colors"
            >
              Get WaterGuard
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-xl border border-slate-600 hover:border-yellow-500/60 text-slate-300 hover:text-white px-8 py-4 text-lg transition-colors"
            >
              See How It Works ↓
            </a>
          </div>
        </div>
      </section>

      {/* ─── The Problem ─── */}
      <section className="py-20 px-6 bg-[#0d1326]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Water Damage Is a{" "}
              <span className="text-red-400">Silent Emergency</span>
            </h2>
            <p className="mt-4 text-slate-400 text-lg">
              Most leaks aren&apos;t discovered until the damage is already done.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-red-400/20 bg-slate-900/80 p-7 text-center">
              <div className="text-5xl font-extrabold text-red-400">$11,000+</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-slate-400">Average Claim</div>
              <div className="mt-3 text-slate-300">
                Average water damage insurance claim — and that&apos;s when insurance even covers it.
              </div>
            </div>
            <div className="rounded-2xl border border-red-400/20 bg-slate-900/80 p-7 text-center">
              <div className="text-5xl font-extrabold text-red-400">Hours</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-slate-400">Undetected</div>
              <div className="mt-3 text-slate-300">
                Leaks often go undetected for hours or days while damage quietly spreads.
              </div>
            </div>
            <div className="rounded-2xl border border-red-400/20 bg-slate-900/80 p-7 text-center">
              <div className="text-5xl font-extrabold text-red-400">⚠️</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-slate-400">Highest Risk</div>
              <div className="mt-3 text-slate-300">
                Vacant and rental properties are most at risk — no one there to catch it early.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              How <span className="text-yellow-400">WaterGuard</span> Works
            </h2>
            <p className="mt-4 text-slate-400 text-lg">
              Three automatic steps — no human reaction time required.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: "💧",
                title: "Sensor Detects Water",
                desc: "The moment moisture is detected, the sensor triggers in milliseconds — faster than any human could react.",
              },
              {
                step: "02",
                icon: "🔒",
                title: "Valve Closes Automatically",
                desc: "The Aqara T1 shutoff valve closes instantly. No phone call needed, no action required from you.",
              },
              {
                step: "03",
                icon: "📱",
                title: "You Get an Instant Alert",
                desc: "A notification hits your phone right away so you know exactly what happened and where.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-yellow-500/20 bg-slate-900/60 p-8"
              >
                <div className="text-xs font-bold text-yellow-500/50 uppercase tracking-widest mb-3">
                  Step {item.step}
                </div>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What's Included ─── */}
      <section className="py-20 px-6 bg-[#0d1326]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Everything <span className="text-yellow-400">Included</span>
            </h2>
            <p className="mt-4 text-slate-400 text-lg">
              A complete, plug-and-play system. No upsells, no surprises.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { icon: "💧", text: "Leak sensor(s)" },
              { icon: "🔒", text: "Automatic shutoff valve (Aqara T1)" },
              { icon: "🏠", text: "Hub (pre-configured, plug and play)" },
              { icon: "🛠️", text: "Professional remote setup by Get Notified LLC" },
              { icon: "📱", text: "Phone alerts instantly" },
              { icon: "🔇", text: "No cameras, no microphones, no cloud" },
              { icon: "✅", text: "No monthly fees — ever" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-4 rounded-xl border border-slate-700/60 bg-slate-900/60 px-5 py-4"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-slate-200 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Simple, <span className="text-yellow-400">Transparent</span> Pricing
            </h2>
            <p className="mt-4 text-slate-400 text-lg">One price. Everything included. No surprises.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Kit */}
            <div className="rounded-2xl border border-yellow-500/30 bg-slate-900/80 p-8 flex flex-col">
              <div className="text-sm font-bold uppercase tracking-widest text-yellow-400 mb-2">
                Complete Kit
              </div>
              <div className="text-5xl font-extrabold text-white mt-2">$499</div>
              <div className="text-slate-400 mt-1 mb-6">Ships nationwide</div>
              <ul className="space-y-2 text-slate-300 flex-1">
                <li>✓ Everything included</li>
                <li>✓ Pre-configured hub</li>
                <li>✓ Remote setup by Get Notified LLC</li>
                <li>✓ No monthly fees</li>
              </ul>
              <a
                href="/#contact"
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold px-6 py-3 transition-colors"
              >
                Order Now
              </a>
            </div>
            {/* Local install */}
            <div className="rounded-2xl border border-slate-600 bg-slate-900/60 p-8 flex flex-col">
              <div className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">
                Local Install
              </div>
              <div className="text-5xl font-extrabold text-white mt-2">$599</div>
              <div className="text-slate-400 mt-1 mb-6">Rowan County, NC</div>
              <ul className="space-y-2 text-slate-300 flex-1">
                <li>✓ Everything in the kit</li>
                <li>✓ In-person professional installation</li>
                <li>✓ Local support from Salisbury, NC</li>
                <li>✓ No monthly fees</li>
              </ul>
              <a
                href="/#contact"
                className="mt-8 inline-flex items-center justify-center rounded-xl border border-yellow-500/50 hover:border-yellow-400 hover:text-yellow-300 text-slate-300 font-bold px-6 py-3 transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Get Notified ─── */}
      <section className="py-20 px-6 bg-[#0d1326]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Why <span className="text-yellow-400">Get Notified LLC?</span>
            </h2>
            <p className="mt-4 text-slate-400 text-lg">
              A local business that takes privacy seriously.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "📍",
                title: "Local Business — Salisbury, NC",
                desc: "We're a real local company in Rowan County, NC. You're not dealing with a faceless corporation.",
              },
              {
                icon: "🔐",
                title: "Privacy-First",
                desc: "Your data stays in your home. No cloud. No surveillance. No microphones or cameras.",
              },
              {
                icon: "📡",
                title: "Works Without Internet",
                desc: "No cloud subscription means it keeps working even if your Wi-Fi goes down. Local processing, always.",
              },
              {
                icon: "🛠️",
                title: "Remote Setup Included",
                desc: "We handle all the technical configuration remotely. You just plug it in — we do the rest.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6"
              >
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA / Contact ─── */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Ready to Protect Your Home?
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Get in touch to order WaterGuard or ask any questions. We respond fast.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold px-8 py-4 text-lg transition-colors"
            >
              Contact Us / Order
            </a>
            <a
              href="tel:7042397532"
              className="inline-flex items-center justify-center rounded-xl border border-slate-600 hover:border-yellow-500/60 text-slate-300 hover:text-white px-8 py-4 text-lg transition-colors"
            >
              📞 704-239-7532
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Salisbury, NC · Ships nationwide · No monthly fees ever
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
