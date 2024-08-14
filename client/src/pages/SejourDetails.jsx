import { useParams } from "react-router-dom";
import { useEffect } from "react";

import data from "../../data";
import logoHappy from "../assets/images/bonne-retroaction.png";
import logoCost from "../assets/images/economiser-de-largent.png";
import logoBudget from "../assets/images/sac-dargent.png";
import logoAir from "../assets/images/vent.png";
import logoFly from "../assets/images/vol-direct.png";
import Footer from "../components/Footer/Footer";
import FilterBar from "../components/Header/FilterBar";

import "./SejourDetails.css";
import AddFavory from "../components/addFavory/AddFavory";

function SejourDetails() {
  const { id } = useParams();
  const destinationId = parseInt(id, 10);
  const destination = data.find((dest) => dest.id === destinationId);

  useEffect(() => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <FilterBar />
      <main>
        <section className="main-contentainer">
          <aside className="img-country-container">
            <img src={destination.image_country} alt={destination.Country} />
          </aside>

          <div className="city-container">
            <h2 className="h2City">{destination.City}</h2>
            <div className="favory-button-2">
              <AddFavory destination={destination} />
            </div>
            <article>{destination.description_city}</article>
            <div className="city-details-container">
              <article>
                <p>Vol depuis Paris / personne</p>
                <div className="icon-number-container">
                  <img src={logoFly} alt="logo avion" />
                  <p className="NumberKey">{destination.vol_price_USD} €</p>
                </div>
              </article>
              <article>
                <p>Budget journalier</p>
                <div className="icon-number-container">
                  <img src={logoBudget} alt="logo bourse" />
                  <p className="NumberKey">{destination.day_price_USD} €</p>
                </div>
              </article>
              <article>
                <p>Budget hebdomadaire</p>
                <div className="icon-number-container">
                  <img src={logoBudget} alt="logo bourse" />
                  <p className="NumberKey">
                    {destination.sejour_price_USD / 2} €
                  </p>
                </div>
              </article>
              <article>
                <p>Indice de qualité de l'air</p>
                <div className="icon-number-container">
                  <img src={logoAir} alt="logo air" />
                  <p className="NumberKey">{destination.Air_Quality_Index}</p>
                </div>
              </article>
              <article>
                <p>Indice de satisfaction</p>
                <div className="icon-number-container">
                  <img src={logoHappy} alt="logo baromètre" />
                  <p className="NumberKey">{destination.Happiness_Score}</p>
                </div>
              </article>
              <article>
                <p>Indice du coût de la vie</p>
                <div className="icon-number-container">
                  <img src={logoCost} alt="logo coût" />
                  <p className="NumberKey">
                    {destination.Cost_of_Living_Index}
                  </p>
                </div>
              </article>
            </div>
            <section className="img-city-container">
              <img src={destination.image1} alt={destination.City} />
              <img src={destination.image2} alt={destination.City} />
              <img src={destination.image3} alt={destination.City} />
            </section>
          </div>

          <div className="country-container">
            <h2 className="h2Country">{destination.Country}</h2>
            <article>{destination.description_country}</article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default SejourDetails;
