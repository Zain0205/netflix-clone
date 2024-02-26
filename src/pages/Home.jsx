import Movie from "../components/Movie";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";
import { request } from "../api/request";

function Home() {
  return (
    <>
      <Navbar />
      <Movie />
      <MovieList id="1" title="Top Rated" url={request.topRated} />
      <MovieList id="2" title="Trending" url={request.trending} />
      <MovieList id="3" title="UpComing" url={request.upComing} />
      <MovieList id="4" title="Horror" url={request.horror} />
    </>
  );
}

export default Home;
