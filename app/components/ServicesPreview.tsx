"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ServicesPreview() {
  const router = useRouter();

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-16 px-6 md:px-20 bg-slate-800 text-white"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-amber-400 mb-4 text-center"
      >
        What I Offer
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-300 mb-10 max-w-2xl text-center mx-auto"
      >
        Whether you're building a Web3 platform, dApp, or modern SaaS app — I
        provide secure, scalable software from start to finish.
      </motion.p>

      {/* Services Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6"
      >
        {[...Array(2)].map((_, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-slate-900 p-6 rounded-xl shadow"
          >
            {idx === 0 ? (
              <>
                <h3 className="text-xl text-amber-300 font-semibold mb-3">
                  💻 Fullstack Development
                </h3>
                <ul className="text-sm list-disc list-inside text-gray-300 space-y-1">
                  <li>React / Next.js Web Applications</li>
                  <li>React Native Mobile Apps</li>
                  <li>Node.js APIs & Database Systems</li>
                </ul>
              </>
            ) : (
              <>
                <h3 className="text-xl text-amber-300 font-semibold mb-3">
                  🪙 Blockchain & Web3
                </h3>
                <ul className="text-sm list-disc list-inside text-gray-300 space-y-1">
                  <li>Smart Contracts (Solidity)</li>
                  <li>Wallet & Token Integration</li>
                  <li>dApp Platforms, NFT Marketplaces</li>
                </ul>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Button CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-10"
      >
        <button
          onClick={() => router.push("/service")}
          className="px-6 py-3 bg-amber-400 text-black rounded-lg font-semibold hover:bg-amber-500 transition"
        >
          View Full Services
        </button>
      </motion.div>
    </motion.section>
  );
}
