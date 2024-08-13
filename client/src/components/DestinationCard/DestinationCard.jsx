import { Link } from "react-router-dom";

import "./DestinationCard.css";

function DestinationCard({ city }) {
  return (
    <Link to={`/destinations/${city.id}`} className="destination-card">
      <img
        className="img-movie box"
        src={city.image_country}
        alt={city.City}
        title={city.Region}
      />
      <p>{city.City}</p>
    </Link>
  );
}

export default DestinationCard;
