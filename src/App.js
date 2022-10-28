// import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoPage from './pages/404'
import Layout from './pages/Layout'
import Trending from './pages/Trending'
import Genres from './pages/Genres'
import Tv from './pages/Tv'
import Movies from './pages/Movies'
import MovieItem from './pages/MovieItem'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Trending />} />
          <Route path='genres' element={<Genres />} />
          <Route path='movies' element={<Movies />} />
          <Route path='movie/:id' element={<MovieItem type='movie' />} />
          <Route path='tv' element={<Tv />} />
          <Route path='tv/:id' element={<MovieItem type='tv' />} />
          {/* <Route path='tv/:id' element={<TvItem />} /> */}
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
