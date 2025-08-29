'use client';

import { useState } from "react";

export const metadata = {
  title: "Contato | Nexus Academy",
  description: "Entre em contato conosco para solicitar informações sobre nossos serviços, treinamentos ou soluções SaaS.",
};

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Mensagem enviada! Entraremos em contato em breve.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div style={{ padding: '2rem', color: '#e2e8f0' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Contato</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '500px' }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
          required
          style={{ padding: '0.5rem', marginBottom: '0.75rem', borderRadius: '4px' }}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          style={{ padding: '0.5rem', marginBottom: '0.75rem', borderRadius: '4px' }}
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Mensagem"
          required
          rows={4}
          style={{ padding: '0.5rem', marginBottom: '0.75rem', borderRadius: '4px' }}
        />
        <button
          type="submit"
          style={{ padding: '0.5rem', backgroundColor: '#1c7ed6', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
