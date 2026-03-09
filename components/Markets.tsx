const markets = [
  {icon:"👴",title:"Elder Safety",desc:"Keep aging parents independent longer. Monitor activity, detect falls, send family alerts — without cameras or microphones.",color:"blue"},
  {icon:"🏠",title:"Landlords & Rentals",desc:"A burst pipe in a vacant home costs $10,000–$40,000. One system pays for itself the first time a sensor fires.",color:"amber"},
  {icon:"🇺🇸",title:"Veterans & TBI",desc:"Smart home systems that support independence for veterans and those with traumatic brain injury. Ask about our discount.",color:"red"},
  {icon:"👶",title:"Growing Families",desc:"Baby monitor integration, entry alerts, and whole-home safety — all on one private, local system.",color:"green"},
  {icon:"🏢",title:"Facilities & Care Homes",desc:"Scalable monitoring for senior living facilities, memory care units, and multi-unit properties. Built for staff and families.",color:"purple"},
]
export default function Markets() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#1a2744] text-center mb-4">Who We Protect</h2>
        <p className="text-center text-slate-500 mb-12">One platform. Five markets. Built for the people who need it most.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {markets.map(m=>(
            <div key={m.title} className="border-2 border-slate-100 rounded-2xl p-6 hover:border-[#f59e0b] hover:shadow-lg transition">
              <div className="text-4xl mb-4">{m.icon}</div>
              <h3 className="font-extrabold text-[#1a2744] text-lg mb-2">{m.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
