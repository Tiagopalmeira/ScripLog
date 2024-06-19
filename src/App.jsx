import React from 'react';
import { useEffect, useState } from 'react';
import Login from './components/login';
import Home from './components/home';
import { useAuth } from './hooks/userAuth.js';

export default function App() {
  const { isLoggedIn, login, logout } = useAuth();

  return <div>{isLoggedIn ? <Home logout={logout} /> : <Login login={login} />}</div>;
}
