import './App.css';
import React, { useState, useEffect } from "react";
import NavMeni from "./NavigacioniMeni";
import Stavke from "./Stavke";
function App() {
  const url = "https://www.cheapshark.com/api/1.0/deals?upperPrice=15";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }
  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    < div class="GlavniBody">
      <NavMeni></NavMeni>
      <center>
        <h1>Igrice na popustu od 39.99$</h1>
      </center>
      <Stavke stavke={data} />
    </div>
  );
}

export default App;
