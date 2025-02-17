import React from 'react';

import python from './SkillsPics/python.png';
import java from './SkillsPics/java.png';
import php from './SkillsPics/php.png';
import html from './SkillsPics/html.png';
import javascript from './SkillsPics/javascript.png';

import figma from './ToolsPics/figma.png';
import firabase from './ToolsPics/firabase.png';
import git from './ToolsPics/git.png';
import github from './ToolsPics/github.png';

function Projects() {
  return (
    <section id="Skills">
        <h2>Skills</h2>
        <div className="Skills-box">
            <h3>Programing Languages</h3>
            <div className='Skills-grid'>
              <img src={python} alt='python'/>
              <img src={java} alt='java'/>
              <img src={javascript} alt='javascript'/>
              <img src={php} alt='php'/>
              <img src={html} alt='html'/>
            </div>
        </div>
        <div className="Skills-box">
            <h3>Tools</h3>
            <div className='Skills-grid'>
              <img src={git} alt='git'/>
              <img src={github} alt='github'/>
              <img src={firabase} alt='firabase'/>
              <img src={figma} alt='figma'/>
            </div>
        </div>
    </section>
  );
}

export default Projects;
