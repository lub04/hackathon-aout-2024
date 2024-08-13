/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useContext } from "react";

const HackathonContext = createContext();

export function HackathonProvider({ children }) {
  const [continentFilter, setContinentFilter] = useState(
    "Toutes les destinations"
  );
  const [budgetValue, setBudgetValue] = useState(2300);
  const continents = [
    "Amerique du nord",
    "Europe",
    "Asie",
    "Australie/Pacifique Sud",
    "Moyen-Orient",
    "Amérique du Sud/Centrale et Caraïbes",
  ];
  return (
    <HackathonContext.Provider
      value={{
        continentFilter,
        setContinentFilter,
        continents,
        budgetValue,
        setBudgetValue,
      }}
    >
      {children}
    </HackathonContext.Provider>
  );
}

export const useHackathon = () => useContext(HackathonContext);
