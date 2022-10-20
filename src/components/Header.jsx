import React from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { MdMovie } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <header className='bg-gray-900 text-white py-1.5 md:py-2.5 top-0 sticky w-full'>
      <nav className='container mx-auto flex w-full'>
        <div
          id='logo'
          className='flex-1 flex gap-1 font-bold ml-3 items-center'
        >
          <span className='text-2xl'>
            <MdMovie />
          </span>
          <p className='text-2xl'>MovieBase</p>
        </div>
        <div>
          <ul className='hidden list-none md:flex text-lg space-x-3'>
            <NavLink to='/'>Trending</NavLink>
            <NavLink to='movies'>Movies</NavLink>
            <NavLink to='tv'>Tv series</NavLink>
            <NavLink to='search'>Search</NavLink>
            <NavLink to='genres'>Genres</NavLink>
          </ul>
        </div>
        <div className='md:hidden'>
          <button className='p-2 outline-none text-2xl mr-3'>
            <HiOutlineMenuAlt4 />
          </button>
        </div>
      </nav>
    </header>
  )
}
