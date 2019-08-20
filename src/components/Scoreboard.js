import React from "react"
import Player from "./Player"
import AddPlayer from "./AddPlayer"
import "./Scoreboard.css"

export default class Scoreboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      players: [
        { id: 1, name: "Alice", score: 5 },
        { id: 2, name: "Bob", score: 2 },
        { id: 3, name: "Cindy", score: 7 },
        { id: 4, name: "Dave", score: 4 },
      ],
      nextId: 5,
    }
  }

  render() {
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>
          {this.state.players
            .sort((a, b) =>
              b.score - a.score)
            .map((player) =>
              <Player
                key={player.id}
                id={player.id}
                name={player.name}
                score={player.score}
                incrementScore={this.incrementPlayerScore}
                removeThisPlayer={this.removePlayer}
              />)
          }
        </ul>
        <AddPlayer
          addPlayer={this.addPlayer}
        />
      </div>
    )
  }

  addPlayer = name =>
    this.setState({
      players: this.state.players.concat({
        id: this.state.nextId,
        name,
        score: 0
      }),
      nextId: this.state.nextId + 1,
    })

  removePlayer = id =>
    this.setState({
      players: this.state.players.filter(player =>
        id !== player.id
      )
    })

  incrementPlayerScore = id =>
    this.setState({
      players: this.state.players.map(player =>
        id === player.id
          ? { ...player, score: player.score + 1 }
          : player
      )
    })
}