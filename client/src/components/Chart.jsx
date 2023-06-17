import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function LineChart({ stock }) {
  const [dates, setDates] = useState({});
  const [info, setInfo] = useState(stock)
  console.log(stock);


  useEffect(() => {
    axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stock}&apikey=RK5EESM9601ZN5H7`, {})
      .then(({ data }) => {
        console.log(data);
        setDates(data["Time Series (Daily)"]);
      });
    axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}&apikey=RK5EESM9601ZN5H7`, {})
      .then(({ data }) => {
        console.log(data['Global Quote']);
        setInfo(data['Global Quote']);
      })

  }, [stock])


  const label = () => {
    let labels = [];
    Object.keys(dates).forEach(date => {
      labels.unshift(date) // the value of the current key.
    });
    return labels;
  }

  const price = () => {
    let prices = [];
    for (let key in dates) {
      prices.unshift(dates[key]['4. close'])
    }
    return prices;
  }

  const state = {
    labels: label(),
    datasets: [{
      label: 'Price',
      data: price(),
      borderWidth: 3,
      borderColor: 'green',
      backgroundColor: 'green'
    }]
  }

  return (
    <div>
      <div>
        <span className='stockName'>{info['01. symbol']}</span>
        <span className='stockPrice'> ${info['05. price']}</span>


      </div>

      <div className='graph'>
        <Line
          data={state}
          height={500}
          width={800}
        />
      </div>
    </div>
  );
}