import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import PhilosophySection from './components/PhilosophySection'
import HowWeWork from './components/HowWeWork'
import PortfolioSection from './components/PortfolioSection'
import InsightsSection from './components/InsightsSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <HowWeWork />
      <PortfolioSection />
      <TestimonialsSection />
      <InsightsSection />
      <Footer />
    </div>
  )
}

export default App
