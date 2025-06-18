import './GameStats.css'

function GameStats({ giochi }) {
    const oreTotali = giochi.filter(
        gioco => gioco.stato === "completato" || gioco.stato === "in-corso"
    ).reduce(
        (sum, gioco) => sum + (gioco.oreGiocate || 0),
        0
    );

    const stati = ["completato", "in-corso", "wishlist", "abbandonato"];
    const giochiPerStato = stati.reduce(
        (acc, stato) => {
            acc[stato] = giochi.filter(gioco => gioco.stato === stato).length;
            return acc;
        },
        {}
    );

    const votoMedio = giochi.length > 0 ? (
        giochi.reduce(
            (sum, gioco) => sum + (gioco.voto || 0),
            0
        ) / giochi.length
    ).toFixed(2) : "N/A";

    const piattaformeCount = giochi.reduce(
        (acc, gioco) => {
            acc[gioco.piattaforma] = (acc[gioco.piattaforma] || 0) + 1;
            return acc;
        },
        {}
    );

    const piattaformaTop = Object.keys(piattaformeCount).length > 0
        ? Object.entries(piattaformeCount).sort((a, b) => b[1] - a[1])[0][0]
        : "N/A";

    return (
        <div className="game-stats">
            <h3 className="light-blue stats-title">📊 Statistiche Collezione</h3>
            <div>
                <b>Ore totali giocate:</b> <span className="light-blue">{oreTotali}</span>
            </div>
            <div className="games-per-status">
                <b>Giochi per stato</b>
                <ul className="status-item">
                {
                    stati.map(
                        stato => (
                            <li key={stato}>
                                {stato}: <span className="light-blue">{giochiPerStato[stato]}</span>
                            </li>
                        )
                    )
                }
                </ul>
            </div>
            <div>
                <b>Voto medio:</b> <span className="light-blue">{votoMedio}</span>
            </div>
            <div>
                <b>Piattaforma top:</b> <span className="light-blue">{piattaformaTop}</span>
            </div>
        </div>
    );    
}

export default GameStats;