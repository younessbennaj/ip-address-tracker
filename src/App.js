import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}`;

function App() {

  useEffect(() => {
    //Here; side-effect code => makes things outside the scope of the function component

    //Typically: an HTTP request to fetch data from an API

    axios.get('')
  });

  return (
    <div className="App">
      <h1>IP Adress Tracker</h1>

      <div className="address">
        <div className="address__item">
          <span>ip address</span>
          <p>192.212.174.101</p>
        </div>
        <div className="address__item">
          <span>location</span>
          <p>Paris</p>
        </div>
        <div className="address__item">
          <span>timezone</span>
          <p>UTC -05:00</p>
        </div>
        <div className="address__item">
          <span>isp</span>
          <p>From home</p>
        </div>
      </div>
    </div>
  );
}

export default App;
