'use client';

import { useState, useEffect } from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { formatPhone } from '@/utils/formatPhone';

type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    fetch('/api/contacts')
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  const startEditing = (contact: Contact) => {
    setEditingContact(contact);
    setName(contact.name);
    setEmail(contact.email);
    setPhone(contact.phone);
  };

  const saveContact = async () => {
    if (editingContact) {
      await fetch('/api/contacts', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: editingContact.id,
          name,
          email,
          phone,
        }),
      });
      
      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact.id === editingContact.id
            ? { ...contact, name, email, phone }
            : contact
        )
      );
      
      setEditingContact(null);
      setName('');
      setEmail('');
      setPhone('');
    }
  };

  const deleteContact = async (id: number) => {
    await fetch('/api/contacts', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-white mb-4">Lista de Contatos</h1>
      {editingContact && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">Editar</h2>
          <div className="grid grid-cols-1 gap-4 max-w-md">
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
            <div className="flex space-x-2">
              <Button onClick={saveContact}>Salvar</Button>
              <Button onClick={() => setEditingContact(null)}>Cancelar</Button>
            </div>
          </div>
        </div>
      )}
      <table className="min-w-full bg-gray-800 border border-gray-600 text-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-600 text-left">Name</th>
            <th className="py-2 px-4 border-b border-gray-600 text-left">Email</th>
            <th className="py-2 px-4 border-b border-gray-600 text-left">Phone</th>
            <th className="py-2 px-4 border-b border-gray-600 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id} className="hover:bg-gray-700">
              <td className="py-2 px-4 border-b border-gray-600">{contact.name}</td>
              <td className="py-2 px-4 border-b border-gray-600">{contact.email}</td>
              <td className="py-2 px-4 border-b border-gray-600">{formatPhone(contact.phone)}</td>
              <td className="py-2 px-4 border-b border-gray-600 text-center">
                <div className="flex justify-center space-x-2">
                  <Button onClick={() => startEditing(contact)}>Edit</Button>
                  <Button onClick={() => deleteContact(contact.id)}>Delete</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
