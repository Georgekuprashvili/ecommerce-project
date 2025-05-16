"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FiMenu, FiShoppingCart, FiX } from "react-icons/fi";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`w-full  text-white  bg-black ${
        pathname === "/LogIn"
          ? "hidden"
          : pathname === "/SignUp"
          ? " hidden"
          : pathname === "/"
          ? " hidden"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center  py-6">
        <h1 className="font-bold text-xl text-amber-50 ">audiophile</h1>
        <div className="space-x-10 flex  gap-8 ">

          <Link className="text-amber-50" href="/HomePage">
            Home
          </Link>
          <Link className="text-amber-50" href="/Headphones">
            Headphones
          </Link>
          <Link className="text-amber-50" href="/SpeakersPage">
            Speakers
          </Link>
          <Link className="text-amber-50" href="/EarphonesPage">
            Earphones
          </Link>
        </div>

        <div className="flex items-center gap-6 max-md:justify-between max-md:w-[100%]">
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
          <h1 className="font-bold text-xl text-amber-50 md:hidden">
            audiophile
          </h1>
          <div className="text-white text-2xl cursor-pointer">
            <FiShoppingCart />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 bg-black pb-6 text-amber-50 text-sm tracking-widest uppercase">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/Headphones" onClick={() => setIsOpen(false)}>
            Headphones
          </Link>
          <Link href="/SpeakersPage" onClick={() => setIsOpen(false)}>
            Speakers
          </Link>
          <Link href="/EarphonesPage" onClick={() => setIsOpen(false)}>
            Earphones
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
