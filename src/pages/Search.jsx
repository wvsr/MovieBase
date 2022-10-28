import React, { useEffect, useState } from 'react'
import { SearchMovie } from '../components/Config'
import MovieCard from '../components/MovieCard'
export default function Search() {
  const [searchText, setSearchText] = useState('')
  const [movieList, setMovieList] = useState([])
  useEffect(() => {
    findMovies()
  }, [])

  const findMovies = async () => {
    try {
      const req = await fetch(SearchMovie(false, 'got', 1))
      const res = await req.json()
      console.log(res)
      setMovieList(res?.results)
    } catch {
      console.log('error happen :>')
    }
  }
  return (
    <div>
      <section className='flex flex-col justify-center items-center h-80  bg-search'>
        <h2 className='text-4xl font-bold my-10 capitalize text-center'>
          Find 1000000+ movie or Tv Series
        </h2>
        <div className='flex max-w-4xl w-full container mx-auto p-2'>
          <input
            type='text'
            onChange={(e) => setSearchText(e.target.value)}
            className='w-full text-lg px-3 py-3 bg-slate-100 outline-none rounded-l-lg'
            placeholder='search movies ...'
          />
          <button
            className='w-full px-3.5 py-3 font-bold text-lg text-center bg-indigo-600 flex-1 text-gray-200 rounded-r-lg'
            type='submit'
            onClick={findMovies}
          >
            Search
          </button>
        </div>
      </section>
      <section className='container mx-auto py-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
          {movieList.map((props) => (
            <MovieCard
              id={props.id}
              img={props.poster_path}
              title={props.title}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
