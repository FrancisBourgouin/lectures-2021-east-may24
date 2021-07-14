import { useState } from 'react'
import CamelBack from './Camel'
import './Camel.scss'
import Straws from './Straws'

export default function Camel(props) {
  const [strawAmount, setStrawAmount] = useState(0)

  const addStraw = () => {
    const amount = strawAmount === 11 ? 0 : strawAmount + 1
    setStrawAmount(amount)
  }



  return (
    <section className="Camel">
      <h1>The straw that broke the camel's back</h1>
      <main>
        <Straws strawAmount={strawAmount} />
        <CamelBack strawAmount={strawAmount} onClick={addStraw} />
      </main>
    </section>
  )
}