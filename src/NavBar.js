import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { parameterize } from './utility'
import { slide as Menu } from 'react-burger-menu'

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
        <Menu right>
          <p id="home" className="menu-item">
            Home
          </p>
          <p id="about" className="menu-item">
            Top Headlines
          </p>
          <p id="contact" className="menu-item">
            Search
          </p>
          {/* <p onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
        </Menu>
      </nav>
    )
  }
}

export default NavBar
