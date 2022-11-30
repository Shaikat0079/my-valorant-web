import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [gameCharacter, setGameCharacter] = useState([]);
  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
      .then(response => response.json())
      .then(data => setGameCharacter(data.data))
  }, [])

  return (
    <div className="App">
      <h1>{gameCharacter.length}</h1>
    </div>
  );
}

export default App;
