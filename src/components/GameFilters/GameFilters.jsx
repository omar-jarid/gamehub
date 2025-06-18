import './GameFilters.css';

const getUniqueValues = (giochi, key) => [...new Set(giochi.map(gioco => gioco[key]))].sort();

function GameFilters({
    giochi,
    filtroGenere,
    setFiltroGenere,
    filtroPiattaforma,
    setFiltroPiattaforma,
    votoMin,
    setVotoMin,
    soloWishlist,
    setSoloWishlist
}) {
    const generi = getUniqueValues(giochi, "genere");
    const piattaforme = getUniqueValues(giochi, "piattaforma");

    return (
        <div className="filters-container">
            <div className="filter-section">
                <label>Genere</label>
                <select 
                    value={filtroGenere} 
                    onChange={(e) => setFiltroGenere(e.target.value)}
                    className="filter"
                >
                    <option value="">Tutti</option>
                    {generi.map(genere => <option key={genere} value={genere}>{genere}</option>)}
                </select>
            </div>
            <div className="filter-section">
                <label>Piattaforma</label>
                <select 
                    value={filtroPiattaforma} 
                    onChange={(e) => setFiltroPiattaforma(e.target.value)}
                    className="filter"
                >
                    <option value="">Tutte</option>
                    {piattaforme.map(
                        piattaforma => <option key={piattaforma} value={piattaforma}>{piattaforma}</option>
                    )}
                </select>
            </div>
            <div className="filter-section">
                <label>Voto minimo</label>
                <input 
                    type="range" 
                    min={1} 
                    max={10} 
                    value={votoMin} 
                    onChange={(e) => setVotoMin(e.target.value)}
                    className="range" />
            </div>
            <div className="filter-section">
                <label>Wishlist</label>
                <input 
                    type="checkbox" 
                    checked={soloWishlist} 
                    onChange={(e) => setSoloWishlist(e.target.checked)} 
                    className="checkbox" />
            </div>
        </div>
    );
}

export default GameFilters;