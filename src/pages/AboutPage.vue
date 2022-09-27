<template>
  <div class="container">
    <div class="row">
      <MovieCard v-for="m in movies" :movie="m" />
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';

export default {

  setup(){
    return {
      movies: computed(()=> AppState.watchlist)
    }
  }


}
</script>
