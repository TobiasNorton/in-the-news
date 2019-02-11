import React, { Component } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

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
      return (
        <div key={index} className="headline-item">
          <Link to={`/article/${article.id}`}>{article.title}</Link>
        </div>
      )
    })
  }

  render() {
    return (
      <section>
        <p>Choose a category</p>
        <button>Business</button>
        <button>Entertainment</button>
        <button>General</button>
        <button>Health</button>
        <button>Science</button>
        <button>Sports</button>
        <button>Technology</button>
        <div className="headlines-container">{this.getTopHeadlines()}</div>
      </section>
    )
  }
}

export default TopHeadlines
