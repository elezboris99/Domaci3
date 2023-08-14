import React from 'react'
import Stavka from "./Stavka";
const Stavke = ({ stavke }) => {

  return (
    <div class="StavkeBody">
      {stavke.map((stavka) => (
        stavka.normalPrice - stavka.salePrice > 39 ? <Stavka stavka={stavka} /> : ""
      ))}

    </div>
  );
}

export default Stavke