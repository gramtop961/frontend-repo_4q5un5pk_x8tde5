import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Offer from './components/Offer'
import HowItWorks from './components/HowItWorks'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import CookieBar from './components/CookieBar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Hero />
      <Services />
      <Pricing />
      <Offer />
      <HowItWorks />
      <WhyUs />
      <Contact />
      <Footer />
      <CookieBar />
    </div>
  )
}

export default App
