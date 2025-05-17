"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FiMenu, FiShoppingCart, FiX } from "react-icons/fi";
import { useCartStore } from "../../app/common/Store/useCartStore";
import CartDrawer from "../__organisms/CartDrawer";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const itemCount = useCartStore((state) => state.itemCount());
  const [isCartOpen, setIsCartOpen] = useState(false);

  const shouldHide =
    pathname === "/LogIn" || pathname === "/SignUp" || pathname === "/";

  return (
    <div className={`w-full bg-black text-white ${shouldHide ? "hidden" : ""}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4">
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
            className="md:hidden text-2xl"
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

      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 bg-black pb-6 text-amber-50 text-sm tracking-widest uppercase">
          <Link href="/HomePage" onClick={() => setIsOpen(false)}>
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

      {isCartOpen && <CartDrawer />}
    </div>
  );
};

export default Navbar;
