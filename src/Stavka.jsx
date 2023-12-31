import React from 'react'
import { FcDislike, FcLike } from "react-icons/fc";


const Stavka = ({ stavka , onAdd, onRemove}) => {


  return (
    <div className="Stavka">
      <div className="game-info">
        <h4 className="StavkaNaslov">{stavka.title}</h4>
        <p>{"ID: "+ stavka.id}</p>
        <p>{"Popust: " + parseFloat(stavka.savings).toFixed(2) + "%"}</p>
        <p>{"Ocena: " + stavka.dealRating}</p>
        <p className="StavkaCena">{"Cena: " + stavka.salePrice + "$  "}<s> {stavka.normalPrice + "$"} </s></p>
<p>{(stavka.metacriticScore!==1?0:stavka.metacriticScore)===0?"Ceka na izbor":"Izabran proizvod"}</p>
        <button className="btn" onClick={(()=>onAdd(stavka.id))}>
          <FcLike />
        </button>
        <button className="btn" onClick={()=>onRemove(stavka.id)}>
          <FcDislike />
        </button>

      </div>
    </div>
  )
}

export default Stavka