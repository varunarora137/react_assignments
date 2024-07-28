import "./FoodCard.css";
import { Link } from "react-router-dom";

function FoodCard({ dish, chef, imgSrc, id }) {
  return (
    <div className="foodCard">
      <img src={imgSrc} alt="img" />
      <h2>{dish}</h2>
      <p>{chef}</p>
      {
        <Link className="link-foodcard" to={`/foods/${id - 1}`}>
          <button id="view-details">View Details</button>
        </Link>
      }
    </div>
  );
}

export default FoodCard;
