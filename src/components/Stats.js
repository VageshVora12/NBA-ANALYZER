import React,{ useEffect } from 'react';
import {getStats} from '../api/Api';


const Stats = ()=> {



    useEffect(() => { 
      getStats()
       .then((res) => {
         console.log(res.data);
         // console.log(game);
        })
        .catch((error) => console.log('ERROR: could not load data',error))
      }, []);



    return (
        <div>
        <p style={{marginTop:'200px'}}>STATS</p>
    <div>
        {getStats().then((res)=>{
            res.send(res.data)

        })}
    </div>
        
        </div>)
 
}

export default Stats;