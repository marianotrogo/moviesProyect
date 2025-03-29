import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="group">
      <div className="relative w-full max-w-xs sm:max-w-[220px] md:max-w-[200px] lg:max-w-[180px] rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
        {/* Imagen */}
        <img
          className="w-full h-72 sm:h-64 md:h-60 lg:h-56 object-cover rounded-lg"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        {/* Título */}
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <h3 className="text-base sm:text-sm font-semibold">{movie.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;