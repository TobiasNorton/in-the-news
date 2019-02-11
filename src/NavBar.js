import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/top_headlines">Top Headlines</Link>
        <form onSubmit={this.findArticles}>
          <input type="text" name="search" />
          <button>Search</button>
        </form>
      </nav>
    )
  }
}

export default NavBar
