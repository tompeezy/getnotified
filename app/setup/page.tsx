export const metadata = {
  title: "GuardianHub Setup Guide | Get Notified LLC",
  description: "Step-by-step setup guide for your GuardianHub device.",
}

export default function SetupPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-2xl mb-6">
            <span className="text-2xl">🛡️</span>
            <div className="text-left">
              <div className="font-black text-lg">GuardianHub</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Setup Guide</div>
            </div>
          </div>
          <h1 className="text-3xl font-black text-gray-900 mb-3">Let's Get You Protected</h1>
          <p className="text-gray-500 text-lg">Takes about 10 minutes. No tech experience needed.</p>
        </div>

        {/* Steps */}
        <div className="space-y-4 mb-10">

          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-900 text-green-400 rounded-full flex items-center justify-center font-black text-lg flex-shrink-0">1</div>
              <div>
                <h2 className="font-black text-gray-900 text-lg mb-1">Plug Into Your Router</h2>
                <p className="text-gray-600 text-sm leading-relaxed">Connect an ethernet cable from any open port on your router to the GuardianHub. Plug the power supply into the hub and then into the wall. Wait <strong>60 seconds</strong> for the green light to go solid.</p>
                <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
                  ⚠️ No open ports on your router? Text us — 704-239-7532. We'll help.
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-900 text-green-400 rounded-full flex items-center justify-center font-black text-lg flex-shrink-0">2</div>
              <div>
                <h2 className="font-black text-gray-900 text-lg mb-1">Find Your Router Settings</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">Open a browser and go to your router's settings page. Then set the <strong>Primary DNS</strong> to your GuardianHub's IP address (printed on your quick-start card).</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    { brand: "Netgear", url: "routerlogin.net" },
                    { brand: "TP-Link", url: "tplinkwifi.net" },
                    { brand: "ASUS", url: "router.asus.com" },
                    { brand: "Xfinity", url: "10.0.0.1" },
                    { brand: "AT&T", url: "192.168.1.254" },
                    { brand: "Linksys", url: "192.168.1.1" },
                  ].map(r => (
                    <div key={r.brand} className="bg-gray-50 rounded-lg p-2 flex justify-between items-center">
                      <span className="font-bold text-gray-800">{r.brand}</span>
                      <code className="text-xs text-gray-500 bg-white px-2 py-1 rounded border">{r.url}</code>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-900 text-green-400 rounded-full flex items-center justify-center font-black text-lg flex-shrink-0">3</div>
              <div>
                <h2 className="font-black text-gray-900 text-lg mb-1">Verify It's Working</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">Restart your device and open YouTube. Video ads should be gone. Open your Smart TV — banner ads gone.</p>
                <p className="text-gray-600 text-sm">View your live dashboard at: <code className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">http://guardianhub.local</code></p>
              </div>
            </div>
          </div>

        </div>

        {/* What you now have */}
        <div className="bg-gray-900 rounded-2xl p-6 text-white mb-8">
          <h2 className="font-black text-lg mb-4">You're now protected 🎉</h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              { icon: "🚫", label: "Ads blocked on every device" },
              { icon: "☁️", label: "Private cloud replaces Google/iCloud" },
              { icon: "🔐", label: "Built-in VPN encrypted connection" },
              { icon: "🕵️", label: "Trackers blocked network-wide" },
              { icon: "🛡️", label: "Malware & phishing blocked" },
              { icon: "🏠", label: "Your data stays in your home" },
            ].map(f => (
              <div key={f.label} className="flex items-start gap-2">
                <span>{f.icon}</span>
                <span className="text-gray-300 leading-tight">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Need help */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <div className="font-black text-gray-900">Need help?</div>
            <div className="text-sm text-gray-500">We remote in and handle it for you. Free.</div>
          </div>
          <a href="sms:7042397532" className="bg-gray-900 text-white px-5 py-3 rounded-xl font-bold text-sm">
            📱 Text Us
          </a>
        </div>

        <div className="text-center mt-8 text-xs text-gray-400">
          Get Notified LLC · Salisbury, NC · 704-239-7532
        </div>

      </div>
    </main>
  )
}
