<template>
  <div class="container-fluid">
    <div class="row pt-3">
      <div class="col-6">
        <SearchForm />
      </div>
      <div class="col-6 px-4 d-flex justify-content-end">
        <div class="d-flex align-items-center ">
          <button class="btn btn-dark" :disabled="page == 1" @click="go(-1)">Previous</button>
          <h3 class="mx-3">{{page}}</h3>
          <button class="btn btn-dark" :disabled="page == lastPage" @click="go(1)">Next</button>
        </div>
      </div>
    </div>
    <div class="row">
      <MovieCard v-for="m in movies" :movie="m" />
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { moviesService } from '../services/MoviesService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';


export default {
  setup() {

    async function getTopMovies() {
      try {
        await moviesService.getTopMovies()
      } catch (error) {
        logger.error('[GettingTopMovies]', error)
        console.error('[GettingTopMovies]', error)
        Pop.error(error)
      }
    }
    getTopMovies()
    return {
      movies: computed(() => AppState.movies),
      page: computed(() => AppState.page),
      lastPage: computed(() => AppState.lastPage),
      async go(n) {
        try {
          if (AppState.page == 1 && n == -1) { throw new Error('Nah you are at the end ya cheecky .....') }

          if (!AppState.term) {
            await moviesService.getTopMovies(AppState.page + n)
          } else {
            await moviesService.getMoviesBySearchTerm(AppState.term, AppState.page + n)
          }

        } catch (error) {
          logger.error('[GoNextOrMayPrevious]', error)
          Pop.error(error)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
