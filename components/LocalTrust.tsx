export default function LocalTrust() {
  return (
    <section className="py-16 px-6 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-extrabold text-[#1a2744] mb-3">Proudly Serving Rowan County & Beyond</h2>
        <p className="text-slate-500 mb-10">We're local. When you call, Thomas answers. When you need help, we come to you.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {[
            { stat: "Local", label: "Salisbury, NC based" },
            { stat: "LLC", label: "Licensed & insured" },
            { stat: "0", label: "Monthly fees" },
            { stat: "24/7", label: "System monitoring" },
          ].map((s) => (
            <div key={s.label} className="bg-[#f8fafc] rounded-xl p-5 border border-slate-100">
              <div className="text-3xl font-black text-[#f59e0b] mb-1">{s.stat}</div>
              <div className="text-sm text-slate-500 font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-500 font-semibold">
          {["Salisbury", "Spencer", "Kannapolis", "Concord", "Mocksville", "Statesville", "Rockwell", "China Grove"].map(city => (
            <span key={city} className="bg-slate-100 px-3 py-1 rounded-full">{city}</span>
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-4">Outside this area? We ship nationwide — or can refer a trusted installer near you.</p>
      </div>
    </section>
  )
}
