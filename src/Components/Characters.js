import React from 'react'
import '../Styles/Characters.css';
import Cards from './Cards';
import PokemonInfo from './PokemonInfo';

function Characters() {
  return (
    <div className='main-container'>
        <div className='search'>
            <input type="text" name="search" placeholder="Buscar" alt='Buscar' />
        </div>
        <div className='sub-container'>
            <div className='cards'>
                <Cards/>    
            </div>
            <div className='view'>
                <PokemonInfo/>
            </div>
        </div>
        <div className='paging'>
            <div className='paging-left'>
                <button type="submit">Atrás</button>
            </div>
            <div className='paging-right'>
                <button type="submit">Siguiente</button>
            </div>
        </div>
    </div>
  )
}

export default Characters
