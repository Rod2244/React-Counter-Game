//imported the control component here to use the buttons from control.jsx
/*add player 1 button so that when it clicks it will increased the score of player one,
same goas to player 2 button, and a reset where it will reset the score of both players*/
import Control from "./Control";

function Gameboard({ updateScore, resetScores }) {
  return (
    <div>
      <h2>Gameboard</h2>
      <Control label="Player 1 +1" onClick={() => updateScore("player1")} />
      <Control label="Player 2 +1" onClick={() => updateScore("player2")} />
      <Control label="Reset" onClick={resetScores} />
    </div>
  );
}

export default Gameboard;