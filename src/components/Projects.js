import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="flip-container">
          <div className="flip-box">
            <div className="flip-box-front">
              <h3>Forum-app</h3>
                <p>In this project we develop a forum in React. Where users were able to interact in real time
                    with the creation of threads and a smooth interaction between users.
                </p>
            </div>
            <div className="flip-box-back">
              <a href="https://github.com/fermunoz17/forum-app" target="Github" rel="Github">
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="flip-container">
          <div className="flip-box">
            <div className="flip-box-front">
              <h3>Ticket Miner</h3>
                <p>I accomplish to develop a functional program that sells event tickets by working with objects to create real 
                    accounts of customers and availability of venues, events and tickets.
                </p>
            </div>
            <div className="flip-box-back">
              <a href="https://github.com/UTEPAOOP/pa4-jorgej-luisq-marcop-mariag" target="Github" rel="Github">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
