// GiveAllWinsButton (giveAllWins:Function)
export default function GiveAllWinsButton(props) {
  const { giveEveryBodyAWin } = props
  return (
    <button onClick={giveEveryBodyAWin}>Give everybody a win</button>
  )
}