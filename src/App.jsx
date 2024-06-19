import React from 'react';
import Login from './components/login';
import Home from './components/home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './hooks/userAuth';

export default function App() {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div>{isLoggedIn ? <Home logout={logout} /> : <Login login={login} />}</div>
    </>
  );
}
