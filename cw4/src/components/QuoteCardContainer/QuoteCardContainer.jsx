import "./QuoteCardContainer.css";
import QuoteCard from "../QuoteCard/QuoteCard.jsx";
import quotes from "../../Data/quotes.json";

function QuoteCardContainer() {
  return (
    <div className="quoteCardContainer">
      {quotes.map((obj) => (
        <QuoteCard
          quote={obj.quote}
          author={obj.author}
          key={obj.id}
          len={quotes.length}
        />
      ))}
    </div>
  );
}

export default QuoteCardContainer;
