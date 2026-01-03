import React from 'react'
import { useNavigate } from 'react-router-dom'
// import About from './About'
const Home = () => {
  const navigate = useNavigate();
  const goTOAbout = () => {
    navigate("/about")
  }
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <button onClick={goTOAbout}>About Pag</button>
    </div>
  )
}

export default Home