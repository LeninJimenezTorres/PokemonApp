import React from 'react'
import axios from 'axios'

const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/';

const getInfo = async (arrayConsulta)=>{
    let valoresFiltrados=[];
    //console.log(arrayConsulta);
    arrayConsulta.map(async (item) => {
        //await console.log(item.url);    
        let pokemon = await axios.get(item.url);
        //console.log(pokemon.data);
        valoresFiltrados.push(pokemon.data);
    });
    return valoresFiltrados;
}

const dataAll = async (state, state2)=>{
    const peticion = await axios.get(pokemonAPI);

    //console.log(peticion.data.results)
    //let datosInterno = await getInfo(peticion);
    let datosInternos = await getInfo(peticion.data.results);
    //console.log(datosInternos);
    state(peticion.data.results)
    state2(datosInternos)
}

export {
    dataAll
}