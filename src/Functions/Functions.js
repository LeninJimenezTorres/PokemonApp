import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';

//const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/';
//const [valoresFiltrados, setValoresFiltrados]=useState([]);

const getInfo = async (arrayConsulta)=>{
    let valoresFiltrados=[];
    //console.log(arrayConsulta);
    arrayConsulta.map(async (item) => {
        //await console.log(item.url);    
        let pokemon = await axios.get(item.url);
        //console.log(pokemon.data);
        valoresFiltrados.push(pokemon.data);
       //setValoresFiltrados(...valoresFiltrados, pokemon.data);
    });
    return valoresFiltrados;
}


const dataAll = async (url, state, state2, state3)=>{
    let loading=true;
    
    const peticion = await axios.get(url);
    
    //console.log(peticion.data.results)
    //let datosInterno = await getInfo(peticion);
    let datosInternos = await getInfo(peticion.data.results);
    //console.log(datosInternos);
    /*
    state(peticion.data.results)
    state2(datosInternos)
    loading=false
    state3(loading)
    */
    Promise.all([peticion,datosInternos])
    .then((pokemon)=>{
        //console.log(pokemon)
        state(pokemon[0])
        state2(pokemon[1])
    })
    .catch((err) => {
        console.log(err)
    });
}

export {
    dataAll
}