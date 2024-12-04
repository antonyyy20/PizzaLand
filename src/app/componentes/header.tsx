"use client";

import Link from "next/link";
import { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [compra] = useState(1);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen((prevState) => !prevState);
    };

  return (
    <header className="fixed top-0 left-0 z-50 w-[428px] flex items-center justify-between p-4 border-b border-[rgb(123,21,5)] bg-white">
      <button className="p-2" onClick={toggleMobileMenu} >
        <TfiMenuAlt className="w-6 h-6 text-[rgb(123,21,5)]"/>
      </button>

      <nav className={`${isMobileMenuOpen ? "transform translate-x-0 overflow-hidden" : "transform -translate-x-full md:transition-none"} 
        md:translate-x-0 bg-white flex-col pl-4 md:pl-0 pt-8 md:pt-0 pb-80 md:pb-0 text-base md:text-sm md:flex-row w-[90%] md:w-fit md:top-0 top-16 flex md:relative absolute md:space-x-4 space-y-3 md:space-y-0`}>
          <Link href="/menu" className="text-gray-700 hover:text-black hover:underline">Menu</Link>
          <Link href="/" className="text-gray-700 hover:text-black hover:underline">Dirreciones</Link>
          <Link href="/historial" className="text-gray-700 hover:text-black hover:underline">Historial de pedidos</Link>
          <Link href="/favoritos" className="text-gray-700 hover:text-black hover:underline">Favoritos</Link>
          <Link href="/new-arrivals" className="text-gray-700 hover:text-black hover:underline">Configuraciones</Link>
          <Link href="/soporte" className="text-gray-700 hover:text-black hover:underline">Soporte</Link>
        </nav>
      
      <div className="w-12 h-12 relative">
        <Link href="/principal">
        <Image
          src="/logo.png"
          alt="Restaurant Logo"
          fill
          className="object-contain"
          priority
        />
        </Link>
      </div>
      
      <button className="p-2 flex">
        <p>{compra}</p>
        <Link href="/carrito">
        <MdOutlineShoppingCart className="w-6 h-6 text-[rgb(123,21,5)]" />
        </Link>
      </button>
    </header>
  );
}