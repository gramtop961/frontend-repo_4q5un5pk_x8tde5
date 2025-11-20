import React from 'react'

export default function WhyUs() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Darum wir</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {[
            { t: 'Zuverlässigkeit', d: 'Pünktlich, ordentlich und mit fixem Ansprechpartner.' },
            { t: 'Schnelle Termine', d: 'Kurzfristige Einsätze möglich – auch am Abend oder Samstag.' },
            { t: 'Saubere Übergabe', d: 'Besenrein, auf Wunsch mit Fotodokumentation.' },
            { t: 'Komplettservice', d: 'Reinigung, Demontage, Abtransport und Entsorgung aus einer Hand.' },
          ].map((i) => (
            <div key={i.t} className="rounded-xl border border-white/10 bg-slate-800/50 p-6">
              <h3 className="text-white font-medium">{i.t}</h3>
              <p className="mt-3 text-slate-300 text-sm">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
