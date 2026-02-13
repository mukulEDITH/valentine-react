import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import rose from "../src/assets/rose.png";
import smallImg from "../src/assets/cute.jpeg"; // or another image
import song from "../src/assets/Songcut.mp3";
import harshit from "../src/assets/harshit.png"



function App() {
  const [yesSize, setYesSize] = useState(1);
  const [showMessage, setShowMessage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [showSmallImage, setShowSmallImage] = useState(false);
  const [text, setText] = useState("");

  const audioRef = useRef(null);

// Start music on first click
useEffect(() => {
  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
    document.removeEventListener("click", startMusic);
  };

  document.addEventListener("click", startMusic);

  return () => {
    document.removeEventListener("click", startMusic);
  };
}, []);


// Show text + image after 5 seconds
useEffect(() => {
  const timer = setTimeout(() => {
    setText("I knew you would say yes ❤️");
    setShowSmallImage(true);
  }, 5000);

  return () => clearTimeout(timer);
}, []);



  useEffect(() => {
    const timer = setTimeout(() => {
      <h1>setShowSmallImag"</h1>
    }, 2000);

    return () => clearTimeout(timer);
  }, []);



  const handleNoClick = () => {
    setYesSize(prev => prev + 0.3);
    setShowMessage(true);

    // if (audioRef.current) {
    //   audioRef.current.play();
    // }
  };

  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * 60 - 30);
    const randomY = Math.floor(Math.random() * 60 - 30);
    setNoPosition({ x: randomX, y: randomY });
  };

  return (
    <div className="container">

      <audio ref={audioRef} loop>
        <source src={song} type="audio/mpeg" />
      </audio>

      <h1 className="title">Will You Be My Valentine?</h1>

      <img src={rose} alt="rose" className="rose" />

      {showSmallImage && (
        <img src={smallImg} alt="small" className="small-image" />
      )}

      {showMessage && (
        <div className="please-text">
          Please say yes na 🥺
        </div>
      )}

      <div className="button-group">
        <button
          className="yes-btn"
          style={{ transform: `scale(${yesSize})` }}
          onClick={() => setShowModal(true)}
        >
          Yes 💖
        </button>

        <button
          className="no-btn"
          style={{
            transform: `translate(${noPosition.x}px, ${noPosition.y}px)`
          }}
          onMouseEnter={moveNoButton}
          onClick={handleNoClick}
        >
          No 😢
        </button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Yayyyy 💕</h2>
            <img src={harshit} alt="rose" className="harshit" />
            <p className="twirl">
              Thank you for being my Valentine. I love you forever ❤️
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
