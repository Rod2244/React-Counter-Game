import Control from "./Control";

function Scoreboard({ setShowHistory }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Control label="🎮 Gamepage" onClick={() => setShowHistory(false)}/>
        

      <Control label="🏆 Scoreboard" onClick={() => setShowHistory(true)}/>
        
    </div>
  );
}

export default Scoreboard;