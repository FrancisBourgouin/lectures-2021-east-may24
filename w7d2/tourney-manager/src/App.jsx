import { useState } from 'react'

import ParticipantList from './components/ParticipantList';
import NewPlayerForm from './components/NewPlayerForm';
import GiveAllWinsButton from './components/GiveAllWinsButton';

import playerData from './utils/players'

import './App.css';

function App() {
  const [on, setOn] = useState(false)
  const [playerList, setPlayerList] = useState(playerData)
  const listOfParticipants = Object.values(playerList)


  const player = { ...playerList[2], wins: 1 }

  const giveAWin = (id) => {

    // playerList[id].wins = playerList[id].wins + 1 
    // const newPlayerList = { ...playerList }
    // newPlayerList[id] = { ...newPlayerList[id] }
    // newPlayerList[id].wins++
    // console.log(newPlayerList)
    // setPlayerList(newPlayerList)

    setPlayerList(pendingState => {
      const newPlayerList = { ...pendingState }
      newPlayerList[id] = { ...newPlayerList[id] }
      newPlayerList[id].wins++
      console.log(newPlayerList)

      return newPlayerList
    })
  }

  const giveEveryBodyAWin = () => {
    for (const key in playerList) {
      giveAWin(key)
    }
  }

  const addNewPlayer = () => {

  }

  return (
    <div className="App">
      <header>
        <h1>Super Tourney Manager</h1>
      </header>
      <main>
        <ParticipantList listOfParticipants={listOfParticipants} giveAWin={giveAWin} />
        <section>
          <NewPlayerForm />
          <GiveAllWinsButton giveEveryBodyAWin={giveEveryBodyAWin} />

        </section>
      </main>
    </div>
  );
}

export default App;


// Initial Render
// First draw
// Value of playerList is set (state)

// update state for player1
// update state for player2
// update state for player3
// update state for player4
// update state for player5

// Redraw
// Value of playerList is set (state)