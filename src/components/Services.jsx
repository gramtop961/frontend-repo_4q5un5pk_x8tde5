import React from 'react'

export default function Services() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Unsere Kellerreinigung – das ist inklusive</h2>
          <p className="mt-3 text-slate-300 max-w-3xl">Eine gründliche Reinigung, die genau zu Ihrem Keller passt. Wir arbeiten effizient, sorgfältig und diskret – ideal für Privatpersonen, Hausverwaltungen und Unternehmen.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-slate-800/50 p-6">
            <h3 className="text-xl font-medium text-white">Gründliche Reinigung</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>• Entfernung von Staub, Spinnweben und Schmutz</li>
              <li>• Fegen, Nassreinigung bei Bedarf</li>
              <li>• Regale, Oberflächen und Ecken</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-800/50 p-6">
            <h3 className="text-xl font-medium text-white">Entsorgung & Transport</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>• Sperrmüll-Abbau und -Entsorgung</li>
              <li>• Transport zum Wertstoffhof</li>
              <li>• Umweltgerechte Entsorgung</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-800/50 p-6">
            <h3 className="text-xl font-medium text-white">Zusatzleistungen</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>• Schimmel- und Feuchtigkeits-Hinweise</li>
              <li>• Geruchsreduktion (Lüften/Neutralisation)</li>
              <li>• Kleine Demontagearbeiten</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-white/10 bg-slate-800/40 p-6">
            <h3 className="text-lg font-medium text-white">Warum Kellerreinigung in Österreich wichtig ist</h3>
            <p className="mt-3 text-slate-300">Keller sind oft feucht und staubig. Durch regelmäßige Reinigung beugen Sie Gerüchen, Schädlingsbefall und Materialschäden vor. Besonders in Wien und Umgebung mit Altbauten ist eine fachgerechte Kellerpflege entscheidend.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-800/40 p-6">
            <h3 className="text-lg font-medium text-white">Typische Situationen</h3>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>• Nach Umzug, Sanierung oder Wasserschaden</li>
              <li>• Vor Wohnungsübergabe oder Vermietung</li>
              <li>• Bei Entrümpelung, Erbschaft oder Hausräumung</li>
              <li>• Als regelmäßige Wartung für Hausverwaltungen</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
