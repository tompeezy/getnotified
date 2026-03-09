const packages = [
  {name:"Property Guardian",price:"$599",badge:"Most Popular",desc:"Prevent the worst",color:"amber",features:["3 leak sensors","Automatic water shutoff valve","2 door sensors","1 temp sensor (crawlspace)","Instant alerts to your phone","One-time fee — no subscription"]},
  {name:"Landlord Shield",price:"$899",badge:"Best Value",desc:"Full property awareness",color:"blue",features:["Everything in Guardian","5 leak sensors (full coverage)","2 window sensors","1 motion sensor","2 humidity sensors","Smart plug (crawlspace heater)","Power loss detection"]},
  {name:"Estate Protector",price:"$1,299",badge:"Total Protection",desc:"Nothing gets past this",color:"navy",features:["Everything in Landlord Shield","Smart smoke detector","UPS backup (works during outages)","12+ devices total","Full property layout","Remote access via secure tunnel"]},
]
export default function Packages() {
  return (
    <section id="packages" className="py-20 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#1a2744] text-center mb-4">Protection Packages</h2>
        <p className="text-center text-slate-500 mb-4">One-time installation. No monthly fees. Yours forever.</p>
        <p className="text-center text-[#f59e0b] font-bold mb-12">⚡ 50% deposit secures your install date · Balance due at completion</p>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map(p=>(
            <div key={p.name} className="bg-white rounded-2xl border-2 border-slate-100 overflow-hidden hover:border-[#f59e0b] hover:shadow-xl transition flex flex-col">
              <div className="bg-[#1a2744] p-6 text-white text-center">
                <div className="inline-block bg-[#f59e0b] text-[#1a2744] text-xs font-extrabold px-3 py-1 rounded-full mb-3">{p.badge}</div>
                <div className="font-extrabold text-xl mb-1">{p.name}</div>
                <div className="text-slate-400 text-sm mb-3">{p.desc}</div>
                <div className="text-4xl font-black text-[#f59e0b]">{p.price}</div>
                <div className="text-slate-400 text-xs mt-1">one-time · installed</div>
              </div>
              <div className="p-6 flex-1">
                <ul className="space-y-3">
                  {p.features.map(f=>(
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <a href="#contact" className="block w-full bg-[#f59e0b] text-[#1a2744] font-extrabold text-center py-3 rounded-xl hover:bg-yellow-400 transition">Get This Package</a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-400 text-sm mt-8">Elder safety packages also available starting at $1,499 · Custom quotes for facilities · Multi-property discounts available</p>
      </div>
    </section>
  )
}
