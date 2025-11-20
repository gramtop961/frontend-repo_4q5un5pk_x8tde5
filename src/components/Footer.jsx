import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-8 text-center text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} KellerPro – Kellerreinigung Wien & Umgebung</p>
        <a href="#" className="hover:text-slate-200 transition">Impressum & Datenschutz (Platzhalter)</a>
      </div>
    </footer>
  )
}
