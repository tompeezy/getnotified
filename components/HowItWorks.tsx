export default function HowItWorks() {
  const steps = [
    { icon: "📞", step: "1", title: "Free Consultation", desc: "Tell us about your home or property. We build a custom quote — no pressure, no obligation." },
    { icon: "📦", step: "2", title: "Ships to Your Door", desc: "Your GuardianHub ships pre-configured within 2 business days. Plug it in and you're protected — no technician needed." },
    { icon: "🛠️", step: "3", title: "Remote Setup Included", desc: "Can't figure out a step? We log in remotely and handle it for you. Guaranteed to work before we disconnect." },
    { icon: "📱", step: "4", title: "You're Protected", desc: "Your phone gets alerts the moment anything changes. Your family gets notified. Your property is covered — 24/7, no monthly fees." },
  ]
  return (
    <section id="how-it-works" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#1a2744] text-center mb-4">How It Works</h2>
        <p className="text-center text-slate-500 mb-16 max-w-xl mx-auto">From first call to fully protected — ships in 2 business days.</p>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#1a2744] text-[#f59e0b] text-2xl flex items-center justify-center mx-auto mb-4">{s.icon}</div>
              <div className="text-xs font-extrabold text-[#f59e0b] uppercase tracking-widest mb-2">Step {s.step}</div>
              <h3 className="font-extrabold text-[#1a2744] mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#contact" className="inline-block bg-[#f59e0b] text-[#1a2744] font-extrabold px-8 py-4 rounded-xl text-lg hover:bg-yellow-400 transition">Get Your Free Quote →</a>
        </div>
      </div>
    </section>
  )
}
