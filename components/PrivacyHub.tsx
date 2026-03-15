export default function PrivacyHub() {
  const tiers = [
    {
      name: "Privacy Hub",
      badge: "",
      price: "$179",
      color: "border-gray-700",
      badgeColor: "",
      features: [
        "Ad blocking on every device",
        "Malware & phishing protection",
        "DNS filtering",
        "Quick-start card included",
        "Real human support",
      ],
    },
    {
      name: "Family Hub",
      badge: "Most Popular",
      price: "$199",
      color: "border-blue-500/60",
      badgeColor: "bg-blue-600",
      features: [
        "Everything in Privacy Hub",
        "Parental controls",
        "Device schedules (no TikTok after 9 PM)",
        "Adult content blocked at router level",
        "Kids can't bypass it — ever",
      ],
    },
    {
      name: "Secure Hub",
      badge: "",
      price: "$229",
      color: "border-gray-700",
      badgeColor: "",
      features: [
        "Everything in Family Hub",
        "WireGuard VPN built in",
        "Whole-home private browsing",
        "No app on every device — network-wide",
        "Your ISP can't see what you're doing",
      ],
    },
    {
      name: "Smart Home Hub",
      badge: "Best Value",
      price: "$299",
      color: "border-green-500/60",
      badgeColor: "bg-green-600",
      features: [
        "Everything in Secure Hub",
        "Home Assistant included",
        "Zigbee device support",
        "Smart plugs, sensors, automations",
        "Elder safety monitoring ready",
      ],
    },
    {
      name: "Business Hub",
      badge: "",
      price: "$349",
      color: "border-gray-700",
      badgeColor: "",
      features: [
        "Everything in Smart Home Hub",
        "Device monitoring dashboard",
        "Employee device management",
        "Network traffic reporting",
        "Priority remote support",
      ],
    },
  ]

  const remoteServices = [
    {
      icon: "🛠️",
      name: "Remote Setup Guarantee",
      desc: "Can't figure out the router step? We log in remotely and handle it for you. Guaranteed to work before we disconnect.",
      price: "$49",
      tag: "Most Requested",
    },
    {
      icon: "🔒",
      name: "VPN Activation",
      desc: "We remotely activate WireGuard and send you a QR code. Scan it — your whole home browses privately.",
      price: "$39",
      tag: "",
    },
    {
      icon: "👨‍👩‍👧",
      name: "Parental Controls Setup",
      desc: "We configure schedules and content filters for each device. TikTok off at 9 PM. YouTube off during school hours. You pick the rules.",
      price: "$29",
      tag: "",
    },
    {
      icon: "🛡️",
      name: "IoT Device Isolation",
      desc: "Your smart TVs, cameras, and Alexa get their own locked-down network. If one gets hacked, it can't touch your laptops or phones.",
      price: "$49",
      tag: "Highly Recommended",
    },
    {
      icon: "📱",
      name: "Add a Device",
      desc: "New phone? New tablet? We log in and make sure it's fully protected. Takes us 5 minutes.",
      price: "$15",
      tag: "",
    },
    {
      icon: "🔧",
      name: "Annual Tune-Up",
      desc: "Once a year we log in, update everything, optimize your blocklists, and make sure it's running clean. Set it and forget it.",
      price: "$29/yr",
      tag: "",
    },
  ]

  const monthlyServices = [
    {
      icon: "📊",
      name: "Guardian Report",
      desc: "Monthly email showing every threat blocked, every ad killed, every suspicious request stopped. See exactly what your hub is protecting you from.",
      price: "$9/mo",
    },
    {
      icon: "🔭",
      name: "Guardian Watch",
      desc: "We monitor your hub 24/7. If it goes offline or something's wrong, we fix it before you even notice. Peace of mind, hands-free.",
      price: "$19/mo",
    },
  ]

  return (
    <section id="guardianhub" className="bg-gray-950 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
            GuardianHub — Ships Nationwide
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            One Device.<br className="hidden md:block" /> Every Device Protected.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Plug it into your router. Every phone, TV, tablet, and smart device on your network
            is protected instantly — no apps, no subscriptions, no IT degree required.
          </p>
        </div>

        {/* Product Tiers */}
        <h3 className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
          Choose Your Hub
        </h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-gray-900 border ${tier.color} rounded-2xl p-6 flex flex-col`}
            >
              {tier.badge && (
                <span className={`absolute -top-3 left-1/2 -translate-x-1/2 ${tier.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap`}>
                  {tier.badge}
                </span>
              )}
              <h4 className="font-bold text-white text-lg mb-1">{tier.name}</h4>
              <div className="mb-4">
                <p className="text-green-400 font-bold text-2xl">{tier.price}</p>
              </div>
              <ul className="space-y-2 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 block text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm"
              >
                Order Now →
              </a>
            </div>
          ))}
        </div>

        {/* Remote Services */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-block bg-green-600/20 border border-green-500/40 text-green-400 text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
              Remote Support Services
            </span>
            <h3 className="text-3xl font-bold mb-3">We Log In. We Handle It.</h3>
            <p className="text-gray-400 max-w-xl mx-auto">
              Already have a hub? Need something configured? We connect remotely — you don&apos;t touch a thing.
              Add any service at checkout or any time after.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {remoteServices.map((svc) => (
              <div key={svc.name} className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6">
                {svc.tag && (
                  <span className="absolute -top-3 left-6 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {svc.tag}
                  </span>
                )}
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">{svc.icon}</span>
                  <div>
                    <h4 className="font-bold text-white">{svc.name}</h4>
                    <p className="text-green-400 font-bold text-lg">{svc.price}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Plans */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="inline-block bg-purple-600/20 border border-purple-500/40 text-purple-400 text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
              Monthly Plans
            </span>
            <h3 className="text-3xl font-bold mb-3">Set It. Forget It. We Watch It.</h3>
            <p className="text-gray-400 max-w-xl mx-auto">
              Optional monthly plans for customers who want ongoing protection, reporting, and zero maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {monthlyServices.map((svc) => (
              <div key={svc.name} className="bg-gray-900 border border-purple-500/30 rounded-2xl p-7 text-center">
                <div className="text-4xl mb-3">{svc.icon}</div>
                <h4 className="font-bold text-white text-xl mb-1">{svc.name}</h4>
                <p className="text-purple-400 font-bold text-2xl mb-3">{svc.price}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ships nationwide */}
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-7 text-center">
            <div className="text-4xl mb-3">📦</div>
            <h3 className="text-xl font-bold mb-2">Ships Nationwide</h3>
            <p className="text-gray-400 text-sm mb-4">
              Plug in, follow the one-page guide, done in under 10 minutes.
              If you get stuck — we remote in and fix it for you.
            </p>
            <p className="text-green-400 font-bold text-2xl mb-4">Starting at $179</p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-xl transition-colors w-full"
            >
              Order Now →
            </a>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm">
          Ships within 2 business days · Fully tested before it leaves · Real human support · 704-239-7532
        </p>

      </div>
    </section>
  )
}
