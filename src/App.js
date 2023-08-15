import './App.css';
import React, { useState, useEffect } from "react";
import NavMeni from "./NavigacioniMeni";
import Stavke from "./Stavke";
import Korpa from "./Korpa"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const url = "https://www.cheapshark.com/api/1.0/deals?upperPrice=15";
  const [data, setData] = useState([]);
  const fetchInfo = async () => {
    const res = await fetch(url);
    const d = await res.json();
    return setData(d);
  }
  useEffect(() => {
    fetchInfo();
  }, []);
  // eslint-disable-next-line
  {
    data.map((dataObj) => {

      dataObj.id = dataObj.storeID + dataObj.gameID;
      return "";
    })
  };
  const [korpaStavke, setKorpaStavke] = useState([]);
  const osveziKorpu = () => {
    const newStavke = data.filter((stavka) => stavka.metacriticScore === 1);
    setKorpaStavke(newStavke);
  };
  const [cartNum, setCartNum] = useState(0);

  const addStavka = (id) => {
    // eslint-disable-next-line
    data.map((stavka) => {
      if (stavka.id === id) {
        if (stavka.metacriticScore !== 1) {
          stavka.metacriticScore = 1;
          const a = cartNum + 1;
          setCartNum(a);
          osveziKorpu();
        }


        console.log("stavka id=", stavka.id, "amount=", stavka.metacriticScore);
      }
    });
  };

  const removeStavka = (id) => {
    // eslint-disable-next-line
    data.map((stavka) => {
      if (stavka.id === id) {
        if (stavka.metacriticScore > 0) {
          stavka.metacriticScore = stavka.metacriticScore - 1;
          const a = cartNum - 1;
          setCartNum(a);
          osveziKorpu();
          console.log("stavka id=", stavka.id, "amount=", stavka.metacriticScore);
        } else {
          alert("Niste prethodno ni izabrali proizvod da vam se svidja.");
          console.log("stavka id=", stavka.id, "amount=", stavka.metacriticScore);
        }
      }
    });
  };



  return (
    <BrowserRouter>

      <NavMeni cartNum={cartNum} />
      <Routes>
        <Route
          path="/"
          element={<Stavke stavke={data} onAdd={addStavka} onRemove={removeStavka} />} />
        <Route path="/korpa" element={<Korpa korpaStavke={korpaStavke} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
