"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LuSquareMenu } from "react-icons/lu";
import NavbarLinks from "./NavbarLinks";
import { useSidebar } from "../context/SidebarContext";
const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const { openSidebar } = useSidebar();
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-5 transition-all duration-300 border-b border-slate-400 
    ${
      scrolled
        ? "backdrop-blur-md bg-[#111935]/80 shadow-md"
        : "bg-[url('/headerbg.png')] bg-cover bg-center"
    }`}
    >
      <h1 className="text-yellow-500  text-2xl font-bold font-sans z-50">
        Portfolio
      </h1>
      <div className=" flex items-center gap-2">
        <NavbarLinks />
        <button className="cursor-pointer" onClick={openSidebar}>
          <LuSquareMenu className="text-slate-200 md:hidden block" size={25} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
