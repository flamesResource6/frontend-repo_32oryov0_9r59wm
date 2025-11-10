import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Alex Rivera',
    role: 'Product Designer',
    text: 'LumaVerse feels like stepping into the future. The motion and depth are insane.',
    avatar: 'https://i.pravatar.cc/80?img=64',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Data Scientist',
    text: 'Real-time 3D data viz that actually performs. My team loves it.',
    avatar: 'https://i.pravatar.cc/80?img=32',
    rating: 5,
  },
  {
    name: 'Marco Liu',
    role: 'Game Dev',
    text: 'The interactions are buttery smooth. The demo alone sold me.',
    avatar: 'https://i.pravatar.cc/80?img=12',
    rating: 4,
  },
]

function Stars({ count }) {
  return (
    <div className="flex">
      {new Array(5).fill(0).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i < count ? '#fbbf24' : 'none'} stroke="#fbbf24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="relative bg-[#0a0b10] text-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-5xl font-bold">
          Loved by creators and teams
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.04] p-[1px]"
            >
              <div className="rounded-2xl bg-[#0b0d14]/80 p-6 backdrop-blur">
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">“{t.text}”</p>
                <div className="mt-4"><Stars count={t.rating} /></div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
