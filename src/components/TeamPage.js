import React,{ useState,useEffect} from 'react';
import Teams from './Teams';
import { getTeams } from '../api/Api';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';




const TeamPage = () =>{

    const [teams,setTeams] =  useState([]);

    useEffect(() => { 
      getTeams()
       .then((data) => {
         setTeams(data.data);
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
  teams.map((team)=>(
    <Teams team={team} />
  ))
}
  </Grid>
</Grid>
    </div>

}

export default TeamPage;