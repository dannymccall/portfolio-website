"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaMobileAlt,
  FaDatabase,
  FaRocket,
  FaWallet,
  FaCubes,
} from "react-icons/fa";
import { SiEthereum, SiWeb3Dotjs } from "react-icons/si";

const services = [
  {
    icon: <FaCode className="text-2xl text-blue-600" />,
    title: "Web Development",
    description:
      "I build responsive, fast, and scalable websites using modern tools like React, Next.js, and Tailwind CSS.",
  },
  {
    icon: <FaMobileAlt className="text-2xl text-green-600" />,
    title: "Mobile Apps",
    description:
      "I create sleek and performant cross-platform apps using React Native — perfect for startups or product launches.",
  },
  {
    icon: <FaDatabase className="text-2xl text-purple-600" />,
    title: "Backend Systems",
    description:
      "From APIs to databases, I architect backend systems using Node.js, Express, MongoDB, and MySQL that power businesses.",
  },
  {
    icon: <FaRocket className="text-2xl text-pink-600" />,
    title: "SaaS Solutions",
    description:
      "I help founders turn ideas into polished SaaS products with authentication, payment, and admin tools.",
  },
  {
    icon: <SiEthereum className="text-2xl text-indigo-600" />,
    title: "Smart Contracts & DApps",
    description:
      "I develop and deploy secure Ethereum smart contracts using Solidity and integrate them with user-friendly DApps.",
  },
  {
    icon: <SiWeb3Dotjs className="text-2xl text-cyan-600" />,
    title: "Web3 Integrations",
    description:
      "I connect blockchain with frontend apps using libraries like Web3.js and Ethers.js, enabling wallet authentication and token transactions.",
  },
  {
    icon: <FaWallet className="text-2xl text-amber-500" />,
    title: "DeFi Platforms",
    description:
      "I contribute to decentralized finance ecosystems — from yield farming dashboards to staking and liquidity pool apps.",
  },
  {
    icon: <FaCubes className="text-2xl text-fuchsia-600" />,
    title: "NFT Marketplaces",
    description:
      "I build NFT minting sites, metadata generation systems, and integrate marketplaces with Web3 wallets like MetaMask.",
  },
];

export default function WhatIDo() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What I Do
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 shadow-md hover:shadow-lg rounded-xl p-6 transition"
            >
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
