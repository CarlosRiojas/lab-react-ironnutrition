import React from 'react';
import './App.css';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import FoodBox from "./foodBox"


function App() {
  return (
    <div className="App">
     <FoodBox />
    </div>
  );
}

export default App;
