import React from 'react'
import { Link } from 'react-router-dom'
export default function MovieCard({ img, title, id, type }) {
  return (
    <div className='p-3'>
      <Link to={`/${type}/${id}`}>
        <img
          src={
            img
              ? `https://image.tmdb.org/t/p/w300/${img}`
              : 'https://upload.wikimedia.org/wikipedia/commons/f/f9/No-image-available.jpg'
          }
          alt={title}
          className='w-full h-auto mb-3 hover:scale-[1.03] transition-transform duration-150 ease-linear'
        />
        <p>{title}</p>
      </Link>
    </div>
  )
}
