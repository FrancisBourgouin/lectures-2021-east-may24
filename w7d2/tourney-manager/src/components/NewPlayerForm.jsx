// NewPlayerForm (addNewPlayer:Function)

export default function NewPlayerForm(props) {

  return (
    <form>
      <input type="text" name="name" />
      <input type="text" name="nickname" />
      <button type="submit">Give a win</button>
    </form>
  )
}