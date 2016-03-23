import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

import 'bootstrap/less/bootstrap.less';

render(
  <Root />,
  document.getElementById('root')
)
