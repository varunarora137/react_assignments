import "./Restaurants.css";
import Navbar from "../Navbar/Navbar.jsx";
import data from "../../assets/restaurantsData.json";
import RestaurantCard from "../RestaurantCard/RestaurantCard.jsx";
import { useState } from "react";

const ITEMS_PER_PAGE = 24;

function Restaurants() {
  const [arr, setArr] = useState(data);
  const [rating, setRating] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  function searchByName(txt) {
    const tempArr = [...data];
    const updatedArr = tempArr.filter((obj) =>
      obj.name.toLowerCase().trim().includes(txt.trim().toLowerCase())
    );
    setArr(updatedArr);
    setCurrentPage(1);
  }

  function searchByRating(val) {
    if (val < 0 || val > 5) {
      alert("Rating Should Be Between 0 And 5");
      setRating("");
      return;
    }
    setRating(val);
    const tempArr = [...data];
    const updatedArr = tempArr.filter((obj) => obj.rating >= val);
    setArr(updatedArr);
    setCurrentPage(1);
  }

  function getPaginatedData() {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return arr.slice(startIndex, endIndex);
  }

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const totalPages = Math.ceil(arr.length / ITEMS_PER_PAGE);

  const paginationButtons = [];
  for (
    let i = Math.min(totalPages - 2, currentPage);
    i <= Math.min(totalPages, currentPage + 2);
    i++
  ) {
    paginationButtons.push(
      <button
        key={i}
        className={currentPage === i ? "active" : ""}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="restaurantPage">
      <Navbar />
      <div className="searchAndRatingContainer">
        <input
          type="text"
          placeholder="Search restaurants..."
          onChange={(e) => searchByName(e.target.value)}
        />
        <label htmlFor="rating">
          Minimum rating:
          <input
            type="number"
            id="rating"
            value={rating}
            max={5}
            onChange={(e) => searchByRating(Number(e.target.value))}
          />
        </label>
      </div>
      <div className="restaurantContainer">
        {getPaginatedData().map((obj, index) => (
          <RestaurantCard key={index} {...obj} />
        ))}
      </div>
      <div className="paginationControls">
        <button
          className="prev"
          onClick={() => handlePageChange(Math.max(currentPage - 3, 1))}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {paginationButtons}
        <button
          className="next"
          onClick={() =>
            handlePageChange(Math.min(currentPage + 3, totalPages - 2))
          }
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Restaurants;
