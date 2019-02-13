import React, { Component } from 'react'
import axios from 'axios'
import { parameterize } from './utility'

import { Link } from 'react-router-dom'

class SearchResults extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchResults: []
    }
  }

  componentDidMount = () => {
    console.log(this.props.match.params)
    // axios
    //   .get(
    //     `https://newsapi.org/v2/everything?q=${
    //       this.props.match.params....
    //     }&apiKey=724c68adcd604fd7bcd865950a9eddb1`
    //   )
    //   .then(response => {
    //     this.setState({
    //       articles: response.data.articles
    //     })
    //   })
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

  render() {
    return <div className="headlines-container">{this.getSearchResults()}</div>
  }
}

export default SearchResults