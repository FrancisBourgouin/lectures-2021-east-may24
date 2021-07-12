import { convertKelvinToCelsius, parseTemp } from "./weatherHelpers";

describe("Testing convertKelvinToCelsius behavior", () => {
  it("should show 0 if given 273.15", () => {
    const result = convertKelvinToCelsius(273.15, 0)

    expect(result).toBe(0)
  })
  it("should show null if given an invalid input type", () => {
    const result = convertKelvinToCelsius(null, 0)
    const result1 = convertKelvinToCelsius([], 0)

    expect(result).toBeNull()
    expect(result1).toBeNull()
  })
  it("should show null if given a negative value", () => {
    const result = convertKelvinToCelsius(-50, 0)

    expect(result).toBeNull()
  })
  it("should show 30 if given 303.4, given a roundness of 0", () => {
    const result = convertKelvinToCelsius(303.4, 0)

    expect(result).toBe(30)
  })
  it("should show 30.3 if given 303.3, given a roundness of 1", () => {
    const result = convertKelvinToCelsius(303.4, 1)

    expect(result).toBe(30.3)
  })
})

describe("parseTemp functionality", () => {
  it("should show 30°C when given 30", () => {
    const result = parseTemp(30)

    expect(result).toBe("30°C")
  })
  it("should return null if given an invalid input", () => {
    const result = parseTemp()

    expect(result).toBeNull()
  })
})