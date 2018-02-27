import React from 'react'
import TriviaPanel from './TriviaPanel'
import PlayerList from './PlayerList'

class GameContainer extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="game-container">
        <TriviaPanel />
        <PlayerList />
      </div>
    )
  }
}

export default GameContainer
