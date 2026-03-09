export default function Hero() {
  return (
    <section className="bg-[#1a2744] text-white min-h-screen flex flex-col justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-[#f59e0b] text-sm font-bold tracking-widest uppercase mb-4">Get Notified LLC · Salisbury, NC</div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Protect your property<br/><span className="text-[#f59e0b]">before damage happens.</span>
        </h1>
        <p className="text-xl text-slate-300 mb-4 max-w-2xl mx-auto">Smart leak protection, entry alerts, and safety monitoring — installed locally for homes, rentals, and families.</p>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">A small leak today can become <span className="text-[#f59e0b] font-bold">$10,000 in damage tomorrow.</span></p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="bg-[#f59e0b] text-[#1a2744] font-extrabold px-8 py-4 rounded-xl text-lg hover:bg-yellow-400 transition">Get a Free Quote</a>
          <a href="#packages" className="border-2 border-[#f59e0b] text-[#f59e0b] font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#f59e0b] hover:text-[#1a2744] transition">See Packages</a>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            {icon:"💧",label:"Leak Protection"},
            {icon:"🚪",label:"Entry Monitoring"},
            {icon:"👴",label:"Elder Safety"},
            {icon:"🔒",label:"100% Local & Private"},
          ].map(i=>(
            <div key={i.label} className="bg-white/5 rounded-xl p-4">
              <div className="text-3xl mb-2">{i.icon}</div>
              <div className="text-sm font-semibold text-slate-300">{i.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
