'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiPhp,SiWeb3Dotjs,SiEthereum  } from "react-icons/si";

const skills = [
  { name: 'JavaScript', level: '80%', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React & Next.js', level: '85%', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Node.js & Express', level: '80%', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'MongoDB', level: '75%', icon: <FaDatabase className="text-emerald-400" /> },
  { name: 'Tailwind CSS', level: '90%', icon: <FaCss3Alt className="text-amber-500" /> },
  { name: 'SQL ', level: '70%', icon: <FaDatabase className="text-sky-400" /> },
  { name: 'Mongoose', level: '70%', icon: <FaDatabase className="text-cyan-500" /> },
  { name: 'Smart Contracts', level: '70%', icon: <SiEthereum className="text-fuchsia-600" /> },
  { name: 'Web3', level: '70%', icon: <SiWeb3Dotjs  className="text-indigo-700" /> },
  { name: 'PHP', level: '80%', icon: <SiPhp className="text-orange-500" /> },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const ExperienceAndSkills = () => {
  return (
    <section className="px-6 py-12  text-white">
      <div className="max-w-6xl mx-auto">

        {/* Experience Section */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6 text-slate-700"
        >
          Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Backend Developer',
              company: 'Versified Technology (Remote) · Jan 2022 - March 2022',
              description:
                'Built and manage existing and new endpoints for frontend to consume',
            },
            {
              title: 'GCB BANK PLC',
              company: 'National Service · October 2022 - October 2023',
              description:
              'Worked in the IT Service Management Team, I help employees with technical issues',
            },
            {
              title: 'Full Stack Developer',
              company: 'Freelance · May 2022 - Present',
              description:
                'Delivered client projects end-to-end using Node.js, MongoDB, and Next.js. Automated workflows and boosted performance.',
            }
          ].map((exp, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/50 transition-all"
              initial="hidden"
              whileInView="visible"
              custom={i}
              variants={containerVariants}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-amber-400">{exp.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{exp.company}</p>
              <p>{exp.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mt-16 mb-6 text-slate-700"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial="hidden"
              whileInView="visible"
              custom={i}
              variants={containerVariants}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-1">
                {skill.icon}
                <p className="font-medium text-slate-700">{skill.name}</p>
              </div>
              <div className="w-full bg-gray-700 h-3 rounded-full">
                <motion.div
                  className="bg-blue-500 h-3 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndSkills;
