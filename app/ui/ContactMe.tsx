"use client"

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactMeFormTemplate from "../components/ContactMeFormTemplate";
export default function ContactMe() {
  return (
     <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="">
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl my-20 p-8">
        <h2 className="text-3xl font-bold text-center text-[#111935] mb-6">Contact Me</h2>
        <p className="text-gray-600 text-center mb-8">
          Have any questions? Reach out to us using the details below!
        </p>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaPhone className="text-[#111935] text-2xl" />
            <p className="text-gray-700 text-lg">+233 50 4243 525</p>
          </div>

          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-[#111935] text-2xl" />
            <p className="text-gray-700 text-lg">daniellarbi947@gmail.com</p>
          </div>

          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-[#111935] text-2xl" />
            <p className="text-gray-700 text-lg">Sampa Valley, Off Kasoa Road</p>
          </div>
        </div>

        {/* Form */}
      <ContactMeFormTemplate />
      </div>
    </div>
      </motion.section>
  );
}
