export default function Footer() {
  return (
    <footer className="bg-[#1a2744] text-slate-400 py-10 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="text-2xl font-extrabold text-white mb-1">Get <span className="text-[#f59e0b]">Notified</span> LLC</div>
        <div className="text-sm mb-4">Safety Without Surveillance · Salisbury, NC</div>
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
          <a href="#packages" className="hover:text-[#f59e0b] transition">Packages</a>
          <a href="#contact" className="hover:text-[#f59e0b] transition">Get a Quote</a>
          <a href="tel:7042397532" className="hover:text-[#f59e0b] transition">704-239-7532</a>
          <a href="mailto:gettompoai@gmail.com" className="hover:text-[#f59e0b] transition">gettompoai@gmail.com</a>
        </div>
        <div className="text-xs text-slate-500">© 2026 Get Notified LLC · Thomas Whitlock · All rights reserved</div>
      </div>
    </footer>
  )
}
