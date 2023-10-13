import React, { Component } from 'react';
import axios from 'axios';
import { parameterize } from './utility';
import { Link } from 'react-router-dom';
import CorsMessage from './CorsMessage';

class TopHeadlines extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      category: 'general',
      upgradeRequired: false,
    };
  }

  componentDidMount = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${this.state.category}&apiKey=724c68adcd604fd7bcd865950a9eddb1`
      )
      .then((response) => {
        this.setState({
          articles: response.data.articles,
        });
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
        );
      } else {
        return;
      }
    });
  };

  reloadHeadlines = (event) => {
    this.setState(
      {
        category: event.target.dataset.name,
      },
      () => {
        axios
          .get(
            `https://newsapi.org/v2/top-headlines?country=us&category=${this.state.category.toLowerCase()}&apiKey=724c68adcd604fd7bcd865950a9eddb1`
          )
          .then((response) => {
            this.setState({
              articles: response.data.articles,
            });
          })
          .catch((error) => {
            if (error.response.status === 426) {
              this.setState({
                upgradeRequired: true,
              });
            }
            console.error(error);
          });
      }
    );
  };

  render() {
    return (
      <section className="top-headlines">
        <p className="top-headlines-header">Browse Top Headlines by Category</p>
        <div className="categories-container">
          <button onClick={this.reloadHeadlines} data-name="Business">
            Business
          </button>
          <button onClick={this.reloadHeadlines} data-name="Entertainment">
            Entertainment
          </button>
          <button onClick={this.reloadHeadlines} data-name="general">
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
          <button onClick={this.reloadHeadlines} data-name="Technology">
            Technology
          </button>
        </div>
        <p className="currently-showing">
          {this.state.category !== 'general'
            ? `Currently showing top headlines for ${this.state.category}`
            : ''}
        </p>
        <div className="headlines-container">
          {this.state.upgradeRequired ? <CorsMessage /> : this.getTopHeadlines()}
        </div>
      </section>
    );
  }
}

export default TopHeadlines;
