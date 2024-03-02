import Movie from "../components/Movie";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";
import { request } from "../api/request";

function Home() {
  return (
    <>
      <Navbar />
      <Movie />
      <MovieList title="Top Rated" url={request.topRated} />
      <MovieList title="Trending" url={request.trending} />
      <MovieList title="UpComing" url={request.upComing} />
      <MovieList title="Horror" url={request.horror} />
    </>
  );
}

export default Home;
