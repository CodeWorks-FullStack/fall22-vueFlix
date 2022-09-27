<template>
  <div class="modal bg-dark fade" id="movie-details" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="movie-detailsLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content bg-dark">
        <div class="modal-header bg-dark border-0">
          <h5 class="modal-title" id="movie-detailsLabel">{{movie?.title}}</h5>
          <button type="button" class="btn text-light" data-bs-dismiss="modal" aria-label="Close"><i
              class="mdi mdi-close fs-4"></i></button>
        </div>
        <div class="container-fluid">

          <div class="row">
            <div class="col-4">
              <img :src="movie?.poster" alt="" class="img-fluid">
            </div>
            <div class="col-8 movie-details">
              <p>{{movie?.overview}}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';

export default {
  setup() {
    return {
      movie: computed(() => AppState.activeMovie)
    }
  }
}
</script>


<style lang="scss" scoped>
.movie-details {
  p {
    max-width: 80ch;
    font-size: 16pt;
    letter-spacing: .08rem;
  }
}
</style>
