import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "../../../node_modules/@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header">
      <p>UseReducer</p>
      <div className="cartContainer">
        <div className="total-prod">
          <p>4</p>
        </div>
        <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
      </div>
    </div>
  );
}

export default Header;
