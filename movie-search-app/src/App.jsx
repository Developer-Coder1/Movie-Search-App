import "./App.css";
import { Routes, Route } from "react-router";
import { Home } from "./Pages/Home";
import { MovieDetail } from "./Pages/MovieDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  );
}

export default App;