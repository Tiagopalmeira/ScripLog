import { useState } from 'react';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedLoggedIn = localStorage.getItem('isLoggedIn');
    return storedLoggedIn ? JSON.parse(storedLoggedIn) : false;
  });

  const login = (registro, senha) => {
    if (registro === 'admin' && senha === 'admin') {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
    } else {
      alert('Número de cadastro ou senha incorretos.');
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return { isLoggedIn, login, logout };
};
