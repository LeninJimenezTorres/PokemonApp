import React from 'react';
import '../Styles/Characters.css';
import PokemonInfo from './PokemonInfo';
import { useState, useEffect } from 'react';

import UseFetch from '../Functions/UseFetch';
import Allcards from './Allcards';
import CardSearch from './CardSearch';

function Characters() {
    const [search, setsearch] = useState(null);
    const [searchurl, setsearchurl] = useState(null);
    const [pokemonSearch, setpokemonSearch] = useState();
    const [url,setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    
    const searching = (evt)=>{
        if(evt.key=='Enter'){
            fetch(url+search.toLowerCase())
            .then(resp=>resp.json())
            .then(ok=>
                {if (typeof ok == 'object') {
                    //console.log(ok)
                    console.log('searchurl: '+searchurl)
                    setsearchurl(url+search.toLowerCase())
                }
            }
            )
            .catch(error => {
                setsearchurl(null)
                console.log('error')
                console.log('searchurl: '+searchurl)
            })
        }
    }

    useEffect(() => {
        if(searchurl!=null){
            document.documentElement.style.setProperty('--visibility-cards', 'hidden');   
        }
        else if(searchurl==null){
            document.documentElement.style.setProperty('--visibility-cards', 'visible');   
        }
    })

    const estado = UseFetch(url)
    const {cargando,data}=estado
    //estado?console.log(estado.data):console.log('errpr')
    //cargando?console.log('cargando'):console.log(data.results)

    return (
        <div className='main-container'>
            <div className='search'>
                <input type="text" name="search" placeholder=" Buscar" alt='Buscar' 
                    onChange={e=>{ setsearch(e.target.value.toLowerCase())}} 
                    value={search}
                    onKeyDown={searching} 
                />
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
                <div className='search-container'>
                    {
                        searchurl!=null?
                        (<CardSearch urlSearch={searchurl}/>)
                        :
                        (console.log('No searching...'))
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
