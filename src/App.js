import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './app/header/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
