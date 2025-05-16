import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="w-full  text-white absolute bg-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center  py-6">
        <h1 className="font-bold text-xl text-amber-50 ">audiophile</h1>
        <div className="space-x-10 flex  gap-8 ">
<<<<<<< Updated upstream
          <Link className="text-amber-50" href="/">
=======

          <Link className="text-amber-50" href="/HomePage">
>>>>>>> Stashed changes
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
        <div className="text-white text-3xl cursor-pointer">
          <FiShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
