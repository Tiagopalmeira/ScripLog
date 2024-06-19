import { useState } from 'react';
import axios from 'axios';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedLoggedIn = localStorage.getItem('isLoggedIn');
    return storedLoggedIn ? JSON.parse(storedLoggedIn) : false;
  });
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const apiUrl = import.meta.env.VITE_API_URL;

  const login = async (registro, senha) => {
    try {
      const response = await axios.post(
        `${apiUrl}/usuario/auth/login`,
        { email: 'thiagopazba@gmail.com', senha: 'Dark@14756' },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        const token = response.data.token;
        setToken(token);
        setIsLoggedIn(true);
        localStorage.setItem('token', token);
        localStorage.setItem('isLoggedIn', JSON.stringify(true));
      } else {
        alert('Número de cadastro ou senha incorretos.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao tentar fazer login. Tente novamente mais tarde.');
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', JSON.stringify(false));
    localStorage.removeItem('token');
    setToken('');
  };

  return { isLoggedIn, login, logout, token };
};
