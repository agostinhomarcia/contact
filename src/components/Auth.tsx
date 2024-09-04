// src/components/Auth.tsx
"use client";

import { useEffect, useState } from "react";
import { auth, provider, signInWithPopup, signOut } from "@/utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Auth() {
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

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Erro ao fazer login com o Google:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      {user ? (
        <div>
          <p>Bem-vindo, {user.displayName}</p>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
            Sair
          </button>
        </div>
      ) : (
        <button onClick={handleGoogleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
          Entrar com Google
        </button>
      )}
    </div>
  );
}
