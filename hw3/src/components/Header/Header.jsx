import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1>Family Wellness</h1>
      <p>MASSAGE THEREPY</p>
      <div className="headerNav">
        <ul>
          <li style={{ backgroundColor: "rgb(153, 31, 72)" }}>HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>FAQ</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
