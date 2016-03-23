import { combineReducers } from 'redux'

import ui from './ui' 
import weather from './weather' 

const weatherApp = combineReducers({
  ui,
  weather
})

export default weatherApp

