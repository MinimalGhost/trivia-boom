import React, { Component } from 'react'
import './App.css';
import Home from './components/Home'
import CreateGameForm from './components/CreateGameForm'
import CreatePlayerForm from './components/CreatePlayerForm'
import GameList from './components/GameList'
import GameContainer from './components/GameContainer'
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
          <Route path='/lobby' component={GameContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
