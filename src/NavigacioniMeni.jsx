import React from 'react';
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs"
function NavigacioniMeni({cartNum}) {
  return (
    <div>
       <center>
        <h2>Igrice na popustu od 29.99$</h2>
      </center>
      <div  className='NavigacioniBody'>
        <Link to ="/"><p>Prodavnica</p></Link>
       <div className='KorpaNav'>
      <Link to ="/korpa"><BsCart /> </Link>
      <p>{cartNum}</p> 
      </div>
      </div>
    </div>
  )
}

export default NavigacioniMeni