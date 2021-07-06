// ParticipantListItem (id:Int, name:String, nickname:String, wins:Int, giveOneWin:Function)


export default function ParticipantListItem(props) {
  const { id, name, nickname, wins, giveAWin } = props
  return (
    <article>
      <h1>{name}</h1>
      <h2>{nickname}</h2>
      <p>{wins} wins</p>
      <button onClick={() => giveAWin(id)}>Give a win</button>
    </article>
  )
}