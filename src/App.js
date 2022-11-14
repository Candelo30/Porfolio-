import React, { useState, useEffect } from 'react';
import { Header } from './components/header/';
import { Home } from './components/home/';
import './style.css';
function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <Home />
      </main>
    </React.Fragment>
  );
}

export default App;
