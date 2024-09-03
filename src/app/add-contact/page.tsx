'use client';

import { useState } from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { formatPhone } from '@/utils/formatPhone';

export default function AddContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const addContact = async () => {
    await fetch('/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone }),
    });
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
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
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="flex justify-center">
            <Button onClick={addContact}>Adicionar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
