import React,{useState} from 'react'
import '../Styles/PokemonInfo.css';
import UseFetch from '../Functions/UseFetch';
function PokemonInfo({url}) {
    const estado = UseFetch(url)
    const {cargando,data}=estado
    console.log(data)

    //const [sprites, setsprites] = useState([])
    let sprites=[]
    if(data!=null){
        let spritesObject = Object.values(data.sprites);
        //console.log(sprites)
        
        for(let i=0; i< spritesObject.length; i++){
            //console.log(typeof sprites[i]);
            if(spritesObject[i]!=null && typeof spritesObject[i]=='string'){
                //setsprites([...sprites,spritesObject[i]])
                sprites=[...sprites,spritesObject[i]]
            }
        }
        console.log('Todos los sprites')
        console.log(sprites);
    }
    
    
    return (
        <div className='info-container'>
                {
                    cargando?
                    (<h1>Cargando</h1>)
                    :
                    <div className='info-in'>
                        <img src={data.sprites.front_default} alt=""/>
                        <div className='numero-info'>
                            <p>#</p>
                            <p>{data.id}</p>
                        </div>
                        <div className='nombre-info'>
                            <p>{data.name}</p>
                        </div>
                        <div className='types'>
                            <p>Types</p>
                            <>
                                {
                                    data.types.map(item=>
                                        <p>{item.type.name} </p>
                                    )
                                }
                            </>
                        </div>
                        <div className='peso'>
                            <p>Peso</p>
                            <p><br/>{data.weight}</p>
                        </div>
                        <div className='sprites'>
                            <p>Sprites</p>
                            <ul>
                                {
                                    sprites.length>0?
                                    sprites.map(item=>
                                        <div className='sprite-in'>
                                            <img src={item} alt=""/>
                                        </div>
                                    )
                                    :
                                    console.log('Cargando')
                                }
                            </ul>
                        </div>
                        <div className='movimientos'>
                            <p>Movimientos</p>
                            <>
                                {
                                    data.moves.map(item=>
                                        <p>{item.move.name} </p>
                                    )
                                }
                            </>
                        </div>
                    </div>
                }
        </div>
    )
}

export default PokemonInfo
