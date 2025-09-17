import Player from "./Player";

function Score({ scores }) {
  return (
    <div>
      <h2>Score</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <Player name="Player: 1" score={scores.player1} /> | {" "} | {" "} 
        <Player name="Player: 2" score={scores.player2} /> 
      </div>
    </div>
  );
}

export default Score;
