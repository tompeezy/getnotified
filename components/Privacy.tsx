const points = [
  {icon:"🚫",title:"No Cloud",desc:"Your data never leaves your property. No Amazon. No Google. No third-party servers."},
  {icon:"🎤",title:"No Microphones",desc:"We don't install listening devices. Your home is not being recorded."},
  {icon:"📡",title:"Works Without Internet",desc:"Core protections run locally. If the internet goes down, your system keeps working."},
  {icon:"🔋",title:"Survives Power Outages",desc:"UPS backup keeps your hub running for hours during an outage."},
  {icon:"🏠",title:"You Own It",desc:"No subscriptions required. No account to cancel. It's your system, forever."},
  {icon:"🔒",title:"Local Voice Control",desc:"Optional: voice commands processed entirely on your device. Not sent to Amazon or Google."},
]
export default function Privacy() {
  return (
    <section className="py-20 px-6 bg-[#1a2744]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white text-center mb-4">Safety Without Surveillance</h2>
        <p className="text-center text-slate-400 mb-12">Ring sends your footage to Amazon. Alexa records your conversations. Nest tracks your schedule.<br/><span className="text-[#f59e0b] font-semibold">Ours stays in your house.</span></p>
        <div className="grid md:grid-cols-3 gap-6">
          {points.map(p=>(
            <div key={p.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="font-extrabold text-white mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
