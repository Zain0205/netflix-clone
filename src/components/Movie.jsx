import axios from "axios";
import { useEffect, useState } from "react";
import { request } from "../api/request";

function Movie() {
  const [movies, setMovies] = useState([]);

  const index = Math.floor(Math.random() * movies.length);
  const movie = movies[index];

  const handleTruncateString = (string, num) => {
    if (string?.length > num) {
      return string.slice(0, num) + '...'
    } else {
      return string
    }
  }

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(request.popularMovies);
        setMovies(response.data.results);
      } catch (err) {
        console.error(err);
      }
    };

    getMovies();
  }, []);


  return (
    <div className="w-full h-[500px] text-white">
      <div className="w-full h-full">
        <div className="w-full h-[500px] bg-gradient-to-r from-black absolute"></div>
        <img className="w-full h-full object-cover object-center" src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt={movie?.title} />
      </div>

      <div className="absolute top-[20%] w-full p-4 md:p-8">
        <h1 className="font-bold text-3xl md:text-4xl">{movie?.title}</h1>
        <div className="flex gap-x-3 mt-5">
          <button className="px-6 py-2 bg-gray-300 text-black">Play</button>
          <button className="px-6 py-2 border border-gray-300">Watch Later</button>
        </div>
        <p className="text-sm text-gray-400 mt-3">Released: {movie?.release_date}</p>
        <p className="w-full md:max-w-[70%] lg:max-w-1/2 xl:max-w-[40%]">{handleTruncateString(movie?.overview, 150)}</p>
      </div>
    </div>
  );
}

export default Movie;
