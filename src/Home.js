import React, { Component } from 'react';
import axios from 'axios';
import { parameterize } from './utility';
import { NEWS_OUTLETS } from './constants';

import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      outlet: '',
      domain: '',
      upgradeRequired: false,
    };
  }

  componentDidMount = () => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=724c68adcd604fd7bcd865950a9eddb1'
      )
      .then((response) => {
        if (response.data && response.data.articles) {
          this.setState({
            articles: response.data.articles,
          });
        }
      })
      .catch((error) => {
        if (error.response.status === 426) {
          this.setState({
            upgradeRequired: true,
          });
        }
        console.error(error);
      });
  };

  showArticles = () => {
    return this.state.articles.map((article, index) => {
      if (article.urlToImage) {
        return (
          <div key={index} className="overview">
            <Link to={{ pathname: `/article/${parameterize(article.title)}`, state: article }}>
              <img src={article.urlToImage} className="thumbnail" alt={article.title} />
            </Link>
            <div className="overview-textbox">
              <Link
                to={{ pathname: `/article/${parameterize(article.title)}`, state: article }}
                style={{ textDecoration: 'none' }}
              >
                <p className="title">
                  {article.title} {this.state.domain ? ` - ${article.source.name}` : ''}
                </p>
              </Link>
              <p className="caption">{article.description}</p>
            </div>
          </div>
        );
      } else {
        return null;
      }
    });
  };

  getPreferredOutlet = (event) => {
    if (event.target.dataset.domain) {
      this.setState(
        {
          domain: event.target.dataset.domain,
        },
        () =>
          axios
            .get(
              `https://newsapi.org/v2/everything?domains=${this.state.domain.toLowerCase()}&apiKey=724c68adcd604fd7bcd865950a9eddb1`
            )
            .then((response) => {
              this.setState({
                articles: response.data.articles,
              });
            })
      );
    } else {
      axios
        .get(
          'https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=724c68adcd604fd7bcd865950a9eddb1'
        )
        .then((response) => {
          this.setState({
            articles: response.data.articles,
          });
        });
    }
  };

  render() {
    return (
      <div>
        <p className="outlet-preference-header">Have an Outlet Preference?</p>
        <div className="outlets-container">
          {NEWS_OUTLETS.map((outlet, index) => {
            return (
              <button key={index} onClick={this.getPreferredOutlet} data-domain={outlet.domain}>
                {outlet.name}
              </button>
            );
          })}
          <button onClick={this.getPreferredOutlet}>All Sources</button>
        </div>
        <h1 className="main-title">
          In the News <i className="fab fa-telegram-plane" />
        </h1>
        <p className="main-caption">You heard it here first. Hopefully.</p>
        <p className="currently-showing">
          {this.state.domain ? `Currently Showing Top Headlines from ${this.state.domain}` : ''}
        </p>
        {this.state.upgradeRequired ? (
          <p className="cors-message">
            Oops! The development plan from{' '}
            <a
              href="https://newsapi.org/"
              className="news-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              NewsAPI.org
            </a>{' '}
            is now only CORS enabled for localhost, so if you’d like to see this app in full you’ll
            need to run the{' '}
            <a
              href="https://github.com/TobiasNorton/in-the-news"
              className="news-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              repo
            </a>{' '}
            locally. Have a great day!
          </p>
        ) : (
          this.showArticles()
        )}
      </div>
    );
  }
}

export default Home;
