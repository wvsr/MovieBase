import React, { useState, useEffect } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { TrendingMovie } from '../components/Config'
import MovieCard from '../components/MovieCard'

export default function Trending() {
  const [trendingList, setTrendingList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [paginate, setPaginate] = useState(1)

  useEffect(() => {
    window.scroll(0, 0)
    const fetchData = async () => {
      try {
        setTrendingList([])
        setIsLoading(true)
        let res = await fetch(TrendingMovie(paginate))
        let data = res.json().then(({ results }) => setTrendingList(results))
      } catch (error) {
        console.log('error', error)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [paginate])

  console.log(trendingList)

  return (
    <>
      {isLoading && (
        <div className='flex justify-center items-center w-full h-screen'>
          <RotatingLines
            strokeColor='grey'
            strokeWidth='5'
            animationDuration='0.75'
            width='96'
            visible={true}
          />
        </div>
      )}
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

      {!isLoading && (
        <nav className='flex justify-center mb-16 mt-5'>
          <ul class='inline-flex -space-x-px'>
            <li>
              <a
                class='py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
                onClick={() => setPaginate(paginate > 1 ? paginate - 1 : 1)}
              >
                Previous
              </a>
            </li>

            {Array.from({ length: 10 }, (_, i) => i + 1).map((props) => (
              <li>
                <a
                  class='py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
                  onClick={() => setPaginate(props)}
                >
                  {props}
                </a>
              </li>
            ))}
            <li>
              <a
                class='py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
                onClick={() => setPaginate(paginate < 1000 ? paginate + 1 : 1)}
              >
                next
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  )
}
