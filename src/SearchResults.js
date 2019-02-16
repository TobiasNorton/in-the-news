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
    console.log(this.props.location.state)
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${
          this.state.search
        }&apiKey=724c68adcd604fd7bcd865950a9eddb1`
      )
      .then(response => {
        // console.log(response.data)
        this.setState(
          {
            searchResults: response.data.articles
          },
          () => console.log(response.data.articles)
        )
      })
  }

  getSearchResults = () => {
    return this.state.searchResults.map((article, index) => {
      return (
        <div key={index} className="headline-item">
          <Link
            to={{ pathname: `/article/${parameterize(article.title)}`, state: article }}
            className="headline"
          >
            {article.title}
          </Link>
        </div>
      )
    })
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
    return <div className="headlines-container">{this.getSearchResults()}</div>
  }
}

export default SearchResults
