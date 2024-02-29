import { useState } from "react";
import Animals from "./Animals";
import './App.css';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals [Math.floor(Math.random() * animals.length)];
}
// console.log(getRandomAnimal());

function App() {
//  const [count, setCount] = useState(0);
  const [animals, setAnimals] = useState([]); 

  const handleClick = () => {
    // setCount(count + 1);
    setAnimals ([...animals, getRandomAnimal()]);
  };
  const renderedAnimals = animals.map((animal, index) => {
    return <Animals type ={animal} key={index} />;
  });
  return ( 
  <div className="app">
    <button onClick={handleClick}>
      Add Animal
      </button>
      {/* <div>Number of animals to show: {animals}</div> */}
      <div className="animal-list">{renderedAnimals}</div>
  </div>
  );
}

export default App;