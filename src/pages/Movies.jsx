import React, { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import { DiscoverMovie } from '../components/Config'

export default function Trending() {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch(DiscoverMovie(1))
        let data = res.json().then(({ results }) => setMovieList(results))
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchData()
  }, [])

  console.log(movieList)

  return (
    <div className='container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
      {movieList.map(({ id, name, title, poster_path }) => (
        <MovieCard
          key={id}
          img={poster_path}
          title={name || title}
          id={id}
          type='movie'
        />
      ))}
    </div>
  )
}
