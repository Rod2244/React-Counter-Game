/*Component that displays the player's name and score*/
function Player({ name, score }) {
  return (
    <div style={{ margin: "10px" }}>
      <h3>{name}</h3>
      <p>Score: {score}</p>
    </div>
  );
}

export default Player;