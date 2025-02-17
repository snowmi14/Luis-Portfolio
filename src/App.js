import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills'
import Links from './components/Links';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Links />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
