"use client"

export default function Hero() {
  return (
    <section className="relative bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">

        <h1 className="text-4xl font-bold md:text-6xl">
          Stop Water Damage <span className="text-cyan-400">Before It Starts</span>
        </h1>

        <p className="mt-6 text-lg text-slate-300 max-w-3xl">
          Most homeowners discover leaks after thousands in damage has already occurred.
          Our systems notify you instantly and can automatically shut off water before
          a small leak becomes a disaster.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="text-2xl font-bold text-red-400">$11,000+</div>
            <div className="text-sm text-slate-300 mt-2">
              Average water damage claim
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="text-2xl font-bold text-red-400">24/7</div>
            <div className="text-sm text-slate-300 mt-2">
              Leaks often happen when nobody is home
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="text-2xl font-bold text-red-400">Minutes</div>
            <div className="text-sm text-slate-300 mt-2">
              Is all it takes to flood a home
            </div>
          </div>

        </div>

        <div className="mt-10 bg-slate-900 border border-slate-800 rounded-xl p-8">

          <h2 className="text-xl font-semibold text-cyan-400">
            The Solution
          </h2>

          <ul className="mt-6 space-y-3 text-slate-200">

            <li>• Instant phone notifications</li>
            <li>• Automatic water shutoff</li>
            <li>• Door & window notifications</li>
            <li>• Smoke notifications</li>
            <li>• Temperature notifications</li>
            <li>• No surveillance cameras</li>
            <li>• No monthly monitoring fees</li>

          </ul>

        </div>

        <div className="mt-10 flex gap-4 flex-col sm:flex-row">

          <a href="#contact"
             className="bg-cyan-500 text-black px-8 py-4 rounded-xl font-semibold">
             Get A Free Install Quote
          </a>

          <a href="#packages"
             className="border border-slate-700 px-8 py-4 rounded-xl">
             See Packages
          </a>

        </div>

        <p className="mt-6 text-sm text-slate-400">
          Safety without surveillance • Local install • Veteran discount available
        </p>

      </div>
    </section>
  )
}
