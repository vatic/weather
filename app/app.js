import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

import 'bootstrap/less/bootstrap.less';
import './assets/css/index.less';

render(
  <Root />,
  document.getElementById('root')
)
