import React from "react";
import {Movies} from "../types/movie";
import MovieCard from "./MovieCard";


//definir los props con la interfaz de Movie
interface MovieListProps {
    Movies: Movies[];
}
const MovieList: React.FC<MovieListProps> = ({Movies}) => {
    return(
        <div className="movie-list">
            {/*itera sobre las peliculas y crea una tarjeta de cada una */}
            {Movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;

