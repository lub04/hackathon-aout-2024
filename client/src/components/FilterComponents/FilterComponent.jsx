import "./FilterComponent.css";

function FilterComponent({ setContinentFilter }) {
  const continents = [
    "Amerique du nord",
    "Europe",
    "Asie",
    "Australie/Pacifique Sud",
    "Moyen-Orient",
    "Amérique du Sud/Centrale et Caraïbes",
  ];
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
