import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from './components/Hero'
import Features from './components/Features'
import InteractiveDemo from './components/InteractiveDemo'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function ParallaxBackdrop() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1200], [0, -120])
  const y2 = useTransform(scrollY, [0, 1200], [0, -240])
  return (
    <div className="pointer-events-none fixed inset-0 -z-0">
      <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-30" />
      <motion.div style={{ y: y2 }} className="absolute inset-0 opacity-20" />
    </div>
  )
}

export default function App() {
  const containerRef = useRef(null)

  const handleEnter = () => {
    const el = document.getElementById('features')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div ref={containerRef} className="bg-[#07080f]">
      <ParallaxBackdrop />
      <Hero onEnter={handleEnter} />
      <div id="features"><Features /></div>
      <InteractiveDemo />
      <Testimonials />
      <Footer />
    </div>
  )
}
