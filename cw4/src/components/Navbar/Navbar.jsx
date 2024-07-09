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
          <li>Home</li>
          <list style={{ color: "#2563eb", cursor: "pointer" }}>Quote</list>
          <li>Restaurants</li>
          <li>Foods</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="get-started">
        <button>Get Started</button>
      </div>
    </div>
  );
}
export default Navbar;
