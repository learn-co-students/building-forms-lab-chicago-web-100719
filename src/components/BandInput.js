// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ""
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand({name: this.state.name})
    this.setState({
      name: ""
    })
  }

  render() {
    return(
      <div>
        <p>Create Band</p>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.name}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput


// You will need to write the BandInput component as a child of BandsContainer. This component should have a form with a text input and submit button. We would like to update this component's state each time the user types a new character in the input, stored as this.state.name. We will only update the Redux store's state when the user hits the submit button. The dispatched action required to initiate this update should be set up in BandsContainer and passed down as the prop addBand to BandInput.
