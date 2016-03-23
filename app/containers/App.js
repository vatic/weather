import React, { Component } from 'react';
import { connect } from 'react-redux'
import classNames from 'classnames'

import { ui_test } from '../actions/ui'

import NavbarMain from '../components/header/NavbarMain'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(ui_test())
  }

  render() {

    return (

      <div id="wth_main">
        <NavbarMain />
      </div>

    )
  }
}

function mapStateToProps(state) {
  const { ui } = state

  return {
    ui
  }
}

export default connect(mapStateToProps)(App)

