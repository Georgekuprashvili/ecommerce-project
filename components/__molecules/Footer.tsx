"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer
      className={`bg-black text-white px-6 py-12 ${
        pathname === "/SignUp"
          ? "hidden"
          : pathname === "LogIn"
          ? "hidden"
          : pathname === "/"
          ? "hidden"
          : ""
      } `}
    >
      <div className="max-w-[1110px] mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="space-y-6 max-w-lg">
          <h2 className="text-2xl font-bold">audiophile</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className="text-gray-400 text-sm font-semibold">
            Copyright 2021. All Rights Reserved
          </p>
        </div>

        <div className="flex flex-col justify-between items-end gap-8 w-full md:w-auto ">
          <nav className="flex gap-6 text-sm tracking-widest uppercase flex-wrap ">
            <Link href="/">Home</Link>
            <Link href="/Headphones">Headphones</Link>
            <Link href="/SpeakersPage">Speakers</Link>
            <Link href="/EarphonesPage">Earphones</Link>
          </nav>

          <div className="flex gap-4">
            <Link href="#" className="hover:text-orange-500 transition">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-orange-500 transition">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-orange-500 transition">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
