"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Daniel built our entire microfinance management platform — complete with loan tracking, user onboarding, and backend reporting. We’ve been running live with it ever since. Reliable, efficient, and highly professional.",
    name: "Client, Microfinance Business (Ghana)",
  },
//   {
//     quote:
//       "He delivered our smart contract and dApp integration faster than expected. Everything was smooth and well-documented.",
//     name: "Founder, Web3 Startup",
//   },
];

export default function Testimonials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 px-6 md:px-20 bg-slate-800 text-white text-center"
    >
      <h2 className="text-3xl font-bold text-amber-400 mb-10">What Clients Say</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            className="bg-slate-900 p-6 rounded-xl shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <p className="italic text-gray-300 mb-4">"{t.quote}"</p>
            <p className="text-sm text-gray-400">— {t.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
