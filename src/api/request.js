const apiKey = "065ab40583215aaeffd2dadda1dcdc1b";

export const request = {
  popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
  trending: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=2`,
  horror: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=horror&page=1&include_adult=false`,
  upComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
};
