import React from "react";
import "../App.css";
import { useState } from 'react';
import Flashcard from './Flashcard'; // Import the Flashcard component
import bandage from '../assets/class-1-bandage.jpg'
import wheelchair from '../assets/class-1-wheelchair.jpg'
import centurion from '../assets/class-2-cataract.png'
import catheter from '../assets/class-3-catheter.png'

export const CARD_QUESTIONS =[
    {
        id: 1,
        question: 'What does CFR stand for',
        answer: 'CFR stands for Code of Fderal Regulation'
    },
    {
        id: 2,
        question: 'What does CFR 21 Part 820 regulate?',
        answer: 'CFR 21 Part 820 regulates medical device manufacturing process'
    },
    {
        id: 3,
        question: 'What ISO standard is followed for medical device manufacturing?',
        answer: 'ISO13485 is followed for medical device manufacturing'
    },
    {
        id: 4,
        question: 'How many classes are there in medical devices?',
        answer: 'There are 3 classes in medical devices'
    },
    {
        id: 5,
        question: 'Give an example of Class I device',
        answer: (
            <div>
                <img src={bandage} style={{width: '200px'}}></img>
                <img src={wheelchair} style={{width: '200px'}}></img>
                <p>Bandage, Wheelchair, etc.</p>
            </div>
        )
    },
    {
        id: 6,
        question: 'Give an example of Class II device',
        answer:(
             <div>
                <img src={centurion} style={{width: '200px'}}></img>
                <p>Eye surgical equipment, dental surgical equipment, etc.</p>
            </div>
        )
    },
    {
        id: 7,
        question: 'Give an example of Class III device',
        answer: (
            <div>
                <img src={catheter} style={{width: '200px'}}></img>
                <p>Heart valve delivery system, Breast Implants, Immunology, etc</p>
            </div>
        )
    },
    {
        id: 8,
        question: 'What ISO standard is followed for medical devices',
        answer: 'ISO 13485'
    },
    {
        id: 9,
        question: 'What ISO standard is followed for risk management',
        answer: 'ISO 14791'
    },
    {
        id: 10,
        question: 'What is failure mode effectice analysis (FMEA)?',
        answer: 'FMEA is a list of potential failure modes which identifies potential harms and issues relating to the process or the device'
    },
    {
        id: 11,
        question: 'What are 2 main failure mode effectice analyses (FMEA)',
        answer: 'process FMEA (PFMEA) and design FMEA (DFMEA)'
    },
    {
        id: 12,
        question: 'What activies can assure the quality of manufacturing process',
        answer: 'Process validation, nonconformity investigation, quality management system, quality control, statistical process monitoring, etc.'
    }
  ]

const Buttons = ({ onPrevious, onNext, onShuffle }) =>{

      const [flashcards, setFlashcards] = useState(CARD_QUESTIONS);
      const [currentIndex, setCurrentIndex] = useState(0);

      return(
        <div>
            <button className="buttons" onClick={onPrevious}>Previous</button>
            <button className="buttons" onClick={onNext}>Next</button>
            <button className="buttons" onClick={onShuffle}>Shuffle</button>
        </div>
      )

}

export default Buttons;