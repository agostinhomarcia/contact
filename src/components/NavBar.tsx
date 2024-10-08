"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaGoogle } from "react-icons/fa"; 
import { auth, provider, signInWithPopup, signOut } from "@/utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
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
            className="text-white focus:outline-none ml-4"
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
              Meus Contatos
            </Link>
            <Link href="/add-contact" className="block text-white hover:text-gray-300">
              Adicionar Contato
            </Link>

            {user ? (
              <>
                <span className="text-white">Olá, {user.displayName}</span>
                <button
                  onClick={handleLogout}
                  className="block text-white hover:text-gray-300"
                >
                  Sair
                </button>
              </>
            ) : (
              <button
                onClick={handleLogin}
                className="flex items-center space-x-2 text-white hover:text-gray-300"
              >
                <FaGoogle size={20} />
                <span>Entrar</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
