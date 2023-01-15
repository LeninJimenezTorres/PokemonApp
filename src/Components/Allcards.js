import React, {useState, useEffect} from 'react'
import CardPokemon from './CardPokemon'
import '../Styles/Allcards.css';

import PokemonInfo from './PokemonInfo';

const Allcards = ({results}) => {
    //console.log(results)
    const [urlPreview, setUrlPreview] = useState(null)
    const [preview, setpreview] = useState(false)
    const [anterior, setanterior] = useState(null)
    const [nuevo, setnuevo] = useState(null)
    const [cerrar, setcerrar] = useState(false)
    useEffect(() => {
        if(preview==true){
            document.documentElement.style.setProperty('--preview-visibility', 'visible');   
            document.documentElement.style.setProperty('--width-preview', '80vw');   
            document.documentElement.style.setProperty('--width-cards', '20vw');   
            document.documentElement.style.setProperty('--columns', '2');
            setcerrar(false)
        }
        if((!preview && (anterior==nuevo)) || (cerrar) ){
            document.documentElement.style.setProperty('--preview-visibility', 'hidden');   
            document.documentElement.style.setProperty('--width-preview', '0vw');   
            document.documentElement.style.setProperty('--width-cards', '100vw');   
            document.documentElement.style.setProperty('--columns', '4');
        }
    })
    
    return (
        <div className='allcards-container'>
            <ul>
                {
                    results.map(p=>
                        <li key={p.name} onClick={()=>{
                            setnuevo(p.url)
                            setUrlPreview(p.url)
                            setanterior(nuevo)
                            if(preview){
                                setpreview(false)
                            }   
                            else {
                                setpreview(true)
                            }

                            console.log('Estados: [Preview:'+preview+'], [Cerrar:'+cerrar+']');
                        } }>
                            <CardPokemon url={p.url}/>
                        </li>
                    )
                }
            </ul>
            <div className='close' onClick={()=>{
                console.log('CLOSEEE')
                if(preview==true){
                    setpreview(false)
                    setcerrar(true)
                }
                console.log('Estados: [Preview:'+preview+'], [Cerrar:'+cerrar+']');
                        
            }}></div>
            <div className='preview'>
                <PokemonInfo url={urlPreview}/>
            </div>
            <div className='preview-space'></div>
        </div>
    )
}

export default Allcards
