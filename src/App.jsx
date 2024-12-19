import { useState } from 'react'
import './App.css'
import Form from './Form'
import Header from './Header'
import Players from './Players'
import './assets/style.css'

function App() {


  const [players, setPlayer] = useState([]);

  const addPlayer = (value) => {
    setPlayer([...players, value]);
};


  return (
    <div className='scoreboard'>
      <Header />
      <Players players={players} />
      <Form player={players} addPlayer={addPlayer} />
    </div>
  )
}

export default App
