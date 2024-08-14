import { useHackathon } from "../../context/HackathonContext";

import "./addFavory.css";
import emptyHeart from "../../assets/images/heart-empty.png";
import redHeart from "../../assets/images/heart-red.png";

function AddFavory({ destination, classButtonFavory }) {
  const { handleFavory, favory } = useHackathon();
  return (
    <button
      type="button"
      className={classButtonFavory}
      onClick={() => handleFavory(destination)}
    >
      {!favory.some((item) => item.id === destination.id) ? (
        <img src={emptyHeart} alt="is not favorite" />
      ) : (
        <img src={redHeart} alt="is favorite" />
      )}
    </button>
  );
}

export default AddFavory;
