import React from 'react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-medium ring-1 ring-emerald-500/30 mb-4">Professionelle Kellerreinigung in Österreich</span>
            <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
              Saubere, trockene und sichere Keller – zuverlässig gereinigt
            </h1>
            <p className="mt-5 text-slate-300 text-lg leading-relaxed">
              Wir entfernen Schmutz, Staub, Spinnweben und Gerüche, entsorgen auf Wunsch Sperrmüll und übergeben Ihren Keller besenrein. Schnell, transparent und fachgerecht.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="tel:+436601234567" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-500 text-white font-medium shadow-sm hover:bg-emerald-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.3 1.78.57 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.03a2 2 0 0 1 2.11-.45c.85.27 1.73.45 2.63.57A2 2 0 0 1 22 16.92z"/></svg>
                Anrufen: +43 660 123 4567
              </a>
              <a href="https://wa.me/436601234567" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/10 text-white font-medium ring-1 ring-white/20 hover:bg-white/20 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor"><path d="M19.11 17.36a4.82 4.82 0 0 1-2.26-.62c-.7-.38-1.49-.89-2.23-1.63-.74-.74-1.25-1.53-1.63-2.23a4.82 4.82 0 0 1-.62-2.26c0-.42.23-.81.57-1.04l1.09-.73c.33-.22.78-.17 1.05.1l.54.54c.29.29.45.68.45 1.09 0 .3-.08.6-.23.86l-.27.49c-.09.16-.08.36.04.5.41.51.9 1.06 1.41 1.56.5.51 1.05 1 1.56 1.41.14.12.34.13.5.04l.49-.27c.26-.15.56-.23.86-.23.41 0 .8.16 1.09.45l.54.54c.27.27.32.72.1 1.05l-.73 1.09c-.23.34-.62.57-1.04.57Z"/><path d="M16 4C9.38 4 4 9.38 4 16c0 2.14.57 4.16 1.56 5.9L4 28l6.2-1.56A11.85 11.85 0 0 0 16 28c6.62 0 12-5.38 12-12S22.62 4 16 4Zm0 2c5.54 0 10 4.46 10 10s-4.46 10-10 10c-1.9 0-3.68-.55-5.18-1.49l-.38-.23L6.7 24.7l.42-3.71-.23-.38A9.95 9.95 0 0 1 6 16c0-5.54 4.46-10 10-10Z"/></svg>
                WhatsApp Nachricht
              </a>
            </div>
            <p className="mt-3 text-sm text-slate-400">Sofort-Termine möglich • Wien und Umgebung</p>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-6 backdrop-blur-sm shadow-xl">
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 grid place-content-center text-center">
                <div>
                  <span className="inline-block text-6xl mb-3">🏠</span>
                  <p className="text-slate-300 max-w-sm mx-auto">Ordnung statt Chaos: Wir schaffen Platz, reinigen gründlich und entsorgen fachgerecht – damit Ihr Keller wieder nutzbar ist.</p>
                </div>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
                <li className="flex items-center gap-2"><span className="text-emerald-400">•</span> Besenreine Übergabe</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">•</span> Sperrmüll-Entsorgung</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">•</span> Feuchtigkeits-Check</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">•</span> Geruchsreduzierung</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
