import GameStats from '../GameStats/GameStats';
import './Header.css'

function Header({gamerTag, games}) {
    return (
        <header className="header-style">
            <div className="title-style">
                <h1>🎮 GameHub <span className="gamer-tag">{gamerTag}</span></h1>
            </div>
            <div className="counter-style">
                Giochi in collezione: <b>{games.length}</b>
            </div>
            <GameStats giochi={games} />
        </header>
    );
}

export default Header;