import React, { Component } from 'react';

export default class CurrentLocation extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { geoJson, isGeocodeFetching } = this.props.cities;

    return (
        <div className="col-md-12 current-location text-center">
          { isGeocodeFetching &&
            <i className="fa fa-spinner fa-spin"></i>
          }
          { !isGeocodeFetching &&
            <div className="well">
              { geoJson.display_name }
            </div>
          }
        </div>
    )
  }
}
