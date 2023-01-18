import React,{useState} from 'react'
import '../Styles/PokemonInfo.css';
import UseFetch from '../Functions/UseFetch';
function PokemonInfo({url}) {
    /*if(url && url!=undefined){

    }*/

    console.log('URL de consulta: '+url);

    const estado = UseFetch(url)
    const [cargando,data]=estado;
    //console.log(data)

    //const [sprites, setsprites] = useState([])
    let sprites=[]
    if(data!=null && data!=undefined && typeof data.sprites != undefined && data.sprites){
        let spritesObject = Object.values(data.sprites);
        console.log('Sprites: '+sprites)
        console.log('Data: '+data)
        console.log('Cargando: '+cargando)
        
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
    
    return (
        <div className='info-container'>
                {
                    (cargando&&cargando!=undefined)?
                    (<h1>Cargando</h1>)
                    :
                    (
                        <div className='info-in'>
                            {
                                (data!=undefined && data && data.sprites != undefined 
                                    && data.id!=undefined && data.name!=undefined && data.types!=undefined)?
                                (
                                    <>
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
                                    </> 
                                )
                                :
                                (
                                    console.log('aun no se recibe nada desde: '+url)
                                    //document.documentElement.style.setProperty('--visibility-cards', 'hidden')
                                    //window.location.reload()
                                )
                            }
                        </div>
                    )
                }
        </div>
    )
}

export default PokemonInfo
/*
import React,{useState} from 'react'
import '../Styles/PokemonInfo.css';
import UseFetch from '../Functions/UseFetch';
function PokemonInfo({url}) {
    const estado = UseFetch(url)
    const [cargando,data]=estado;

    let sprites=[]
    if(data!=null && data!=undefined){
        let spritesObject = Object.values(data.sprites);
        console.log('Sprites: '+sprites)
        console.log('Data: '+data)
        console.log('Cargando: '+cargando)
        
        for(let i=0; i< spritesObject.length; i++){
            if(spritesObject[i]!=null && typeof spritesObject[i]=='string'){
                sprites=[...sprites,spritesObject[i]]
            }
        }
    }
    return (
        <div className='info-container'>
                {
                    (cargando&&cargando!=undefined)?
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
*/