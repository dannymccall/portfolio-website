"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useSidebar } from "../context/SidebarContext";

import { usePathname } from "next/navigation";
import { IoChevronBack } from "react-icons/io5";

import { FaHome } from "react-icons/fa";
import { SiLibreofficewriter } from "react-icons/si";
import { BiSolidCommentDetail } from "react-icons/bi";
import { GrServices } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";

export default function Sidebar() {
  const { isOpen, closeSidebar } = useSidebar();

  const pathname = usePathname();
  useEffect(() => {
    const timeout = setTimeout(() => {
      closeSidebar();
    }, 100); // delay for smoother UX

    return () => clearTimeout(timeout);
  }, [pathname]);
  return (
    <div
      className={`fixed top-0 left-0 h-full z-50 w-full  bg-[url('/headerbg.png')] bg-cover bg-center text-slate-200 shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="space-y-4  h-[calc(100%-80px)] mb-auto">
        <div className="w-full flex justify-between items-center px-3 py-3 border-b-1 border-b-[#4a448a]">
          <div className="w-full flex items-center gap-4">
            <Link href="/">
              <h1 className="text-yellow-500  text-2xl font-bold font-sans">
                Portfolio
              </h1>
            </Link>
            {/* <img src="/mint_logo.png" alt="Logo" className="w-10 h-10 rounded-full" /> */}
          </div>
          <div className="w-full flex gap-3 items-center justify-end">
            {/* <button>
              <IoMdSearch size={25} />
            </button> */}
            <button onClick={closeSidebar} className="cursor-pointer">
              <IoChevronBack size={25} />
            </button>
          </div>
        </div>
        <ul className="flex flex-col gap-6 w-full">
          <Link
            href="/"
            className="text-slate-100 flex w-full border-b border-[#4a448a] px-5 py-2 items-center gap-3 text-sm lg:text-base hover:text-yellow-500 hover:underline cursor-pointer transition duration-300 ease-in-out font-semibold"
          >
            <FaHome />
            Home
          </Link>

          <Link
            href="/about"
            className="text-slate-100 flex w-full border-b border-[#4a448a] px-5 py-2 items-center gap-3 text-sm lg:text-base hover:text-yellow-500 hover:underline cursor-pointer transition duration-300 ease-in-out font-semibold"
          >
            <SiLibreofficewriter />
            About Me
          </Link>

          <Link
            href="/portfolio-detail"
            className="text-slate-100 flex w-full border-b border-[#4a448a] px-5 py-2 items-center gap-3 text-sm lg:text-base hover:text-yellow-500 hover:underline cursor-pointer transition duration-300 ease-in-out font-semibold"
          >
            <BiSolidCommentDetail />
            Portfolio Detail
          </Link>

          <Link
            href="/my-services"
            className="text-slate-100 flex w-full border-b border-[#4a448a] px-5 py-2 items-center gap-3 text-sm lg:text-base hover:text-yellow-500 hover:underline cursor-pointer transition duration-300 ease-in-out font-semibold"
          >
            <GrServices />
            Service
          </Link>

          <Link
            href="/contact-me"
            className="text-slate-100 flex w-full border-b border-[#4a448a] px-5 py-2 items-center gap-3 text-sm lg:text-base hover:text-yellow-500 hover:underline cursor-pointer transition duration-300 ease-in-out font-semibold"
          >
            <MdContactPhone />
            Contact Me
          </Link>
        </ul>
      </div>
    </div>
  );
}
