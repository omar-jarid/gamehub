import './GameCard.css'

function GameCard({ gioco }) {
  return (
    <div className="card-style">
      <img src={gioco.coverUrl} alt={gioco.titolo} className="cover-style" />
      <div className="content-style">
        <div className="title-style">{gioco.titolo}</div>
        <div className="genre-style">{gioco.genere}</div>
        <div className={getVoteClass(gioco.voto)}>Voto: {gioco.voto}</div>
        <span className={gioco.stato}>{gioco.stato}</span>
      </div>
    </div>
  );
}

const getVoteClass = (voto) => {
    if (voto > 8) return "green";
    if (voto >= 6 && voto <= 8) return "yellow";

    return "red";
}


export default GameCard;