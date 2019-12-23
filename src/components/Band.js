import React, {Component} from 'react'

class Band extends Component {

    render() {
        return <li key={this.props.band.id}>{this.props.band.name}</li>
    }
}

export default Band