import "./FoodContainer.css";
import FoodCard from "../FoodCard/FoodCard";
import food from "../../Data/food.json";

function FoodContainer() {
  return (
    <div className="foodContainer">
      {food.map((f) => (
        <FoodCard
          dish={f.title}
          chef={f.publisher}
          imgSrc={f.image}
          key={f.id}
          id={f.id}
        />
      ))}
    </div>
  );
}

export default FoodContainer;
