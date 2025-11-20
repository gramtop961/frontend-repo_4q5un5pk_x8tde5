import React from 'react'

export default function Contact() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-3xl font-semibold text-white">Kontakt</h2>
              <p className="mt-3 text-slate-300">Wir sind in Wien und Umgebung für Sie da.</p>
              <p className="mt-1 text-slate-400 text-sm">Servicegebiet: Wien, Niederösterreich (Grenzgebiet), Burgenland (Nord)</p>
            </div>
            <div className="space-y-3">
              <a href="tel:+436601234567" className="block px-4 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition">Telefon: +43 660 123 4567</a>
              <a href="https://wa.me/436601234567" target="_blank" rel="noreferrer" className="block px-4 py-3 rounded-lg bg-emerald-500 text-white hover:bg-emerald-400 transition">WhatsApp schreiben</a>
              <a href="mailto:kontakt@kellerpro.at" className="block px-4 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition">E‑Mail: kontakt@kellerpro.at</a>
            </div>
            <div className="text-slate-300 text-sm">
              <p><strong>Öffnungszeiten:</strong> Mo–Fr 8–18 Uhr</p>
              <p className="mt-2"><strong>Express:</strong> nach Verfügbarkeit am selben Tag</p>
              <p className="mt-2"><strong>Rechnungsstellung:</strong> Privat & Gewerbe, inkl. USt</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
