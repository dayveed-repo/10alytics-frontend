import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-white py-7 border-b border-b-[#EDEDED]">
      <div className="max-w-[90%] flex items-center justify-between mx-auto">
        <Image
          height={0}
          width={0}
          src="/images/logo.svg"
          alt="10anlytics"
          className="h-8 w-auto"
        />

        <div className="flex justify-between space-x-6">
          <div className="nav-link">
            <p>Start Learning</p>

            <ChevronDown className="text-black h-4 w-4" />
          </div>

          <div className="nav-link">
            <p>Resources</p>

            <ChevronDown className="text-black h-4 w-4" />
          </div>

          <div className="nav-link">
            <p>Company</p>

            <ChevronDown className="text-black h-4 w-4" />
          </div>

          <div className="nav-link">
            <p>Affiliates</p>

            <ChevronDown className="text-black h-4 w-4" />
          </div>

          <div className="nav-link">
            <p>Affiliates For Business</p>

            <ChevronDown className="text-black h-4 w-4" />
          </div>
        </div>

        <div className="space-x-5">
          <Link
            href="/login"
            className="border border-[#E0E0E0] rounded-2xl py-3.75 px-7 text-black font-medium text-[1rem] leading-6"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-2xl py-3.75 px-7 text-white font-medium text-[1rem] leading-6 bg-linear-to-r from-[#DB6700] to-[#89715F] "
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
