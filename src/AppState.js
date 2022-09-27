import { reactive } from 'vue'
import { Movie } from './models/Movie'
import { loadState } from './utils/Store.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /**@type {import('./models/Account.js').Account} */
  account: {},
  /**@type {import('./models/Movie').Movie[]} */
  movies: [],

  /**@type {import('./models/Movie').Movie | null} */
  activeMovie: null,

  /**@type {import('./models/Movie').Movie[]} */
  watchlist: loadState('watchlist', Movie),

  page: 0,
  lastPage: 0,
  term: ''
})
