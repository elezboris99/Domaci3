import React from 'react';
import KorpaStavke from "./KorpaStavke";

const Korpa = ({korpaStavke}) => {
  return (
    <div className="StavkeBodyKorpa">
            
      {korpaStavke.map((stavka) => (
        <KorpaStavke key={stavka.id} stavka={stavka} />
      ))}

    </div>
  )
}

export default Korpa