import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Home sections
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import OurSolutionsSection from './components/OurSolutionsSection'
import TrustedBySection from './components/TrustedBySection'
import PhilosophySection from './components/PhilosophySection'
import HowWeWork from './components/HowWeWork'
import PortfolioSection from './components/PortfolioSection'
import TestimonialsSection from './components/TestimonialsSection'
import InsightsSection from './components/InsightsSection'
import TeamSection from './components/TeamSection'
import Footer from './components/Footer'

// Pages
import ServicesPage from './pages/ServicesPage'
import SolutionsPage from './pages/SolutionsPage'
import OurApproachPage from './pages/OurApproachPage'
import InsightsPage from './pages/InsightsPage'
import ContactPage from './pages/ContactPage'

const HomePage = () => (
  <div>
    <Navbar />
    <HeroSection />
    <OurSolutionsSection />
    <PhilosophySection />
    <HowWeWork />
    <PortfolioSection />
    <TestimonialsSection />
    <TeamSection />
    <TrustedBySection />
    <Footer />
  </div>
)

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/our-approach" element={<OurApproachPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
