import React, {useState, useEffect}from 'react';
import axios from 'axios';

export default function Search({setStock}) {
  const [ticker, setTicker] = useState([]);
let suggestion = false;

  const handleChange = (e) => {
    if(e === undefined) {
      setTicker([]);
    }
    //setStock(e.target.value);
    axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${e.target.value}&apikey=RK5EESM9601ZN5H7`)
    .then(({data})=>{
      //console.log(data.bestMatches);
      setTicker(data.bestMatches);
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    setStock(event.target[0].value);

  }

  return (
    <div id="search">
     <form onSubmit={submitHandler}>
     <input className="searchBar" placeholder= "Enter a Company Symbol" type="text" name="symbol" onChange={handleChange} autoComplete="off"/>
      <input className="searchButton" type="submit" value="Search" />
     </form>
     {ticker &&
        <div className='box'>
        {ticker.map((stock)=>(
          <h4 className='dropdown' key={stock['2. name']} >{stock['1. symbol']}: {stock['2. name']}</h4>
        ))}
      </div>
     }
    </div>
  );

}