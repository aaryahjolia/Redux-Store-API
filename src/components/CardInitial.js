import React from 'react';
import './CardInitial.css'

function CardInitial() {
  return (
    <div className="main">
      <h1>Please Click on any button below to see that user's information!</h1>
      <h2 style={{marginTop: "1rem"}}>All the information is coming through <a href="https://reqres.in/">reqres</a> API</h2>
    </div>
  );
}

export default CardInitial;
