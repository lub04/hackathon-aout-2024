/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useContext } from "react";

const HackathonContext = createContext();

export function HackathonProvider({ children }) {
  const [continentFilter, setContinentFilter] = useState(
    "Toutes les destinations"
  );
  const [budgetValue, setBudgetValue] = useState(2300);
  const [favory, setFavory] = useState([]);

  const continents = [
    "Amerique du nord",
    "Europe",
    "Asie",
    "Australie/Pacifique Sud",
    "Moyen-Orient",
    "Amérique du Sud/Centrale et Caraïbes",
  ];

  const isNotInfavory = (destination) =>
    !favory.some((item) => item.id === destination.id);

  const handleFavory = (destination) => {
    if (isNotInfavory(destination)) {
      setFavory((prev) => [...prev, destination]);
    } else {
      setFavory((prev) => prev.filter((item) => item.id !== destination.id));
    }
  };
  return (
    <HackathonContext.Provider
      value={{
        continentFilter,
        setContinentFilter,
        continents,
        budgetValue,
        setBudgetValue,
        favory,
        handleFavory,
      }}
    >
      {children}
    </HackathonContext.Provider>
  );
}

export const useHackathon = () => useContext(HackathonContext);
