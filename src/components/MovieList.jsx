import axios from "axios";
import { FaRegHeart } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useEffect, useState } from "react";

function MovieList({ title, url, id }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const handleGetList = async () => {
      try {
        const response = await axios.get(url);
        setMovieList(response.data.results);
        console.log(response.data.results);
      } catch (err) {
        console.error(err);
      }
    };

    handleGetList();
  }, [url]);

  const handleSlideRight = () => {
    let slider = document.getElementById(`slide${id}`)

    slider.scrollLeft = slider.scrollLeft + 500 
  }

  const handleSlideLeft = () => {
    let slider = document.getElementById(`slide${id}`)

    slider.scrollLeft = slider.scrollLeft - 500
  }

  return (
    <>
      <h1 className="p-4 text-xl font-semibold text-white md:p-8">{title}</h1>
      <div className="relative flex items-center group">
        <div className="overflow-x-scroll h-full w-full whitespace-nowrap scrollbar-hide scroll-smooth" id={`slide${id}`}>
          {movieList.map((movie, i) => (
            <div className="inline-block relative whitespace-nowrap p-2 w-40 cursor-pointer" key={i}>
              <img className="object-cover" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
              <div className="absolute bg-black/75 top-0 left-0 w-full h-full opacity-0 hover:opacity-100">
                <p className="font-bold text-white w-full h-full flex items-center justify-center">{movie.title}</p>
                <p>
                  <FaRegHeart className="absolute top-4 left-4 text-gray-300 cursor-pointer" />
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronLeft onClick={handleSlideLeft} className="bg-white rounded-full absolute hidden group-hover:block left-2 cursor-pointer" size={40} />
        <MdChevronRight onClick={handleSlideRight} className="bg-white rounded-full absolute hidden group-hover:block right-2 cursor-pointer" size={40} />
      </div>
    </>
  );
}

export default MovieList;
