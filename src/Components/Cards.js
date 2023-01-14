import React from 'react'
import '../Styles/Cards.css';

function Cards({pokemon}) {
    //console.log(pokemon);
    return (
        <div className='cards-container'>
            {
                pokemon!=null?
                (
                    pokemon.map(item=>{
                        return (
                            <div className='card-in' key={item.id}>
                                <img src={item.sprites.front_default} alt=""/>
                                <p className='nombre'>{item.name}</p>
                                <p className='id'>{item.id}</p>
                            </div>
                        )
                    })
                ):
                (<p>Loading 2</p>)
            }
        </div>
  )
}

export default Cards