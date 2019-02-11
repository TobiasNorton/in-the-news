import React, { Component } from 'react'
import './App.css'

// 724c68adcd604fd7bcd865950a9eddb1

class App extends Component {
  findArticles = () => {}

  render() {
    return (
      <>
        <nav>
          <p>Home</p>
          <form onSubmit={this.findArticles}>
            <input type="text" name="search" />
            <button>Search</button>
          </form>
        </nav>
        <h1>In the News</h1>
        <footer>
          Powered by <a href="https://newsapi.org/">NewsAPI.org</a>
        </footer>
      </>
    )
  }
}

export default App
