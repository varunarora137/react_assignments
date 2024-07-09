import "./GridCard.css";

function GridCard({ text }) {
  return (
    <div className="gridcard">
      <div className="gridcardContent">
        <p>{text}</p>
      </div>
      <div className="gridcardFooter">
        <div className="gridcardFooterImage">
          <img
            src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
            alt="img"
          />
        </div>
        <div className="designations">
          <p style={{ fontWeight: 600 }}>Gladis Lennon</p>
          <p>Head of SEO</p>
        </div>
      </div>
    </div>
  );
}

export default GridCard;
