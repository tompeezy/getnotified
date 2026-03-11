"use client"
const landlord = [
  {name:"Property Guardian",price:"$599",badge:"Most Popular",desc:"Prevent the worst",features:["3 leak sensors","Automatic water shutoff valve","2 door sensors","1 temp sensor (crawlspace)","Instant alerts to your phone","One-time fee - no subscription"]},
  {name:"Landlord Shield",price:"$899",badge:"Best Value",desc:"Full property awareness",features:["Everything in Guardian","5 leak sensors (full coverage)","2 window sensors","1 motion sensor","2 humidity sensors","Smart plug (crawlspace heater)","Power loss detection"]},
  {name:"Estate Protector",price:"$1,299",badge:"Total Protection",desc:"Nothing gets past this",features:["Everything in Landlord Shield","Smart smoke detector","UPS backup (works during outages)","12+ devices total","Full property layout","Remote access via secure tunnel"]},
]
const elder = [
  {name:"Safe Nights Essentials",price:"$1,499",badge:"Start Here",desc:"Perfect for getting started",features:["Hub computer + Zigbee dongle","2 smart plugs (mesh range)","3 door/window sensors","1 motion sensor","Phone alerts to entire family","One-time fee - no subscription"]},
  {name:"Complete Home Safety",price:"$2,999",badge:"Most Popular",desc:"Full coverage + fall detection",features:["Everything in Essentials","1 fall/presence sensor","2 additional door sensors","1 water leak sensor","UPS battery backup","Remote dashboard access"]},
  {name:"Total Peace of Mind",price:"$3,999",badge:"Maximum Protection",desc:"Nothing gets missed",features:["Everything in Complete","2 fall/presence sensors","2 water leak sensors","2 temp/humidity sensors","1 smoke detector","Medication cabinet monitoring","Wellness activity tracking"]},
]
const family = [
  {name:"Family Starter",price:"$499",badge:"New Parents",desc:"Home safety for growing families",features:["Hub computer + setup","2 door/window sensors","1 motion sensor","1 water leak sensor","Phone alerts  whole family","Aqara camera recommended for optimal monitoring"]},
  {name:"Family Shield",price:"$799",badge:"Full Coverage",desc:"Protection room by room",features:["Everything in Starter","4 door/window sensors","2 motion sensors","Smoke detector integration","Temp monitoring (nursery)","No cloud  100% private"]},
]
function PkgCard({p}:{p:typeof landlord[0]}) {
  return (
    <div className="bg-white rounded-2xl border-2 border-slate-100 overflow-hidden hover:border-[#f59e0b] hover:shadow-xl transition flex flex-col">
      <div className="bg-[#1a2744] p-6 text-white text-center">
        <div className="inline-block bg-[#f59e0b] text-[#1a2744] text-xs font-extrabold px-3 py-1 rounded-full mb-3">{p.badge}</div>
        <div className="font-extrabold text-xl mb-1">{p.name}</div>
        <div className="text-slate-400 text-sm mb-3">{p.desc}</div>
        <div className="text-4xl font-black text-[#f59e0b]">{p.price}</div>
        <div className="text-slate-400 text-xs mt-1">one-time installed</div>
      </div>
      <div className="p-6 flex-1">
        <ul className="space-y-3">
          {p.features.map(f=>(
            <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
              <span className="text-green-500 font-bold mt-0.5"></span>{f}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 pb-6">
        <a href="#contact" className="block w-full bg-[#f59e0b] text-[#1a2744] font-extrabold text-center py-3 rounded-xl hover:bg-yellow-400 transition">Get This Package</a>
      </div>
    </div>
  )
}
export default function Packages() {
  return (
    <section id="packages" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#1a2744] text-center mb-4">Protection Packages</h2>
        <p className="text-center text-slate-500 mb-4">One-time installation. No monthly fees. Yours forever.</p>
        <p className="text-center text-[#f59e0b] font-bold mb-16"> 50% deposit secures your install date  Balance due at completion</p>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl"></span>
            <div>
              <h3 className="text-2xl font-extrabold text-[#1a2744]">Landlord & Property Protection</h3>
              <p className="text-slate-500 text-sm">Protect your investment before damage happens</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {landlord.map(p=><PkgCard key={p.name} p={p}/>)}
          </div>
          <div className="mt-6 bg-amber-50 border border-[#f59e0b] rounded-xl p-4 text-sm text-amber-800 text-center font-semibold">
             Multi-property discounts available: 2-4 units 10% off  5-9 units 15% off  10+ units 20% + custom contract
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl"></span>
            <div>
              <h3 className="text-2xl font-extrabold text-[#1a2744]">Elder Safety Monitoring</h3>
              <p className="text-slate-500 text-sm">Independence for them. Peace of mind for you.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {elder.map(p=><PkgCard key={p.name} p={p}/>)}
          </div>
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800 text-center font-semibold">
             Add-ons available: Medication Management +$250  Wellness Monitoring +$175  Monthly Guardian Watch +$35/mo
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl"></span>
            <div>
              <h3 className="text-2xl font-extrabold text-[#1a2744]">Family & Baby Safety</h3>
              <p className="text-slate-500 text-sm">Whole-home protection for growing families  100% private, no cloud</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
            {family.map(p=><PkgCard key={p.name} p={p}/>)}
          </div>
        </div>

        <p className="text-center text-slate-400 text-sm mt-8"> Facility & memory care contracts available   Veteran discounts  ask when requesting quote  Custom quotes for unique properties</p>
      </div>
    </section>
  )
}


<div className="addons">
  <h3 className="text-xl font-semibold mb-4">Popular Add-Ons</h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

    <div className="addon">
      <h4> Baby & Nursery Monitor</h4>
      <p>Motion + sound alerts for nursery safety.</p>
      <span className="price">+</span>
    </div>

    <div className="addon">
      <h4> Flood Shield</h4>
      <p>Leak sensors + automatic water valve shutoff.</p>
      <span className="price">+</span>
    </div>

    <div className="addon">
      <h4> Safe Nights Lighting</h4>
      <p>Motion-activated pathway lighting from bed to bathroom.</p>
      <span className="price">+</span>
    </div>

  </div>
</div>