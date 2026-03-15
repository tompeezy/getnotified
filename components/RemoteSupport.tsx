export default function RemoteSupport() {
  const trustPoints = [
    {
      icon: "✅",
      title: "You control access",
      desc: "Remote support is only possible through a secure, encrypted connection built directly into your GuardianHub. We cannot connect without it.",
    },
    {
      icon: "✅",
      title: "We can only reach your hub",
      desc: "Not your other devices. Not your files. Not your browsing history. We access the GuardianHub and nothing else.",
    },
    {
      icon: "✅",
      title: "You can cut us off anytime",
      desc: "One button in your hub settings revokes our access permanently. You are always in control.",
    },
    {
      icon: "✅",
      title: "You get a text when we connect",
      desc: "The moment we log in, you get a notification. The moment we disconnect, you get another one. No surprises. Ever.",
    },
    {
      icon: "✅",
      title: "Every session is logged",
      desc: "Every remote session is recorded with a timestamp and a summary of what was changed. Full transparency, always.",
    },
    {
      icon: "✅",
      title: "We are a local NC business",
      desc: "Get Notified LLC is registered in North Carolina. Our name, number, and LLC are public record. We built this for our own parents first.",
    },
  ]

  return (
    <section id="remote-support" className="bg-gray-900 text-white py-20 px-4 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-green-600/20 border border-green-500/40 text-green-400 text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
            Transparency First
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            How Remote Support Works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We understand that letting someone into your network remotely sounds scary.
            Here&apos;s exactly how it works — no technical jargon, no fine print.
          </p>
        </div>

        {/* Trust Points */}
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {trustPoints.map((point) => (
            <div key={point.title} className="flex gap-4 bg-gray-950 border border-gray-800 rounded-2xl p-6">
              <span className="text-2xl shrink-0 mt-0.5">{point.icon}</span>
              <div>
                <h4 className="font-bold text-white mb-1">{point.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* The Human Line */}
        <div className="bg-blue-600/10 border border-blue-500/30 rounded-2xl p-8 text-center">
          <p className="text-2xl font-bold text-white mb-3">
            We are not hackers.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            We&apos;re a small business in Salisbury, NC. We built this system for our own aging parents
            because we wanted them safe without putting cameras in their home.
            That&apos;s still what we do — and remote support is just us making sure
            the thing we sold you actually works.
          </p>
          <p className="text-gray-400 text-sm">
            Get Notified LLC · NC Entity ID: 24665196 · 704-239-7532 · getnotifiedllc.com
          </p>
        </div>

      </div>
    </section>
  )
}
