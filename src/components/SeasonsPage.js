import React,{ useState,useEffect} from 'react';
import Seasons from './Seasons';
import { getSeasons } from '../api/Api';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';




const SeasonsPage = () =>{

    const [seasons,setSeasons] =  useState([]);

    useEffect(() => { 
      getSeasons()
       .then((data) => {
         setSeasons(data.data);
         console.log(data.data);
         // console.log(game);
       })
       .catch((error) => console.log('ERROR: could not load data',error))
     }, []);
     
   


    return <div>
      <h2><p style={{color:"skyblue"}}>This is NBA Analayzer</p></h2>
      <Button variant='contained' color='primary'>Get Started</Button><br></br>
      <h1>Welcome to NBA</h1>

<Grid container>
  <Grid sm='2'></Grid>
  <Grid sm='8'>
  {
  seasons.map((season)=>(
    <Seasons season={season} />
  ))
}
  </Grid>
</Grid>
    </div>

}

export default SeasonsPage;