export default function WhoWeProtect() {
  const markets = [
    { icon: "👴", title: "Aging Parents", desc: "Keep mom or dad independent longer. Fall detection, wellness monitoring, and family alerts — without cameras or microphones in their home." },
    { icon: "🏠", title: "Landlords & Property Owners", desc: "A burst pipe in a vacant home costs $10,000–$40,000. One leak sensor pays for itself the first time it fires." },
    { icon: "🏡", title: "Homeowners", desc: "Protect your biggest investment. Water damage, smoke, temperature swings — get notified before small problems become disasters." },
    { icon: "🇺🇸", title: "Veterans", desc: "Smart home systems that support independence for veterans and those with TBI. Ask about our veteran discount." },
    { icon: "👶", title: "Young Families", desc: "Baby monitors, entry alerts, whole-home safety — all on one private, local system. No cloud. No subscription." },
    { icon: "🏢", title: "Facilities", desc: "Scalable monitoring for senior living, memory care, and multi-unit properties. Built for staff and family communication." },
    { icon: "🚐", title: "RV & Camper Owners", desc: "Leak detection, CO alerts, door sensors, and temp monitoring — runs locally, no cell data needed. Know what's happening in your rig 24/7." },
  ]
  return (
    <section className="py-20 px-6 bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#1a2744] text-center mb-4">Who We Protect</h2>
        <p className="text-center text-slate-500 mb-16">One platform. Built for the people who need it most.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {markets.map((m) => (
            <div key={m.title} className="bg-white rounded-2xl border border-slate-100 p-6 hover:border-[#f59e0b] hover:shadow-lg transition">
              <div className="text-4xl mb-4">{m.icon}</div>
              <h3 className="font-extrabold text-[#1a2744] text-lg mb-2">{m.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
