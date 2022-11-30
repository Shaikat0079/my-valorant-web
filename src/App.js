import { useEffect, useState } from 'react';
import Agents from './Agents';
import './App.css';

function App() {
  const [gameCharacters, setGameCharacters] = useState([]);
  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
      .then(response => response.json())
      .then(data => setGameCharacters(data.data))
  }, [])

  return (
    <div className="App">
      <h1>{gameCharacters.length}</h1>
      {
        gameCharacters.map(gameCharacter => <Agents gameCharacter={gameCharacter}></Agents>)
      }
      {/* {
        gameCharacters.map(gameCharacter => <Character displayName={gameCharacter.displayName}></Character>)
      } */}

    </div>
  );
}
function Character(props) {
  return (
    <div>
      <p>{props.displayName}</p>
    </div>
  )
}

export default App;
