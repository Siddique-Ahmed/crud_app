import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContentList from '../components/ContentList'

const Home = () => {
  return (
    <div className='bg-gray-100'>
      <Header/>
      <ContentList/>
      <Footer/>
    </div>
  )
}

export default Home
