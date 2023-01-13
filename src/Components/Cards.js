import React from 'react'
import '../Styles/Cards.css';
import Pokemon from './pokemonejemplo.png';

function Cards({pokemon, loading}) {
    //console.log(pokemon);
    return (
        <div className='cards-container'>

            {
                loading ? 
                    <h1>Loading...</h1>
                :
                    pokemon.map(item=>{
                        return(
                            <>
                                <div className='card-in' key={item.id}>
                                    <img src={item.sprites.front_default} alt=""/>
                                    <p className='nombre'>{item.name}</p>
                                    <p className='id'>{item.id}</p>
                                </div>
                            </>
                        )
                    })
            }
        </div>
  )
}

export default Cards