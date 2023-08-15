import React from 'react'



const KorpaStavke = ({ stavka}) => {


  return (
    <div className="StavkaKorpa">
      <div className="game-info" >
        <h4 className="StavkaNaslov">{stavka.title}</h4>
        <p>{"ID: "+ stavka.id}</p>
        <p>{"Popust: " + parseFloat(stavka.savings).toFixed(2) + "%"}</p>
        <p>{"Ocena: " + stavka.dealRating}</p>
        <p className="StavkaCena">{"Cena: " + stavka.salePrice + "$  "}<s> {stavka.normalPrice + "$"} </s></p>
<p>{(stavka.metacriticScore!==1?0:stavka.metacriticScore)===0?"Ceka na izbor":"Izabran proizvod"}</p>
<p>Steam ID: {stavka.steamAppID!==null?stavka.steamAppID:"Igra nije dostupna na Steam platformi, pogledajte na nekoj drugoj platformi za kupovinu igrica."}</p>
      </div>
    </div>
  )
}

export default KorpaStavke