# Weather App!

## Pitch

Show the current weather of a city, have a search field to search the city. Create buttons for previously searched cities

Montréal
Toronto


button Montréal
button Toronto

## Structure

body
  h1  title
  form  search city
    input
    button
  section city button
    ul
      li
        button
  section weather
    temp
    weather
    city name
  


## Components

Button

App
  Search (Does the API request)
    SearchCityForm
    CityButtonList
      CityButtonListItem
  CurrentWeather

## Data structure

API
  weatherData: {...}

App
  stores: API State / Request

SearchCityForm
  needs: a way to do the request (fct from App)
  does:
    triggers the API request

CityButtonList
  needs: 
    [city, city, ...]
    a way to do the request (fct from App)

CityButtonListItem
  needs: 
    a way to do the request (fct from CityButtonList)
    city ""
  does:
    triggers the API request

CurrentWeather
  needs: 
    temp, ""
    weather,"" 
    city ""


## Helper functions?

Convert K to C
Parse temperature


## Testing!

### Unit

Helper functions

Form Component

### Feature

Type in the form, button show in the list

Type in the form, show the weather

