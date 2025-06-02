"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { FiMenu, FiShoppingCart, FiX } from "react-icons/fi";
import { useCartStore } from "../../app/common/Store/useCartStore";
import CartDrawer from "../__organisms/CartDrawer";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const itemCount = useCartStore((state) => state.itemCount());
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const shouldHide =
    pathname === "/LogIn" || pathname === "/SignUp" || pathname === "/";
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      className={`w-full bg-black text-white flex items-center justify-center  ${
        shouldHide ? "hidden" : ""
      }`}
    >
      <div className="max-w-[1180px] w-[100%] flex justify-between items-center px-[20px] py-[35px] ">
        <h1 className="font-bold text-xl text-amber-50 max-md:hidden">
          audiophile
        </h1>

        <div className="space-x-10 gap-8 hidden md:flex">
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

        <div className="flex items-center gap-6 md:gap-4 max-md:w-full max-md:justify-between">
          <button
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

          <h1 className="md:hidden font-bold text-xl text-amber-50">
            audiophile
          </h1>

          <div
            className="relative text-white text-2xl cursor-pointer"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <FiShoppingCart />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 rounded-full text-xs px-2">
                {itemCount}
              </span>
            )}
          </div>
        </div>
      </div>

      <div
        ref={dropdownRef}
        className={`absolute w-[200px] left-[20px] top-[96px] md:hidden flex flex-col items-center justify-center  gap-6 bg-[#F1F1F1] text-amber-50 text-sm tracking-widest uppercase overflow-hidden transition-all duration-800 ease-in-out z-2 ${
          isOpen ? "h-[200px] " : "h-[0px]"
        }`}
      >
        {isOpen && (
          <div className=" md:hidden flex  flex-col items-center gap-6   text-black text-sm tracking-widest uppercase">
            <Link
              className=" border-b-solid border-b-[1px] cursor-pointer"
              href="/HomePage"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              className=" border-b-solid border-b-[1px] cursor-pointer"
              href="/Headphones"
              onClick={() => setIsOpen(false)}
            >
              Headphones
            </Link>
            <Link
              className=" border-b-solid border-b-[1px] cursor-pointer"
              href="/SpeakersPage"
              onClick={() => setIsOpen(false)}
            >
              Speakers
            </Link>
            <Link
              className=" border-b-solid border-b-[1px] cursor-pointer"
              href="/EarphonesPage"
              onClick={() => setIsOpen(false)}
            >
              Earphones
            </Link>
          </div>
        )}
      </div>

      {isCartOpen && <CartDrawer />}
    </div>
  );
};

export default Navbar;
