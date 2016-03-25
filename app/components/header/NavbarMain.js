import React, { Component } from 'react';

export default class NavbarMain extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Weather</a>
          </div>
            <form className="navbar-form navbar-right city-search-form" role="search">
              <div className="form-group">
                <input type="text" className="form-control city-search-input" placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
        </div>
      </nav>


    )
  }
}
