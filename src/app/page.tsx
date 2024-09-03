import { FaUsers } from "react-icons/fa"; // Importando o ícone FaUsers

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700 text-white text-center p-4">
        {/* Adicionando o ícone no topo */}
        <FaUsers size={64} className="mb-4" /> {/* Ícone de usuários com tamanho 64px */}
        
        <h1 className="text-4xl font-bold mb-4">
          Bem-vindo ao PeoplePulse
        </h1>
        <p className="text-lg max-w-2xl">
          &quot;Organize, conecte e pulse com seus contatos como nunca antes. Simplifique suas interações e amplifique suas conexões com o poder do PeoplePulse.&quot;
        </p>
      </div>
    </div>
  );
}
