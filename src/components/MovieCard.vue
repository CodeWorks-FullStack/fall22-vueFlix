<template>
  <div class="col-md-3 my-3">
    <div class="movie-card">
      <div class="card">
        <div class="movie-poster selectable" data-bs-toggle="modal" data-bs-target="#movie-details"
          @click="setActiveMovie()">

          <img :src="movie.background" alt="" class="img-fluid">
          <h4 class="position-absolute">{{movie.title}}</h4>
        </div>
        <div class="card-footer d-flex align-items-center justify-content-between">
          <div>
            <p class="mb-0"><b>{{new Date(movie.releaseDate).toLocaleDateString('en-US', {month: 'short', year:
            '2-digit'})}} </b> <b class="ms-3" title="Movie Rating">🍅 {{movie.voteAverage}} </b></p>
          </div>
          <button class="btn p-0" title="Add to watchlist" @click="addToWatchlist()">
            <i class="mdi mdi-star fs-1"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState.js';
import { Movie } from '../models/Movie.js';
import { moviesService } from '../services/MoviesService.js';
import Pop from '../utils/Pop.js';

export default {
  props: {
    movie: { type: Movie, required: true }
  },
  setup(props) {
    return {
      setActiveMovie() {
        AppState.activeMovie = props.movie
      },
      async addToWatchlist() {
        try {
          await moviesService.addToWatchlist(props.movie)
          Pop.success(`You added ${props.movie.title} to your watchlist!`)
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.movie-poster {
  position: relative;

  h4 {
    color: blanchedalmond;
    font-weight: bold;
    text-shadow: 1px 1px black, 0px 0px 5px rgba(250, 128, 114, 0.719);
    letter-spacing: 0.05rem;
    bottom: 0;
    margin: 1rem;
  }
}
</style>
