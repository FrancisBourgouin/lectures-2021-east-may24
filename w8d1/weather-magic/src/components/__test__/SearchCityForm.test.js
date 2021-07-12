import { render, fireEvent } from '@testing-library/react'

import SearchCityForm from "../SearchCityForm";

describe("Testing the SearchCityForm component behavior", () => {
  it("shows the input to type a city", () => {
    const { getByPlaceholderText, queryByPlaceholderText } = render(<SearchCityForm />)

    const element = getByPlaceholderText("Enter the city name")

    expect(element).toBeInTheDocument()
  })
  it("can accept an input when typed in the input tag", () => {
    const { getByPlaceholderText } = render(<SearchCityForm />)

    const element = getByPlaceholderText("Enter the city name")

    fireEvent.change(element, { target: { value: 'Montréal' } })

    expect(element).toHaveValue('Montréal')

  })
  it("calls the function when submitted", () => {
    const fakeSubmit = jest.fn()
    const { getByTestId } = render(<SearchCityForm onSubmit={fakeSubmit} />)

    const element = getByTestId("citySubmit")

    fireEvent.click(element)

    expect(fakeSubmit).toHaveBeenCalled()
  })
})