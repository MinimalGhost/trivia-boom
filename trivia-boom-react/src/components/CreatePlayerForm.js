import React from 'react'

class CreatePlayerForm extends React.Component {
  state = {
    name: ''
  }
  
  render() {
    return (
      <form>
        <label>Name: </label>
        <input type="text" name="name" />
        <input type="submit" />
      </form>
    )
  }
}

export default CreatePlayerForm;