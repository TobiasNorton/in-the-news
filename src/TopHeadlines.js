import React, { Component } from 'react'
import axios from 'axios'

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
      return (
        <div key={index} className="headline-item">
          <Link to={{ pathname: `/article/${encodeURI(article.title)}`, state: article }}>
            {article.title}
          </Link>
        </div>
      )
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
    )
  }

  business = () => {
    this.setState({
      category: 'business'
    })
    this.reloadHeadlines()
  }

  entertainment = () => {
    this.setState({
      category: 'entertainment'
    })
    this.reloadHeadlines()
  }

  general = () => {
    this.setState({
      category: 'general'
    })
    this.reloadHeadlines()
  }

  health = () => {
    this.setState({
      category: 'health'
    })
    this.reloadHeadlines()
  }

  science = () => {
    this.setState({
      category: 'science'
    })
    this.reloadHeadlines()
  }

  sports = () => {
    this.setState({
      category: 'sports'
    })
    this.reloadHeadlines()
  }

  technology = () => {
    this.setState(
      {
        category: 'technology'
      },
      () => {
        this.reloadHeadlines()
      }
    )
  }

  render() {
    return (
      <section>
        <p>Choose a category</p>
        <button onClick={this.reloadHeadlines} data-name="business">
          Business
        </button>
        <button onClick={this.reloadHeadlines} data-name="entertainment">
          Entertainment
        </button>
        <button onClick={this.reloadHeadlines} data-name="general">
          General
        </button>
        <button onClick={this.reloadHeadlines} data-name="health">
          Health
        </button>
        <button onClick={this.reloadHeadlines} data-name="science">
          Science
        </button>
        <button onClick={this.reloadHeadlines} data-name="sports">
          Sports
        </button>
        <button onClick={this.reloadHeadlines} data-name="business">
          Technology
        </button>
        <div className="headlines-container">{this.getTopHeadlines()}</div>
      </section>
    )
  }
}

export default TopHeadlines
