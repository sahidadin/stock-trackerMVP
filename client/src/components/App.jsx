import React, {useEffect, useState }from 'react';
import axios from 'axios';
import Stonks from './Stonks.jsx';
import Search from './Search.jsx';
import LineChart from './Chart.jsx';
var url = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=SPY&apikey=RK5EESM9601ZN5H7';

export default function App() {
  const [stock,setStock] = useState('tsla');
  return (
    <div>
      <Search stock={stock} setStock={setStock}/>
    <div id="App">
      <Stonks />
      <LineChart stock={stock} />
    </div>
    </div>
  );
}