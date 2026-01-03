import React from 'react'
import { useNavigate } from 'react-router-dom';
const About = () => {
  const navigate = useNavigate();
  const backTOHome = () => {
    navigate("/")
  }
  return (
    <div>
      <h1 className='font-bold py-4'>Welcome to About Page</h1>
      <button onClick={backTOHome} className='bg-green-700 p-4 rounded-xl text-white' >Back to Home </button>
    </div>
  )
}

export default About