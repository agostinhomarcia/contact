'use client';

import { useState } from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Link from 'next/link';

export default function Home() {
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
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Contact Manager</h1>
        
        <Link href="/contacts" className="text-blue-400 hover:underline mb-4 inline-block">
         Lista de Contatos
        </Link>
        
        <div className="space-y-4">
          <Input
            type="text"
            value={name}
            placeholder="Name"
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
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button onClick={addContact}>Add Contact</Button>
        </div>
      </div>
    </div>
  );
}
