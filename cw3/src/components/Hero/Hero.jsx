import Button from "../Button/Button.jsx";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="heroContent">
        <h1>Let us find your</h1>
        <h1 style={{ color: "#BE123C" }}>Forever Food.</h1>
        <p style={{ marginTop: `${20}px` }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <p style={{ marginBottom: `${30}px` }}>
          Nesciunt illo tenetur fuga ducimus numquam ea!
        </p>
        <Button
          text="Search Now"
          color="white"
          backgrounColor="#E11D48"
          marginRight={15}
        />
        <Button text="Know More" color="#E11D48" backgrounColor="white" />
      </div>
    </div>
  );
}
export default Hero;
