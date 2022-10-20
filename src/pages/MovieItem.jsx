import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieById, ArtistDetails } from '../components/Config'
export default function MovieItem({ type }) {
  const { id } = useParams()
  const [MovieDetails, setMovieDetails] = useState([])
  const [ArtistList, setArtistList] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        let reqMovie = await fetch(MovieById(type, id))
        let resMovie = await reqMovie.json()
        setMovieDetails(resMovie)
        let reqArtist = await fetch(ArtistDetails(type, id))
        let resArtist = await reqArtist.json()
        setArtistList(resArtist)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchData()
  }, [])
  console.log(ArtistList)

  const {
    original_title,
    budget,
    overview,
    release_date,
    poster_path,
    original_language,
    runtime,
    video,
    homepage,
  } = MovieDetails

  function ParaMeter(props) {
    return (
      <>
        {props.component && (
          <p className='text-lg md:text-xl mt-4 text-gray-800'>
            <span className='underline underline-offset-[5px] decoration-[5px] decoration-red-400'>
              {props.children}{' '}
            </span>
            : {props.component}
          </p>
        )}
      </>
    )
  }
  return (
    <div className='p-3 container mx-auto'>
      <div className='block sm:flex gap-10'>
        <div className='w-full sm:w-1/2 lg:w-[30%] '>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/f/f9/No-image-available.jpg'
            }
            alt={original_title}
            className='w-full h-auto'
          />
        </div>
        <div className='mt-6 sm:mt-0 w-full'>
          <h2 className='text-4xl md:text-6xl lg:text-7xl'>{original_title}</h2>
          <ParaMeter component={overview}>Description</ParaMeter>
          <ParaMeter component={original_language}>Language</ParaMeter>
          <ParaMeter component={homepage}>Website:</ParaMeter>
          <ParaMeter component={release_date}> Release Date</ParaMeter>
          <ParaMeter component={budget}> Budget</ParaMeter>
          <ParaMeter component={runtime}> Runtime</ParaMeter>
        </div>
      </div>
    </div>
  )
}
