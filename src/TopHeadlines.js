import React, { Component } from 'react'
import axios from 'axios'

class TopHeadlines extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: []
    }
  }

  componentDidMount = () => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=724c68adcd604fd7bcd865950a9eddb1'
      )
      .then(response => {
        this.setState({
          articles: response.data.articles
        })
      })
  }

  getTopHeadlines = () => {
    console.log(this.state.articles)
    return this.state.articles.map((article, index) => {
      return <p key={index}>{article.title}</p>
    })
  }

  render() {
    return <section>{this.getTopHeadlines()}</section>
  }
}

export default TopHeadlines
