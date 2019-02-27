import React, { Component } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import axios from 'axios'
import { parameterize } from './utility'

import { Link } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: [],
      outlet: '',
      domain: ''
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
            <Link to={{ pathname: `/article/${parameterize(article.title)}`, state: article }}>
              <img src={article.urlToImage} className="thumbnail" />
            </Link>
            <div className="overview-textbox">
              <Link
                to={{ pathname: `/article/${parameterize(article.title)}`, state: article }}
                style={{ textDecoration: 'none' }}
              >
                <p className="title">{article.title}</p>
              </Link>
              <p className="caption">{article.description}</p>
            </div>
          </div>
        )
      } else {
        return
      }
    })
  }

  getPreferredOutlet = event => {
    if (event.target.dataset.domain) {
      this.setState(
        {
          domain: event.target.dataset.domain
        },
        () =>
          axios
            .get(
              `https://newsapi.org/v2/everything?domains=${this.state.domain.toLowerCase()}&apiKey=724c68adcd604fd7bcd865950a9eddb1`
            )
            .then(response => {
              this.setState({
                articles: response.data.articles
              })
            })
      )
    } else {
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
  }

  render() {
    return (
      <div>
        <p className="outlet-preference-header">Have an Outlet Preference?</p>
        <div className="outlets-container">
          <button onClick={this.getPreferredOutlet} data-domain="BBC.com">
            BBC
          </button>
          <button onClick={this.getPreferredOutlet} data-domain="TheAtlantic.com">
            The Atlantic
          </button>
          <button onClick={this.getPreferredOutlet} data-domain="Reuters.com">
            Reuters
          </button>
          <button onClick={this.getPreferredOutlet} data-domain="NBCNews.com">
            NBC News
          </button>
          <button onClick={this.getPreferredOutlet} data-domain="Vice.com">
            Vice
          </button>
          <button onClick={this.getPreferredOutlet} data-domain="IndieWire.com">
            IndieWire
          </button>
          <button onClick={this.getPreferredOutlet} data-domain="BusinessInsider.com">
            Business Insider
          </button>
          <button onClick={this.getPreferredOutlet} data-domain="NYTimes.com">
            New York Times
          </button>
          <button onClick={this.getPreferredOutlet} data-domain="WSJ.com">
            WSJ
          </button>
          <button onClick={this.getPreferredOutlet} data-domain="NPR.org">
            NPR
          </button>
          <button onClick={this.getPreferredOutlet} data-domain="CBSNews.com">
            CBS News
          </button>
          <button onClick={this.getPreferredOutlet} data-domain="Slate.com">
            Slate
          </button>
          <button onClick={this.getPreferredOutlet} data-domain="USAToday.com">
            USA Today
          </button>
          <button onClick={this.getPreferredOutlet}>All Sources</button>
        </div>
        <h1 className="main-title">
          In the News <i className="fab fa-telegram-plane" />
        </h1>
        {/* <i class="far fa-comment" /> */}
        {/* <i class="fas fa-rainbow" /> */}
        <p className="main-caption">You heard it here (or somewhere else) first.</p>
        <p className="currently-showing">
          {this.state.domain ? `Currently Showing Top Headlines from ${this.state.domain}` : ''}
        </p>
        {this.showArticles()}
      </div>
    )
  }
}

export default Home
