import React, { useState } from 'react';
import "./App.css";
import MovieList from './components/MovieList';

const App: React.FC = () => {
  const [movies] = useState([
    {
      id: 1,
      title: "Thor Amor y Trueno",
      genre: "Ciencia Ficcion",
      image: "thor.jpeg",
    },
    {
      id: 2,
      title: "Sexto Sentido",
      genre: "Drama",
      image: "sexto.jpg",
    },
    {
      id: 3,
      title: "El caballero de la Noche",
      genre: "Accion",
      image: "unnamed.jpg",
    },
  ]);

  return (
    <div className="App-container">
      <h1 className="app-title">Movie List</h1>
      <MovieList Movies={movies} />
      
      {/* Footer */}
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Movies free. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="/privacy-policy">Política de Privacidad</a>
          <a href="/terms-of-service">Términos de Servicio</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
