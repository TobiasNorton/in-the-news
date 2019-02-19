import React, { Component } from 'react'
import axios from 'axios'
import { parameterize } from './utility'
import { Link } from 'react-router-dom'

class TopHeadlines extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: [],
      category: 'general'
    }
  }

  componentDidMount = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${
          this.state.category
        }&apiKey=724c68adcd604fd7bcd865950a9eddb1`
      )
      .then(response => {
        this.setState({
          articles: response.data.articles
        })
      })
  }

  getTopHeadlines = () => {
    return this.state.articles.map((article, index) => {
      if (article.urlToImage) {
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
      } else {
        return
      }
    })
  }

  reloadHeadlines = event => {
    console.log(event.target.dataset.name)

    this.setState(
      {
        category: event.target.dataset.name
      },
      () => {
        axios
          .get(
            `https://newsapi.org/v2/top-headlines?country=us&category=${this.state.category.toLowerCase()}&apiKey=724c68adcd604fd7bcd865950a9eddb1`
          )
          .then(response => {
            this.setState({
              articles: response.data.articles
            })
          })
      }
    )
  }

  // business = () => {
  //   this.setState({
  //     category: 'business'
  //   })
  //   this.reloadHeadlines()
  // }

  render() {
    return (
      <section className="top-headlines">
        <p className="top-headlines-header">Choose a category</p>

        <div className="categories-container">
          <button onClick={this.reloadHeadlines} data-name="Business">
            Business
          </button>
          <button onClick={this.reloadHeadlines} data-name="Entertainment">
            Entertainment
          </button>
          <button onClick={this.reloadHeadlines} data-name="General">
            General
          </button>
          <button onClick={this.reloadHeadlines} data-name="Health">
            Health
          </button>
          <button onClick={this.reloadHeadlines} data-name="Science">
            Science
          </button>
          <button onClick={this.reloadHeadlines} data-name="Sports">
            Sports
          </button>
          <button onClick={this.reloadHeadlines} data-name="Business">
            Technology
          </button>
        </div>
        <p className="currently-showing">
          {this.state.category !== 'general'
            ? `Currently showing top headlines for ${this.state.category}`
            : ''}
        </p>
        <div className="headlines-container">{this.getTopHeadlines()}</div>
      </section>
    )
  }
}

export default TopHeadlines
