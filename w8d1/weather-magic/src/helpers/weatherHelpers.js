// Convert K to C

const rounder = (value, roundness) => {
  const pow = Math.pow(10, roundness)
  return Math.floor(Math.round(value * pow)) / pow
}

export const convertKelvinToCelsius = (tempInK, roundness) => {
  const validatedNumber = Number.parseFloat(tempInK)

  if (Number.isNaN(validatedNumber) || validatedNumber < 0) {
    return null
  }

  return rounder(validatedNumber - 273.15, roundness)
}

export const parseTemp = (temp) => {
  const validatedNumber = Number.parseFloat(temp)

  if (Number.isNaN(validatedNumber)) {
    return null
  }

  return `${temp}°C`
}