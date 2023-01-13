import React from 'react'
import '../Styles/Characters.css';
import Cards from './Cards';
import PokemonInfo from './PokemonInfo';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Characters() {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl, setNextUrl]=useState();
    const [prevtUrl, setPrevUrl]=useState();

    const pokeFun = async ()=>{
        setLoading(true);
        const res = await axios.get(url);
        //console.log(res.data); 
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false);
    }
    const getPokemon = async(res)=>{
        res.map(async(item)=>{
            console.log(item.name);

            const result= await axios.get(item.url);
            //console.log(result.data);
            setPokeData(state=>{
                let aux=0;
                for(let i=0; i<state.length;i++){
                    if(state[i]==result.data){
                        aux++;
                    }
                }
                if(aux==0){
                    state=[...state,result.data];
                }
                //state.sort((a,b)=>a.id>b.id?1:-1);
                return state;
            });
        });
    }

    useEffect(() => {
        pokeFun();
    }, [url])

    return (
        <div className='main-container'>
            <div className='search'>
                <input type="text" name="search" placeholder=" Buscar" alt='Buscar'/>
            </div>
            <div className='sub-container'>
                <div className='cards'>
                    <Cards pokemon={pokeData} loading={loading}/>    
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
