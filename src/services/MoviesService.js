import { AppState } from "../AppState.js";
import { Movie } from "../models/Movie.js";
import { saveState } from "../utils/Store.js";
import { moviesApi } from "./AxiosService.js";

class MoviesService {

  async getTopMovies(page = 1) {
    const res = await moviesApi.get('/discover/movie', {
      params: {
        page
      }
    })
    AppState.movies = res.data.results.map(m => new Movie(m))
    AppState.page = res.data.page
    AppState.lastPage = res.data.total_pages
  }

  async getMoviesBySearchTerm(term, page = 1) {
    const res = await moviesApi.get('/search/movie', {
      params: {
        query: term,
        page
      }
    })
    AppState.movies = res.data.results.map(m => new Movie(m))
    AppState.page = res.data.page
    AppState.lastPage = res.data.total_pages
    AppState.term = term
  }

  async addToWatchlist(movie) {

    if (AppState.watchlist.find(m => m.id == movie.id)) {
      throw new Error('You already added it....')
    }
    AppState.watchlist.push(movie)
    saveState('watchlist', AppState.watchlist)
  }


}


export const moviesService = new MoviesService()
