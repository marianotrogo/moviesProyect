import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import AddReviewButton from "../components/AddReview";

// const API_KEY = import.meta.env.VITE_API_KEY;
const API_KEY = "9a98a3b5c0a3b46cd5f5d942c82c5077";
const BASE_URL = "https://api.themoviedb.org/3";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!API_KEY) {
        setError("⚠️ Error: API Key no encontrada. Verifica tu archivo .env.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        if (!response.ok) throw new Error("Error al obtener los datos.");
        
        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Hero Section */}
      <div
        className="relative w-full h-[350px] md:h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <h1 className="relative text-4xl md:text-5xl lg:text-3xl font-extrabold text-white text-center px-4">
          🎬 Descubre las Mejores Películas
        </h1>
      </div>
      <AddReviewButton/>

      {/* Grid de Películas */}
      <div className="container mx-auto max-w-[1200px] p-6 md:p-4 lg:p-2">
        <h2 className="text-3xl lg:text-2xl font-bold text-center mb-6 lg:mb-4">
          Películas Populares
        </h2>

        {loading && <p className="text-center text-lg">🔄 Cargando películas...</p>}
        {error && <p className="text-center text-lg text-red-400">⚠️ {error}</p>}

        {!loading && !error && movies.length > 0 ? (
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-3 justify-center">
            {movies.map((movie) => (
              <div key={movie.id} className="flex flex-col items-center">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
                <h3 className="mt-2 text-lg">{movie.title}</h3>
              </div>
            ))}
          </div>
        ) : (
          !loading && !error && <p className="text-center text-lg">No se encontraron películas.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
