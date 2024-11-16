"use client";

import { IoMdHome } from "react-icons/io";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { SlBookOpen } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-[428px] mx-auto bg-white border-t border-[rgb(123,21,5)]">
      <div className="flex justify-around py-3">
        <Link href="/" className="flex flex-col items-center text-[rgb(123,21,5)]">
          <IoMdHome className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        
        <Link href="/orders" className="flex flex-col items-center text-[rgb(123,21,5)]">
          <RiShoppingBag2Fill className="w-6 h-6" />
          <span className="text-xs mt-1">Orders</span>
        </Link>
        
        <Link href="/menu" className="flex flex-col items-center text-[rgb(123,21,5)]">
          <SlBookOpen className="w-6 h-6" />
          <span className="text-xs mt-1">Menu</span>
        </Link>
        
        <Link href="/profile" className="flex flex-col items-center text-[rgb(123,21,5)]">
          <FaUser className="w-6 h-6" />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </nav>
  );
}