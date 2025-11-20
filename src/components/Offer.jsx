import React from 'react'

export default function Offer() {
  return (
    <section className="bg-slate-900 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-600/10 to-teal-600/10 p-8 text-center">
          <p className="text-sm uppercase tracking-wider text-emerald-300">Winter / Neujahrs-Aktion</p>
          <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-white">10% Rabatt im Jänner – oder Gratis-Entsorgung von 1 m³ Sperrmüll</h3>
          <p className="mt-3 text-slate-300">Gültig für Buchungen bis 31.01. | Nur für Wien & Umgebung | Nicht kombinierbar</p>
        </div>
      </div>
    </section>
  )
}
