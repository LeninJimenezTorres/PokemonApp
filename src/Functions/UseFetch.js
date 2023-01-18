import React, { useEffect, useState } from 'react';

function UseFetch(url) {
    const [cargando, setcargando] = useState(true);
    const [data, setdata] = useState(undefined)
    //const [resultado,setResultado]=useState({cargando:true,data:null});
    useEffect(() => {
        if (url!=undefined || url!=null) {
            getDatos(url)            
        }
    }, [url])

    async function getDatos(url) {
        try{
            //setResultado({cargando:true,data:null})
            setcargando(true);
            setdata(undefined)
            const resp = await fetch(url);
            const info = await resp.json();
            setcargando(false);
            setdata(info)
            //console.log(info);
            //setResultado({cargando:false,data})
        }
        catch (e){
            console.log(e)
        }
    }
    //console.log('RESULTADOS FETCH');
    //console.log([cargando,data]);
  return [cargando,data]
}

export default UseFetch