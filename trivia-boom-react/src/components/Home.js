import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {  
  return (
    <div>
      <button><Link to='/creategame'>Create Game</Link></button>
      <button><Link to='/gamelist'>Join Game</Link></button>
    </div>
  )
}

export default Home;