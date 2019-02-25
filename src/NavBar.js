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
    this.setState({
      userInput: event.target.value
    })
  }

  render() {
    return (
      <nav>
        <Link to="/" className="logo">
          In the News <i className="fab fa-telegram-plane" />
        </Link>
        <div className="nav-items-right">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/top_headlines" className="nav-link">
            Top Headlines
          </Link>
          <form onSubmit={this.goToSearchResults} className="search">
            <input type="text" name="search" autoComplete="off" onChange={this.updateUserInput} />
            <Link
              to={{
                pathname: `/search_results/${parameterize(this.state.userInput)}`,
                state: this.state.userInput
              }}
              className="search-button"
            >
              Search
            </Link>
          </form>
        </div>
      </nav>
    )
  }
}

export default NavBar
