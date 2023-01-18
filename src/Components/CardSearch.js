import React from 'react'
import UseFetch from '../Functions/UseFetch';
import '../Styles/CardSearch.css';
const CardSearch = ({urlSearch}) => {
    console.log('Nueva url Search: '+urlSearch);
    const estado = UseFetch(urlSearch)
    const [cargando,data]=estado;
    let sprites=[]
    if(data!=null && data!=undefined && typeof data.sprites != undefined && data.sprites){
        let spritesObject = Object.values(data.sprites);
        for(let i=0; i< spritesObject.length; i++){
            if(spritesObject[i]!=null && typeof spritesObject[i]=='string'){
                sprites=[...sprites,spritesObject[i]]
            }
        }
    }
    
    return (
        <>
            {
                    (cargando&&cargando!=undefined)?
                    (
                        <>
                            <h1>Buscando...</h1>
                            <>
                                {
                                        document.documentElement.style.setProperty('--visibility-search', 'hidden')       
                                }
                            </>
                        </>
                    )
                    :
                    (
                        <div className='info-in-s'>
                            {
                                (data!=undefined && data && data.sprites != undefined 
                                    && data.id!=undefined && data.name!=undefined && data.types!=undefined)?
                                (
                                    <>
                                        <div className='preview-img-s'>
                                            <img src={data.sprites.front_default} alt=""/>
                                        </div>
                                        <div className='numero-info-s'>
                                            <p>{data.id}</p>
                                        </div>
                                        <div className='nombre-info-s'>
                                            <p>{data.name}</p>
                                        </div>
                                        <div className='types-s'>
                                            <p className='tag-info-s'>&nbsp;Types</p>
                                            <div className='info-items-s'>
                                                {
                                                    data.types.map(item=>
                                                        <p>&nbsp; {item.type.name}</p>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className='peso-s'>
                                            <p className='tag-info-s'>&nbsp;Peso</p>
                                            <p className='info-items-s'><br/>&nbsp; {data.weight} Kg</p>
                                        </div>
                                        <div className='sprites-s'>
                                            <p className='tag-info-s'>&nbsp;Sprites</p>
                                            <ul className='info-items-s'>
                                                {
                                                    sprites.length>0?
                                                    sprites.map(item=>
                                                        <div className='sprite-in-s'>
                                                            <a href={item} target='_blank'><img src={item} alt=""/></a>
                                                        </div>
                                                    )
                                                    :
                                                    console.log('Cargando')
                                                }
                                            </ul>
                                        </div>
                                        <div className='movimientos-s'>
                                            <p className='tag-info-s'>&nbsp; Movimientos</p>
                                            <p className='info-items-s movs-s'>
                                                {
                                                    data.moves.map(item=>
                                                        <>&nbsp;{item.move.name}&ensp; | </>
                                                    )
                                                }
                                            </p>
                                        </div>
                                    </> 
                                )
                                :
                                (
                                    console.log('aun no se recibe nada desde: '+urlSearch)
                                )
                            }
                        </div>
                    )
                }
            {/* <PokemonInfo url={urlSearch}/> */}
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