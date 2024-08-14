import { useNavigate, Link } from "react-router-dom";
import { useHackathon } from "../../context/HackathonContext";
import "./FilterBar.css";
import logo from "../../assets/logoblanc.png";

function FilterBar() {
  const {
    continents,
    continentFilter,
    setContinentFilter,
    budgetValue,
    setBudgetValue,
  } = useHackathon();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Destinations");
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  return (
    <div className="app-homepage">
      <nav className="header">
        <div>
          <img className="logo-homepage" src={logo} alt="Logo" />
          <a href="/">
            <h2 className="logo">BougeTonQ.com</h2>
          </a>
        </div>
        <Link to="/favoris" className="favory-link">
          Mes favoris !
        </Link>
      </nav>
      <header className="main-content">
        <h1 className="main-title">Let's trip</h1>
        <form className="input-group" onSubmit={handleSubmit}>
          <select
            id="continents"
            className="input-field"
            value={continentFilter}
            onChange={(e) => setContinentFilter(e.target.value)}
          >
            <option value="Toutes les destinations">
              Toutes les destinations
            </option>
            {continents.map((continent) => (
              <option key={continent}>{continent}</option>
            ))}
          </select>
          <fieldset>
            <legend>Budget hebdomadaire</legend>
            <input
              id="budget"
              type="range"
              min="500"
              max="4000"
              step="10"
              onChange={(e) => setBudgetValue(e.target.value)}
              value={budgetValue}
              className="input-field"
            />
            <div>{budgetValue / 2} €</div>
          </fieldset>

          <button type="submit" className="submit-button">
            Rechercher
          </button>
        </form>
      </header>
    </div>
  );
}

export default FilterBar;
