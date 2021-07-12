const days = [
  {
    id: 1,
    name: "Monday",
    appointments: [1, 2, 3]
  },
  {
    id: 2,
    name: "Tuesday",
    appointments: []
  },
  {
    id: 3,
    name: "Wednesday",
    appointments: [4]
  }
];
const appointments = {
  1: {
    id: 1,
    time: "1pm",
    interview: {
      student: "Bob",
      interviewer: 1
    }
  },
  2: {
    id: 2,
    time: "2pm",
    interview: null
  },
  3: {
    id: 3,
    time: "3pm",
    interview: null
  },
  4: {
    id: 4,
    time: "4pm",
    interview: null
  }
}
const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

const state = {
  day: 'Monday',
  days,
  appointments,
  interviewers
}

// PLAN

// Update the key spots inside a specific day
// Free spots === appointments with null interview
// Inside a day object, we have an array of appointment ids
// Current day is part of the state (state.day)

const updateSpots = (incomingState, day) => {
  const state = { ...incomingState }
  const currentDay = day || state.day

  // Find the day the object
  const currentDayObj = state.days.find(dayObj => dayObj.name === currentDay)
  const currentDayIndex = state.days.findIndex(dayObj => dayObj.name === currentDay)
  // Find the appointment id array
  const listOfAppointmentIds = currentDayObj.appointments
  // Look for the null interviews in each appointment from the array
  const listOfNullAppointments = listOfAppointmentIds.filter(id => !state.appointments[id].interview)
  // Sum them up
  const spots = listOfNullAppointments.length
  // update the value of the key 'spots' in the day with the sum I just made
  const updatedDayObj = { ...currentDayObj, spots }

  state.days = [...days]
  state.days[currentDayIndex] = updatedDayObj

  return state
}

// const anotherUpdateSpots = (days, appointments, day) => {
//   const currentDayObj = state.days.find(dayObj => dayObj.name === currentDay)

//   const spots = currentDayObj.appointments.filter(id => !appointments[id].interview)
// }

console.log(state)

const result = updateSpots(state, 'Monday')

console.log(result)


const bookInterview = (interview) => {
  // ...

  // ...

  // .then

  // Update the state

  // setState({...state, appointments})
  anotherUpdateSpots(state, days, appointments)
  setState(prevState => {
    const newState = { ...prevState, appointments }
    const newNewState = updateSpots(newState)

    return newNewState
  })

}