const API_KEY = "fac2e8a7ae3a0c5635cf94b58f5f5fde";
const BASE_URL = "https://api.themoviedb.org/3";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

export async function searchMovies(query) {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await res.json();
  return data.results;
}

export async function getMovieDetails(id) {
  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data;
}

export async function getPopularMovies() {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
}