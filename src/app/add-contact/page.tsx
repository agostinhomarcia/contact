"use client";

import { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { formatPhone } from "@/utils/formatPhone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "@/components/ProtectedRoute";

function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export default function AddContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhone(e.target.value);
    setPhone(formattedPhone);
  };

  const addContact = async () => {
    if (!validateEmail(email)) {
      toast.error("Por favor, insira um e-mail válido.");
      return;
    }

    if (phone.length < 14) {
      toast.error("Por favor, insira um telefone válido.");
      return;
    }

    await fetch("/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone }),
    });

    toast.success("Contato adicionado com sucesso!");

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <ProtectedRoute>
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
          Adicionar Contato
        </h1>
        <div className="space-y-4">
          <Input
            type="text"
            value={name}
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="tel"
            value={phone}
            placeholder="Telefone"
            onChange={handlePhoneChange}
          />
          <div className="flex justify-center">
            <Button onClick={addContact}>Adicionar</Button>
          </div>
        </div>
      </div>
      <ToastContainer />{" "}
    </div>
    </ProtectedRoute>
  );
}
