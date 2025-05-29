"use client";

import { motion } from "framer-motion";
import { FaHeart, FaRocket, FaHandshake } from "react-icons/fa";

const encouragements = [
  {
    icon: <FaRocket className="text-blue-600 text-xl" />,
    message: "Your next big idea deserves clean code, clarity, and care. Let’s build it together.",
  },
  {
    icon: <FaHandshake className="text-green-600 text-xl" />,
    message: "I treat every client’s goal like it’s my own.",
  },
  {
    icon: <FaHeart className="text-pink-600 text-xl" />,
    message: "I don’t just write code — I solve problems with heart.",
  },
];

export default function Encouragement() {
  return (
    <section className="px-6 py-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Encouragements for You</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {encouragements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 shadow-md rounded-xl p-6 flex flex-col items-start gap-4 hover:shadow-lg transition"
            >
              <div>{item.icon}</div>
              <p className="text-gray-700 leading-relaxed">{item.message}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
