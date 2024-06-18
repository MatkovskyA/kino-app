import  { useEffect, useState } from 'react';



const apiKey: string = 'TRMCWMC-EZSM631-PDC4PFQ-TCGK61H';

interface Movie {
  id: number;
  name: string ;
  alternativeName: string;
  year: number;
  poster: string;
}

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'X-API-KEY': apiKey }
    };

    fetch('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=50', options)
      .then(response => response.json())
      .then(data => {
        const movieData: Movie[] = data.docs || [];
        console.log(movieData)
        setMovies(movieData);
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error);
      });
  }, []);

  return (
    <div>
      <h2>Список фильмов</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.name} / {movie.alternativeName} ({movie.year}) 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;