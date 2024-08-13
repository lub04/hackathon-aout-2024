import { useState } from "react";

import DestinationCard from "../../components/DestinationCard/DestinationCard";
import FilterComponent from "../../components/FilterComponents/FilterComponent";

import destinations from "../../../data";
import "./AllDestinations.css";

function AllDestination() {
  const [continentFilter, setContinentFilter] = useState(
    "Toutes les destinations"
  );

  const filteredDestinations = destinations.filter(
    (destination) =>
      destination.City !== "Paris" &&
      (continentFilter === "Toutes les destinations" ||
        destination.Region === continentFilter)
  );

  return (
    <>
      <FilterComponent setContinentFilter={setContinentFilter} />
      <section className="all-destination">
        {filteredDestinations.map((destination) => (
          <DestinationCard key={destination.id} city={destination} />
        ))}
      </section>
    </>
  );
}

export default AllDestination;
