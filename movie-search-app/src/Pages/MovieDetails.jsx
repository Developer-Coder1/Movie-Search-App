import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { getMovieDetails, IMG_BASE_URL } from "../api/tmbd";

export function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function loadMovie() {
      const data = await getMovieDetails(id);
      setMovie(data);
    }
    loadMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-detail">
      <button onClick={() => navigate(-1)}>← Back</button>
      <div className="detail-content">
        <img
          src={`${IMG_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="detail-info">
          <h1>{movie.title}</h1>
          <p>⭐ {movie.vote_average?.toFixed(1)}</p>
          <p>🗓️ {movie.release_date}</p>
          <p>🎬 {movie.genres?.map((g) => g.name).join(", ")}</p>
          <p>⏱️ {movie.runtime} mins</p>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}