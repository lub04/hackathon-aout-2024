import DestinationCard from "../../components/DestinationCard/DestinationCard";
import FilterComponent from "../../components/FilterComponents/FilterComponent";
import FilterBar from "../../components/Header/FilterBar";

import { useHackathon } from "../../context/HackathonContext";

import destinations from "../../../data";
import "./AllDestinations.css";

function AllDestination() {
  const { continentFilter, budgetValue } = useHackathon();

  const filteredDestinations = destinations.filter((destination) => {
    const matchesContinent =
      continentFilter === "Toutes les destinations" ||
      destination.Region === continentFilter;

    const matchesBudget = destination.sejour_price_USD <= budgetValue;

    const excludeParis = destination.City !== "Paris";

    return excludeParis && matchesContinent && matchesBudget;
  });

  return (
    <>
      <FilterBar />
      <FilterComponent />
      {filteredDestinations.length === 0 ? (
        <h1 className="error-title">
          Il n'y pas de destination pour ce budget !
        </h1>
      ) : (
        <section className="all-destination">
          {filteredDestinations.map((destination) => (
            <DestinationCard key={destination.id} city={destination} />
          ))}
        </section>
      )}
    </>
  );
}

export default AllDestination;
