import React from 'react'

export default function CookieBar() {
  const [visible, setVisible] = React.useState(true)

  return !visible ? null : (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-6xl px-6 pb-6">
        <div className="rounded-xl border border-white/10 bg-slate-800/90 backdrop-blur p-4 text-sm text-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <p className="flex-1">Wir verwenden nur technisch notwendige Cookies, um diese Seite bereitzustellen. Es werden keine personenbezogenen Daten zu Marketingzwecken verarbeitet. Mehr dazu im Impressum/Datenschutz.</p>
          <button onClick={() => setVisible(false)} className="px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-400 transition">Verstanden</button>
        </div>
      </div>
    </div>
  )
}
