import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";
const apiKey = "b4baa9e16cdd3e44507fb5a386b5783f";

const PopularMovies = ({ pageNumber }) => {
  return axios
    .get(`${baseURL}/movie/popular?api_key=${apiKey}&page=${pageNumber}`)
    .then(({ data }) => data)
    .catch((error) => error);
};
const MovieDetails = (movieId) => {
  return axios
    .get(`${baseURL}/movie/${movieId}?api_key=${apiKey}`)
    .then(({ data }) => data)
    .catch((error) => error);
};

const Cast = (movieId) => {
  return axios
    .get(`${baseURL}/movie/${movieId}/credits?api_key=${apiKey}`)
    .then(({ data }) => data)
    .catch((error) => error);
};

const Reviews = (movieId) => {
  return axios
    .get(`${baseURL}/movie/${movieId}/reviews?api_key=${apiKey}`)
    .then(({ data }) => data)
    .catch((error) => error);
};

const SearchMovies = ({ searchQuery = "" }) => {
  return axios
    .get(`${baseURL}/search/movie?query=${searchQuery}&api_key=${apiKey}`)
    .then(({ data }) => data)
    .catch((error) => error);
};

export default {
  PopularMovies,
  MovieDetails,
  Cast,
  Reviews,
  SearchMovies,
};
