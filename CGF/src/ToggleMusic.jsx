import { useState, useRef } from "react";

const ToggleMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("/GameboyST.mp3")); // put music.mp3 inside public/

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      audioRef.current.loop = true; // keeps looping
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button 
      onClick={toggleMusic}
        className={`music-btn ${isPlaying ? "stop" : "play"}`}
    >
      {isPlaying ? "🔇 Stop Music" : "🎵 Play Music"}
    </button>
  );
};

export default ToggleMusic;
