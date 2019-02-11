import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import TopHeadlines from './TopHeadlines'
import Home from './Home'

// 724c68adcd604fd7bcd865950a9eddb1

class App extends Component {
  findArticles = () => {}

  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/top_headlines">Top Headlines</Link>
            <form onSubmit={this.findArticles}>
              <input type="text" name="search" />
              <button>Search</button>
            </form>
          </nav>
          <body>
            <h1>In the News</h1>
          </body>

          <footer>
            Powered by <a href="https://newsapi.org/">NewsAPI.org</a>
          </footer>

          <Route exact path="/" component={Home} />
          <Route path="/top_headlines/" component={TopHeadlines} />
        </div>
      </Router>
    )
  }
}

export default App
