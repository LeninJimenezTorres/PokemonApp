import React from 'react'
import '../Styles/PokemonInfo.css';
import UseFetch from '../Functions/UseFetch';
function PokemonInfo({url}) {
    const estado = UseFetch(url)
    const {cargando,data}=estado
    console.log(data)
    
    
    return (
        <div className='info-container'>
                {
                    cargando?
                    (<h1>Cargando</h1>)
                    :
                    <div className='info-in'>
                        <img src={data.sprites.front_default} alt=""/>
                        <p className='numero-info'>{data.id}</p>
                        <p className='nombre-info'>{data.name}</p>
                        <p className='types'>{data.name}</p>
                        <p className='peso'>{data.weight}</p>
                        <p className='sprites'>Sprites</p>
                        <p className='movimientos'>{data.weight}</p>
                    </div>
                }
        </div>
    )
}

export default PokemonInfo
