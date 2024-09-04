"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-700 text-white">
        <h1 className="text-2xl font-bold">Carregando...</h1>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
