import React,{useState} from 'react'
import '../Styles/PokemonInfo.css';
import UseFetch from '../Functions/UseFetch';
function PokemonInfo({url}) {
    const estado = UseFetch(url)
    const [cargando,data]=estado;
    //console.log(data)

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
        //console.log('Todos los sprites')
        //console.log(sprites);
    }
    
    //textFit(document.querySelector(".movs"));

    return (
        <div className='info-container'>
                {
                    cargando?
                    (<h1>Cargando</h1>)
                    :
                    <div className='info-in'>
                        <div className='preview-img'>
                            <img src={data.sprites.front_default} alt=""/>
                        </div>
                        <div className='numero-info'>
                            <p>{data.id}</p>
                        </div>
                        <div className='nombre-info'>
                            <p>{data.name}</p>
                        </div>
                        <div className='types'>
                            <p className='tag-info'>&nbsp;Types</p>
                            <div className='info-items'>
                                {
                                    data.types.map(item=>
                                        <p>&nbsp; {item.type.name}</p>
                                    )
                                }
                            </div>
                        </div>
                        <div className='peso'>
                            <p className='tag-info'>&nbsp;Peso</p>
                            <p className='info-items'><br/>&nbsp; {data.weight} Kg</p>
                        </div>
                        <div className='sprites'>
                            <p className='tag-info'>&nbsp;Sprites</p>
                            <ul className='info-items'>
                                {
                                    sprites.length>0?
                                    sprites.map(item=>
                                        <div className='sprite-in'>
                                            <a href={item} target='_blank'><img src={item} alt=""/></a>
                                        </div>
                                    )
                                    :
                                    console.log('Cargando')
                                }
                            </ul>
                        </div>
                        <div className='movimientos'>
                            <p className='tag-info'>&nbsp; Movimientos</p>
                            <p className='info-items movs'>
                                {
                                    data.moves.map(item=>
                                        <>&nbsp; {item.move.name}&ensp;</>
                                    )
                                }
                            </p>
                        </div>
                    </div>
                }
        </div>
    )
}

export default PokemonInfo
