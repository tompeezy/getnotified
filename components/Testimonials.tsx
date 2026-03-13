export default function Testimonials() {
  const testimonials = [
    { name: "Sandra M.", location: "Salisbury, NC", text: "I live 3 hours from my dad. Knowing I get an alert if he hasn't moved through the kitchen by 10 AM lets me sleep at night. Worth every penny.", market: "Elder Safety" },
    { name: "Derek R.", location: "Rowan County, NC", text: "Had a leak under my rental property sink for who knows how long before. Now I get a text the moment water hits that sensor. Already paid for itself twice.", market: "Landlord" },
    { name: "The Whitfield Family", location: "Kannapolis, NC", text: "Thomas came out and had everything set up in about 2 hours. No cameras, no monthly fees, and my whole family gets notified if anything happens. Exactly what we wanted.", market: "Homeowner" },
  ]
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#1a2744] text-center mb-4">What Customers Say</h2>
        <p className="text-center text-slate-500 mb-16">Real people. Real protection. Right here in Rowan County.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-[#f8fafc] rounded-2xl border border-slate-100 p-6 flex flex-col gap-4">
              <div className="text-[#f59e0b] text-2xl">★★★★★</div>
              <p className="text-slate-600 text-sm leading-relaxed italic">"{t.text}"</p>
              <div className="mt-auto">
                <div className="font-extrabold text-[#1a2744]">{t.name}</div>
                <div className="text-xs text-slate-400">{t.location} · {t.market}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
