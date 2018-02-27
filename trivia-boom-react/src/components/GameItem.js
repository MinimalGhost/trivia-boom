import React from 'react'

const GameItem = (props) => {
  return (
    <div className="game-item">
      <p>Title: {props.gameData.title}</p>
      <p>Category: {props.gameData.category}</p>
      <p>Difficulty: {props.gameData.difficulty}</p>
      <p>Players: {props.gameData.slots}</p>
      <p>Questions: {props.gameData.length}</p>
    </div>
  )
}

export default GameItem
