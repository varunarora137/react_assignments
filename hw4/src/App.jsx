import "./App.css";
import movies from "./data/movies.json";
import MovieCard from "./components/MovieCard/MovieCard.jsx";

function App() {
  let i = 1;
  return (
    <div className="movieCardContainer">
      {movies.map((obj) => (
        <MovieCard
          key={i++}
          title={obj.Title}
          year={obj.Year}
          director={obj.Director}
          duration={obj.Runtime}
          genre={obj.Genre}
          description={obj.Plot}
          poster={obj.Poster}
          bigPoster={obj.Images[1]}
        />
      ))}
    </div>
  );
}

export default App;
