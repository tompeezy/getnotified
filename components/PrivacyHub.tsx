export default function PrivacyHub() {
  const subscriptions = [
    { name: "YouTube Premium", monthly: 14, annual: 168, icon: "▶️" },
    { name: "Hulu No Ads", monthly: 18, annual: 216, icon: "📺" },
    { name: "VPN Service", monthly: 8, annual: 96, icon: "🔐" },
    { name: "Parental Control App", monthly: 5, annual: 60, icon: "👨‍👩‍👧" },
  ]
  const totalAnnual = subscriptions.reduce((s, i) => s + i.annual, 0)

  return (
    <section className="bg-gray-950 text-white py-20 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
            Privacy Hub — Ships Nationwide
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Stop Paying Monthly.<br className="hidden md:block" /> Pay Once. Done.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            One device plugs into your router and blocks ads on every screen in your house —
            Smart TVs, phones, tablets, gaming consoles — all of it. No subscriptions. Ever.
          </p>
        </div>

        {/* Math Section */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-10 border border-gray-800">
          <h3 className="text-sm font-bold text-gray-300 mb-6 text-center uppercase tracking-widest">
            What You&apos;re Paying Right Now
          </h3>

          <div className="space-y-3 mb-8">
            {subscriptions.map((item) => (
              <div key={item.name} className="flex items-center justify-between py-3 border-b border-gray-800">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-gray-300">{item.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 text-sm">${item.monthly}/mo</span>
                  <span className="text-red-400 font-bold ml-4">${item.annual}/yr</span>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between pt-4">
              <span className="text-white font-bold text-lg">Your yearly total</span>
              <span className="text-red-400 font-bold text-2xl">${totalAnnual}/yr</span>
            </div>
          </div>

          {/* VS Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-700" />
            <span className="text-gray-500 font-bold text-sm uppercase tracking-widest">vs.</span>
            <div className="flex-1 h-px bg-gray-700" />
          </div>

          {/* Privacy Hub Price */}
          <div className="flex items-center justify-between py-4 bg-blue-600/10 border border-blue-500/30 rounded-xl px-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔒</span>
              <div>
                <p className="text-white font-bold text-lg">Privacy Hub Elite</p>
                <p className="text-blue-400 text-sm">One-time. Covers every device. Forever.</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-sm line-through">$399</p>
              <p className="text-green-400 font-bold text-2xl">$319</p>
              <p className="text-gray-500 text-xs">code: NOTIFIED</p>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-6 text-sm">
            At ${totalAnnual}/year in subscriptions, the Privacy Hub pays for itself in{" "}
            <span className="text-green-400 font-bold">under 8 months</span>.
            {" "}Then it&apos;s pure savings — every year after.
          </p>
        </div>

        {/* What It Does */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { icon: "🚫", title: "Kills Ads Everywhere", desc: "Smart TVs, Roku, Fire Stick, phones, tablets, gaming consoles. Every device. All at once." },
            { icon: "🔐", title: "VPN Built In", desc: "Your entire home browses privately. No app on every device — it's network-wide." },
            { icon: "👨‍👩‍👧", title: "Parental Controls", desc: "Adult content blocked at the router. No app to install. No way for kids to bypass it." },
            { icon: "🛡️", title: "Smart Home Security", desc: "Your Ring, Alexa, and smart devices are isolated. If one gets hacked, it can't touch the rest." },
            { icon: "⚡", title: "Faster Internet", desc: "Less garbage loading means pages and apps load measurably faster." },
            { icon: "🏠", title: "Your Data Stays Home", desc: "No cloud. No company servers. No one watching. Runs in your house, on your device, period." },
          ].map((f) => (
            <div key={f.title} className="flex gap-4 p-5 bg-gray-900 rounded-xl border border-gray-800">
              <span className="text-2xl mt-1">{f.icon}</span>
              <div>
                <h4 className="font-bold text-white mb-1">{f.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Ships or installs */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-7 text-center">
            <div className="text-4xl mb-3">📦</div>
            <h3 className="text-xl font-bold mb-2">Ships Nationwide</h3>
            <p className="text-gray-400 text-sm mb-4">
              Plug in, follow the one-page guide, and you&apos;re done in under 10 minutes.
              If you get stuck — we remote in and handle it for you.
            </p>
            <p className="text-green-400 font-bold text-2xl mb-1">$319</p>
            <p className="text-gray-500 text-xs mb-4">with code NOTIFIED (reg. $399)</p>
            <a
              href="https://etsy.com/shop/TompoAI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-xl transition-colors w-full"
            >
              Order on Etsy →
            </a>
          </div>

          <div className="bg-gray-900 border border-blue-500/40 rounded-2xl p-7 text-center relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
              Local Install
            </span>
            <div className="text-4xl mb-3">🔧</div>
            <h3 className="text-xl font-bold mb-2">Installed by Us</h3>
            <p className="text-gray-400 text-sm mb-4">
              We come to you in Rowan County. Full setup, every device connected,
              fully tested before we leave. You don&apos;t touch a thing.
            </p>
            <p className="text-green-400 font-bold text-2xl mb-1">$449</p>
            <p className="text-gray-500 text-xs mb-4">parts + labor, one-time</p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-xl transition-colors w-full"
            >
              Request Install →
            </a>
          </div>
        </div>

        {/* Bottom trust line */}
        <p className="text-center text-gray-500 text-sm">
          Ships within 2 business days · Fully tested before it leaves · Real human support included
        </p>

      </div>
    </section>
  )
}
