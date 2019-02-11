import React, { Component } from 'react'

class SelectedArticle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentArticle: undefined
    }
  }

  componentDidMount = () => {
    this.setState(
      {
        currentArticle: this.props.location.state
      },
      () => {
        console.log(this.state.currentArticle)
      }
    )
  }

  render() {
    return (
      <div>
        {/* <img src={this.props.location.state.urlToImage} alt={this.state.currentArticle.title} />
        <h1>{this.props.location.state.title}</h1>
        <p>{this.props.location.state.description}</p> */}
      </div>
    )
  }
}

export default SelectedArticle
