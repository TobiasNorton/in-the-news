import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import TopHeadlines from './TopHeadlines'
import Home from './Home'
import NavBar from './NavBar'
import Footer from './Footer'
import SelectedArticle from './SelectedArticle'
import SearchResults from './SearchResults'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="master-container">
          <NavBar />
          <Route path="/top_headlines/" component={TopHeadlines} />

          <main>
            <Route exact path="/" component={Home} />
            <Route path="/article/:title" component={SelectedArticle} />
            <Route path="/search_results/:input" component={SearchResults} />
          </main>

          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
