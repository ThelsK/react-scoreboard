import React from 'react'
import Title from './components/Title.js'
import Scoreboard from './components/Scoreboard.js'
import './App.css'

function App() {
  return (
    <div className="App">
      <Title content="An Awesome Title!" />
      <Scoreboard />
    </div>
  );
}

export default App;
