import React, { Component } from 'react';
import { connect } from 'react-redux'
import classNames from 'classnames'

import { ui_test } from '../actions/ui'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(ui_test())
  }

  render() {

    return (

      <div>
        <h1>Hello Weather</h1>
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

