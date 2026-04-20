import { IMG_BASE_URL } from "../api/tmbd";
import { useNavigate } from "react-router";

export function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div className="movie-card" onClick={() => navigate(`/movie/${movie.id}`)}>
      <img
        src={`${IMG_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
        <p>⭐ {movie.vote_average?.toFixed(1)}</p>
      </div>
    </div>
  );
}