import React from 'react';
import resumeFile from './LuisQuinones_2-15-2025.pdf';


function Header() {
  return (
    <header>
      <h1>Luis Quiñones</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#Links">Links</a>
        <a href="#contact">Contact</a>
        <a href={resumeFile} target='_blank'>Resume</a>
      </nav>
    </header>
  );
}

export default Header;
