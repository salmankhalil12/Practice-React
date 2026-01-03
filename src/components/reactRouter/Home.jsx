import React from 'react'
import { useNavigate } from 'react-router-dom'
// import About from './About'
const Home = () => {
  const navigate = useNavigate();
  const goTOAbout = () => {
    navigate("/about")
  }
  return (
    <div className=''>
      <h1 className='font-bold py-4'>Welcome to Home Page</h1>
      <button onClick={goTOAbout} className='bg-green-700 p-4 rounded-xl text-white' >About Pag</button>
    </div>
  )
}

export default Home