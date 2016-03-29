import React, { Component } from 'react';

export default class CurrentLocation extends Component {

  render() {
    const { geoJson, isGeocodeFetching, isGeocodeError, errorMessage } = this.props.cities;

    return (
        <div className="col-md-12 current-location text-center">
          { isGeocodeFetching &&
            <i className="fa fa-spinner fa-spin"></i>
          }

          { !isGeocodeFetching && isGeocodeError &&
            <div className="well">
              <strong>Error: </strong>
              <span className="red">{ errorMessage }</span>
            </div>
          }

          { !isGeocodeFetching && !isGeocodeError &&
            <div className="well">
              <strong>Your current location: </strong>
              { geoJson.display_name }
            </div>
          }
        </div>
    )
  }
}
