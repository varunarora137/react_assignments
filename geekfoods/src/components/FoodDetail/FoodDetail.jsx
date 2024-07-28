import "./FoodDetail.css";
import { useParams } from "react-router-dom";
import food from "../../Data/food.json";

function FoodDetail() {
  let { id } = useParams();
  return (
    <div className="foodDetail">
      <div className="foodImgContainer">
        <img src={food[id].image} alt="img" />
      </div>
      <div className="foodOtherDetails">
        <h1>{food[id].title}</h1>
        <p className="publisher">
          <span>Publisher: </span>
          {food[id].publisher}
        </p>
        <h2>Ingredients:</h2>
        <ul>
          {food[id].ingredients.map((f, ind) => (
            <li key={ind}>{f}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FoodDetail;
