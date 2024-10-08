"use client";

import { useState, useEffect } from "react";
import Button from "@/components/Button";
import { formatPhone } from "@/utils/formatPhone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [search, setSearch] = useState("");


  useEffect(() => {
    fetch("/api/contacts")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data);
        setFilteredContacts(data);
      });
  }, []);

  useEffect(() => {
    const lowerSearch = search.toLowerCase();
    setFilteredContacts(
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(lowerSearch)
      )
    );
  }, [search, contacts]);

  const startEditing = (contact: Contact) => {
    setEditingContact(contact);
    setName(contact.name);
    setEmail(contact.email);
    setPhone(formatPhone(contact.phone));
  };

  const saveContact = async () => {
    if (editingContact) {
      await fetch("/api/contacts", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
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

      toast.success("Contato salvo com sucesso!");

      setEditingContact(null);
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  const deleteContact = async (id: number) => {
    await fetch("/api/contacts", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4 text-center md:text-left">
        Lista de Contatos
      </h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Pesquisar contato pelo nome"
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Lista de Contatos Filtrada */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2">
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-gray-800 p-4 rounded-lg shadow-md text-white"
            >
              <div className="mb-2">
                <strong>Nome:</strong> {contact.name}
              </div>
              <div className="mb-2">
                <strong>Email:</strong> {contact.email}
              </div>
              <div className="mb-2">
                <strong>Telefone:</strong> {formatPhone(contact.phone)}
              </div>
              <div className="flex justify-end space-x-2">
                <Button onClick={() => startEditing(contact)}>Editar</Button>
                <Button onClick={() => deleteContact(contact.id)}>Excluir</Button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">Nenhum contato encontrado.</p>
        )}
      </div>

      {/* Se estiver editando, exibir o formulário de edição */}
      {editingContact && (
        <div className="mt-6 p-4 bg-gray-700 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Editar</h2>
          <div className="space-y-4">
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-800 text-white"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="w-full p-2 rounded bg-gray-800 text-white"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              className="w-full p-2 rounded bg-gray-800 text-white"
              placeholder="Telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="flex space-x-2">
              <Button onClick={saveContact}>Salvar</Button>
              <Button onClick={() => setEditingContact(null)}>Cancelar</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
