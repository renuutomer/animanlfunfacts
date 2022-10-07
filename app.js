import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';
const showBackground = true;
const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);

const animalFacts = (
  <div>
    <h1>{title ? title : 'Click an animal for a fun fact'}</h1>
    <p id="fact"></p>
    {showBackground && background }
  </div>
);


let images = [];
for(let animal in animals){
  images.push(<img key={animal} className="animal" alt={animal} src={animals[animal].image} aria-label={animal} role="button" onClick={displayFact}/>)
}

const compose = (
  <div>
    {animalFacts}
    {showBackground && background}
    <div className="animals">{images}</div>
  </div>
);

function displayFact(e) {
  let randomNum = Math.floor(Math.random() * animals[e.target.alt].facts.length);
  document.getElementById("fact").innerHTML = animals[e.target.alt].facts[randomNum];
}


ReactDOM.render(compose, document.getElementById('root'));
