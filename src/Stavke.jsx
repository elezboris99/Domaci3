import React from 'react'
import Stavka from "./Stavka";
const Stavke = ({ stavke ,onAdd, onRemove}) => {

  return (
    <div className="StavkeBody">
      {stavke.map((stavka) => (
        stavka.normalPrice - stavka.salePrice > 29.99 ? <Stavka key = {stavka.id} stavka={stavka} onAdd={onAdd} onRemove={onRemove} /> : ""
      ))}

    </div>
  );
}

export default Stavke