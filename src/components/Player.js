import React from "react"
import PropTypes from "prop-types"
import "./Player.css"

export default class Player extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    incrementScore: PropTypes.func.isRequired,
    removeThisPlayer: PropTypes.func.isRequired,
  }

  render() {
    return (
      <li className="player">
        <p className="name">{this.props.name}</p>
        <p className="score">{this.props.score}</p>
        <button onClick={this.handleIncrementScore}>+1</button>
        <button onClick={this.handleRemovePlayer}>Remove</button>
      </li>
    )
  }

  handleIncrementScore = () => {
    this.props.incrementScore(this.props.id)
  }

  handleRemovePlayer = () => {
    this.props.removeThisPlayer(this.props.id)
  }
}