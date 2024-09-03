import Link from "next/link";
import { FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="flex justify-center">
        <div className="flex space-x-4">
          <Link
            href="https://www.linkedin.com/in/marcia-agostinho-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={28} />
          </Link>
          <Link
            href="https://github.com/agostinhomarcia"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <FaGithub size={28} />
          </Link>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm text-center md:text-left">
          © 2024 Márcia. Todos os direitos reservados.
        </p>
        <Link
          href="#"
          className="text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-center mt-4 md:mt-0"
        >
          <FaArrowUp className="mr-2" />
          Voltar ao Topo
        </Link>
      </div>
    </footer>
  );
}
