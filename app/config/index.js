
const OWM_BASE_URL = 'http://api.openweathermap.org/data/2.5/'
const OWM_UNITS = 'units=metric'

export const API_KEYS = {
  OWM: '269c7810b0e920996f67e99515169306' 
}

export const URLS = {

  WEATHER_BY_ID: (cityId) => `${OWM_BASE_URL}weather?id=${cityId}&appid=${API_KEYS.OWM}&${OWM_UNITS}`,

  WEATHER_BY_CITY_NAME: (cityName) => `${OWM_BASE_URL}weather?q=${cityName}&appid=${API_KEYS.OWM}&${OWM_UNITS}`,

  WEATHER_BY_COORDS: (lat, lon) =>  `${OWM_BASE_URL}weather?lat=${lat}&lon=${lon}&appid=${API_KEYS.OWM}&${OWM_UNITS}`,

  FORECAST_BY_ID: (cityId) => `${OWM_BASE_URL}forecast?id=${cityId}&appid=${API_KEYS.OWM}&${OWM_UNITS}`,

  NOMINATIM_URL: (lat, lon) => `http://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`

}

export const CITIES = {
  DEFAULT: {name: 'Saint Petersburg', id: 498817}
}
