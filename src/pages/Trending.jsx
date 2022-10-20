import React, { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import { TrendingMovie } from '../components/Config'

export default function Trending() {
  const [trendingList, setTrendingList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch(TrendingMovie(1))
        let data = res.json().then(({ results }) => setTrendingList(results))
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchData()
  }, [])

  console.log(trendingList)

  return (
    <div className='container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
      {trendingList.map(({ id, name, title, poster_path }) => (
        <MovieCard
          key={id}
          img={poster_path}
          title={name || title}
          id={id}
          type={title ? 'movie' : 'tv'}
        />
      ))}
    </div>
  )
}
