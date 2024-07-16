import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
} from "../../../node_modules/@fortawesome/free-solid-svg-icons";

function Product({ company, price, src, remove, inc, dec, quantity }) {
  return (
    <div className="productConatiner">
      <div className="imgAndContentContainer">
        <div className="imgContainer">
          <img src={src} alt="img" />
        </div>
        <div className="contentContainer">
          <p className="company">{company}</p>
          <p className="price">${price}</p>
          <button className="remove" onClick={remove}>
            remove
          </button>
        </div>
      </div>
      <div className="incAndDec">
        <button className="inc" onClick={inc}>
          <FontAwesomeIcon icon={faAngleUp} />
        </button>
        <p className="quantity">{quantity}</p>
        <button className="dec" onClick={dec}>
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
      </div>
    </div>
  );
}

export default Product;
