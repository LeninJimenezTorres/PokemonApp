import React from 'react'
import '../Styles/Cards.css';
import Pokemon from './pokemonejemplo.png';

function Cards() {
  return (
    <div className='cards-container'>
        <div className='card-in'>
            <img src={Pokemon} alt=""/>
            <p className='nombre'>Nombre pokemon</p>
            <p className='id'>Identificador</p>
        </div>
        
    </div>
  )
}

export default Cards