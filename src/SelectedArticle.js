import React, { Component } from 'react'

class SelectedArticle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentArticle: []
    }
  }

  componentDidMount = () => {
    this.setState(
      {
        currentArticle: this.props.location.state
      },
      () => {
        console.log(this.state.currentArticle.source)
      }
    )
  }

  render() {
    return (
      <div className="selected-article-main">
        <h1>{this.state.currentArticle.title}</h1>
        <p>by {this.state.currentArticle.author}</p>
        <img src={this.state.currentArticle.urlToImage} className="article-image" />
        {/* <p>{this.state.currentArticle.description}</p> */}
        <p>{this.state.currentArticle.content}</p>
        <p>
          Read the full article at
          <a href={this.state.currentArticle.url} target="_blank">
            Why can I console.log the name but I can't put it here?
          </a>
        </p>
      </div>
    )
  }
}

export default SelectedArticle
