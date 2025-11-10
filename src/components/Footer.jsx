import React from 'react'
import { motion } from 'framer-motion'
import { Github, Twitter, Globe2, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0d14] text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.04] p-10 text-center">
          <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-4xl font-bold">
            Ready to build in 3D?
          </motion.h3>
          <p className="mt-3 text-gray-300">Plug in your data, customize the scene, and launch something stunning.</p>
          <div className="mt-6">
            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-600/30 transition-transform hover:scale-[1.03]">
              Get Started <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-sm text-gray-400">© {new Date().getFullYear()} LumaVerse. All rights reserved.</div>
          <div className="flex items-center gap-4">
            {[Github, Twitter, Globe2].map((Icon, i) => (
              <a key={i} href="#" className="group rounded-full border border-white/10 p-2 transition-transform hover:scale-110">
                <Icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
