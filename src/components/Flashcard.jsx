import React from "react";
import { useState } from "react";
import '../App.css';

const Flashcard = (props) =>{
    const [flipped, setFlipped] = useState(false);

    const toggleFlip = () =>{
        setFlipped(!flipped);
    }

    return(
        <div className={`flip-card ${flipped ? 'flipped' : ''}`} onClick={toggleFlip}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <p>{props.question}</p>
                </div>
                <div className="flip-card-back">
                    <p>{props.answer}</p>
                </div>
            </div>
        </div>
    )
}

export default Flashcard;