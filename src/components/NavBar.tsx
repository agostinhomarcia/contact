"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link href="/">PeoplePulse</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none ml-4" // Adiciona espaço entre o texto e o ícone
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0`}
        >
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/contacts" className="block text-white hover:text-gray-300">
              Lista de Contatos
            </Link>
            <Link href="/add-contact" className="block text-white hover:text-gray-300">
              Adicionar Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

