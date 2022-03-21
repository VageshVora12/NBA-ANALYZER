import './App.css';
import { Button } from '@material-ui/core';
import SearchAppBar from './components/Navbar';
import ImgMediaCard from './components/MyCard';
import {getGames} from './api/Api';
import React,{ useEffect } from 'react';

function App() {
 useEffect(() => { 
   getGames()
    .then((res) => console.log(res.data))
    .catch((error) => console.log('ERROR: could not load data',error))
  }, []);
  

  return (
    <>
    <div className="App">
      <SearchAppBar></SearchAppBar>
    <div class="topnav" style={{backgroundColor:'#333',overflow:'hidden'}}>
  <a class="active" href="#home" style={{float:'left',color:'#2f2f2',textAlign:'center',padding:'14px 16px',textDecoration:'none',fontSize:'17px'}}>Home</a>
  <a href="#stats" style={{float:'left',color:'#2f2f2',textAlign:'center',padding:'14px 16px',textDecoration:'none',fontSize:'17px'}}>Stats</a>
  <a href="#players" style={{float:'left',color:'#2f2f2',textAlign:'center',padding:'14px 16px',textDecoration:'none',fontSize:'17px'}}>Players</a>
  <a href="#teams" style={{float:'left',color:'#2f2f2',textAlign:'center',padding:'14px 16px',textDecoration:'none',fontSize:'17px'}}>Teams</a>
  <a href="#leaders" style={{float:'left',color:'#2f2f2',textAlign:'center',padding:'14px 16px',textDecoration:'none',fontSize:'17px'}}>Leaders</a>

</div>
<ImgMediaCard></ImgMediaCard>

      <h2><p style={{color:"skyblue"}}>This is NBA Analayzer</p></h2>
      <Button variant='contained' color='primary'>Get Started</Button>
  
    </div>
    <a href="http://localhost:9000/statistics">ALL STATS</a><br></br>
      <a href="http://localhost:9000/game/all-games">ALL GAMES</a><br></br>
      <a href="http://localhost:9000/player/all-players">ALL PLAYERS</a><br></br>
      <a href="http://localhost:9000/team/all-teams">ALL TEAMS</a><br></br>

    </>
  );
}

export default App;
