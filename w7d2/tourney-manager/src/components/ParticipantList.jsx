import ParticipantListItem from "./ParticipantListItem"
// ParticipantList (listOfParticipants:Array/Object, giveOneWin:Function)

export default function ParticipantList(props) {
  const { listOfParticipants, giveAWin } = props

  const parsedListOfParticipants = Array.isArray(listOfParticipants) && listOfParticipants
    .map(participant => <ParticipantListItem {...participant} giveAWin={giveAWin} />)

  return (
    <section>
      <h1>Participants</h1>
      {parsedListOfParticipants}
    </section>
  )
}