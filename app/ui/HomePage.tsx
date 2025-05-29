"use client";
import React, { useState } from "react";
import PortfolioImage from "@/public/myportfolio.png";
import Image from "next/image";
import ExperienceAndSkills from "../components/ExperienceAndSkills";
import TypewriterComponent from "../components/Typewriter";
import Encouragements from "../components/Encouragements";
import WhatIdo from "../components/WhatIdo";
import Projects from "../components/Projects";
import { AnimatePresence, motion } from "framer-motion";
import ContactMeDrawer from "../components/ContactMeDrawer";
import { handleDownload } from "../lib/helperFunction";
import { useRouter } from "next/navigation";
const skills = [
  { name: "React", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "Blockchain", level: 60 },
];

export default function Home() {
  const [drawer, setDrawer] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div className="w-full  text-white">
      {/* Hero Section */}
      <header className="flex flex-col md:flex-row bg-[url('/headerbg.png')] bg-cover bg-no-repeat items-center justify-between p-3">
        <div className="flex mt-10 justify-between w-full py-16 px-6 md:px-40 m-auto flex-wrap gap-10">
          {/* Text Section */}
          <motion.div
            className="md:w-1/2 w-full flex flex-col gap-3 justify-center text-2xl text-gray-500 font-semibold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-10">
              <div>
              <h1 className="font-sans text-amber-300 text-xl lg:text-3xl">
                Hi there, I am 👋
              </h1>
              <p className="font-sans text-slate-100 text-base lg:text-2xl">
                Daniel Palmer
              </p>
              <p className="font-sans text-slate-100 text-base lg:text-2xl">
                Software Engineer
              </p>

              </div>
              <motion.section
                className=" flex flex-col gap-3 justify-center text-2xl text-gray-500 font-semibold"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="flex flex-col md:flex-row gap-3">
                  <button
                    className="bg-amber-500 cursor-pointer hover:text-slate-100 rounded-full text-base lg:text-xl text-slate-800 px-5 py-2 hover:bg-amber-900 font-semibold transition-all ease-in-out duration-300"
                    onClick={handleDownload}
                  >
                    Download Portfolio
                  </button>
                  <button
                    className="border-amber-500 cursor-pointer border-2 text-base lg:text-xl  rounded-full text-slate-100 px-5 py-2 hover:bg-amber-900 font-semibold transition-all ease-in-out duration-300"
                    onClick={() => router.push("/contact-me")}
                  >
                    Contact Me
                  </button>
                </div>
              </motion.section>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="w-full h-80 md:w-96 md:h-96 rounded-full shadow-2xl  overflow-hidden"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <Image
              src={PortfolioImage}
              alt="Tech"
              className="relative w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </header>

      {/* Mission Section */}
      <Encouragements />
      <ExperienceAndSkills />
      <WhatIdo />
      <Projects />

      {/* Call to Action */}
      <motion.div
        className="md:w-1/2 w-full flex flex-col gap-3 justify-center items-center text-center text-2xl m-auto text-gray-500 font-semibold"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <section className="p-10 text-center bg-gold text-black w-full items-center justify-center flex flex-col">
          <h2 className="text-3xl font-semibold">Ready to Work with Us?</h2>
          <p className="mt-4">
            Book an appointment today and take your business to the next level.
          </p>
          <button
            className="mt-4 px-6 py-3 bg-black text-amber-400 rounded-lg animate-pulse cursor-pointer"
            onClick={() => setDrawer((prev) => !prev)}
          >
            Book Now
          </button>
        </section>
      </motion.div>

      <AnimatePresence>
        {drawer && (
          <ContactMeDrawer onClose={() => setDrawer((prev) => !prev)} />
        )}
      </AnimatePresence>
      {/* Footer */}
      {/* <footer className="p-10 bg-gray-900 text-center text-white">
        <p>
          &copy; {new Date().getFullYear()} GoldTech Solutions. All Rights
          Reserved.
        </p>
      </footer> */}
    </div>
  );
}
