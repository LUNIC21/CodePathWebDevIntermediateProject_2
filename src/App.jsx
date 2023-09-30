import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard';
import Buttons from './components/Buttons';
import { CARD_QUESTIONS } from './components/Buttons';
import fdaLogo from './assets/FDA-Logo.png'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? prevIndex : prevIndex - 1));
    
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === CARD_QUESTIONS.length - 1 ? prevIndex : prevIndex + 1));
    return { index: newIndex, flipped: false };
  };

  const handleShuffle = () => {
    setCurrentIndex(Math.floor(Math.random() * CARD_QUESTIONS.length));
  };

  return (
    <div className="title">
      <img className="fdaLogo" src={fdaLogo} alt="FDA Logo"></img>
      <h1>Medical Device Regulations</h1>
      <h2>Let's learn about basics of regulations</h2>
      <h3>Cards: {currentIndex+1} of 12</h3>
      <Flashcard question={CARD_QUESTIONS[currentIndex].question} answer={CARD_QUESTIONS[currentIndex].answer}/>
      <Buttons onPrevious={handlePrevious} onNext={handleNext} onShuffle={handleShuffle} />

    </div>
  )
}

export default App