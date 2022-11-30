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
    <div className="grid gap-4 grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3  m-4">
      {
        gameCharacters.filter(gameCharacter => gameCharacter.isPlayableCharacter === true)
          .map(gameCharacter => <Agents
            key={gameCharacter.uuid}
            gameCharacter={gameCharacter}
          ></Agents>)
      }
    </div>
  );
}
export default App;
