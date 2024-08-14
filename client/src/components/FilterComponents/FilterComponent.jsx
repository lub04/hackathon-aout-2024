import "./FilterComponent.css";
import { useHackathon } from "../../context/HackathonContext";

function FilterComponent() {
  const { setContinentFilter, continents, continentFilter } = useHackathon();
  const handleClickFilter1 = (continent) => {
    setContinentFilter(continent);
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };
  const handleClickFilter2 = () => {
    setContinentFilter("Toutes les destinations");
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };
  return (
    <section className="filter-box">
      <input
        onClick={() => handleClickFilter2()}
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
          onClick={() => handleClickFilter1(continent)}
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
