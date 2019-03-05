import React, { Component } from 'react'

class SelectedArticle extends Component {
  fullArticle = () => {
    const currentArticle = this.props.location.state
    if (!currentArticle.author) {
      return (
        <p className="external-article">
          For the author and full article, visit
          <a href={currentArticle.url} target="_blank" className="news-link">
            {` ${currentArticle.source.name}`}
          </a>
        </p>
      )
    } else {
      return (
        <p className="external-article">
          Read the full article at
          <a href={currentArticle.url} target="_blank" className="news-link">
            {` ${currentArticle.source.name}`}
          </a>
        </p>
      )
    }
  }

  // publishedAt = date => {
  //   let newDate = new Date(date * 1000).toLocaleDateString([], {
  //     weekday: 'long',
  //     month: 'long',
  //     day: 'numeric',
  //     year: 'numeric'
  //   })
  //   return newDate
  // }

  render() {
    const currentArticle = this.props.location.state
    const unixTimeStamp = Date.parse(currentArticle.publishedAt)
    return (
      <div className="selected-article-main">
        <h1 className="selected-article-title">{currentArticle.title}</h1>
        <p className="author">{currentArticle.author ? `by ${currentArticle.author}` : ''}</p>
        {/* <p>{this.publishedAt(unixTimeStamp)}</p> */}
        <img src={currentArticle.urlToImage} className="article-image" />
        <p className="content">{currentArticle.content}</p>
        {this.fullArticle()}
      </div>
    )
  }
}

export default SelectedArticle
