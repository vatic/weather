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
        </div>
      </nav>


    )
  }
}
