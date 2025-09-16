import Player from "./Player";

function Scoreboard({ scores }) {
  return (
    <div>
      <h2>Score</h2>
      <Player name="Player 1" score={scores.player1} />
      <Player name="Player 2" score={scores.player2} />
    </div>
  );
}

export default Scoreboard;
