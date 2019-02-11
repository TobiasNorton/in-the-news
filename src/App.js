import React, { Component } from 'react'
import './App.css'

import TopHeadlines from './TopHeadlines'

// 724c68adcd604fd7bcd865950a9eddb1

class App extends Component {
  findArticles = () => {}

  render() {
    return (
      <>
        <nav>
          <p>Home</p>
          <p>Top Headlines</p>
          <form onSubmit={this.findArticles}>
            <input type="text" name="search" />
            <button>Search</button>
          </form>
        </nav>
        <body>
          <h1>In the News</h1>
          <TopHeadlines />
        </body>

        <footer>
          Powered by <a href="https://newsapi.org/">NewsAPI.org</a>
        </footer>
      </>
    )
  }
}

export default App
