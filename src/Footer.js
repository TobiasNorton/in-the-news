import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
          Powered by{' '}
          <a href="https://newsapi.org/" className="news-api" target="_blank">
            NewsAPI.org
          </a>
        </p>
      </footer>
    )
  }
}

export default Footer
