import React, { useState, useEffect } from 'react'
import { GenresList } from '../components/Config'
import { Link } from 'react-router-dom'
export default function Genres() {
  const [MovieGenresList, setMovieGenres] = useState([])
  const [TvGenresList, setTvGenres] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        let reqMovie = await fetch(GenresList('movie'))
        let dataMovie = await reqMovie.json()
        let reqTv = await fetch(GenresList('tv'))
        let dataTv = await reqTv.json()
        setMovieGenres(dataMovie.genres)
        setTvGenres(dataTv.genres)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchData()
  }, [])

  function Pill({ text, id, type }) {
    return (
      <div className='rounded-full border border-gray-800 py-1 px-3 text-lg'>
        <Link
          to={`${type}/${text.replaceAll(' ', '-').toLowerCase()}`}
          state={{ id: id }}
        >
          {text}
        </Link>
      </div>
    )
  }

  return (
    <div className='container py-2 px-4 mx-auto'>
      <div className=' bg-blue-100 px-3 py-5 rounded-lg mt-5'>
        <h1 className='py-3 text-xl font-bold'>Movie Genres</h1>
        <div className='flex flex-wrap gap-3'>
          {MovieGenresList.map((data) => (
            <Pill text={data.name} key={data.id} id={data.id} type='movie' />
          ))}
        </div>
      </div>

      <div className=' bg-blue-100 px-3 py-5 rounded-lg mt-5'>
        <h1 className='py-3 text-xl font-bold'>Tv Genres</h1>
        <div className='flex flex-wrap gap-3'>
          {TvGenresList.map((data) => (
            <Pill text={data.name} key={data.id} id={data.id} type='tv' />
          ))}
        </div>
      </div>
    </div>
  )
}
