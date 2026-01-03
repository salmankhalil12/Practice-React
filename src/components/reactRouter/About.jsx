import React from 'react'
import { useNavigate } from 'react-router-dom';
const About = () => {
  const navigate = useNavigate();
  const backTOHome = () => {
    navigate("/")
  }
  return (
    <div>
      <h1>Welcome to About Page</h1>
      <button onClick={backTOHome}>Back to Home </button>
    </div>
  )
}

export default About