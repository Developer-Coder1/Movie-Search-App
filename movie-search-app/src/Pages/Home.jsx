import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../api/tmbd";
import { MovieCard } from "../Components/Moviecard";

export function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPopular() {
      const data = await getPopularMovies();
      setMovies(data);
    }
    loadPopular();
  }, []);

  async function handleSearch() {
    if (!query.trim()) return;
    setError(null);
    const data = await searchMovies(query);
    if (data.length === 0) {
      setError("No movies found. Try a different search.");
      setMovies([]);
    } else {
      setMovies(data);
    }
  }

  return (
    <div className="home">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}