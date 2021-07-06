# Tourney manager

## Participant

```jsx
const participant = {
  id,
  name,
  nickname,
  wins
}
```

## Participants

Objects are better for data manipulation

```jsx
  const participants = {
    id:participant
  }

  // vs

  const participants = [
    participant
  ]
```

## Structure

### HTML

- body
-   header
-     h1
-   main
-     section (participants)
-       article
-        h1 (name)
-        h2 (nickname)
-        p (wins)
-        button (give one win)
-     section (form)
-       form (add player)
-       button (give all wins)

### Components

- App
-   ParticipantList (listOfParticipants:Array/Object, giveOneWin:Function)
-     ParticipantListItem (id:Int, name:String, nickname:String, wins:Int, giveOneWin:Function)
-   NewPlayerForm (addNewPlayer:Function)
-   GiveAllWinsButton (giveAllWins:Function)