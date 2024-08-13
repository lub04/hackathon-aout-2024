import { useParams } from "react-router-dom";

import data from "../../data";
import logoHappy from "../assets/images/bonne-retroaction.png";
import logoCost from "../assets/images/economiser-de-largent.png";
import logoBudget from "../assets/images/sac-dargent.png";
import logoAir from "../assets/images/vent.png";
import logoFly from "../assets/images/vol-direct.png";

import "./SejourDetails.css";

function SejourDetails() {
  const { id } = useParams();
  const destinationId = parseInt(id, 10);
  const destination = data.find((dest) => dest.id === destinationId);

  return (
    <main>
      <section className="title-container">
        <h1>Votre destination</h1>
      </section>

      <section className="main-contentainer">
        <aside className="img-country-container">
          <img src={destination.image_country} alt={destination.Country} />
        </aside>

        <div className="city-container">
          <h2>{destination.City}</h2>
          <article>{destination.description_city}</article>
          <div className="city-details-container">
            <article>
              <img src={logoFly} alt="logo avion" />
              <p>Vol depuis Paris / personne</p>
              <p>{destination.vol_price_USD} €</p>
            </article>
            <article>
              <img src={logoBudget} alt="logo bourse" />
              <p>Budget journalier</p>
              <p>{destination.day_price_USD} €</p>
            </article>
            <article>
              <img src={logoBudget} alt="logo bourse" />
              <p>Budget hebdomadaire</p>
              <p>{destination.sejour_price_USD} €</p>
            </article>
            <article>
              <img src={logoAir} alt="logo air" />
              <p>Indice de qualité de l'air</p>
              <p>{destination.Air_Quality_Index}</p>
            </article>
            <article>
              <img src={logoHappy} alt="logo baromètre" />
              <p>Indice de satisfaction</p>
              <p>{destination.Happiness_Score}</p>
            </article>
            <article>
              <img src={logoCost} alt="logo coût" />
              <p>Indice du coût de la vie</p>
              <p>{destination.Cost_of_Living_Index}</p>
            </article>
          </div>
          <section className="img-city-container">
            <img src={destination.image1} alt={destination.City} />
            <img src={destination.image2} alt={destination.City} />
            <img src={destination.image3} alt={destination.City} />
          </section>
        </div>

        <div className="country-container">
          <h2>{destination.Country}</h2>
          <article>{destination.description_country}</article>
        </div>
      </section>
    </main>
  );
}

export default SejourDetails;
