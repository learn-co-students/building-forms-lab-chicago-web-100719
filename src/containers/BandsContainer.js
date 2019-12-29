import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import Band from '../components/Band'

class BandsContainer extends Component {
  renderBands = () => {
    return this.props.bands.map(band => <Band band={band} /> )
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = ({ bands}) => {
  return ({ bands })
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: band => dispatch({
      type: "ADD_BAND",
      band: band
    })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
