"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AboutMe() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-100 text-gray-900 px-6 md:px-20 py-24">
      {/* Hero Section */}
      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-amber-500">About Me</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          I’m Daniel Bekoe Palmer Larbi — a passionate Software Engineer with 6+ years
          of experience building scalable web and mobile applications. I hold a
          Bachelor’s degree in Computer Science, and I thrive on transforming ideas
          into real-world solutions.
        </p>
      </motion.section>

      {/* Image & Quick Info */}
      <motion.section
        className="mt-10 flex flex-col md:flex-row items-center gap-10 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Image
          src="/myportfolio.png"
          alt="Daniel Larbi"
          width={200}
          height={200}
          className="rounded-full shadow-xl"
        />
        <ul className="text-left text-gray-700 space-y-2 text-lg">
          <li>👨🏽‍💻 6+ Years Experience in Full-Stack Development</li>
          <li>🎓 BSc in Computer Science</li>
          <li>🧰 Specialties: React, Next.js, Node.js, MongoDB, PHP, Solidity, Blockchain, Web3, Truffle, NFTs, DeFi, Smart Contract</li>
          <li>🌍 Industries: Health, Finance, Startups</li>
        </ul>
      </motion.section>

      {/* Timeline / Journey */}
      <motion.section
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-amber-500 mb-6">My Journey</h2>
        <ul className="space-y-4 text-gray-800">
          <li>📌 <strong>2022:</strong> Graduated with BSc in Computer Science</li>
          <li>📌 <strong>2022:</strong> Worked as a Backend Developer</li>
          <li>📌 <strong>2023:</strong> Started freelancing as a Software Engineer</li>
          {/* <li>📌 <strong>2024:</strong> Launched a Microfinance SaaS solution</li> */}
        </ul>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-amber-500 mb-6">Tech I Use</h2>
        <div className="flex gap-6 flex-wrap justify-center">
          <img src="/tech/react.png" alt="React" className="h-12" />
          <img src="/tech/nextjs.png" alt="Next.js" className="h-12" />
          <img src="/tech/nodejs.png" alt="Node.js" className="h-12" />
          <img src="/tech/smartcontract.png" alt="Smart Contact" className="h-12" />
          <img src="/tech/web3.png" alt="Web3" className="h-12" />
          <img src="/tech/php.png" alt="PHP" className="h-12" />
          <img src="/tech/blockchain.png" alt="Blockchain" className="h-12" />
          <img src="/tech/tailwind.png" alt="Tailwind CSS" className="h-12" />
        </div>
      </motion.section>

      {/* Fun Facts */}
      <motion.section
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-amber-500 mb-6">Fun Facts</h2>
        <ul className="text-gray-700 space-y-2">
          <li>🎮 I love strategy & story-driven games</li>
          <li>📖 Passionate about reading the Bible and drawing life lessons from it</li>
          <li>🎶 I enjoy curating playlists for focused deep work</li>
        </ul>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="mt-20 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold">Let’s Connect!</h3>
        <p className="text-gray-600 mt-2">
          I’m open to freelance work, collaboration, or just chatting tech.
        </p>
        <button
          onClick={() => router.push("/contact-me")}
          className="mt-4 px-6 py-3 bg-[#111935] text-white rounded-lg hover:bg-[#1c2236] transition cursor-pointer"
        >
          Get in Touch
        </button>
      </motion.section>
    </div>
  );
}
