import React from 'react'
import { useParams } from 'react-router-dom'
export default function MovieItem() {
  const { id } = useParams()
  return <div className='p-3'>hi {id}</div>
}
