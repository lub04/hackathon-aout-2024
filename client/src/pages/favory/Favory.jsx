import DestinationCard from "../../components/DestinationCard/DestinationCard";
import Footer from "../../components/Footer/Footer";
import FilterBar from "../../components/Header/FilterBar";
import { useHackathon } from "../../context/HackathonContext";

import "./favory.css";

function Favory() {
  const { favory } = useHackathon();
  return (
    <div>
      <FilterBar />
      <main className="container">
        {favory.length > 0 ? (
          <h1 className="error-title">Mes destinations favorites :</h1>
        ) : (
          <h1 className="error-title err">
            Vous n'avez pas de destinations enregistrée en favoris !
          </h1>
        )}
        {favory.map((destination) => (
          <DestinationCard key={destination.id} city={destination} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default Favory;
