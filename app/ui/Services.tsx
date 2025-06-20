"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { MdPhone } from "react-icons/md";

const services = [
  {
    title: "💻 Traditional Software Development",
    items: [
      "🌐 Web Applications (React, Next.js)",
      "📱 Mobile Apps (React Native)",
      "🔗 Backend APIs (Node.js, PHP)",
      "🧠 Database Design (MongoDB, MySQL)",
      "🚀 Cloud Deployment & CI/CD",
    ],
  },
  {
    title: "🪙 Blockchain & Web3 Solutions",
    items: [
      "🧾 Smart Contracts (Solidity)",
      "📲 dApp Development",
      "🪙 Token Creation (ERC20, ERC721)",
      "🔐 Wallet Integration (MetaMask, WalletConnect)",
      "🎨 NFT Platforms & Marketplaces",
      "🏦 DeFi Systems",
    ],
  },
];

export default function ServicesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 md:px-20 py-24">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-amber-400">My Services</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          I build scalable, modern software — whether you're launching a Web3 startup or need a fullstack partner to bring your idea to life.
        </p>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-2 gap-10"
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="bg-slate-800 p-6 rounded-2xl shadow-lg transition-all"
          >
            <h2 className="text-2xl font-semibold text-amber-400 mb-4">{service.title}</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {service.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 bg-slate-800 p-10 rounded-2xl text-center"
      >
        <h2 className="text-3xl font-bold text-amber-400 mb-4">Pricing & Engagement</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          I offer flexible pricing depending on your project needs — from hourly work to full-feature packages. Here's what you can expect:
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-slate-900 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-amber-300 mb-2">Starter</h3>
            <p className="text-gray-400 mb-2">$50/hr</p>
            <p className="text-sm text-gray-300">Best for small fixes, short sprints, or quick consultations.</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-amber-300 mb-2">Pro</h3>
            <p className="text-gray-400 mb-2">$60/hr</p>
            <p className="text-sm text-gray-300">Ideal for feature builds, Web3 integration, or multi-week projects.</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-amber-300 mb-2">Monthly Retainer</h3>
            <p className="text-gray-400 mb-2">From $3,000/month</p>
            <p className="text-sm text-gray-300">Includes dedicated hours, maintenance, and priority support.</p>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-20 bg-slate-800 p-8 rounded-2xl"
      >
        <h3 className="text-2xl font-semibold text-amber-400 mb-2">Let’s Build Something Powerful</h3>
        <p className="text-gray-300 max-w-xl mx-auto">
          Whether you need a Web3-ready dApp, a secure authentication system, or a modern mobile/web app — I’ve got you covered.
        </p>
        <p className="text-gray-400 mt-2">
          Available for freelance, contracts, or full-time remote roles.
        </p>
        <button
          onClick={() => router.push("/contact-me")}
          className="mt-6 px-6 py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition"
        >
          <MdPhone className="inline-block mr-2" />
          Contact Me
        </button>
      </motion.section>
    </div>
  );
}
