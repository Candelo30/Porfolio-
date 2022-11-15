import React, { useState, useEffect } from 'react';
import { Header } from './components/header/';
import { Home } from './components/home/';
import { About } from './components/about/';
import { Projects } from './components/projects/';
import { Contact } from './components/contact/';
import { Footer } from './components/footer/';
import { Social } from './components/Social/';
import './style.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <Social/>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
