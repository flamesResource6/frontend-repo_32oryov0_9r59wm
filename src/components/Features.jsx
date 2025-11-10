import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Joystick, BarChart3, SlidersHorizontal } from 'lucide-react'

const features = [
  {
    title: 'Real-time Data Visualization',
    icon: BarChart3,
    desc: 'Stream and explore complex datasets with fluid 3D graphs and motion.',
    hue: 'from-cyan-400 to-blue-500'
  },
  {
    title: 'Interactive Simulations',
    icon: Sparkles,
    desc: 'Run parameterized simulations that respond to your inputs in real-time.',
    hue: 'from-violet-400 to-fuchsia-500'
  },
  {
    title: 'Gamified Experience',
    icon: Joystick,
    desc: 'Achievements, levels, and playful interactions keep users engaged.',
    hue: 'from-amber-400 to-rose-500'
  },
  {
    title: 'Customizable Interface',
    icon: SlidersHorizontal,
    desc: 'Themes, layouts, and controls tailored to your creative flow.',
    hue: 'from-emerald-400 to-teal-500'
  }
]

export default function Features() {
  return (
    <section className="relative bg-[#0a0b10] text-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold tracking-tight"
        >
          What You Can Build
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.04] p-[1px]"
            >
              <div className="relative z-10 h-full rounded-2xl bg-[#0b0d14]/80 p-6 backdrop-blur">
                <div className={`absolute -inset-24 opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-br ${f.hue} blur-3xl`} />
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${f.hue} p-[2px]`}>
                    <div className="h-full w-full rounded-lg bg-[#0b0d14] grid place-items-center">
                      <f.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                </div>
                <p className="mt-3 text-sm text-gray-300">{f.desc}</p>
                <motion.div
                  layout
                  className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-gray-200"
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                >
                  Hover to learn more. Click the demo below to try it.
                </motion.div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
