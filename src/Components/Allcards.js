import React, {useState} from 'react'
import CardPokemon from './CardPokemon'
import '../Styles/Allcards.css';

import PokemonInfo from './PokemonInfo';

const Allcards = ({results}) => {
    //console.log(results)
    const [urlPreview, setUrlPreview] = useState(null);
    return (
        <div className='allcards-container'>
            <ul>
                {
                    results.map(p=>
                        <li key={p.name} onClick={()=>setUrlPreview(p.url) }>
                            <CardPokemon url={p.url}/>
                        </li>
                    )
                }
            </ul>
            <div className='preview'>
                <PokemonInfo url={urlPreview}/>
            </div>
        </div>
    )
}

export default Allcards
