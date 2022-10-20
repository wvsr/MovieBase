const api_key = '932d4ebac50b8bc5bff61d1fa5870ba7'

const TrendingMovie = (page) =>
  `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=${page}`

const DiscoverMovie = (page) =>
  `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`

const DiscoverSeries = (page) =>
  `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`

const ArtistDetails = (media_type, id) =>
  `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${api_key}&language=en-US`

const YoutubeVideo = (media_type, id) =>
  `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${api_key}&language=en-US`

const GenresList = (type) =>
  `https://api.themoviedb.org/3/genre/${type}/list?api_key=${api_key}&language=en-US`

const MovieById = (media_type, id) =>
  `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${api_key}&language=en-US`

export {
  api_key,
  TrendingMovie,
  DiscoverMovie,
  DiscoverSeries,
  ArtistDetails,
  YoutubeVideo,
  GenresList,
  MovieById,
}
