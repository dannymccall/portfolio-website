// ContactMeDrawerr.tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useContactUsForm } from "../hooks/useContactUs";
import ContactMeFormTemplate from "./ContactMeFormTemplate";

interface ContactMeDrawerrProps {
  //   project: Project;
  onClose: () => void;
}

const drawerVariants = {
  hidden: { y: "100%" },
  visible: { y: 0 },
  exit: { y: "100%" },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function ContactMeDrawer({ onClose }: ContactMeDrawerrProps) {
  const [isLoading, setIsLoading] = useState(true);
  const { register, handleSubmit, reset } = useContactUsForm();
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/30 z-40 flex justify-center w-full overflow-y-auto"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      />

      {/* Drawer */}
      <motion.div
        className="fixed bottom-0  w-full md:w-1/3  h-2/3 bg-white shadow-lg z-50  flex-row-reverse items-center justify-center overflow-y-auto"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={drawerVariants}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-[#111935] px-4 py-2 w-fit rounded-md shadow-lg flex items-center justify-between">
          <h2 className="text-white font-bold text-lg mr-2">Contact Me</h2>
          <button onClick={onClose} className="text-white text-lg cursor-pointer">
            ✕
          </button>
        </div>
        {isLoading ? (
          <div className="animate-pulse space-y-4 h-full w-full flex items-center justify-center flex-col">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="h-full flex items-center justify-center  p-6 overflow-y-auto mt-10">
              <div className="max-w-2xl w-full h-full bg-white rounded-2xl  p-8 overflow-y-auto">
                {/* <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
                  Contact Me
                </h2> */}
                <p className="text-gray-600 text-center ">
                  Have any questions? Reach out to us using the details below!
                </p>

                {/* Contact Info */}

                {/* Form */}
                <ContactMeFormTemplate />
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
