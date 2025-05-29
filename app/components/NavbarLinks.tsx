"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { SiLibreofficewriter } from "react-icons/si";
import { BiSolidCommentDetail } from "react-icons/bi";
import { GrServices } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";

const NavbarLinks = () => {
  const pathname = usePathname();
  return (
    <ul className="flex space-x-6 items-center">
      <Link
        href={"/"}
        className={`flex gap-2 items-center  ${
          pathname === "/" ? "text-amber-500" : "text-slate-100"
        } text-sm lg:text-base hover:text-yellow-500 hover:underline cursor-pointer transition duration-300 ease-in-out font-semibold`}
      >
        <FaHome />
        Home
      </Link>
      <Link
        href={"/about"}
        className={`md:flex gap-2 items-center ${
          pathname === "/about" ? "text-amber-500" : "text-slate-100"
        }  hidden  text-sm lg:text-base hover:text-yellow-500  hover:underLink ne cursor-pointer transition duration-300 ease-in-out font-semibold`}
      >
        <SiLibreofficewriter />
        About Me
      </Link>
      <Link
        href={"/portfolio-detail"}
        className={`md:flex gap-2 items-center ${
          pathname === "/portfolio-detail" ? "text-amber-500" : "text-slate-100"
        }  hidden text-sm lg:text-base hover:text-yellow-500  hover:underLink ne cursor-pointer transition duration-300 ease-in-out font-semibold`}
      >
        <BiSolidCommentDetail />
        Portfolio Detail
      </Link>
      <Link
        href={"my-services"}
        className={`md:flex gap-2 items-center ${
          pathname === "/my-services" ? "text-amber-500" : "text-slate-100"
        }  hidden  text-sm lg:text-base hover:text-yellow-500  hover:underLink ne cursor-pointer transition duration-300 ease-in-out font-semibold`}
      >
        <GrServices />
        Service
      </Link>
      <Link
        href="/contact-me"
        className={`md:flex gap-2 items-center ${
          pathname === "/contact-me" ? "text-amber-500" : "text-slate-100"
        }  hidden  text-sm lg:text-base hover:text-yellow-500  hover:underLink ne cursor-pointer transition duration-300 ease-in-out font-semibold`}
      >
        <MdContactPhone />
        Contact Me
      </Link>
    </ul>
  );
};

export default NavbarLinks;
