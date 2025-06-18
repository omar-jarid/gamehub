import GameStats from '../GameStats/GameStats';
import './Header.css'

function Header({ gamerTag, games, search, setSearch }) {
    return (
        <header className="header-style">
            <div className="title-style">
                <h1>🎮 GameHub <span className="gamer-tag">{gamerTag}</span></h1>
            </div>
            <div className="counter-style">
                Giochi in collezione: <b>{games.length}</b>
            </div>
            <GameStats giochi={games} />
            <div className="search-style">
                <input 
                    type="text" 
                    placeholder="Cerca un gioco..." 
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="input-style"/>
            </div>
        </header>
    );
}

export default Header;