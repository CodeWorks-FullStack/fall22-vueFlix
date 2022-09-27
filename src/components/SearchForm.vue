<template>
  <form @submit.prevent="handleSubmit">
    <div class="input-group">
      <input type="text" class="form-control" required="true" minlength="2" placeholder="Find a movie..." name="search"
        v-model="editable.term">
      <label for="search" class="visually-hidden">Search</label>
      <button type="submit" class="btn btn-dark "><i class="mdi mdi-magnify"></i></button>
    </div>
  </form>
</template>


<script>
import { ref } from 'vue';
import { moviesService } from '../services/MoviesService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {

    const editable = ref({})

    // ⚠️ SPOILER TOMORROW WITH GREGSLIST THERE IS ONE EXTRA STEP HERE.....

    return {
      editable,
      async handleSubmit() {
        try {
          await moviesService.getMoviesBySearchTerm(editable.value.term)
        } catch (error) {
          logger.error('[SearchForm]', error)
          Pop.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
