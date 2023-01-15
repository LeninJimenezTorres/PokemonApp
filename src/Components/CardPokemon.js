import React from 'react'

import '../Styles/Cards.css';
import UseFetch from '../Functions/UseFetch';

const CardPokemon = ({url}) => {
    const estado = UseFetch(url)
    const {cargando,data}=estado
    //console.log(data);
    return (
        <>{
            cargando?
            (<h1>Cargando</h1>)
            :
            <div className='cards-container'>
            <div className='card-in' >
                    <img src={data.sprites.front_default} alt=""/>
                    <p className='id'>{data.id}</p>
                    <p className='nombre'>{data.name}</p>
                </div>
                
                </div>
            }
        </>
    )
}

export default CardPokemon
