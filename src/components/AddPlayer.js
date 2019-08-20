import React from 'react'
import PropTypes from 'prop-types'
import "./AddPlayer.css"

export default class AddPlayer extends React.Component {

  static propTypes = {
    addPlayer: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = { name: "" }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const name = this.state.name.trim()
    if (this.validateName(name)) {
      this.props.addPlayer(this.formatName(name))
      this.setState({
        name: ""
      })
    } else {
      alert(`"${name}" is not a valid name.
      \nMake sure the name is at least 2 characters long.`)
    }
  }

  validateName = name =>
    name.length >= 2

  formatName = name =>
    `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`

  render() {
    return (
      <div className="add-player">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}