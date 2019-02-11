import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import TopHeadlines from './TopHeadlines'
import Home from './Home'
import NavBar from './NavBar'
import Footer from './Footer'

// 724c68adcd604fd7bcd865950a9eddb1

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/top_headlines/" component={TopHeadlines} />
          {/* <Route path="/article/:id" componenet={SelectedArticle}/> */}
          {/* <Route path="/search_results" componenet={SearchResults}/> */}
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
