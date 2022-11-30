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
    </div>
  );
}
export default App;
