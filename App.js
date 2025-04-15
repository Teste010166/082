import React, { useState } from 'react';
import './App.css';

const validKeys = ['KEY123', 'FFHS082', 'VIPUSER'];

export default function App() {
  const [key, setKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [auxEnabled, setAuxEnabled] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (validKeys.includes(key.trim().toUpperCase())) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Chave inválida');
    }
  };

  const toggleAux = () => {
    setAuxEnabled(!auxEnabled);
  };

  if (!isAuthenticated) {
    return (
      <div className="container">
        <h2>082 Design Studio</h2>
        <input
          type="text"
          placeholder="Digite sua Key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <button onClick={handleLogin}>Entrar</button>
        {error && <p className="error">{error}</p>}
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Ativador de Mira</h2>
      <button onClick={toggleAux} className={auxEnabled ? 'on' : 'off'}>
        {auxEnabled ? 'Auxílio ATIVADO' : 'Ativar auxílio de mira'}
      </button>
      <p>Status: {auxEnabled ? 'Ligado' : 'Desligado'}</p>
    </div>
  );
}