import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="dark-matter home">
      <Link to='/creategame'>Create Game</Link>
      <Link to='/gamelist'>Join Game</Link>
    </div>
  )
}

export default Home;
