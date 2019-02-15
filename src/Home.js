import React, { Component } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import axios from 'axios'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: []
    }
  }

  componentDidMount = () => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=724c68adcd604fd7bcd865950a9eddb1'
      )
      .then(response => {
        console.log(response.data.articles)
        this.setState({
          articles: response.data.articles
        })
      })
  }

  showArticles = () => {
    // console.log(this.state.articles)
    return this.state.articles.map((article, index) => {
      if (article.urlToImage) {
        return (
          <div key={index} className="overview">
            <img src={article.urlToImage} className="thumbnail" />
            <div>
              <p className="title">{article.title}</p>
              <p className="caption">{article.description}</p>
            </div>
          </div>
        )
      } else {
        return
      }
    })
  }

  render() {
    return (
      <div>
        <h1 className="main-title">In the News</h1>
        <p className="main-caption">You heard it here or somewhere else first.</p>
        {this.showArticles()}
      </div>
    )
  }
}

export default Home
