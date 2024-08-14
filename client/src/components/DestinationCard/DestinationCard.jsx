import { Link } from "react-router-dom";

import "./DestinationCard.css";
import AddFavory from "../addFavory/AddFavory";

function DestinationCard({ city }) {
  return (
    <div className="destination-card">
      <Link to={`/destinations/${city.id}`} className="destination-card">
        <img
          className="img-movie box"
          src={city.image1}
          alt={city.City}
          title={city.Region}
        />
        <p>{city.City}</p>
      </Link>
      <div className="favory-button">
        <AddFavory destination={city} />
      </div>
    </div>
  );
}

export default DestinationCard;
