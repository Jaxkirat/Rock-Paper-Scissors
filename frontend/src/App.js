import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import rockImg from './rock.png';
import paperImg from './paper.png';
import scissorsImg from './scissors.png';

function App() {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const playGame = (choice) => {
    setUserChoice(choice);
    axios.post('http://127.0.0.1:5000/play', { choice })
      .then(response => {
        setComputerChoice(response.data.computer_choice);
        setResult(response.data.result);
      })
      .catch(error => {
        console.error("There was an error!", error);
      });
  };

  const choiceToImg = (choice) => {
    switch(choice) {
      case 'rock':
        return rockImg;
      case 'paper':
        return paperImg;
      case 'scissors':
        return scissorsImg;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <video autoPlay loop muted id="background-video">
        <source src={`${process.env.PUBLIC_URL}/background.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1>Rock Paper Scissors</h1>
      <div className="choices">
        <img src={rockImg} alt="Rock" onClick={() => playGame('rock')} />
        <img src={paperImg} alt="Paper" onClick={() => playGame('paper')} />
        <img src={scissorsImg} alt="Scissors" onClick={() => playGame('scissors')} />
      </div>
      {userChoice && (
        <div className="results">
          <div className="result-choice">
            <h2>Your Choice:</h2>
            <img src={choiceToImg(userChoice)} alt={userChoice} />
          </div>
          <div className="result-choice">
            <h2>Computer's Choice:</h2>
            <img src={choiceToImg(computerChoice)} alt={computerChoice} />
          </div>
          <h2 className="result-declaration">Result: {result.toUpperCase()}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
