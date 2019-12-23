import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput'
import Band from '../components/Band'

class BandsContainer extends Component {
  renderBands = () => {
    return this.props.bands.map(band => {
      return <Band band={band}/>
    })
  }
  render() {
    return(
      <div>
        {this.renderBands()}
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => (
  {addBand: band => dispatch({type: "ADD_BAND", band: band})}
)

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
