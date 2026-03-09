export default function DamageRisk() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#1a2744] text-center mb-4">What One Leak Can Cost</h2>
        <p className="text-center text-slate-500 mb-12">Early detection makes the difference between a small problem and a major disaster.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">✅</div>
            <div className="font-extrabold text-green-700 text-xl mb-2">Caught Early</div>
            <div className="text-3xl font-black text-green-600 mb-2">$200 – $500</div>
            <div className="text-slate-500 text-sm">Minor repair. In and out same day.</div>
          </div>
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">💸</div>
            <div className="font-extrabold text-red-700 text-xl mb-2">Found Days Later</div>
            <div className="text-3xl font-black text-red-600 mb-2">$5,000 – $40,000+</div>
            <div className="text-slate-500 text-sm">Flooring, drywall, mold remediation, insurance claim.</div>
          </div>
        </div>
        <div className="mt-10 bg-[#1a2744] text-white rounded-2xl p-8 text-center">
          <p className="text-lg font-bold">Vacant homes don't notice leaks — <span className="text-[#f59e0b]">until the damage is done.</span></p>
          <p className="text-slate-300 mt-2">Our systems detect the problem and alert you before it spreads.</p>
        </div>
      </div>
    </section>
  )
}
