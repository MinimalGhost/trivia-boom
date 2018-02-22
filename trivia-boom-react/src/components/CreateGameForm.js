import React from 'react'

class CreateGameForm extends React.Component {
  state = {
    title: '',
    category: '',
    difficulty: '',
    slots: undefined,
    length: '',
    type: 'multiple'
  }
  
  render() {
    return (
      <form>
        <label>Title: </label>
        <input type="text" name="title" /> <br />
        <label>Category: </label>
        <select>
          <option value='9'>General Knowledge</option>
          <option value='10'>Entertainment: Books</option>
          <option value='11'>Entertainment: Film</option>
          <option value='12'>Entertainment: Music</option>
          <option value='13'>Entertainment: Theater</option>
          <option value='14'>Entertainment: Television</option>
          <option value='15'>Entertainment: Video Games</option>
          <option value='16'>Entertainment: Board Games</option>
          <option value='17'>Science: Nature</option>
          <option value='18'>Science: Computers</option>
          <option value='19'>Science: Mathematics</option>
          <option value='20'>Mythology</option>
          <option value='21'>Sports</option>
          <option value='22'>Geography</option>
          <option value='23'>History</option>
          <option value='24'>Politics</option>
          <option value='25'>Art</option>
          <option value='26'>Celebrities</option>
          <option value='27'>Animals</option>
          <option value='28'>Vehicles</option>
          <option value='29'>Entertainment: Comics</option>
          <option value='30'>Science: Gadgets</option>
          <option value='31'>Entertainment: Japanese Anime/Manga</option>
          <option value='32'>Entertainment: Cartoon/Animation</option>
        </select> <br />
        <label>Difficulty: </label>
        <select>
          <option value='easy'>Easy</option>
          <option value='medium'>Medium</option>
          <option value='hard'>Hard</option>
        </select> <br />
        <label>Length</label>
        <select>
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