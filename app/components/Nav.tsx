"use client";

import Link from "next/link";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import Image from "next/image";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import { MdClose, MdMenu } from "react-icons/md";
const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href="/">
          <Image src={headerLogo} alt="Nike logo" width={130} height={29} />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="hidden max-lg:block  dark:text-coral-red  cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {!open ? (
            <MdMenu className="w-10 h-10" />
          ) : (
            <MdClose className="w-10 h-10" />
          )}
        </div>
      </nav>
      {/* Mobile Sidebar */}
      <ResponsiveMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
};

export default Nav;
