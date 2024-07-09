import "./QuoteCard.css";

function QuoteCard({ quote, author, key, len }) {
  return (
    <div className="quoteCard">
      <h1>{quote}</h1>
      {key === len.length ? (
        <p style={{ marginBottom: `${0}px` }}>{author}</p>
      ) : (
        <p>{author}</p>
      )}
    </div>
  );
}

export default QuoteCard;
