import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ onEnter }) {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.2])

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0b10] text-white">
      <motion.div style={{ scale }} className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#0a0b10] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-20">
        <motion.h1
          style={{ y, opacity }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight"
        >
          LumaVerse: Explore the Future of Interaction
        </motion.h1>
        <motion.p
          style={{ y }}
          className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl"
        >
          Dive into a fully interactive 3D experience with smooth animations, dynamic objects, and engaging visuals.
        </motion.p>

        <motion.div className="mt-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <button
            onClick={onEnter}
            className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-6 py-3 text-white font-semibold shadow-lg shadow-violet-600/30 transition-transform hover:scale-[1.03] focus:outline-none"
          >
            <span className="relative z-10">Enter the Experience</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
