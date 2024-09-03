import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link href="/" className="hover:text-gray-300">
          PeoplePulse
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/contacts" className="text-white hover:text-gray-300">
            Lista de Contatos
          </Link>
          <Link href="/add-contact" className="text-white hover:text-gray-300">
            Adicionar Contato
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
