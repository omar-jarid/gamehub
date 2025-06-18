import './App.css'
import Header from './components/Header/Header'
import GameList from './components/GameList/GameList';
import Navigation from './components/Navigation/Navigation';
import { getAllGames } from './data/mockData'
import { useState } from 'react';
import GameFilters from './components/GameFilters/GameFilters';

function App() {
  const giochi = getAllGames();
  const gamerTag = "Jerid616";

  const [filtroGenere, setFiltroGenere] = useState("");
  const [filtroPiattaforma, setFiltroPiattaforma] = useState("");
  const [votoMin, setVotoMin] = useState(1);
  const [soloWishlist, setSoloWishlist] = useState(false); 

  const [activeTab, setActiveTab] = useState("tutti");
  const giochiFiltrati = giochi
    .filter(gioco => activeTab === "tutti" ? true : gioco.stato === activeTab)
    .filter(gioco => filtroGenere ? gioco.genere === filtroGenere : true)
    .filter(gioco => filtroPiattaforma ? gioco.piattaforma === filtroPiattaforma : true)
    .filter(gioco => gioco.voto >= votoMin)
    .filter(gioco => soloWishlist ? gioco.stato === "wishlist" : true);

  return (
    <>
      <Header gamerTag={gamerTag} games={giochi} /> 
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
      <GameList giochi={giochiFiltrati} />
    </>
  )
}

export default App
