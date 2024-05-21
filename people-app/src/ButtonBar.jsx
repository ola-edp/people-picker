/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Confetti from "react-confetti";


export function ButtonBar({ reset, pickRandomPerson }) {
  const [showConfetti, setShowConfetti] = useState(false);

  const [isResetVisible, setIsResetVisible] = useState(false);
  const clickReset = () => {
    setIsResetVisible(!isResetVisible);

  };

  const handlePickRandomPerson = () => {
    pickRandomPerson();
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 6000); // Confetti will disappear after 3 seconds
  };
 

  return (
    <section>

      <button  className="btn btn-outline-danger" onClick={clickReset}>
        {isResetVisible ? 'Hide Confirm Button' : 'Reset'}
        
      </button>
      {isResetVisible && <button className="btn btn-outline-danger" button onClick={reset}>
        Are you sure?
      </button>
      }
      
     
      

      <button
        className="btn btn-outline-success m-2"
        onClick={handlePickRandomPerson}
      >
        Pick Random Person
      </button>
      {showConfetti && <Confetti />}
    </section>
  );
}