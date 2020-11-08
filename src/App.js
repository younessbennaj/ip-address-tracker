import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}`;

function App() {

  //Server state 
  const [IpAddress, setIpAddress] = useState('');
  const [timezone, setTimezone] = useState('');
  const [location, setLocation] = useState('');
  const [isp, setIsp] = useState('');

  //UI state 
  const [inputVal, setInputVal] = useState('');
  const [formAddress, setFormAddress] = useState('');

  function getAddress(address) {
    const { ip, isp, location: { city, postalCode, country, timezone } } = address;
    setIpAddress(ip);
    setTimezone(timezone);
    setLocation(`${city}, ${country}, ${postalCode}`);
    setIsp(isp)
  }

  useEffect(() => {
    //Here; side-effect code => makes things outside the scope of the function component

    //Typically: an HTTP request to fetch data from an API

    axios.get(API_URL)
      .then(response => {
        getAddress(response.data);
      })
  }, []); //No dependencies => called only on the first rendering 

  useEffect(() => {
    axios.get(`${API_URL}&ipAddress=${formAddress}`)
      .then(response => {
        getAddress(response.data);
      })
  }, [formAddress]);

  function onInputChange(e) {
    setInputVal(e.target.value);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    //clear input value on form submit
    setInputVal('');
    setFormAddress(inputVal);
  }

  return (
    <div className="App">
      <h1>IP Adress Tracker</h1>

      <form className="form" onSubmit={onFormSubmit}>
        <div className="input-group">
          <input onChange={onInputChange} type="text" name="address" id="address" className="form__input" />
          <input type="submit" value="submit" className="form__submit" />
        </div>
      </form>

      <div className="address">
        <div className="address__item">
          <span>ip address</span>
          <p>{IpAddress}</p>
        </div>
        <div className="address__item">
          <span>location</span>
          <p>{location}</p>
        </div>
        <div className="address__item">
          <span>timezone</span>
          <p>{timezone}</p>
        </div>
        <div className="address__item">
          <span>isp</span>
          <p>{isp}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
