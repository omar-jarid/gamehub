import { useState } from "react";
import './GameCard.css'

const getVoteClass = (voto) => {
    if (voto > 8) return "green";
    if (voto >= 6 && voto <= 8) return "yellow";

    return "red";
}

function GameCard({ gioco }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggle = () => setShowDetails(v => !v);

  return (
    <div className="card-style" onClick={handleToggle} title="Mostra dettagli">
      <img src={gioco.coverUrl} alt={gioco.titolo} className="cover-style" />
      <div className="content-style">
        <div className="title-style">{gioco.titolo}</div>
        <div className="genre-style">{gioco.genere}</div>
        <div className={getVoteClass(gioco.voto)}>Voto: {gioco.voto}</div>
        <span className={gioco.stato}>{gioco.stato}</span>

        {
          showDetails && (
            <div className="details-style">
              <span className="platform-style">{gioco.piattaforma}</span>
              <span className="year-style">{gioco.annoUscita}</span>
              <div className="price-style">{gioco.prezzo}€</div>
              <span className="hours-played-style">{gioco.oreGiocate} ore giocate</span>
              <span className="difficulty-style">{gioco.difficolta}</span>
            </div>
          )
        }
        
      </div>
    </div>
  );
}

export default GameCard;