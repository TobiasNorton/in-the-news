import React, { Component } from 'react'
import axios from 'axios'
import { parameterize } from './utility'

import { Link } from 'react-router-dom'

class SearchResults extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: this.props.location.state || '',
      searchResults: []
    }
  }

  componentDidMount = () => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${
          this.state.search
        }&apiKey=724c68adcd604fd7bcd865950a9eddb1`
      )
      .then(response => {
        this.setState({
          searchResults: response.data.articles
        })
      })
  }

  getSearchResults = () => {
    if (this.state.searchResults.length > 0) {
      return this.state.searchResults.map((article, index) => {
        return (
          <div key={index} className="headline-item">
            <Link
              to={{ pathname: `/article/${parameterize(article.title)}`, state: article }}
              className="headline"
            >
              {article.title} - {article.source.name}
            </Link>
          </div>
        )
      })
    } else {
      return <p>Oops! We could not find any news articles with that keyword.</p>
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.state !== this.props.location.state) {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${
            nextProps.location.state
          }&apiKey=724c68adcd604fd7bcd865950a9eddb1`
        )
        .then(response => {
          this.setState(
            {
              searchResults: response.data.articles
            },
            () => this.getSearchResults()
          )
        })
    } else {
      return
    }
  }

  render() {
    return (
      <div className="search-results">
        <p className="currently-showing">
          {this.state.searchResults > 0
            ? `Currently showing results containing keyword "${this.state.search}"`
            : ''}
        </p>
        <div className="headlines-container">{this.getSearchResults()}</div>
      </div>
    )
  }
}

export default SearchResults
