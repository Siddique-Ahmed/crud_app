import React from 'react'
import { Link } from 'react-router-dom'
import {FaLinkedin,FaGithub,FaInstagram,FaYoutube} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-white text-gray-400 drop-shadow-2xl">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
      © 2024 Siddiue — Ahmed
      <Link
        to="https://github.com/Siddique-Ahmed"
        className="text-gray-600 ml-1 hover:text-red-500"
        target="_blank"
      >
        @Siddique-Ahmed
      </Link>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-evenly gap-4 sm:justify-start">
      <Link to={"https://www.linkedin.com/in/siddique-ahmed-8a3009297/"} target='_blank'>
      <FaLinkedin className='hover:text-blue-500 text-[20px]'/>
      </Link>
      <Link to={"https://github.com/Siddique-Ahmed/"} target='_blank'>
      <FaGithub className='hover:text-gray-800 text-[20px]'/>
      </Link>
      <Link to={"https://instagram.com/codewithfun764"} target='_blank'>
      <FaInstagram className='hover:text-red-500 text-[20px]'/>
      </Link>
      <Link to={"https://youtube.com/@codewithfun07"} target='_blank'>
      <FaYoutube className='hover:text-red-600 text-[20px]'/>
      </Link>
    </span>
  </div>
</footer>

  )
}

export default Footer
