import React, { Component } from 'react'

class SelectedArticle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentArticle: undefined
    }
  }

  // componentDidMount = () => {
  //   this.setState({
  //     currentArticle: this.props.match.params.title
  //   })
  // }

  render() {
    return (
      <div>
        <h1 />
      </div>
    )
  }
}

export default SelectedArticle
