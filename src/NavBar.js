import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { parameterize } from './utility'

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: ''
    }
  }

  updateUserInput = event => {
    event.preventDefault()
    this.setState({
      userInput: event.target.value
    })
  }

  goToSearchResults = () => {
    window.location = `/search_results/${parameterize(this.state.userInput)}`
  }

  click = () => {
    console.log(this.state.userInput)
  }

  render() {
    return (
      <nav>
        <p className="logo">Logo</p>
        <div className="nav-items-right">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/top_headlines" className="nav-link">
            Top Headlines
          </Link>
          <form onSubmit={this.goToSearchResults} className="search">
            <input type="text" name="search" onChange={this.updateUserInput} />
            <button>Search</button>
          </form>
          <button onClick={this.click}>Search</button>
        </div>
      </nav>
    )
  }
}

export default NavBar
