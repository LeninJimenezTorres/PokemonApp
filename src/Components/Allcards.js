import React, {useState, useEffect} from 'react'
import CardPokemon from './CardPokemon'
import '../Styles/Allcards.css';

import PokemonInfo from './PokemonInfo';

const Allcards = ({results}) => {
    //console.log(results)
    const [urlPreview, setUrlPreview] = useState(undefined)
    const [preview, setpreview] = useState(false)
    const [anterior, setanterior] = useState(undefined)
    const [nuevo, setnuevo] = useState(undefined)
    const [cerrar, setcerrar] = useState(false)

    const [width,height] = [window.screen.width,window.screen.height]
    //console.log('Ancho: '+width);
    //console.log('Alto: '+height);

    useEffect(() => {
        if(preview==true){
            document.documentElement.style.setProperty('--preview-visibility', 'visible');   
            document.documentElement.style.setProperty('--width-preview', '80vw');   
            if(width<768){
                document.documentElement.style.setProperty('--width-cards', '50vw');   
                document.documentElement.style.setProperty('--columns', '1');
            }
            if(width>=768){
                document.documentElement.style.setProperty('--width-cards', '40vw');   
                document.documentElement.style.setProperty('--columns', '2');
            }
            setcerrar(false)
        }
        if((!preview && (anterior==nuevo)) || (cerrar) ){
            document.documentElement.style.setProperty('--preview-visibility', 'hidden');   
            document.documentElement.style.setProperty('--width-preview', '0vw');   
            document.documentElement.style.setProperty('--width-cards', '100vw');   
            if(width<768){
                document.documentElement.style.setProperty('--columns', '2');
            }
            if(width>=768){
                document.documentElement.style.setProperty('--columns', '4');
            }
        }
    })
    
    return (
        <div className='allcards-container' id='allcards-container'>
            <ul>
                {
                    results.map(p=>
                        <li key={p.name} onClick={()=>{
                                if (p.url!=null) {
                                    setnuevo(p.url)
                                    setUrlPreview(p.url)
                                    setanterior(nuevo)
                                }
                                if(preview==true){
                                    setpreview(false)
                                }   
                                else if (preview==false){
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
                if(preview==false && cerrar==false){
                    setpreview(false)
                    setcerrar(true)
                }
                console.log('Estados: [Preview:'+preview+'], [Cerrar:'+cerrar+']');
                        
            }}></div>
            <div className='preview'>
                {
                    urlPreview!=undefined?
                        <PokemonInfo url={urlPreview}/>
                    :
                    console.log('URL preview not stablished yet')
                }
            </div>
            <div className='preview-space'></div>
        </div>
    )
}

export default Allcards
