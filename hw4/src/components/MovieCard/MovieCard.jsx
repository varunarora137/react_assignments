import "./MovieCard.css";
import comment from "../../assets/comment.svg";
import like from "../../assets/like.svg";
import share from "../../assets/share.svg";

function MovieCard({
  title,
  year,
  director,
  duration,
  genre,
  description,
  poster,
  bigPoster,
}) {
  return (
    <div className="movieCard" style={{ backgroundImage: `url(${bigPoster})` }}>
      <div className="blurEffect">
        <div className="imageTitleContainer">
          <div className="imageContainer">
            <img src={poster} alt="img" />
          </div>
          <div className="titleContainer">
            <p className="title">{title}</p>
            <p className="year">
              {year}, {director}
            </p>
            <p className="durationGenre">
              <span className="duration">{duration}</span>
              <span className="genre"> {genre}</span>
            </p>
          </div>
        </div>
        <div className="contentContainer">{description}</div>
        <div className="svgContainer">
          <img src={share} alt="share" />
          <img src={like} alt="like" />
          <img src={comment} alt="comment" />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
