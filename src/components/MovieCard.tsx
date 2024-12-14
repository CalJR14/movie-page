import React from "react"; // importar react
import Swal from "sweetalert2"; // importar la libreria de los pop-ups
import { Movies } from '../types/movie'; // importa la interfaz de las props

interface MovieCardProps {
  movie: Movies; // define la prop que contiene la pelicula
};

const MovieCard: React.FC<MovieCardProps> = ({ movie}) => {
    const imageSrc = new URL(`../assets/img/${movie.image}`, import.meta.url).href;

    //crear la ventana emergente
    const showDetails = () => {
        Swal.fire({
            title: movie.title,
            text: `genre: ${movie.genre}`,
            imageUrl: imageSrc,
            imageWidth: 500,
            imageHeight: 300,
            imageAlt: `${movie.title} Poster`,
            confirmButtonText: "Excelente",
        });
    }
    return(
        <div className="movie-card" onClick={showDetails}>
            <img src={imageSrc} alt={movie.title} className="movie-image" />
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
        </div>
    )
}

export default MovieCard; // exporta la funcion MovieCard para ser utilizada en otros componentes
