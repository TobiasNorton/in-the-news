import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { parameterize } from './utility'

class MobileSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: ''
    }
  }

  updateUserInput = event => {
    this.setState({
      userInput: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.goToSearchResults} className="search">
          <input type="text" name="search" autoComplete="off" onChange={this.updateUserInput} />
          <Link
            to={{
              pathname: `/search_results/${parameterize(this.state.userInput)}`,
              state: this.state.userInput
            }}
            className="search-button"
          >
            Search
          </Link>
        </form>
      </div>
    )
  }
}

export default MobileSearch
