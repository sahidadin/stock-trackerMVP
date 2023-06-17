import React, {useState, useEffect}from 'react';
import axios from 'axios';
var url = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=SPY&apikey=RK5EESM9601ZN5H7';

export default function Stonks() {
const [stonk, setStonk] = useState({});

  useEffect(()=> {
    axios.get(url,{})
    .then(({data})=>{
     // console.log(data['Global Quote']);
      setStonk(data['Global Quote']);
    })
  },[])
  console.log(stonk)
  return (
    <div id="portfolio">
      <span className="pheader">Portfolio</span>
      <br></br>
      <div className='pstonks'>
      <span className='symbol' >{stonk['01. symbol']}</span>
      <span className='price'>${stonk['05. price']}</span>
      </div>
    </div>
  );
}