cd $HOME\getnotified

$heroPath = "components\Hero.tsx"

$hero = @'
"use client"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_left,rgba(59,130,246,0.10),transparent_22%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">

        <div className="max-w-4xl">
          <div className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-300">
            Automatic alerts. Automatic shutoff. No surveillance.
          </div>

          <h1 className="max-w-5xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Stop Water Damage{" "}
            <span className="text-cyan-400">Before It Starts</span>
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300 md:text-xl">
            Most homeowners discover leaks after thousands in damage has already occurred.
            Our systems notify you instantly and can automatically shut off water before
            a small leak becomes a disaster.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-red-400/20 bg-slate-900/80 p-6 shadow-[0_0_30px_rgba(239,68,68,0.08)]">
            <div className="text-3xl font-extrabold text-red-400">$11,000+</div>
            <div className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">Average claim</div>
            <div className="mt-3 text-base text-slate-200">Average water damage claim</div>
          </div>

          <div className="rounded-2xl border border-red-400/20 bg-slate-900/80 p-6 shadow-[0_0_30px_rgba(239,68,68,0.08)]">
            <div className="text-3xl font-extrabold text-red-400">24/7</div>
            <div className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">Always possible</div>
            <div className="mt-3 text-base text-slate-200">Leaks often happen when nobody is home</div>
          </div>

          <div className="rounded-2xl border border-red-400/20 bg-slate-900/80 p-6 shadow-[0_0_30px_rgba(239,68,68,0.08)]">
            <div className="text-3xl font-extrabold text-red-400">Minutes</div>
            <div className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">Damage starts fast</div>
            <div className="mt-3 text-base text-slate-200">Is all it takes to flood a home</div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/85 p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-bold text-cyan-400">
                What You Get
              </h2>
              <div className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Built to prevent damage
              </div>
            </div>

            <ul className="mt-6 grid gap-x-8 gap-y-3 text-base text-slate-100 md:grid-cols-2">
              <li>• Instant phone notifications</li>
              <li>• Automatic water shutoff</li>
              <li>• Water leak notifications</li>
              <li>• Door & window notifications</li>
              <li>• Smoke notifications</li>
              <li>• Temperature notifications</li>
              <li>• No surveillance cameras</li>
              <li>• No monthly monitoring fees</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/85 p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Why people choose Get Notified
            </div>

            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="text-base font-semibold text-white">Know fast</div>
                <div className="mt-1 text-sm text-slate-300">
                  Get notified the moment something changes.
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="text-base font-semibold text-white">Act fast</div>
                <div className="mt-1 text-sm text-slate-300">
                  Automatic shutoff can stop damage before it spreads.
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="text-base font-semibold text-white">Stay private</div>
                <div className="mt-1 text-sm text-slate-300">
                  Safety without surveillance and no monthly monitoring fees.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-8 py-4 text-base font-bold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.25)] transition hover:bg-cyan-400"
          >
            Get A Free Install Quote
          </a>

          <a
            href="#packages"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/70 px-8 py-4 text-base font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
          >
            See Packages
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-400">
          <span>Safety without surveillance</span>
          <span>•</span>
          <span>Local install</span>
          <span>•</span>
          <span>Veteran discount available</span>
        </div>

      </div>
    </section>
  )
}
'@

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText((Join-Path (Get-Location) $heroPath), $hero, $utf8NoBom)

git add .
git commit -m "Make hero section pop"
git push

Start-Process "https://vercel.com/tompeezys-projects"
Start-Process "https://getnotifiedllc.com"