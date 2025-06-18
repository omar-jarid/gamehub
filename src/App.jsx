import './App.css'
import Header from './components/Header/Header'
import GameList from './components/GameList/GameList';
import Navigation from './components/Navigation/Navigation';
import { getAllGames } from './data/mockData'
import { useState } from 'react';

function App() {
  const giochi = getAllGames();
  const gamerTag = "Jerid616";

  const [activeTab, setActiveTab] = useState("tutti");
  const giochiFiltrati = activeTab === "tutti" ? giochi : giochi.filter(gioco => gioco.stato === activeTab);

  return (
    <>
      <Header gamerTag={gamerTag} totalGames={giochi.length} /> 
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <GameList giochi={giochiFiltrati} />
    </>
  )
}

export default App
