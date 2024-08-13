import "./FilterComponent.css";
import { useHackathon } from "../../context/HackathonContext";

function FilterComponent() {
  const { setContinentFilter, continents } = useHackathon();

  return (
    <section className="filter-box">
      <input
        onClick={() => setContinentFilter("Toutes les destinations")}
        aria-label="Toutes les destinations"
        type="button"
        value="Toutes les destinations"
        className="continent-filter"
      />
      {continents.map((continent) => (
        <button
          onClick={() => setContinentFilter(continent)}
          key={continent}
          aria-label={continent}
          type="button"
          className="continent-filter"
        >
          {continent}
        </button>
      ))}
    </section>
  );
}

export default FilterComponent;
