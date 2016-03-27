import React, { Component } from 'react';

export default class CurrentLocation extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="col-md-12 current-location text-center">
          <div className="well">
            { this.props.cities.geoJson.display_name }
          </div>
        </div>
    )
  }
}
