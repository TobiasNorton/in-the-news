import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
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
          <form onSubmit={this.findArticles} className="search">
            <input type="text" name="search" />
            <button>Search</button>
          </form>
        </div>
      </nav>
    )
  }
}

export default NavBar
