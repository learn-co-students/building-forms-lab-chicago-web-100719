import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import addBand from '../actions/addBand'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  addBand = (band) => {
    this.props.addBand(band)
  }

  renderBands = () => {
    return (
      <ul>
        {this.props.bands.map(band => <li>{band.name}</li>)}
      </ul>
    )
  }
  
  render() {
    return(
      <div>
        <BandInput addBand={this.addBand} />
        {this.renderBands()}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => dispatch(addBand(band))
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
