import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="cardImage">
        <img
          src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="img"
        />
      </div>
      <div className="cardContentOuter">
        <div className="cardContent">
          <div className="cardHeading">
            <h1>Lorem ipsum dolor sit amet,</h1>
            <h1>consectetur adipisicing elit. Tempore,</h1>
            <h1>debitis.</h1>
          </div>
          <div className="cardPara">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              molestiae!
            </p>
            <p>
              Quidem est esse numquam odio deleniti, beatae, magni dolores
              provident
            </p>
            <p>
              quaerat totam eos, aperiam architecto eius quis quibusdam fugiat
              dicta.
            </p>
          </div>
          <div className="cardButton">
            <button>Get in Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
