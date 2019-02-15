import React, { Component } from 'react'

class SelectedArticle extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     currentArticle: []
  //   }
  // }

  // componentDidMount = () => {
  //   this.setState(
  //     {
  //       currentArticle: this.props.location.state
  //     },
  //     () => {
  //       console.log(this.state.currentArticle.source.name)
  //       console.log(this.state.currentArticle)
  //     }
  //   )
  // }

  render() {
    const currentArticle = this.props.location.state
    console.log(currentArticle)
    return (
      <div className="selected-article-main">
        <h1>{currentArticle.title}</h1>
        <p>by {currentArticle.author}</p>
        <img src={currentArticle.urlToImage} className="article-image" />
        <p>{currentArticle.content}</p>
        <p>
          Read the full article at
          <a href={currentArticle.url} target="_blank" className="news-link">
            {` ${currentArticle.source.name}`}
          </a>
        </p>
      </div>
    )
  }
}

export default SelectedArticle
