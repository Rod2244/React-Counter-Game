//Component for player 1, 2, and reset buttons
function Control({ label, onClick, className}) {
  return (
    <button className={className} style={{margin: "5px", padding: "10px 20px" }} 
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Control;
