import React from 'react';
import '../Styles/Characters.css';
import PokemonInfo from './PokemonInfo';
import { useState, useEffect } from 'react';

import UseFetch from '../Functions/UseFetch';
import Allcards from './Allcards';
import CardSearch from './CardSearch';

function Characters() {
    const [search, setsearch] = useState(undefined);
    const [searchurl, setsearchurl] = useState(undefined);
    const [pokemonSearch, setpokemonSearch] = useState();
    const [url,setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [fail, setfail] = useState(false)
    const searching = (evt)=>{
        if(evt.key=='Enter'){
            console.log(search)
            fetch(url+search.toLowerCase())
            .then(resp=>resp.json())
            .then(ok=>
                {
                    if (typeof ok == 'object') {
                        //console.log(ok)
                        console.log('searchurl: '+searchurl)
                        setsearchurl(url+search.toLowerCase())
                        setfail(false)
                    }
                    else {
                        setsearchurl(undefined)
                        setfail(true)
                    }
                }
                )
            .catch(error => {
                setfail(true)
                setsearchurl(undefined)
                console.log('error')
                console.log('searchurl: '+searchurl)
            })
        }
    }

    useEffect(() => {
        if(searchurl!=undefined){
            //document.documentElement.style.setProperty('--visibility-cards', 'hidden');   
            document.documentElement.style.setProperty('--visibility-search', 'visible');   
        }
        else if(searchurl==undefined){
            //document.documentElement.style.setProperty('--visibility-cards', 'visible');   
            document.documentElement.style.setProperty('--visibility-search', 'hidden');   
        }

        if (fail) {
            document.documentElement.style.setProperty('--visibility-failmsm', 'visible');   
            var mensajeIntervaloId = setInterval(() => {
                setfail(false)
                window.clearInterval(mensajeIntervaloId)
            }, 3000);
        }
        if (!fail) {
            document.documentElement.style.setProperty('--visibility-failmsm', 'hidden');   
        }
    })

    const estado = UseFetch(url);
    const [cargando,data]=estado;
    //estado?console.log(estado.data):console.log('errpr')
    //cargando?console.log('cargando'):console.log(data.results)

    return (
        <div className='main-container'>
            <div className='search'>
                <input type="text" name="search" placeholder=" Buscar" alt='Buscar' 
                    onChange={e=>{ setsearch(e.target.value.toLowerCase()) 
                        console.log('Mensaje pista ***** '+ e.target.value)
                        setsearchurl(undefined)
                    }} 
                    onKeyDown={searching} 
                />
                <div className='fail-message'>
                    <p>No se encontraron resultados</p>
                </div>
            </div>
            <div className='sub-container'>
                <div className='cards'>
                    {
                        cargando?
                        <p>Cargando...</p>
                        :
                        <Allcards results={data.results}/>
                    }
                </div>
                <div className='search-container'>
                    {
                        searchurl!=undefined?
                        (
                            <>
                                <CardSearch urlSearch={'https://pokeapi.co/api/v2/pokemon/'+search.toLowerCase()}/>
                                <>
                                {
                                    console.log('URL ENVIADA: '+'https://pokeapi.co/api/v2/pokemon/'+search.toLowerCase())
                                }
                                </>
                            </>
                        )
                        :
                        (
                                console.log('No searching...')                        
                        )
                    }
                </div>
            </div>
            <div className='paging'>
                <div className='paging-left'>
                    <button type="submit" onClick={()=>{if(data.previous!=undefined){setUrl(data.previous)}}}>&#x3C; Atrás</button>
                </div>
                <div className='paging-right'>
                    <button type="submit" onClick={()=>setUrl(data.next)}>Siguiente &#x3E;</button>
                </div>
            </div>
        </div>
    )
}

export default Characters
