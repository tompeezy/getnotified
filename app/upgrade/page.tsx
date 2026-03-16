export const metadata = {
  title: "GuardianHub Add-Ons | Get Notified LLC",
  description: "Optional monthly add-ons for your GuardianHub device.",
}

export default function UpgradePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-2xl mb-6">
            <span className="text-2xl">🛡️</span>
            <div className="text-left">
              <div className="font-black text-lg">GuardianHub</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Optional Add-Ons</div>
            </div>
          </div>
          <h1 className="text-3xl font-black text-gray-900 mb-3">Upgrade Your Protection</h1>
          <p className="text-gray-500 text-lg">Your hub works great on its own. These make it even better.</p>
        </div>

        {/* Add-ons */}
        <div className="space-y-4 mb-10">

          <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-green-400">
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="text-xs font-black text-green-600 uppercase tracking-wider mb-1">Most Popular</div>
                <h2 className="font-black text-gray-900 text-xl">🎙️ Study Upgrade</h2>
              </div>
              <div className="text-right">
                <div className="font-black text-2xl text-gray-900">$4.99</div>
                <div className="text-xs text-gray-400">/month</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">Record any lecture. We transcribe it word-for-word, organize by subject, pull out key terms and definitions, and deliver clean study notes every week. Less than a coffee.</p>
            <div className="space-y-1 text-sm text-gray-600">
              <div>✅ Full lecture transcription</div>
              <div>✅ Organized by subject & date</div>
              <div>✅ Key terms highlighted</div>
              <div>✅ Clean study notes delivered weekly</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h2 className="font-black text-gray-900 text-xl">🔄 Priority Support</h2>
              </div>
              <div className="text-right">
                <div className="font-black text-2xl text-gray-900">$2.99</div>
                <div className="text-xs text-gray-400">/month</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">Something stops working? We remote in same day and fix it. No waiting, no troubleshooting on your end.</p>
            <div className="space-y-1 text-sm text-gray-600">
              <div>✅ Same-day remote support</div>
              <div>✅ We log in and fix it for you</div>
              <div>✅ Cancel anytime</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h2 className="font-black text-gray-900 text-xl">💾 Backup Monitoring</h2>
              </div>
              <div className="text-right">
                <div className="font-black text-2xl text-gray-900">$1.99</div>
                <div className="text-xs text-gray-400">/month</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">We monitor your private cloud backups daily and alert you if anything needs attention. Set it and forget it.</p>
            <div className="space-y-1 text-sm text-gray-600">
              <div>✅ Daily backup health checks</div>
              <div>✅ Instant alerts if something's wrong</div>
              <div>✅ Cancel anytime</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h2 className="font-black text-gray-900 text-xl">🏠 Family Upgrade</h2>
              </div>
              <div className="text-right">
                <div className="font-black text-2xl text-gray-900">$299</div>
                <div className="text-xs text-gray-400">one time</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">Currently have the single-user GuardianHub? Upgrade to the Family Hub — handles multiple users, more storage, more speed. Perfect for a full household.</p>
            <div className="space-y-1 text-sm text-gray-600">
              <div>✅ Handles whole household</div>
              <div>✅ More storage & speed</div>
              <div>✅ Same plug-and-play setup</div>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="bg-gray-900 rounded-2xl p-6 text-white text-center mb-8">
          <div className="font-black text-xl mb-2">Ready to add on?</div>
          <p className="text-gray-400 text-sm mb-4">Text us and we'll get you set up in minutes.</p>
          <a href="sms:7042397532?body=Hey, I want to add on to my GuardianHub" className="inline-block bg-green-500 text-white px-8 py-3 rounded-xl font-black text-lg">
            📱 Text Thomas — 704-239-7532
          </a>
        </div>

        <div className="text-center text-xs text-gray-400">
          Get Notified LLC · Salisbury, NC · Cancel any add-on anytime, no questions asked.
        </div>

      </div>
    </main>
  )
}
