import React from 'react'

class CreatePlayerForm extends React.Component {
  state = {
    name: ''
  }

  render() {
    return (
      <form className="dark-matter">
        <label>Name: </label>
        <input type="text" name="name" />
        <input type="submit" />
      </form>
    )
  }
}

export default CreatePlayerForm;
