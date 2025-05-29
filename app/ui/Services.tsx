"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Traditional Software Development",
    items: [
      "Web Applications (React, Next.js)",
      "Mobile Applications (React Native)",
      "Backend APIs (Node.js, PHP)",
      "Database Design (MongoDB, MySQL)",
      "Cloud Deployment & CI/CD",
    ],
  },
  {
    title: "Blockchain & Web3",
    items: [
      "Smart Contracts (Solidity)",
      "dApp Development",
      "Token Creation (ERC20, ERC721)",
      "Wallet Integration (MetaMask, WalletConnect)",
      "NFT Platforms & Marketplaces",
      "DeFi",
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
          I build scalable, modern software — whether you're launching a Web3 startup or need a robust traditional app.
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

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-20"
      >
        <h3 className="text-2xl font-semibold">Need a custom solution?</h3>
        <p className="text-gray-400 mt-2">
          I'm available for freelance, contracts, or full-time roles. Let’s build together.
        </p>
        <button
          onClick={() => router.push("/contact")}
          className="mt-4 px-6 py-3 bg-amber-400 text-black rounded-lg hover:bg-amber-500 transition"
        >
          Contact Me
        </button>
      </motion.section>
    </div>
  );
}
