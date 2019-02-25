import React, { Component } from 'react'

class SelectedArticle extends Component {
  fullArticle = () => {
    const currentArticle = this.props.location.state
    console.log(currentArticle.author)
    if (!currentArticle.author) {
      return (
        <p>
          For the author and full article, visit
          <a href={currentArticle.url} target="_blank" className="news-link">
            {` ${currentArticle.source.name}`}
          </a>
        </p>
      )
    } else {
      return (
        <p>
          Read the full article at
          <a href={currentArticle.url} target="_blank" className="news-link">
            {` ${currentArticle.source.name}`}
          </a>
        </p>
      )
    }
  }

  render() {
    const currentArticle = this.props.location.state
    console.log(currentArticle)
    return (
      <div className="selected-article-main">
        <h1>{currentArticle.title}</h1>
        <p>{currentArticle.author ? `by ${currentArticle.author}` : ''}</p>
        <img src={currentArticle.urlToImage} className="article-image" />
        <p>{currentArticle.content}</p>
        {this.fullArticle()}
      </div>
    )
  }
}

export default SelectedArticle
