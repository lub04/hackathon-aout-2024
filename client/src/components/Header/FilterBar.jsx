import { useState } from "react";

import "./FilterBar.css";
import logo from "../../assets/logoblanc.png";

function FilterBar() {
  const [budgetValue, setBudgetValue] = useState(500);

  return (
    <div className="app-homepage">
      <nav className="header">
        <img className="logo-homepage" src={logo} alt="Logo" />
        <h2 className="logo">BougeTonQ.com</h2>
      </nav>
      <header className="main-content">
        <h1 className="main-title">Let's trip</h1>
        <form className="input-group">
          <input
            type="select"
            placeholder="Destination"
            className="input-field"
          />
          <fieldset>
            <legend>Budget</legend>
            <input
              id="budget"
              type="range"
              min="0"
              max="2000"
              step="10"
              onChange={(e) => setBudgetValue(e.target.value)}
              value={budgetValue}
              className="input-field"
            />
            <div>{budgetValue}</div>
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
