"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectDrawer from "./ProjectDrawer";

import { projects } from "../lib/projects";
export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
      <motion.section
      className="relative bg-white py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence>
            {projects.map((proj: any, idx: number) => (
              <motion.div
                key={idx}
                onClick={() => setSelected(proj)}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white shadow-lg rounded-xl p-6 cursor-pointer hover:shadow-xl transition"
              >
                <h3 className="text-xl text-slate-600 font-semibold">{proj.title}</h3>
                <p className="text-gray-600 mt-2 line-clamp-2">{proj.description}</p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {proj.tech.map((tech: any, i: number) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Drawer Animation */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4 }}
          >
            <ProjectDrawer
              project={selected}
              onClose={() => setSelected(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
