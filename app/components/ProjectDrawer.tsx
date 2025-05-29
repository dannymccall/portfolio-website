// ProjectDrawer.tsx
"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  features: string[];
}

interface ProjectDrawerProps {
  project: Project;
  onClose: () => void;
}

const drawerVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function ProjectDrawer({
  project,
  onClose,
}: ProjectDrawerProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [project]);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/30 z-40"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      />

      {/* Drawer */}
      <motion.div
        className="fixed top-0 right-0 w-full md:w-[480px] h-full bg-white shadow-lg z-50 p-6 overflow-y-auto"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={drawerVariants}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
          <button onClick={onClose} className="text-gray-500 text-xl">
            ✕
          </button>
        </div>

        {isLoading ? (
          <div className="animate-pulse space-y-4">
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
            <p className="text-gray-600 mb-4">{project.description}</p>

            <div>
              <h1 className="font-bold text-slate-800">Tech Stacks</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-800 font-semibold text-sm px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col flex-wrap gap-2 mb-4">
              <h1 className="font-bold text-slate-800">Features</h1>

              {project.features.map((feature, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-800 text-sm px-2 font-semibold py-1 rounded"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-black"
                >
                  <FaGithub /> GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
