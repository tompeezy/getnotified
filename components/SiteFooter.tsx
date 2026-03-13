export default function SiteFooter() {
  return (
    <footer className="bg-[#1a2744] text-slate-400 py-12 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="text-white font-extrabold text-xl mb-2">Get <span className="text-[#f59e0b]">Notified</span> LLC</div>
          <div className="text-sm text-slate-400 mb-4 leading-relaxed">Safety Without Surveillance.<br/>Local installs in Rowan County, NC.<br/>Ships nationwide.</div>
          <div className="text-sm font-semibold text-white">📞 704-239-7532</div>
          <div className="text-sm text-slate-400">gettompoai@gmail.com</div>
          <div className="text-xs text-slate-600 mt-3">NC LLC · EIN registered · Fully insured</div>
        </div>
        <div>
          <div className="text-white font-bold mb-3 text-sm uppercase tracking-widest">Products</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#packages" className="hover:text-[#f59e0b] transition">Elder Safety</a></li>
            <li><a href="#packages" className="hover:text-[#f59e0b] transition">Property Protection</a></li>
            <li><a href="#packages" className="hover:text-[#f59e0b] transition">Family Safety</a></li>
            <li><a href="#packages" className="hover:text-[#f59e0b] transition">Privacy Hub</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-bold mb-3 text-sm uppercase tracking-widest">Tools</div>
          <ul className="space-y-2 text-sm">
            <li><a href="https://tompoai.shop/tools/estimator.html" target="_blank" className="hover:text-[#f59e0b] transition">Quote Estimator</a></li>
            <li><a href="#contact" className="hover:text-[#f59e0b] transition">Get a Free Quote</a></li>
            <li><a href="#how-it-works" className="hover:text-[#f59e0b] transition">How It Works</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-slate-700 text-xs text-slate-600 flex flex-wrap justify-between gap-2">
        <span>© 2026 Get Notified LLC · Salisbury, NC</span>
        <span>No cameras. No microphones. No cloud. Your data stays home.</span>
      </div>
    </footer>
  )
}
