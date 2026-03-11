cd $HOME\getnotified

$heroPath = "components\Hero.tsx"

$hero = @"
"use client"

export default function Hero() {
  return (
    <section className="relative bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Stop Water Damage <span className="text-cyan-400">Before It Starts</span>
        </h1>

        <p className="mt-6 text-lg text-slate-300 max-w-2xl">
          Most homeowners discover leaks after thousands in damage has already occurred.
          Our systems notify you instantly and can automatically shut off water before
          a small leak becomes a disaster.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-4 text-sm">

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <p className="font-semibold text-red-400">$11,000+</p>
            <p className="text-slate-400">Average water damage claim</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <p className="font-semibold text-red-400">24/7</p>
            <p className="text-slate-400">Leaks often happen when nobody is home</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <p className="font-semibold text-red-400">Minutes</p>
            <p className="text-slate-400">Is all it takes to flood a home</p>
          </div>

        </div>

        <div className="mt-10 bg-slate-900 border border-slate-800 rounded-xl p-6 max-w-2xl">

          <h2 className="font-semibold text-lg text-cyan-400">
            The Solution
          </h2>

          <ul className="mt-4 space-y-2 text-slate-300">
            <li>✓ Instant phone notifications</li>
            <li>✓ Automatic water shutoff</li>
            <li>✓ Door & window notifications</li>
            <li>✓ Smoke notifications</li>
            <li>✓ Temperature notifications</li>
            <li>✓ No surveillance cameras</li>
            <li>✓ No monthly monitoring fees</li>
          </ul>

        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">

          <a
            href="#contact"
            className="px-8 py-4 rounded-lg bg-cyan-500 text-black font-semibold"
          >
            Get A Free Install Quote
          </a>

          <a
            href="#packages"
            className="px-8 py-4 rounded-lg border border-slate-700"
          >
            See Packages
          </a>

        </div>

        <p className="mt-6 text-sm text-slate-500">
          Safety without surveillance • Local install • Veteran discount available
        </p>

      </div>
    </section>
  )
}
"@

Set-Content -Path $heroPath -Value $hero -Encoding UTF8

git add .
git commit -m "Hero section upgrade"
git push

Start-Process "https://vercel.com/tompeezy/getnotified"

Write-Host "Deployment pushed. Vercel building preview."