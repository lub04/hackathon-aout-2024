import DestinationCard from "../../components/DestinationCard/DestinationCard";

import destinations from "../../../data";
import "./AllDestinations.css";

function AllDestination() {
  const allExeptParis = destinations.filter(
    (destination) => destination.City !== "Paris"
  );

  return (
    <main className="all-destination">
      {allExeptParis.map((destination) => (
        <DestinationCard key={destination.id} city={destination} />
      ))}
    </main>
  );
}

export default AllDestination;
