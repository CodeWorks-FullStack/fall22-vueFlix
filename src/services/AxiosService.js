import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})


export const moviesApi = Axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 4000,
  params: {
    api_key: '545c6ef058e65396849dfbbf381cbca3',
    sort_by: 'popularity.desc',
    'certification.lte': 'r'
  }
})
