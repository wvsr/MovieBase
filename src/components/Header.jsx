import React, { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { MdMovie } from 'react-icons/md'
import { NavLink, Link } from 'react-router-dom'
export default function Header() {
  const [showNav, setShowNav] = useState(false)
  const hideNav = () => {
    setShowNav(false)
  }
  return (
    <>
      <header className='bg-gray-900 text-white py-1.5 md:py-2.5 fixed top-0 right-0 w-full z-50'>
        <nav className='container mx-auto flex w-full items-center'>
          <div id='logo' className='flex-1 font-bold ml-3 '>
            <Link to='/' className='flex gap-2 items-center max-w-fit'>
              <span className='text-2xl'>
                <MdMovie />
              </span>
              <p className='text-2xl'>MovieBase</p>
            </Link>
          </div>
          <div>
            <ul className='hidden list-none md:flex text-lg space-x-3'>
              <NavLink
                to='movies'
                className={(navData) =>
                  navData.isActive ? 'text-yellow-400' : ''
                }
              >
                Movies
              </NavLink>
              <NavLink
                to='tv'
                className={(navData) =>
                  navData.isActive ? 'text-yellow-400' : ''
                }
              >
                Tv series
              </NavLink>
              <NavLink
                to='search'
                className={(navData) =>
                  navData.isActive ? 'text-yellow-400' : ''
                }
              >
                Search
              </NavLink>
              <NavLink
                to='genres'
                className={(navData) =>
                  navData.isActive ? 'text-yellow-400' : ''
                }
              >
                Genres
              </NavLink>
            </ul>
          </div>
          <div className='md:hidden'>
            <button
              className='p-2 outline-none text-2xl mr-3'
              onClick={() => setShowNav(!showNav)}
            >
              <HiOutlineMenuAlt4 />
            </button>
          </div>
        </nav>
        {showNav && (
          <div className='py-4 bg-gray-900 text-white md:hidden '>
            <ul className='px-5 list-none flex flex-col text-xl space-y-2'>
              <NavLink
                onClick={hideNav}
                className={(navData) =>
                  navData.isActive ? 'text-yellow-400' : ''
                }
                to='movies'
              >
                Movies
              </NavLink>
              <NavLink
                onClick={hideNav}
                className={(navData) =>
                  navData.isActive ? 'text-yellow-400' : ''
                }
                to='tv'
              >
                Tv series
              </NavLink>
              <NavLink
                onClick={hideNav}
                className={(navData) =>
                  navData.isActive ? 'text-yellow-400' : ''
                }
                to='search'
              >
                Search
              </NavLink>
              <NavLink
                onClick={hideNav}
                className={(navData) =>
                  navData.isActive ? 'text-yellow-400' : ''
                }
                to='genres'
              >
                Genres
              </NavLink>
            </ul>
          </div>
        )}
      </header>
    </>
  )
}
