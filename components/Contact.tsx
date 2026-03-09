"use client"
export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#1a2744] text-center mb-4">Get a Free Quote</h2>
        <p className="text-center text-slate-500 mb-10">Tell us about your property and we'll put together a custom protection plan.</p>
        <form className="space-y-4" onSubmit={e=>e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-4">
            <input className="border-2 border-slate-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-[#f59e0b] text-sm" placeholder="Your Name" required/>
            <input className="border-2 border-slate-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-[#f59e0b] text-sm" placeholder="Phone Number" required/>
          </div>
          <input className="border-2 border-slate-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-[#f59e0b] text-sm" placeholder="Email Address"/>
          <select className="border-2 border-slate-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-[#f59e0b] text-sm text-slate-500">
            <option value="">Property Type</option>
            <option>Primary Residence</option>
            <option>Rental Property</option>
            <option>Vacant Home</option>
            <option>Multi-Unit</option>
            <option>Senior / Elder Care</option>
            <option>Commercial Facility</option>
          </select>
          <textarea className="border-2 border-slate-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-[#f59e0b] text-sm h-28 resize-none" placeholder="Tell us about your property or what you're trying to protect..."/>
          <div className="bg-amber-50 border-2 border-[#f59e0b] rounded-xl p-4 text-sm text-amber-800 font-semibold text-center">⚡ 50% deposit required to schedule install · Balance due at completion</div>
          <button type="submit" className="w-full bg-[#f59e0b] text-[#1a2744] font-extrabold py-4 rounded-xl text-lg hover:bg-yellow-400 transition">Request Protection Quote →</button>
        </form>
        <div className="mt-8 text-center text-slate-400 text-sm">
          <p>📞 <a href="tel:7042397532" className="text-[#1a2744] font-bold hover:text-[#f59e0b]">704-239-7532</a> &nbsp;·&nbsp; ✉️ <a href="mailto:gettompoai@gmail.com" className="text-[#1a2744] font-bold hover:text-[#f59e0b]">gettompoai@gmail.com</a></p>
          <p className="mt-1">Salisbury, NC · Rowan County & surrounding areas</p>
        </div>
      </div>
    </section>
  )
}
