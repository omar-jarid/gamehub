import './App.css'
import Header from './components/Header/Header'
import GameCard from './components/GameCard/GameCard';
import { getAllGames } from './data/mockData'

function App() {
  const giochi = getAllGames();
  const gamerTag = "Jerid616";

  return (
    <>
      <Header gamerTag={gamerTag} totalGames={giochi.length} /> 
      {
        giochi.map((gioco) => <GameCard key={gioco.id} gioco={gioco} />)
      }
    </>
  )
}

export default App
