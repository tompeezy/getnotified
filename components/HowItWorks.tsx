export default function HowItWorks() {
  const steps = [
    { icon: "📞", step: "1", title: "Free Consultation", desc: "Tell us about your home or property. We assess what sensors make sense and build a custom quote — no pressure, no obligation." },
    { icon: "🛒", step: "2", title: "We Order the Hardware", desc: "Once you approve the quote and put down 50%, we order your equipment. Everything arrives within a few days." },
    { icon: "🔧", step: "3", title: "Professional Installation", desc: "We come to you. Full install typically takes 2–3 hours. We place every sensor, configure every automation, and test everything before we leave." },
    { icon: "📱", step: "4", title: "You're Protected", desc: "Your phone gets alerts the moment anything changes. Your family gets notified. Your property is covered — 24/7, no monthly fees." },
  ]
  return (
    <section id="how-it-works" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#1a2744] text-center mb-4">How It Works</h2>
        <p className="text-center text-slate-500 mb-16 max-w-xl mx-auto">From first call to fully protected — most installs are done within a week.</p>
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
