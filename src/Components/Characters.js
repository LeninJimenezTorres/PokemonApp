import React from 'react'
import '../Styles/Characters.css';
import PokemonInfo from './PokemonInfo';
import { useState, useEffect } from 'react';
import axios from 'axios'

import UseFetch from '../Functions/UseFetch';
import Allcards from './Allcards';

import { dataAll } from '../Functions/Functions';

function Characters() {
    
    const [loading,setLoading] = useState(true);
    const [allPokemons,setAllPokemons] = useState(null);
    const [allPokemonsInfo,setAllPokemonsInfo] = useState(null);

    let aux=0;

    const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/'
    const [url,setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    const estado = UseFetch(url)
    const {cargando,data}=estado
    //estado?console.log(estado.data):console.log('errpr')
    //cargando?console.log('cargando'):console.log(data.results)

    //useEffect(() => {
        /*
        const getInfo = async (arrayConsulta)=>{
            let valoresFiltrados=[];
            arrayConsulta.map(async (item) => {
                let pokemon = await axios.get(item.url);
                valoresFiltrados.push(pokemon.data);
            });
            return valoresFiltrados;
        }
        const dataRequest = async ()=>{
            const peticion = await axios.get(pokemonAPI);
            let datosInternos = await getInfo(peticion.data.results);
            Promise.all([peticion,datosInternos])
            .then((result)=>{
                setAllPokemons(result[0])
                setAllPokemonsInfo(result[1])
                console.log(allPokemonsInfo)
            })
            .catch((err) => {
                console.log(err)
            });
        }
        dataRequest()
        */
       //dataAll(pokemonAPI,setAllPokemons, setAllPokemonsInfo, setLoading);
       //console.log(allPokemons);
        /*
        
        if(allPokemonsInfo!=null){
            setLoading(true)
        }

        if(aux==0){
            aux++;
            console.log('Info');
            console.log(allPokemonsInfo)
            console.log('**************');
        }
        */
        //pokeFun();
    //}, [pokemonAPI])

    return (
        <div className='main-container'>
            <div className='search'>
                <input type="text" name="search" placeholder=" Buscar" alt='Buscar'/>
            </div>
            <div className='sub-container'>
                <div className='cards'>
                    {
                        cargando?
                        <p>Cargando</p>
                        :
                        <Allcards results={data.results}/>
                    }
                </div>
            </div>
            <div className='paging'>
                <div className='paging-left'>
                    <button type="submit" onClick={()=>{if(data.previous!=null){setUrl(data.previous)}}}>&#x3C; Atrás</button>
                </div>
                <div className='paging-right'>
                    <button type="submit" onClick={()=>setUrl(data.next)}>Siguiente &#x3E;</button>
                </div>
            </div>
        </div>
    )
}

export default Characters
