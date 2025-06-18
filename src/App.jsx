import './App.css'
import Header from './components/Header/Header'
import { getAllGames } from './data/mockData'

function App() {
  const giochi = getAllGames();
  const gamerTag = "Jerid616";

  return (
    <Header gamerTag={gamerTag} totalGames={giochi.length} /> 
  )
}

export default App
