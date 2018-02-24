import React from 'react';
import GameItem from './GameItem'

class GameList extends React.Component {
  state = {
    games: []
  }
  
  render() {
    return (
      <div>
        <GameItem />
      </div>
    )
  }
}

export default GameList