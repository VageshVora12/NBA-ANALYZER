import './App.css';
import SearchAppBar from './components/Navbar';
import React,{ useEffect,useState } from 'react';
import { Router,Routes,Route, Link } from 'react-router-dom';
import Nba from './components/Nba';
import Home from './components/Home';
import Players from './components/Players';
import Stats from './components/Stats';
import Teams from './components/Teams';
import Seasons from './components/Seasons';
import BestGames from './components/BestGames';
import BestPlayers from './components/BestPlayers';


function App() {



  return (
    <>
    <div className="App">
      <SearchAppBar></SearchAppBar>
      
  <div class="topnav" style={{backgroundColor:'#666',overflow:'hidden',marginTop:'60px',position:'sticky'}}>
  <Link class="active" to="/home" style={{float:'left',color:'#2f2f2',textAlign:'center',padding:'14px 16px',textDecoration:'none',fontSize:'17px'}}>Home</Link>
  <Link to="/stats" style={{float:'left',color:'#2f2f2',textAlign:'center',padding:'14px 16px',textDecoration:'none',fontSize:'17px'}}>Stats</Link>
  <Link to="/players" style={{float:'left',color:'#2f2f2',textAlign:'center',padding:'14px 16px',textDecoration:'none',fontSize:'17px'}}>Players</Link>
  <Link to="/teams" style={{float:'left',color:'#2f2f2',textAlign:'center',padding:'14px 16px',textDecoration:'none',fontSize:'17px'}}>Teams</Link>
  <Link to="/seasons" style={{float:'left',color:'#2f2f2',textAlign:'center',padding:'14px 16px',textDecoration:'none',fontSize:'17px'}}>Seasons</Link>

</div>

<Routes>
        {/* <Route path='/home' element={<Home />} /> */}
        <Route path='/nba' element={<Nba />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='/home' element={<Home />} />
        <Route path='/material-ui' element={<Home />} />

        <Route path='/players' element={<Players />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/seasons' element={<Seasons />} />
        <Route path='/best-games' element={<BestGames />} />
        <Route path='/best-players' element={<BestPlayers />} />


      </Routes>





    </div>
    </>
  );
}

export default App;
