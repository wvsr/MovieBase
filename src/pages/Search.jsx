import React, { useEffect, useState } from 'react'
import { SearchMovie } from '../components/Config'
import { FcSearch } from 'react-icons/fc'
import MovieCard from '../components/MovieCard'
import { RotatingLines } from 'react-loader-spinner'

export default function Search() {
  const [searchText, setSearchText] = useState('')
  const [movieList, setMovieList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const findMovies = async (e) => {
    e.preventDefault()
    setMovieList([])
    console.log(searchText)
    try {
      setIsLoading(true)
      const reqMovie = await fetch(SearchMovie(false, searchText, 1))
      const resMovie = await reqMovie.json()
      const reqTv = await fetch(SearchMovie(true, searchText, 1))
      const resTv = await reqTv.json()
      // setMovieList((resMovie?.results).concat(resTv))
      setMovieList([...resTv.results, ...resMovie.results])
    } catch (e) {
      console.log('error happen :>')
      console.log(e)
    }
    setIsLoading(false)
  }
  return (
    <div>
      <section className=' mt-14 sm:mt-0 flex flex-col justify-center items-center h-80'>
        <h2 className=' mx-6 md:mx-0 text-4xl font-bold my-10 capitalize text-center'>
          Find 1000000+ movie or Tv Series
        </h2>
        {/* <div className='flex max-w-4xl w-full container mx-auto p-2'> */}
        <form
          onSubmit={findMovies}
          className='flex max-w-4xl w-full container mx-auto p-2'
        >
          <input
            type='text'
            onChange={(e) => {
              setSearchText(e.target.value)
              setMovieList([])
            }}
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
        </form>
        {/* </div> */}
      </section>
      <section className='container mx-auto py-10'>
        {isLoading && (
          <div className='flex justify-center items-center w-full '>
            <RotatingLines
              strokeColor='grey'
              strokeWidth='5'
              animationDuration='0.75'
              width='96'
              visible={true}
            />
          </div>
          // <p>loading</p>
        )}
        {!searchText && movieList && (
          <div className='text-center flex items-center flex-col space-y-6 opacity-80'>
            <div className='text-[4rem]'>
              <FcSearch />
            </div>
            <h2 className='mx-4 text-3xl font-bold text-gray-400'>
              Type some thing to find out movies
            </h2>
          </div>
        )}
        <div className='container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {movieList &&
            searchText &&
            movieList.map((props) => (
              <MovieCard
                id={props.id}
                img={props.poster_path}
                title={props.title || props.name}
                type={props.name ? 'tv' : 'movie'}
              />
            ))}
        </div>
      </section>
    </div>
  )
}
