import "./RestaurantCard.css";
import { PiForkKnifeFill } from "react-icons/pi";
import { MdPlace } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function RestaurantCard({
  URL,
  address,
  name,
  outcode,
  postcode,
  rating,
  typeOfFood,
  address_line_2,
}) {
  let stars = [];

  for (let i = 0; i < Math.min(Math.floor(rating), 5); i++) {
    stars.push(<FaStar key={i} />);
  }
  for (let i = Math.floor(rating); i < 5; i++) {
    stars.push(<FaRegStar key={i} />);
  }

  return (
    <div className="restaurantCard">
      <div className="upperPart">
        <div className="headingAndRating">
          <h2>{name} </h2>
          <p>{stars}</p>
        </div>
        <div className="address">
          <p>
            <MdPlace />
            {address}, {address_line_2}
          </p>
        </div>
        <div className="postCode">
          <p>
            {outcode} {postcode}
          </p>
        </div>
      </div>
      <div className="belowPart">
        <div className="typeFood">
          <p>
            <PiForkKnifeFill />
          </p>
          <p>{typeOfFood}</p>
        </div>
        <a href={URL} target="_blank">
          Visit Menu
        </a>
      </div>
    </div>
  );
}

export default RestaurantCard;
