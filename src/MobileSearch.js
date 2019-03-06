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

  componentDidMount = () => {
    console.log("We're in the MobileSearch component")
  }

  updateUserInput = event => {
    this.setState({
      userInput: event.target.value
    })
  }

  render() {
    return (
      <div>
        <p className="mobile-search-header">What would you like to read about?</p>
        <form onSubmit={this.goToSearchResults} className="search-mobile">
          <input
            type="text"
            className="mobile-search-input"
            name="search"
            autoComplete="off"
            onChange={this.updateUserInput}
            placeholder="Search by keyword"
          />
          <Link
            to={{
              pathname: `/search_results/${parameterize(this.state.userInput)}`,
              state: this.state.userInput
            }}
            className="search-button-mobile"
          >
            Search
          </Link>
        </form>
      </div>
    )
  }
}

export default MobileSearch
