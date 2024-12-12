import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='w-full bg-white fixed top-0 left-0 gap-2 flex items-center justify-between px-4 py-2 shadow-md'>
      <Link to={"/"}>
      <h1 className='font-semibold sm:font-bold uppercase text-gray-400 hover:text-blue-600 transition-all'>crud_app</h1>
      </Link>
      <Link to={"/https://github.com/Siddique-Ahmed"}>
      <h1 className='font-semibold sm:font-bold uppercase text-gray-400 hover:text-blue-600 transition-all'>Siddique-Ahmed</h1>
      </Link>
      <Link to={"/addContent"}>
      <button className='p-2 bg-blue-700 text-white rounded-md border-none font-normal sm:font-semibold'>Add Task</button>
      </Link>
    </nav>
  )
}

export default Header
