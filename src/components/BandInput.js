import React, { Component } from 'react'

class BandInput extends Component {
  state={
      name: ''
  }
  

  handleInputChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleSubmit = (event) =>  {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({name: ''})
  }

  render() {
    return(
      <div>
        Add Band
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" value={this.state.name} onChange={this.handleInputChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
