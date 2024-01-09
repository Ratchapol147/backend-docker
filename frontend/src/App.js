import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data,setdata] = useState([])
  const api =()=>{
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "phpMyAdmin=92ec8f9c22de57856a15b77c3a162f64; pma_lang=en");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://localhost:16000/api/name", requestOptions)
      .then(response => response.text())
      .then(result => setdata(result))
      .catch(error => console.log('error', error));
  }
  useEffect(()=>{
    api()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{data}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
