// SearchCityForm
// needs: a way to do the request (fct from App)
// does:
// triggers the API request

import { useState } from "react"

export default function SearchCityForm(props) {
  const [formData, setFormData] = useState({
    cityName: ""
  })

  const handleChange = event => {
    const { name, value } = event.target

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.onSubmit(formData)
  }


  return (
    <form onSubmit={handleSubmit}>
      <h1>City Search Form</h1>
      <input
        type="text"
        name="cityName"
        placeholder="Enter the city name"
        value={formData.cityName}
        onChange={handleChange}
      />
      <button type="submit" data-testid="citySubmit">Search!</button>
    </form>
  )
}