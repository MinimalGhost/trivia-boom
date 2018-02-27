import React from 'react';
import GameItem from './GameItem'
import adapter from '../adapter'

class GameList extends React.Component {
  state = {
    games: []
  }

  fetchGames = () => {
    adapter.game.getGames()
    .then(games_data => this.setState({
      games: games_data
    }))
  }

  componentDidMount() {
    this.fetchGames()
  }

  render() {
    const openGames = this.state.games.map((game) => (<GameItem key={game.id} gameData={game} />))
    debugger
    return (
      <div className="dark-matter game-list">
        {openGames}
      </div>
    )
  }
}

export default GameList
