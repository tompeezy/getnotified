"use client"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_left,rgba(59,130,246,0.10),transparent_22%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">

        <div className="max-w-4xl">

          <div className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-300">
            Local system • No monthly monitoring • Works even if Wi-Fi drops
          </div>

          <h1 className="max-w-5xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Stop Water Damage <span className="text-cyan-400">Before It Starts</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300 md:text-xl">
            Most water damage happens when nobody is home to see it.
          </p>

          <p className="mt-3 max-w-3xl text-lg text-slate-300">
            A small leak can run for hours before anyone notices. Your system detects leaks instantly
            and can automatically shut off the water before serious damage happens.
          </p>

        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">

          <div className="rounded-2xl border border-red-400/20 bg-slate-900/80 p-6">
            <div className="text-3xl font-extrabold text-red-400">$11,000+</div>
            <div className="mt-2 text-sm text-slate-400 uppercase tracking-wider">Average claim</div>
            <div className="mt-3 text-slate-200">Average water damage claim</div>
          </div>

          <div className="rounded-2xl border border-red-400/20 bg-slate-900/80 p-6">
            <div className="text-3xl font-extrabold text-red-400">24/7</div>
            <div className="mt-2 text-sm text-slate-400 uppercase tracking-wider">Risk window</div>
            <div className="mt-3 text-slate-200">Leaks often happen when nobody is home</div>
          </div>

          <div className="rounded-2xl border border-red-400/20 bg-slate-900/80 p-6">
            <div className="text-3xl font-extrabold text-red-400">Minutes</div>
            <div className="mt-2 text-sm text-slate-400 uppercase tracking-wider">Damage speed</div>
            <div className="mt-3 text-slate-200">Is all it takes to flood a home</div>
          </div>

        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">

          <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/85 p-6">
            <h2 className="text-2xl font-bold text-cyan-400">
              What Your System Does
            </h2>

            <ul className="mt-6 grid gap-x-8 gap-y-3 text-slate-100 md:grid-cols-2">

              <li>- Instant phone notifications</li>
              <li>- Automatic water shutoff</li>
              <li>- Water leak notifications</li>
              <li>- Door & window notifications</li>
              <li>- Smoke notifications</li>
              <li>- Temperature notifications</li>
              <li>- No surveillance cameras</li>
              <li>- No monthly monitoring fees</li>

            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/85 p-6">

            <div className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
              Why homeowners install this
            </div>

            <div className="mt-4 space-y-4">

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="font-semibold text-white">Know immediately</div>
                <div className="text-sm text-slate-300">
                  Get notified the moment something changes in the home.
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="font-semibold text-white">Stop damage early</div>
                <div className="text-sm text-slate-300">
                  Automatic shutoff can prevent thousands in damage.
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="font-semibold text-white">Works locally</div>
                <div className="text-sm text-slate-300">
                  Even if Wi-Fi drops, the system continues running in the home.
                </div>
              </div>

            </div>

          </div>

        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-8 py-4 font-bold text-slate-950"
          >
            Get A Free Install Quote
          </a>

          <a
            href="#packages"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-8 py-4"
          >
            See Packages
          </a>

        </div>

        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-400">
          <span>Safety without surveillance</span>
          <span>-</span>
          <span>Local install</span>
          <span>-</span>
          <span>Veteran discount available</span>
        </div>

      </div>
    </section>
  )
}