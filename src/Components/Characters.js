import React from 'react'
import '../Styles/Characters.css';
import Cards from './Cards';
import PokemonInfo from './PokemonInfo';
import { useState, useEffect } from 'react';

import { dataAll } from '../Functions/Functions';

function Characters() {
    //const [pokeData, setPokeData] = useState([]);
    //const [loading, setLoading] = useState(true);
    //const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    //const [nextUrl, setNextUrl]=useState();
    //const [prevtUrl, setPrevUrl]=useState();
    //const [texto,setTexto] = useState(null);
    
    const [allPokemons,setAllPokemons] = useState(null);
    const [allPokemonsInfo,setAllPokemonsInfo] = useState(null);

    let aux=0;
    useEffect(() => {
        if(aux==0){
            dataAll(setAllPokemons, setAllPokemonsInfo);
            aux++;
        }
        //pokeFun();
    }, [])

    return (
        <div className='main-container'>
            <div className='search'>
                <input type="text" name="search" placeholder=" Buscar" alt='Buscar'/>
            </div>
            <div className='sub-container'>
                <div className='cards'>
                    {
                        allPokemonsInfo!=null?
                        console.log(allPokemonsInfo):console.log('No cargado')
                    }
                    {
                        allPokemonsInfo!=null?
                        (   
                            <Cards pokemon={allPokemonsInfo}/>                            
                        )
                        :
                        <p>XXXXXXXXXXXX</p>
                    }
                </div>
                <div className='view'>
                    <PokemonInfo/>
                </div>
            </div>
            <div className='paging'>
                <div className='paging-left'>
                    <button type="submit">&#x3C; Atrás</button>
                </div>
                <div className='paging-right'>
                    <button type="submit">Siguiente &#x3E;</button>
                </div>
            </div>
        </div>
    )
}

export default Characters
