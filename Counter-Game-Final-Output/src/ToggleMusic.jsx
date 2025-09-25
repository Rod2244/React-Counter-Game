import Control from "./Control";

import { useState, useRef } from "react";

const ToggleMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("/GameboyST.mp3")); 

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      audioRef.current.loop = true; // Loop the music
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Control 
      onClick={toggleMusic}
        className={`music-btn ${isPlaying ? "stop" : "play"}`}
        label= {isPlaying ? "🔇 Stop Music" : "🎵 Play Music"}
    />
  );
};

export default ToggleMusic;
