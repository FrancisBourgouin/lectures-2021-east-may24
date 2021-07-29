export default function Dashboard(props) {
  const { name } = props
  return (
    <div>
      <h1>I am dashboard!</h1>
      <h2>Hello {name}</h2>
    </div>
  )
}