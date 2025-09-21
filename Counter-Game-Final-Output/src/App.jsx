import { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";
import Gameboard from "./Gameboard";
import Score from "./Score";
import ToggleMusic from "./ToggleMusic";
import "./App.css";

function App() {
  const WINNING_SCORE = 10;

  const [scores, setScores] = useState({ player1: 0, player2: 0 });
  const [winner, setWinner] = useState(null);
  const [history, setHistory] = useState([]);   // ✅ Save past games
  const [showHistory, setShowHistory] = useState(false); // ✅ Toggle

  const winningSound = new Audio("/win1.mp3");
        winningSound.volume = 1.0;
        winningSound.preload = "auto";

  // Function to update score and check winner
  const updateScore = (player) => {
    setScores((prevScores) => {
      const newScores = {
        ...prevScores,
        [player]: prevScores[player] + 1,
      };

      if (newScores[player] >= WINNING_SCORE) {
        setWinner(player);

        
        winningSound.currentTime = 0;
        winningSound.play();
      }

      return newScores;
    });
  };

  useEffect(() => {
    if (winner) {
      // Save result in history
        setHistory((prev) => [
          ...prev,
          { scores, winner, id: Date.now() }
        ]);
    }
  }, [winner]);

  const resetScores = () => {
    setScores({ player1: 0, player2: 0 });
    setWinner(null);
  };

  // Keybinds
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!winner && !showHistory) {
        if (event.key.toLowerCase() === "a") {
          updateScore("player1");
        } else if (event.key.toLowerCase() === "l") {
          updateScore("player2");
        }
      }
      if (event.key.toLowerCase() === "r") {
        resetScores();
      }
    };

    

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [winner, showHistory]);

  return (
    <div className="Game">
      <ToggleMusic />
      {/*  Menu controls */}
      <Scoreboard showHistory={showHistory} setShowHistory={setShowHistory} />

      <h1>⚡ 2 Player Click Counter Game ⚡</h1>

      {/*  Show either Scoreboard or History */}
      {showHistory ? (
        <div>
          <h2>🏆Scoreboard🏆</h2>
          {history.length === 0 ? (
            <p>No games played yet.</p>
          ) : (
            history.map((game) => (
              <div key={game.id} className="history">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr", // two equal columns
                    textAlign: "center",
                    width: "100%"
                  }}
                >
                  <div>
                    <p style={{ margin: 0 }}>Player 1:</p>
                    <p style={{ margin: 0, fontWeight: "bold" }}>{game.scores.player1}</p>
                  </div>
                  <div>
                    <p style={{ margin: 0 }}>Player 2:</p>
                    <p style={{ margin: 0, fontWeight: "bold" }}>{game.scores.player2}</p>
                  </div>
                </div>
                
                <p>Winner:🎉 {game.winner.toUpperCase()}</p>
              </div>
            ))
          )}
        </div>
      ) : (
        <>
          <Score scores={scores} />
          {winner ? (
            <>
            <h2>🎉 {winner.toUpperCase()} Wins! 🎉</h2>
            <Gameboard resetScores={resetScores}/>
            </>
          ) : (
            <Gameboard updateScore={updateScore} resetScores={resetScores} />
          )}
        </>
      )}

      <p style={{ color: "black" }}>
        ⌨️ Press <b>A</b> for Player 1, <b>L</b> for Player 2, <b>R</b> to Reset
      </p>
    </div>
  );
}

export default App;
