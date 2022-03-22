import './App.css';
import { Button } from '@material-ui/core';
import SearchAppBar from './components/Navbar';
import MyCard from './components/MyCard';
import { getGames } from './api/Api';
import React,{ useEffect,useState } from 'react';
import { Grid } from '@material-ui/core';


function App() {


  const [games,setGames] =  useState([]);

 useEffect(() => { 
   getGames()
    .then((data) => setGames(data.data))
    .catch((error) => console.log('ERROR: could not load data',error))
  }, []);
  

  return (
    <>
    <div className="App">
      <SearchAppBar></SearchAppBar>
    <div class="topnav" style={{backgroundColor:'#333',overflow:'hidden',marginTop:'60px'}}>
  <a class="active" href="#home" style={{float:'left',color:'#2f2f2',textAlign:'center',padding:'14px 16px',textDecoration:'none',fontSize:'17px'}}>Home</a>
  <a href="#stats" style={{float:'left',color:'#2f2f2',textAlign:'center',padding:'14px 16px',textDecoration:'none',fontSize:'17px'}}>Stats</a>
  <a href="#players" style={{float:'left',color:'#2f2f2',textAlign:'center',padding:'14px 16px',textDecoration:'none',fontSize:'17px'}}>Players</a>
  <a href="#teams" style={{float:'left',color:'#2f2f2',textAlign:'center',padding:'14px 16px',textDecoration:'none',fontSize:'17px'}}>Teams</a>
  <a href="#leaders" style={{float:'left',color:'#2f2f2',textAlign:'center',padding:'14px 16px',textDecoration:'none',fontSize:'17px'}}>Leaders</a>

</div>

      <h2><p style={{color:"skyblue"}}>This is NBA Analayzer</p></h2>
      <Button variant='contained' color='primary'>Get Started</Button><br></br><br></br><br></br><br></br><br></br>
      <a href="http://localhost:9000/statistics" style={{textDecoration:'none',color:'blue'}}>ALL STATS</a><br></br>
      <a href="http://localhost:9000/game/all-games" style={{textDecoration:'none',color:'blue'}}>ALL GAMES</a><br></br>
      <a href="http://localhost:9000/player/all-players" style={{textDecoration:'none',color:'blue'}}>ALL PLAYERS</a><br></br>
      <a href="http://localhost:9000/team/all-teams" style={{textDecoration:'none',color:'blue'}}>ALL TEAMS</a><br></br>
      <h1>Welcome to NBA</h1>

<Grid container>
  <Grid sm='2'></Grid>
  <Grid sm='8'>
  {
  games.map((game)=>(
    <MyCard game='game' />
  ))
}
  </Grid>
</Grid>
    </div>

    </>
  );
}

export default App;
