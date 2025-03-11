import { useState } from "react";

const images = [
  "https://source.unsplash.com/random/900x600?nature",
  "https://source.unsplash.com/random/900x600?city",
  "https://source.unsplash.com/random/900x600?animals",
];

export default function AlbumViewer() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openAlbum = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.classList.add("no-scroll"); // Prevent scrolling
  };

  const closeAlbum = () => {
    setIsOpen(false);
    document.body.classList.remove("no-scroll"); // Restore scrolling
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="container">
      <button className="open-btn" onClick={() => openAlbum(0)}>
        Open Album
      </button>

      {/* Thumbnail Gallery */}
      <div className="gallery">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className="thumbnail"
            onClick={() => openAlbum(index)}
          />
        ))}
      </div>

      {/* Full-Screen Album Modal */}
      {isOpen && (
        <div className="album-modal">
          <button className="close-btn" onClick={closeAlbum}>&times;</button>
          <button className="prev-btn" onClick={prevImage}>&#10094;</button>
          <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="album-image" />
          <button className="next-btn" onClick={nextImage}>&#10095;</button>
        </div>
      )}
    </div>
  );
}

/* Prevent background scrolling when modal is open */
.no-scroll {
    overflow: hidden;
  }
  
  /* Main container */
  .container {
    text-align: center;
    padding: 20px;
  }
  
  /* Open button */
  .open-btn {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .open-btn:hover {
    background-color: #0056b3;
  }
  
  /* Full-Screen Album Modal */
  .album-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  /* Album Image */
  .album-image {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    border-radius: 5px;
  }
  
  /* Close Button */
  .close-btn {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 40px;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .close-btn:hover {
    color: red;
  }
  
  /* Navigation Arrows */
  .prev-btn, .next-btn {
    position: absolute;
    top: 50%;
    font-size: 50px;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
    transform: translateY(-50%);
  }
  
  .prev-btn {
    left: 20px;
  }
  
  .next-btn {
    right: 20px;
  }
  
  .prev-btn:hover, .next-btn:hover {
    color: yellow;
  }
  