import React from 'react'

const steps = [
  { title: 'Anfrage', text: 'Kontakt per Telefon, WhatsApp oder E‑Mail – wir klären kurz die Details.' },
  { title: 'Besichtigung', text: 'Kostenlose Vor-Ort-Besichtigung in Wien & Umgebung.' },
  { title: 'Angebot', text: 'Sie erhalten ein faires Fixpreis- oder Stundenangebot.' },
  { title: 'Reinigung', text: 'Gründliche Kellerreinigung, optional inkl. Entsorgung.' },
  { title: 'Übergabe', text: 'Besenreine, dokumentierte Übergabe – Sie prüfen und zahlen erst dann.' },
]

export default function HowItWorks() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">So läuft es ab</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-slate-800/50 p-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold">{i + 1}</span>
                <h3 className="text-white font-medium">{s.title}</h3>
              </div>
              <p className="mt-3 text-slate-300 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
