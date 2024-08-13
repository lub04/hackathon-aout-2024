import "./FilterComponent.css";
import { useHackathon } from "../../context/HackathonContext";

function FilterComponent() {
  const { setContinentFilter, continents, continentFilter } = useHackathon();

  return (
    <section className="filter-box">
      <input
        onClick={() => setContinentFilter("Toutes les destinations")}
        aria-label="Toutes les destinations"
        type="button"
        value="Toutes les destinations"
        className={
          continentFilter === "Toutes les destinations"
            ? "continent-filter-selected"
            : "continent-filter"
        }
      />
      {continents.map((continent) => (
        <button
          onClick={() => setContinentFilter(continent)}
          key={continent}
          aria-label={continent}
          type="button"
          className={
            continentFilter === continent
              ? "continent-filter-selected"
              : "continent-filter"
          }
        >
          {continent}
        </button>
      ))}
    </section>
  );
}

export default FilterComponent;
