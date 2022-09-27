export class Movie{
  constructor(data){
    this.id = data.id
    this.title = data.title
    this.overview = data.overview
    this.releaseDate = data.release_date
    this.poster = 'https://image.tmdb.org/t/p/w500' + data.poster_path
    this.background = data.backdrop_path ? 'https://image.tmdb.org/t/p/w500' + data.backdrop_path : 'https://www.omao.noaa.gov/sites/all/themes/noaa_omao/images/video-placeholder-640.jpg'
    this.voteAverage = data.vote_average
    this.language = data.language
    this.adult = data.adult
  }
}
