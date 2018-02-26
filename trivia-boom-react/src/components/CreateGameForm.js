import React from 'react'
import adapter from '../adapter'

class CreateGameForm extends React.Component {
  state = {
    title: '',
    category: '',
    difficulty: '',
    slots: undefined,
    length: ''
  }

  handleSubmission = (e) => {
    e.preventDefault()
    adapter.game.createGameAndContents(this.state)
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmission}>
        <label>Title: </label>
        <input type="text" name="title" onChange={this.onInputChange}/> <br />
        <label>Players: </label>
        <input type="number" name="slots" onChange={this.onInputChange}/> <br />
        <label>Category: </label>
        <select name="category" onChange={this.onInputChange} >
          <option value='9'>General Knowledge</option>
          <option value='10'>Books</option>
          <option value='11'>Film</option>
          <option value='12'>Music</option>
          // <option value='13'>Theater</option>
          <option value='14'>Television</option>
          <option value='15'>Video Games</option>
          <option value='16'>Board Games</option>
          <option value='17'>Nature</option>
          <option value='18'>Computers</option>
          // <option value='19'>Mathematics</option>
          // <option value='20'>Mythology</option>
          // <option value='21'>Sports</option>
          <option value='22'>Geography</option>
          <option value='23'>History</option>
          // <option value='24'>Politics</option>
          // <option value='25'>Art</option>
          // <option value='26'>Celebrities</option>
          // <option value='27'>Animals</option>
          <option value='28'>Vehicles</option>
          // <option value='29'>Comics</option>
          // <option value='30'>Gadgets</option>
          <option value='31'>Anime/Manga</option>
          <option value='32'>Cartoon/Animation</option>
        </select> <br />
        <label>Difficulty: </label>
        <select name="difficulty" onChange={this.onInputChange} >
          <option value='easy'>Easy</option>
          <option value='medium'>Medium</option>
          <option value='hard'>Hard</option>
        </select> <br />
        <label>Length</label>
        <select name="length" onChange={this.onInputChange} >
          <option value="10">Short</option>
          <option value="20">Medium</option>
          <option value="30">Long</option>
        </select> <br />
        <input type="submit" />
      </form>
    )
  }
}

export default CreateGameForm
