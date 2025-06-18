import './App.css'
import Header from './components/Header/Header'
import GameList from './components/GameList/GameList';
import Navigation from './components/Navigation/Navigation';
import { getAllGames } from './data/mockData'
import { useState, useEffect } from 'react';
import GameFilters from './components/GameFilters/GameFilters';

function App() {
  const giochi = getAllGames();
  const gamerTag = "Jerid616";

  const [filtroGenere, setFiltroGenere] = useState("");
  const [filtroPiattaforma, setFiltroPiattaforma] = useState("");
  const [votoMin, setVotoMin] = useState(1);
  const [soloWishlist, setSoloWishlist] = useState(false); 
  const [search, setSearch] = useState(""); 
  const [activeTab, setActiveTab] = useState("tutti");

  const [loading, setLoading] = useState(false); 

  useEffect(
    () => {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    },
    [filtroGenere, filtroPiattaforma, votoMin, soloWishlist, search, activeTab]
  );

  const giochiFiltrati = giochi
    .filter(gioco => activeTab === "tutti" ? true : gioco.stato === activeTab)
    .filter(gioco => filtroGenere ? gioco.genere === filtroGenere : true)
    .filter(gioco => filtroPiattaforma ? gioco.piattaforma === filtroPiattaforma : true)
    .filter(gioco => gioco.voto >= votoMin)
    .filter(gioco => soloWishlist ? gioco.stato === "wishlist" : true)
    .filter(
      gioco => search.trim() === "" ? true : (
        gioco.titolo.toLowerCase().includes(search.toLowerCase()) ||
        gioco.genere.toLowerCase().includes(search.toLowerCase())
      )
    );

  return (
    <>
      <Header gamerTag={gamerTag} games={giochi} search={search} setSearch={setSearch}/> 
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <GameFilters
        giochi={giochi}
        filtroGenere={filtroGenere}
        setFiltroGenere={setFiltroGenere}
        filtroPiattaforma={filtroPiattaforma}
        setFiltroPiattaforma={setFiltroPiattaforma}
        votoMin={votoMin}
        setVotoMin={setVotoMin}
        soloWishlist={soloWishlist}
        setSoloWishlist={setSoloWishlist} />
      <div className="filtered-games">Risultati: {giochiFiltrati.length} / {giochi.length}</div>
      {
        loading ? (
          <div className="loading-games">
            <span className="emoji" role="img" aria-label="joystick">🎮</span>
            <br />
            Caricamento giochi...
          </div>
        ) : (
          giochiFiltrati.length > 0 ? (
            <GameList giochi={giochiFiltrati} />
          ) : (
            <div className="no-games">
              <span className="emoji">😢</span>
              Nessun gioco trovato!<br />
              Prova a cambiare i filtri o la ricerca.
            </div>
          )
        )
      }
    </>
  )
}

export default App
