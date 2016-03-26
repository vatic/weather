import { combineReducers } from 'redux'

import ui from './ui' 
import weather from './weather' 
import cities from './cities' 

const weatherApp = combineReducers({
  ui,
  weather,
  cities
})

export default weatherApp

