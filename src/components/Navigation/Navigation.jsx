import './Navigation.css'

const tabs = [
  { label: "Tutti", value: "tutti" },
  { label: "Completati", value: "completato" },
  { label: "In Corso", value: "in-corso" },
  { label: "Wishlist", value: "wishlist" },
  { label: "Abbandonati", value: "abbandonato" }
];

const getTabClass = (isActive) => isActive ? "active-tab" : "idle-tab";

function Navigation({ activeTab, setActiveTab }) {
    return (
        <nav className="nav-style">
        {
            tabs.map(
                tab => (
                    <button
                        key={tab.value}
                        className={getTabClass(activeTab === tab.value)}
                        onClick={() => setActiveTab(tab.value)}
                    >
                        {tab.label}
                    </button>
                )
            )
        }
        </nav>
    );
}

export default Navigation;