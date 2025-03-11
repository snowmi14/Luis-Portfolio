import React, { useState } from 'react';
import ReactDOM from "react-dom";

import img1 from './TicketMinerPics/1.png';
import img2 from './TicketMinerPics/2.png';
import img3 from './TicketMinerPics/3.png';
import img4 from './TicketMinerPics/4.png';
import img5 from './TicketMinerPics/5.png';
import img6 from './TicketMinerPics/6.png';
import img7 from './TicketMinerPics/7.png';
import img8 from './TicketMinerPics/8.png';
import Presentation from './ResearchPaper/Project_Presentation_LuisQuiñones.pdf';
import Report from './ResearchPaper/Disguising_Attacks_with_Explanation_Aware_Backdoors.pdf';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openAlbum = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.classList.add("no-scroll");
  };

  const closeAlbum = () => {
    setIsOpen(false);
    document.body.classList.remove("no-scroll");
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="projects" className="album-section">
      <h2>Projects</h2>
      <div className="projects-grid">

        {/* start card */}
        <div className="flip-container">
          <div className="flip-box">
            <div className="flip-box-front">
              <h3>Forum-app</h3>
                <p>In this project we develop a forum in React. Where users were able to interact in real time
                    with the creation of threads and a smooth interaction between users.
                </p>
            </div>
            <div className="flip-box-back">
              <button className="open-btn">
                <a href="https://github.com/fermunoz17/forum-app" target="Github" rel="Github">
                  Github
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* end card */}

        {/* start card */}
        <div className="flip-container">
          <div className="flip-box">
            <div className="flip-box-front">
              <h3>Ticket Miner</h3>
                <p>I accomplish to develop a functional program that sells event tickets by working with objects to create real 
                  accounts of customers and availability of venues, events and tickets.
                </p>
            </div>
            <div className="flip-box-back">
              <button className="open-btn" onClick={() => openAlbum(0)}>
                View Album
              </button>
            </div>
          </div>
        </div>
        {/* end card */}

        {/* start card */}
        <div className="flip-container">
          <div className="flip-box">
            <div className="flip-box-front">
              <h3>Disguising Attacks with Explanation-Aware Backdoors</h3>
                <p>Implemented and reproduced adversarial attacks on machine learning models 
                  to bypass interpretability tools like Grad-CAM, SHAP, and LIME. Explored dataset 
                  expansion and new techniques to improve detection robustness.
                </p>
            </div>
            <div className="flip-box-back">
              <button className="open-btn">
                <a href={Presentation} target='_blank'>
                  Presentation
                </a>
              </button>
              <button className="open-btn">
                <a href={Report} target='_blank'>
                  Report
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* end card */}
      </div>

      {/* Modal using Portal */}
      {isOpen &&
        ReactDOM.createPortal(
          <div className="album-modal">
            <button className="close-btn" onClick={closeAlbum}>&times;</button>
            <button className="prev-btn" onClick={prevImage}>&#10094;</button>
            <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="album-image" />
            <button className="next-btn" onClick={nextImage}>&#10095;</button>

            {/* Thumbnail Navigation Inside the Modal */}
            <div className="gallery">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail ${index === currentIndex ? "active-thumbnail" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>,
          document.body // Ensures modal is outside section restrictions
        )}
    </section>
  );
}

export default Projects;