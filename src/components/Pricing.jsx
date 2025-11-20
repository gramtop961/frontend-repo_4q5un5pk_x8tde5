import React from 'react'

export default function Pricing() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">Transparente Preise</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-slate-800/50 p-6">
            <h3 className="text-xl font-medium text-white">Stundenpreis</h3>
            <p className="mt-2 text-4xl font-semibold text-white">€ 49 <span className="text-base text-slate-400 font-normal">pro Stunde</span></p>
            <p className="mt-3 text-slate-300">Ideal für kleine Keller und Teilreinigungen.</p>
          </div>
          <div className="rounded-2xl border border-emerald-500/40 bg-slate-800/60 p-6 ring-1 ring-emerald-500/30">
            <h3 className="text-xl font-medium text-white">Fixpreis Pakete</h3>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>• Kleiner Keller (bis 10 m²): ab € 149</li>
              <li>• Mittlerer Keller (bis 20 m²): ab € 249</li>
              <li>• Großer Keller (bis 30 m²): ab € 349</li>
            </ul>
            <p className="mt-3 text-sm text-slate-400">Besichtigung kostenfrei – maßgeschneidertes Angebot inklusive.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-800/50 p-6">
            <h3 className="text-xl font-medium text-white">Optionale Zusatzkosten</h3>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>• Sperrmüll: ab € 40 pro m³</li>
              <li>• Transport/Tragen: ab € 20 pro Mannstunde</li>
              <li>• Entsorgung (Sondermüll): individuell</li>
            </ul>
            <p className="mt-3 text-sm text-slate-400">Alle Preise inkl. USt. Transparente Abrechnung ohne Überraschungen.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
