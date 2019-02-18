import React, { Component } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import axios from 'axios'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: [],
      outlet: ''
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

  getPreferredOutlet = event => {
    this.setState(
      {
        outlet: event.target.dataset.domain
      },
      () =>
        axios
          .get(
            `https://newsapi.org/v2/everything?domains=${
              this.state.outlet
            }&apiKey=724c68adcd604fd7bcd865950a9eddb1`
          )
          .then(response => {
            console.log(response.data.articles)
            this.setState({
              articles: response.data.articles
            })
          })
    )
  }

  render() {
    return (
      <div>
        <h1 className="main-title">In the News</h1>
        <p className="main-caption">You heard it here or somewhere else first.</p>
        <div className="categories-container">
          <button onClick={this.getPreferredOutlet} data-domain="bbc.com">
            BBC
          </button>
          <button onClick={this.getPreferredOutlet} data-domain="theatlantic.com">
            The Atlantic
          </button>
          <button onClick={this.getPreferredOutlet} data-domain="reuters.com">
            Reuters
          </button>
          <button onClick={this.getPreferredOutlet} data-domain="nbcnews.com">
            NBC News
          </button>
          <button onClick={this.getPreferredOutlet} data-domain="vice.com">
            Vice
          </button>
          <button onClick={this.getPreferredOutlet} data-domain="indiewire.com">
            IndieWire
          </button>
          <button onClick={this.getPreferredOutlet} data-domain="businessinsider.com">
            Business Insider
          </button>
          <button onClick={this.getPreferredOutlet} data-domain="nytimes.com">
            New York Times
          </button>
          <button onClick={this.getPreferredOutlet} data-domain="wsj.com">
            WSJ
          </button>
          <button onClick={this.getPreferredOutlet} data-domain="npr.org">
            NPR
          </button>
          <button onClick={this.getPreferredOutlet} data-domain="cbsnews.com">
            CBS News
          </button>
          <button onClick={this.getPreferredOutlet} data-domain="slate.com">
            Slate
          </button>
          <button onClick={this.getPreferredOutlet} data-domain="usatoday.com">
            USA Today
          </button>
        </div>
        {this.showArticles()}
      </div>
    )
  }
}

export default Home
