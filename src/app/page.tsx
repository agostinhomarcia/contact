'use client';

import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { FaUsers } from 'react-icons/fa';

export default function Home() {
  const { user, login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/contacts');
    }
  }, [user, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700 text-white text-center p-4">
      <FaUsers size={64} className="mb-4" /> 

      <h1 className="text-4xl font-bold mb-4">
        Bem-vindo ao PeoplePulse
      </h1>
      <p className="text-lg max-w-2xl mb-6">
        &quot;Transforme suas conexões com o PeoplePulse. Organize, conecte e potencialize suas interações, criando relacionamentos poderosos. Sinta o pulsar das suas redes de forma inédita e simplifique o contato com as pessoas que realmente importam.&quot;
      </p>

      <button
        onClick={login}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Entrar com Google
      </button>
    </div>
  );
}
