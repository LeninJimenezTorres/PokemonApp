import React from 'react'
import PokemonInfo from './PokemonInfo';

const CardSearch = ({urlSearch}) => {
    console.log('Nueva url Search: '+urlSearch);
    return (
        <>
            <PokemonInfo url={urlSearch}/>
        </>
    )
}

export default CardSearch


/*
    const [loading, setloading] = useState(true)

    if (urlSearch!=null) {
        console.log('Nueva url Search: '+urlSearch);
        setloading(false)
    }

    return (
        <>
            {
                loading?
                <h1>Buscando....</h1>
                :   
                <PokemonInfo url={urlSearch}/>
            }
        </>
    )
*/