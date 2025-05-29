"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { handleDownload } from "../lib/helperFunction";
export default function PortfolioDetail() {
  const router = useRouter();

 

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-slate-100 text-gray-900 p-6 md:px-20 py-10"
    >
      {/* Header */}
      <section className="text-center my-20">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-amber-500"
        >
          Palmer Daniel Bekoe Larbi
        </motion.h1>
        <p className="mt-2 text-lg text-gray-700">
          Full-Stack Developer | Smart Contracts | Web3 | Mobile & Web Apps | Blockchain Engineer | NFTs | DeFi
        </p>
      </section>

      {/* Objective */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-amber-500 mb-3">Objective</h2>
        <p className="text-gray-800">
          To gain a position where my creativity, problem-solving abilities, and experience in
          Software Development can be used to improve productivity.
        </p>
      </section>

      {/* Contact & Education */}
      <section className="grid md:grid-cols-2 gap-10 mb-10">
        <div>
          <h2 className="text-2xl font-semibold text-amber-500 mb-3">Contact</h2>
          <ul className="text-gray-800 space-y-2">
            <li>📧 <a href="mailto:daniellarbi947@gmail.com" className="underline">daniellarbi947@gmail.com</a></li>
            <li>📞 <a href="tel:+233504243523" className="underline">+233 (0)504243523</a></li>
            <li>📞 <a href="tel:+233542008013" className="underline">+233 (0)542008013</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-amber-500 mb-3">Education</h2>
          <p className="text-gray-800">🎓 BSc Computer Science, Kwame Nkrumah University of Science and Technology (2018–2022)</p>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-amber-500 mb-3">Experience</h2>
        <ul className="text-gray-800 space-y-4">
          <li>
            <strong>VERSIFIED TECHNOLOGY (2022–2023):</strong> Backend Developer – Built and maintained APIs for frontend teams.
          </li>
          <li>
            <strong>GCB Bank PLC (2022–2023 – National Service):</strong>
            <ul className="ml-5 list-disc">
              <li>Troubleshooting workstation issues for staff.</li>
              <li>Routing technical problems to the appropriate IT departments.</li>
            </ul>
          </li>
          <li>
            <strong>GoldTech Solutions (Self-Employed) (2023–Present):</strong> Software Engineer – Delivered client projects end-to-end using Node.js, MongoDB, and Next.js. Automated workflows and boosted performance.
            </li>
        </ul>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-amber-500 mb-3">Skills</h2>
        <div className="text-gray-800 grid md:grid-cols-2 gap-6">
          <ul className="space-y-2">
            <li>🖥️ PHP, JavaScript</li>
            <li>🚀 Node.js, React.js, Next.js</li>
            <li>📱 React Native (Mobile Apps)</li>
            <li>🧠 MongoDB, SQL</li>
            <li>🔐 Smart Contracts (Solidity), dApp Development</li>
            <li>🔐 Web 3 (Solidity), dApp Development</li>
          </ul>
          <ul className="space-y-2">
            <li>🔄 Microsoft Power Platform</li>
            <li>🔌 API Development</li>
            <li>🔍 Testing & Debugging</li>
            <li>📚 Documentation & Design Patterns</li>
            <li>🛡️ Security Best Practices</li>
          </ul>
        </div>
      </section>

      {/* References */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-amber-500 mb-3">References</h2>
        <ul className="text-gray-800 space-y-4">
          <li>
            <strong>Rita Okronipa</strong><br />
            Lead IT Service Management, GCB Bank PLC<br />
            📞 +233 (0)202007026<br />
            📧 <a href="mailto:reokronipa@gcb.com.gh" className="underline">reokronipa@gcb.com.gh</a>
          </li>
          <li>
            <strong>William Ofori Boadu</strong><br />
            Head of IT Strategy & Service Management, GCB Bank PLC<br />
            📞 +233 (0)24 430 4593
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-20 space-y-4">
        <h3 className="text-2xl font-semibold">Want to work together?</h3>
        <p className="text-gray-600">I'm open to remote roles, freelance gigs, or long-term collaborations.</p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
          <button
            onClick={() => router.push("/contact-me")}
            className="px-6 py-3 bg-amber-500 text-black rounded-lg hover:bg-amber-600 transition"
          >
            Reach Out
          </button>
          <button
            onClick={handleDownload}
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-black transition"
          >
            Download Resume
          </button>
        </div>
      </section>
    </motion.div>
  );
}
