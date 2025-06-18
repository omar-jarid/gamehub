import './GameList.css'
import GameCard from '../GameCard/GameCard';

function GameList({ giochi }) {
  return (
    <div className="grid">
      { giochi.map(gioco => <GameCard key={gioco.id} gioco={gioco}/>) }
    </div>
  );
}


export default GameList;