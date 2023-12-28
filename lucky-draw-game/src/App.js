import React, { useState } from 'react';
import './App.css';
import RandomName from 'random-name';

function App() {
  const [participants, setParticipants] = useState([]);
  const [winner, setWinner] = useState('');

  const addParticipant = () => {
    const newParticipant = RandomName.first();
    setParticipants([...participants, newParticipant]);
  };

  const drawWinner = () => {
    const randomIndex = Math.floor(Math.random() * participants.length);
    const selectedWinner = participants[randomIndex];
    setWinner(selectedWinner);
  };

  return (
    <div className="App">
     App
    </div>
  );
}

export default App;
