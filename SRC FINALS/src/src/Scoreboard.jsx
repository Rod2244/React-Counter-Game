function Scoreboard({ showHistory, setShowHistory }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={() => setShowHistory(false)} style={{ margin: "10px" }}>
        🎮 Gamepage
      </button>
      <button onClick={() => setShowHistory(true)} style={{ margin: "10px" }}>
        🏆 Scoreboard
      </button>
    </div>
  );
}

export default Scoreboard;