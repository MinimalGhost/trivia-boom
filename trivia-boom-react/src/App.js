import React, { Component } from 'react'
import Home from './components/Home'
import CreateGameForm from './components/CreateGameForm'
import CreatePlayerForm from './components/CreatePlayerForm'
import GameList from './components/GameList'
import { Switch, Route } from 'react-router-dom'

class App extends Component {    
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/creategame' component={CreateGameForm} />
          <Route path='/gamelist' component={GameList} />
          <Route path='/createplayer' component={CreatePlayerForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
