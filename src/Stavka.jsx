import React from 'react'
import { FcDislike, FcLike } from "react-icons/fc";


const Stavka = ({ stavka }) => {
  return (
    <div class="Stavka">
      <div class="game-info">
        <h2 class="StavkaNaslov">{stavka.title}</h2>
        <p>{"ID: "+stavka.storeID+stavka.gameID}</p>
        <p>{"Popust: " + parseFloat(stavka.savings).toFixed(2) + "%"}</p>
        <p>{"Ocena: " + stavka.dealRating}</p>
        <p class="StavkaCena">{"Cena: " + stavka.salePrice + "$"}</p>

        <button class="btn" >
          <FcLike />
        </button>
        <button class="btn" >
          <FcDislike />
        </button>

      </div>
    </div>
  )
}

export default Stavka