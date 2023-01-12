import React from 'react'
import '../Styles/PokemonInfo.css';
import Pokemon from './pokemonejemplo.png';

function PokemonInfo() {
  return (
    <div className='info-container'>
        <div className='info-in'>
            <img src={Pokemon} alt=""/>
            <p className='types'>Types</p>
            <p className='peso'>Peso</p>
            <p className='sprites'>Sprites</p>
            <p className='movimientos'>Movimientos</p>
        </div>
    </div>
  )
}

export default PokemonInfo
