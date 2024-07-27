import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" />
        <p>GeekFoods</p>
      </div>
      <div className="navigation-items">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quotes"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              Quote
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/restaurants"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              Restaurants
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/foods"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              Foods
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="get-started">
        <button>Get Started</button>
      </div>
    </div>
  );
}
export default Navbar;
