import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: ''
    }
  }

  findArticles = () => {
    // axios
    //   .get(
    //     `https://newsapi.org/v2/everything?q=${
    //       this.state.userInput
    //     }&apiKey=724c68adcd604fd7bcd865950a9eddb1`
    //   )
    //   .then(response => {})
  }

  updateUserInput = event => {
    event.preventDefault()
    this.setState({
      userInput: event.target.value
    })
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
          <form onSubmit={this.findArticles} className="search">
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
