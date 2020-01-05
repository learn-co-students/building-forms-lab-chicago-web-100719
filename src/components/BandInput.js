// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }
  
  handleChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand({name: this.state.name})
    this.setState({name: ''})
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" value={this.state.name}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
